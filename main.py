import os
# limit the number of cpus used by high performance libraries
os.environ["OMP_NUM_THREADS"] = "1"
os.environ["OPENBLAS_NUM_THREADS"] = "1"
os.environ["MKL_NUM_THREADS"] = "1"
os.environ["VECLIB_MAXIMUM_THREADS"] = "1"
os.environ["NUMEXPR_NUM_THREADS"] = "1"

import argparse
import sys
import time
import numpy as np
from pathlib import Path
import torch
import torch.backends.cudnn as cudnn
from numpy import random
from PIL import Image
import subprocess

# python main.py --source rtmp://192.168.43.234:1935/live/114514 --output rtmp://192.168.43.234:1935/live/1919810 --save-vid
# python main.py --source E:\pandownload1\ML\Police\Project\source\valid.mp4 --save-vid

from models.experimental import attempt_load
from utils.datasets import LoadImages, LoadStreams
from utils.general import (check_img_size, non_max_suppression, scale_coords, check_requirements, cv2,
                                  check_imshow, xyxy2xywh, xywh2xyxy, clip_coords, increment_path, strip_optimizer, colorstr, check_file)
from utils.torch_utils import select_device, time_synchronized
from utils.plots import plot_one_box
from submodules.strongsort.strong_sort.utils.parser import get_config
from submodules.strongsort.strong_sort.strong_sort import StrongSORT

import logging
from strongsort import parse_opt
from traffic_lights import color_dicision_bgr
from detect_yolov7 import detect_img_path

# 创建LOGGER实例
LOGGER = logging.getLogger(__name__)
LOGGER.setLevel(logging.INFO)

# 创建控制台处理器
console_handler = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
console_handler.setFormatter(formatter)
LOGGER.addHandler(console_handler)


VID_FORMATS = 'asf', 'avi', 'gif', 'm4v', 'mkv', 'mov', 'mp4', 'mpeg', 'mpg', 'ts', 'wmv'  # include video suffixes
process = None

@torch.no_grad()
def rewrite(
        source='0',
        output='0',
        yolo_weights=os.path.join('models', 'nanoka-car-valid.pt'),  # model.pt path(s),
        strong_sort_weights=os.path.join('models', 'osnet_x0_25_msmt17.pt'),  # model.pt path,
        config_strongsort=os.path.join('submodules', 'strongsort', 'strong_sort', 'configs', 'strong_sort.yaml'),
        imgsz=(640, 640),  # inference size (height, width)
        conf_thres=0.25,  # confidence threshold
        iou_thres=0.45,  # NMS IOU threshold
        max_det=1000,  # maximum detections per image
        device='',  # cuda device, i.e. 0 or 0,1,2,3 or cpu
        show_vid=False,  # show results
        save_txt=True,  # save results to *.txt  #by lzs =False 2025.02.21
        save_conf=False,  # save confidences in --save-txt labels
        save_crop=False,  # save cropped prediction boxes
        save_vid=False,  # save confidences in --save-txt labels
        nosave=False,  # do not save images/videos
        classes=None,  # filter by class: --class 0, or --class 0 2 3
        agnostic_nms=False,  # class-agnostic NMS
        augment=False,  # augmented inference
        visualize=False,  # visualize features
        update=False,  # update all models
        project=os.path.join('runs', 'track'),  # save results to project/name
        name='exp',  # save results to project/name
        exist_ok=False,  # existing project/name ok, do not increment
        line_thickness=3,  # bounding box thickness (pixels)
        hide_labels=False,  # hide labels
        hide_conf=False,  # hide confidences
        hide_class=False,  # hide IDs
        half=False,  # use FP16 half-precision inference
        dnn=False,  # use OpenCV DNN for ONNX inference
):
    global process
    try:
        source = str(source)
        is_file = Path(source).suffix[1:] in (VID_FORMATS)
        is_url = source.lower().startswith(('rtsp://', 'rtmp://', 'http://', 'https://'))
        if is_url and is_file:
            source = check_file(source)  # download

        # Directories
        if not isinstance(yolo_weights, list):  # single yolo model
            exp_name = yolo_weights
        elif type(yolo_weights) is list and len(yolo_weights) == 1:  # single models after --yolo_weights
            exp_name = Path(yolo_weights[0]).stem
            yolo_weights = Path(yolo_weights[0])
        else:  # multiple models after --yolo_weights
            exp_name = 'ensemble'
        exp_name = name if name else exp_name + "_" + strong_sort_weights.stem
        save_dir = increment_path(Path(project) / exp_name, exist_ok=exist_ok)  # increment run
        save_dir = Path(save_dir)
        (save_dir / 'tracks' if save_txt else save_dir).mkdir(parents=True, exist_ok=True)  # make dir

        # Load model
        device = select_device(device)
        
        model = attempt_load(yolo_weights, map_location=device)  # load FP32 model
        names = model.names
        stride = model.stride.max().cpu().numpy()  # model stride
        imgsz = check_img_size(imgsz[0], s=stride)  # check image size

        # Dataloader
        dataset = LoadImages(source, img_size=imgsz, stride=stride)
        nr_sources = 1
        vid_path, vid_writer = [None] * nr_sources, [None] * nr_sources

        # initialize StrongSORT
        cfg = get_config()
        cfg.merge_from_file(opt.config_strongsort)

        # Create as many strong sort instances as there are video sources
        strongsort_list = []
        for i in range(nr_sources):
            strongsort_list.append(
                StrongSORT(
                    strong_sort_weights,
                    device,
                    half,
                    max_dist=cfg.STRONGSORT.MAX_DIST,
                    max_iou_distance=cfg.STRONGSORT.MAX_IOU_DISTANCE,
                    max_age=cfg.STRONGSORT.MAX_AGE,
                    n_init=cfg.STRONGSORT.N_INIT,
                    nn_budget=cfg.STRONGSORT.NN_BUDGET,
                    mc_lambda=cfg.STRONGSORT.MC_LAMBDA,
                    ema_alpha=cfg.STRONGSORT.EMA_ALPHA,

                )
            )
            strongsort_list[i].model.warmup()
        outputs = [None] * nr_sources
        
        colors = [[random.randint(0, 255) for _ in range(3)] for _ in names]

        if output != '0':
            width, height = 1280, 720
            ffmpeg_cmd = [
                'ffmpeg',
                '-y',
                '-f', 'rawvideo',
                '-vcodec', 'rawvideo',
                '-pix_fmt', 'bgr24',
                '-s', f'{width}x{height}',
                '-r', '30',
                '-i', '-',
                '-c:v', 'libx264',
                '-pix_fmt', 'yuv420p',
                '-preset', 'ultrafast',
                '-tune', 'zerolatency',
                '-x264-params', 'ref=3:bframes=0',
                '-f', 'flv',
                output
            ]

            process = subprocess.Popen(ffmpeg_cmd, stdin=subprocess.PIPE)

        # Run tracking
        dt, seen, tr = [0.0, 0.0, 0.0, 0.0], 0, {}
        curr_frames, prev_frames = [None] * nr_sources, [None] * nr_sources
        for frame_idx, (path, im, im0s, vid_cap) in enumerate(dataset):
            print()
            s = ''
            t1 = time_synchronized()
            im = torch.from_numpy(im).to(device)
            im = im.half() if half else im.float()  # uint8 to fp16/32
            im /= 255.0  # 0 - 255 to 0.0 - 1.0
            if len(im.shape) == 3:
                im = im[None]  # expand for batch dim
            t2 = time_synchronized()
            dt[0] += t2 - t1

            # Inference
            visualize = increment_path(save_dir / Path(path[0]).stem, mkdir=True) if visualize else False
            pred = model(im)
            t3 = time_synchronized()
            dt[1] += t3 - t2

            # Apply NMS
            pred = non_max_suppression(pred[0], conf_thres, iou_thres, classes, agnostic_nms)
            dt[2] += time_synchronized() - t3
            
            # Process detections
            for i, det in enumerate(pred):  # detections per image
                seen += 1

                p, im0, _ = path, im0s.copy(), getattr(dataset, 'frame', 0)
                p = Path(p)  # to Path
                # video file
                if source.endswith(VID_FORMATS):
                    save_path = str(save_dir / p.name)  # im.jpg, vid.mp4, ...
                else:
                    raise RuntimeError("暂不支持处理本类型文件")

                curr_frames[i] = im0

                s += '%gx%g ' % im.shape[2:]  # print string
                imc = im0.copy() if save_crop else im0  # for save_crop

                if cfg.STRONGSORT.ECC:  # camera motion compensation
                    strongsort_list[i].tracker.camera_update(prev_frames[i], curr_frames[i])

                if det is not None and len(det):
                    # Rescale boxes from img_size to im0 size
                    det[:, :4] = scale_coords(im.shape[2:], det[:, :4], imc.shape).round()

                    # Print results
                    for c in det[:, -1].unique():
                        n = (det[:, -1] == c).sum()  # detections per class
                        s += f"{n} {names[int(c)]}{'s' * (n > 1)}, "  # add to string

                    code, _ = -1, "Error: No execution."
                    # 将红绿灯数据筛选出来
                    for _, (xyxy, conf, cls) in enumerate(zip(det[:, 0:4], det[:, 4], det[:, 5])):
                        conf = float(conf)
                        cls = int(cls)

                        if names[int(cls)] == 'traffic-lights':
                            crop = imc[int(xyxy[1]):int(xyxy[3]), int(xyxy[0]):int(xyxy[2])]
                            code, _ = color_dicision_bgr(crop)
                            
                    # 把车辆数据筛选出来
                    det = det[det[:, 5] == 0]
                    
                if det is not None and len(det):
                    xywhs = xyxy2xywh(det[:, 0:4])
                    confs = det[:, 4]
                    clss = det[:, 5]
                    
                    # pass detections to strongsort
                    t4 = time_synchronized()
                    outputs[i] = strongsort_list[i].update(xywhs.cpu(), confs.cpu(), clss.cpu(), im0)
                    t5 = time_synchronized()
                    dt[3] += t5 - t4

                    # draw boxes for visualization
                    if len(outputs[i]) > 0:
                        for j, (output, conf) in enumerate(zip(outputs[i], confs)):
        
                            bboxes = output[0:4]
                            id = output[4]
                            cls = output[5]
                            
                            point = (int((bboxes[0] + bboxes[2])/2), int((bboxes[1] + bboxes[3])/2))
                            if id in tr:
                                tr[id].append(point)
                                
                                cv2.circle(im0, point, 5, colors[int(cls)], -1)
                                point = (tr[id][-1][0] - tr[id][-2][0], tr[id][-1][1] - tr[id][-2][1])
                                cv2.arrowedLine(im0, tr[id][-1], (tr[id][-1][0] + 3*point[0], tr[id][-1][1] + 3*point[1]), colors[int(cls)], 2)
                            else:
                                tr[id] = [point]
                                
                            if True:
                                # to MOT format
                                bbox_left = output[0]
                                bbox_top = output[1]
                                bbox_w = output[2] - output[0]
                                bbox_h = output[3] - output[1]
                                # Write MOT compliant results to file
                                with open(os.path.join(save_dir, 'trace_frames.txt'), 'a') as f:
                                    f.write(('%g ' * 11 + '\n') % (frame_idx + 1, id, bbox_left,  # DIY format
                                                                bbox_top, bbox_w, bbox_h, -1, -1, -1, i, code))

                            if save_vid or save_crop or show_vid:  # Add bbox to image
                                c = int(cls)  # integer class
                                id = int(id)  # integer id
                                label = None if hide_labels else (f'{id} {names[c]}' if hide_conf else \
                                    (f'{id} {conf:.2f}' if hide_class else f'{id} {names[c]} {conf:.2f}'))
                                plot_one_box(bboxes, im0, label=label, color=colors[int(cls)], line_thickness=2)

                    # print(f'{s}Done. YOLO:({t3 - t2:.3f}s), StrongSORT:({t5 - t4:.3f}s)')

                else:
                    strongsort_list[i].increment_ages()
                    # print('No detections')

                with open(os.path.join(save_dir, "trace_line_dictionary.txt"), 'w+') as f:
                    f.write(str(tr)) 
                
                # Stream results
                if show_vid:
                    cv2.imshow(str(p), im0)
                    if cv2.waitKey(1) == ord('q'):
                        raise StopIteration
                    
                    if process is not None:
                        try:
                            process.stdin.write(cv2.resize(im0, (width, height)).tobytes())
                        except Exception as e:
                            print(f"写入帧时发生错误: {e}")

                # Save results (image with detections)
                if save_vid:
                    if vid_path[i] != save_path:  # new video
                        vid_path[i] = save_path
                        if isinstance(vid_writer[i], cv2.VideoWriter):
                            vid_writer[i].release()  # release previous video writer
                        if vid_cap:  # video
                            fps = vid_cap.get(cv2.CAP_PROP_FPS)
                            w = int(vid_cap.get(cv2.CAP_PROP_FRAME_WIDTH))
                            h = int(vid_cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
                        else:  # stream
                            fps, w, h = 30, im0.shape[1], im0.shape[0]
                            
                        save_path = str(Path(save_path).with_suffix('.mp4'))  # force *.mp4 suffix on results videos
                        vid_writer[i] = cv2.VideoWriter(save_path, cv2.VideoWriter_fourcc(*'mp4v'), fps, (w, h))
                    vid_writer[i].write(im0)

                prev_frames[i] = curr_frames[i]

        # Print results
        t = tuple(x / seen * 1E3 for x in dt)  # speeds per image
        print(f'Speed: %.1fms pre-process, %.1fms inference, %.1fms NMS, %.1fms strong sort update per image at shape {(1, 3, imgsz, imgsz)}' % t)
        if save_txt or save_vid:
            s = f"\n{len(list(save_dir.glob('tracks/*.txt')))} tracks saved to {save_dir / 'tracks'}" if save_txt else ''
            print(f"Results saved to {colorstr('bold', save_dir)}{s}")
        if update:
            strip_optimizer(yolo_weights)  # update model (to fix SourceChangeWarning)
            
    except KeyboardInterrupt:
        print("\n用户中断操作")
    except StopIteration:
        print("\n用户中断操作")
    except Exception as e:
        print(f"\n主循环发生异常: {e}")
    finally:
        if process is not None:
            try:
                if process.stdin:
                    process.stdin.close()
                
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                print("FFmpeg 进程未正常退出，强制终止...")
                process.terminate()
                try:
                    process.wait(timeout=2)
                except subprocess.TimeoutExpired:
                    process.kill()
                    process.wait()
            except Exception as e:
                print(f"关闭进程时发生错误: {e}")
    
    print("资源清理完成")

if __name__ == "__main__":
    opt = parse_opt()
    rewrite(**vars(opt))
