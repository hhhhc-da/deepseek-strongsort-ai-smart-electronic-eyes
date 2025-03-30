import os
# limit the number of cpus used by high performance libraries
os.environ["OMP_NUM_THREADS"] = "1"
os.environ["OPENBLAS_NUM_THREADS"] = "1"
os.environ["MKL_NUM_THREADS"] = "1"
os.environ["VECLIB_MAXIMUM_THREADS"] = "1"
os.environ["NUMEXPR_NUM_THREADS"] = "1"

import argparse
import numpy as np
from pathlib import Path
import torch
from numpy import random
import subprocess
import joblib

# python main.py --source rtmp://192.168.43.234:1935/live/114514 --output rtmp://192.168.43.234:1935/live/1919810 --save-vid
# python main.py --source source\valid.mp4 --save-vid

from models.experimental import attempt_load
from utils.datasets import LoadImages
from utils.general import (check_img_size, non_max_suppression, scale_coords, cv2,
                                  xyxy2xywh, increment_path, strip_optimizer, colorstr, check_file)
from utils.torch_utils import select_device, time_synchronized
from utils.plots import plot_one_box
from submodules.strongsort.strong_sort.utils.parser import get_config
from submodules.strongsort.strong_sort.strong_sort import StrongSORT

from traffic_lights import color_dicision_bgr
from prepare import draw_figure_legend

def parse_opt():
    '''
    YOLOv7 + StrongSort 参数列表, 获取所有配置
    '''
    parser = argparse.ArgumentParser()
    parser.add_argument('--yolo-weights', nargs='+', type=str, default=os.path.join('models', 'nanoka-car-valid.pt'), help='model.pt path(s)')
    parser.add_argument('--strong-sort-weights', type=str, default=os.path.join('models', 'osnet_x0_25_msmt17.pt'))
    parser.add_argument('--config-strongsort', type=str, default=os.path.join('submodules','strongsort','strong_sort','configs','strong_sort.yaml'))
    parser.add_argument('--source', type=str, default='0', help='file/dir/URL/glob, 0 for webcam')
    parser.add_argument('--output', type=str, default='0', help='file/dir/URL/glob, recommanded to use rtmp')
    parser.add_argument('--imgsz', '--img', '--img-size', nargs='+', type=int, default=[640], help='inference size h,w')
    parser.add_argument('--conf-thres', type=float, default=0.3, help='confidence threshold')
    parser.add_argument('--iou-thres', type=float, default=0.3, help='NMS IoU threshold')
    parser.add_argument('--max-det', type=int, default=1000, help='maximum detections per image')
    parser.add_argument('--device', default='0', help='cuda device, i.e. 0 or 0,1,2,3 or cpu')
    parser.add_argument('--show-vid', action='store_true', help='display tracking video results')
    parser.add_argument('--save-txt', action='store_true', help='save results to *.txt')
    parser.add_argument('--save-conf', action='store_true', help='save confidences in --save-txt labels')
    parser.add_argument('--save-crop', action='store_true', help='save cropped prediction boxes')
    parser.add_argument('--save-vid', action='store_true', help='save video tracking results')
    parser.add_argument('--nosave', action='store_true', help='do not save images/videos')
    # 具体类型自己查看 yaml 文件对应即可
    parser.add_argument('--classes', nargs='+', type=int, help='filter by class: --classes 0, or --classes 0 2 3')
    parser.add_argument('--agnostic-nms', action='store_true', help='class-agnostic NMS')
    parser.add_argument('--augment', action='store_true', help='augmented inference')
    parser.add_argument('--visualize', action='store_true', help='visualize features')
    parser.add_argument('--update', action='store_true', help='update all models')
    parser.add_argument('--project', default=os.path.join('runs','track'), help='save results to project/name')
    parser.add_argument('--name', default='exp', help='save results to project/name')
    parser.add_argument('--exist-ok', action='store_true', help='existing project/name ok, do not increment')
    parser.add_argument('--line-thickness', default=3, type=int, help='bounding box thickness (pixels)')
    parser.add_argument('--hide-labels', default=False, action='store_true', help='hide labels')
    parser.add_argument('--hide-conf', default=False, action='store_true', help='hide confidences')
    parser.add_argument('--hide-class', default=False, action='store_true', help='hide IDs')
    parser.add_argument('--half', action='store_true', help='use FP16 half-precision inference')
    parser.add_argument('--dnn', action='store_true', help='use OpenCV DNN for ONNX inference')
    opt = parser.parse_args()
    opt.imgsz *= 2 if len(opt.imgsz) == 1 else 1

    return opt

@torch.no_grad()
def track(
        source='0',
        output='0',
        yolo_weights=os.path.join('models', 'nanoka-car-valid.pt'),  # YOLOv7 Pt 模型位置
        strong_sort_weights=os.path.join('models', 'osnet_x0_25_msmt17.pt'),  # StrongSort Pt 模型位置
        config_strongsort=os.path.join('submodules', 'strongsort', 'strong_sort', 'configs', 'strong_sort.yaml'), # StrongSort 配置文件
        imgsz=(640, 640),  # 处理图片大小
        conf_thres=0.25,  # 置信度阈值
        iou_thres=0.45,  # NMS IOU 阈值
        max_det=1000,  # 最大目标个数
        device='',  # 使用的 GPU, 输入 0 就是使用 cuda:0, 也可以输入 cpu 使用 CPU
        show_vid=False,  # 输出结果
        save_txt=True,  # 保存为 txt 文件
        save_conf=False,  # 保存 YOLO 置信度信息
        save_crop=False,  # 保存 YOLO 框选信息
        save_vid=False,  # 保存带有各种置信度的视频文件
        nosave=False,  # 不保存
        classes=None,  # 类型过滤器: --class 0, 或者 --class 0 2 3
        agnostic_nms=False,  # 特殊 NMS
        augment=False,  # 参数推理
        visualize=False,  # 可视化
        update=False,  # 更新模型
        project=os.path.join('runs', 'track'),  # 保存位置
        name='exp',  # 保存名
        exist_ok=False,  # 递增确认
        line_thickness=3,  # 选框宽度
        hide_labels=False,  # 隐藏类型名
        hide_conf=False,  # 隐藏置信度
        hide_class=False,  # 隐藏 ID 数
        half=False,  # 使用 FP16 推理
        dnn=False,  # 使用 OpenCV DNN 进行 ONNX 推理
        process=None,  # FFmpeg 句柄
        opt=None,  # 参数列表
        mask=np.zeros((640,640,3), dtype=np.uint8), # 车道线掩码
        legends={} # 绘制图例用的颜色列表
):
    '''
    StrongSort 跟踪函数, 返回一个跟踪信息字典
    '''
    tr = {}
    try:
        VID_FORMATS='asf','avi','gif','m4v','mkv','mov','mp4','mpeg','mpg','ts','wmv' # 视频格式
        source = str(source)
        is_file = Path(source).suffix[1:] in (VID_FORMATS)
        is_url = source.lower().startswith(('rtsp://', 'rtmp://', 'http://', 'https://'))
        if is_url and is_file:
            source = check_file(source)

        # 文件夹处理
        if not isinstance(yolo_weights, list):  # 单个 YOLO 模型
            exp_name = yolo_weights
        elif type(yolo_weights) is list and len(yolo_weights) == 1:
            exp_name = Path(yolo_weights[0]).stem
            yolo_weights = Path(yolo_weights[0])
        else:  # 多个 YOLO 模型
            exp_name = 'ensemble'
        exp_name = name if name else exp_name + "_" + strong_sort_weights.stem
        save_dir = increment_path(Path(project) / exp_name, exist_ok=exist_ok)  # 运行次数递增
        save_dir = Path(save_dir)
        (save_dir / 'tracks' if save_txt else save_dir).mkdir(parents=True, exist_ok=True)  # 创建文件夹

        # 装载 YOLO 模型
        device = select_device(device)
        
        model = attempt_load(yolo_weights, map_location=device)  # 装载 FP32 的模型
        names = model.names
        stride = model.stride.max().cpu().numpy()  # 模型步长
        imgsz = check_img_size(imgsz[0], s=stride)  # 校验输入数据大小

        # 数据装载器
        dataset = LoadImages(source, img_size=imgsz, stride=stride)
        nr_sources = 1
        vid_path, vid_writer = [None] * nr_sources, [None] * nr_sources

        # 初始化 StrongSort
        cfg = get_config()
        cfg.merge_from_file(opt.config_strongsort)

        # 如果有多个数据源那么就创建多个 StrongSort
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
        
        # 随机框选颜色
        colors = [[random.randint(0, 255) for _ in range(3)] for _ in names]

        # FFmpeg 推流配置
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

        # 开始跟踪
        dt, seen, tr = [0.0, 0.0, 0.0, 0.0], 0, {}
        curr_frames, prev_frames = [None] * nr_sources, [None] * nr_sources
        
        # 定义转移目标 (增强红绿灯识别稳定性)
        history = None
        transpose_condition = {
            "G": ["G", "R"],
            "R": ["R", "Y"],
            "Y": ["Y", "G"]
        }
        code_decoder = {
            'R': 0,
            'Y': 1,
            'G': 2
        }
        
        for frame_idx, (path, im, im0s, vid_cap) in enumerate(dataset):
            print()
            s = ''
            t1 = time_synchronized()
            im = torch.from_numpy(im).to(device)
            im = im.half() if half else im.float()  # 数据存储形式确认
            im /= 255.0  # 归一化操作
            if len(im.shape) == 3:
                im = im[None]  # 拓展维度
            t2 = time_synchronized()
            dt[0] += t2 - t1

            # YOLOv7 模型推理
            visualize = increment_path(save_dir / Path(path[0]).stem, mkdir=True) if visualize else False
            pred = model(im)
            t3 = time_synchronized()
            dt[1] += t3 - t2

            # NMS 非极大值抑制算法
            pred = non_max_suppression(pred[0], conf_thres, iou_thres, classes, agnostic_nms)
            dt[2] += time_synchronized() - t3
            
            # 开始处理检测内容
            for i, det in enumerate(pred):  # 逐帧检测
                seen += 1

                p, im0, _ = path, im0s.copy(), getattr(dataset, 'frame', 0)
                p = Path(p)
                # 处理视频文件前先进行审查
                if source.endswith(VID_FORMATS):
                    save_path = str(save_dir / p.name)
                else:
                    raise RuntimeError("(Stream) Unsuporrted foemat.")

                curr_frames[i] = im0

                s += '%gx%g ' % im.shape[2:]
                imc = im0.copy() if save_crop else im0  # 使用 save_crop 时需要

                if cfg.STRONGSORT.ECC:
                    strongsort_list[i].tracker.camera_update(prev_frames[i], curr_frames[i])

                if det is not None and len(det):
                    # 拉伸变换, 变换回原图片
                    det[:, :4] = scale_coords(im.shape[2:], det[:, :4], imc.shape).round()

                    # 输出结果, 虽然我给输出关了
                    for c in det[:, -1].unique():
                        n = (det[:, -1] == c).sum()
                        s += f"{n} {names[int(c)]}{'s' * (n > 1)}, "

                    code, _ = -1, "Error: No execution."
                    # 将红绿灯数据筛选出来
                    for _, (xyxy, conf, cls) in enumerate(zip(det[:, 0:4], det[:, 4], det[:, 5])):
                        conf = float(conf)
                        cls = int(cls)

                        if names[int(cls)] == 'traffic-lights':
                            crop = imc[int(xyxy[1]):int(xyxy[3]), int(xyxy[0]):int(xyxy[2])]
                            code, feature = color_dicision_bgr(crop)
                            
                            if history is None:
                                history = feature
                            else:
                                # 如果符合转移条件, 那么我们就转移
                                if history in transpose_condition[feature]:
                                    history = feature
                                # 如果不符合条件说明出现了错误转移, 回滚到上一个
                                else:
                                    feature = history
                                    code = code_decoder[history]
                           
                            c = int(cls)  # 类型为整形数据
                            status = {
                                0: ["Red", (0, 0, 255)],
                                1: ["Yellow", (0, 165, 255)],
                                2: ["Green", (0, 255, 0)]
                            }
                            # 将红绿灯框选出来
                            label = None if hide_labels else (f'{names[c]}' if hide_conf else \
                                (f'{conf:.2f}' if hide_class else f'{names[c]} {conf:.2f}'))
                            plot_one_box(xyxy, im0, label=label+" "+status[code][0], color=status[code][1], line_thickness=2) 
                            
                    # 把车辆数据筛选出来
                    det = det[det[:, 5] == 0]
                    
                if det is not None and len(det):
                    xywhs = xyxy2xywh(det[:, 0:4])
                    confs = det[:, 4]
                    clss = det[:, 5]
                    
                    # 将识别结果输入到 StrongSort
                    t4 = time_synchronized()
                    outputs[i] = strongsort_list[i].update(xywhs.cpu(), confs.cpu(), clss.cpu(), im0)
                    t5 = time_synchronized()
                    dt[3] += t5 - t4

                    # 绘图并且可视化
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
                                # 转移到 DIY 数据格式
                                bbox_left = output[0]
                                bbox_top = output[1]
                                bbox_w = output[2] - output[0]
                                bbox_h = output[3] - output[1]
                                # 写入到文件
                                with open(os.path.join(save_dir, 'trace_frames.txt'), 'a') as f:
                                    f.write(('%g ' * 11 + '\n') % (frame_idx + 1, id, bbox_left,  # DIY 数据格式
                                                                bbox_top, bbox_w, bbox_h, -1, -1, -1, i, code))

                            if save_vid or save_crop or show_vid:  # 对车辆进行框选
                                c = int(cls)  # 类型为整形数据
                                id = int(id)  # ID 也是整形数据
                                label = None if hide_labels else (f'{id} {names[c]}' if hide_conf else \
                                    (f'{id} {conf:.2f}' if hide_class else f'{id} {names[c]} {conf:.2f}'))
                                plot_one_box(bboxes, im0, label=label, color=colors[int(cls)], line_thickness=2)

                    print(f'{s}Done. YOLO:({t3 - t2:.3f}s), StrongSORT:({t5 - t4:.3f}s)')

                else:
                    strongsort_list[i].increment_ages()
                    print('No detections')

                joblib.dump(tr, os.path.join(save_dir, "tr.pkl"))
                
                # 将掩膜和图片拼合在一起, 并且提高一些亮度
                im0 = cv2.addWeighted(im0, 0.6, mask, 0.5, 1.2)
                # 绘制图例
                im0 = draw_figure_legend(im0, legends)
                
                # 流处理尾
                if show_vid:
                    cv2.imshow(str(p), im0)
                    if cv2.waitKey(1) == ord('q'):
                        raise StopIteration
                    
                    if process is not None:
                        try:
                            process.stdin.write(cv2.resize(im0, (width, height)).tobytes())
                        except Exception as e:
                            print(f"(FFmpeg WriteFrame) Error: {e}")

                # 保存结果
                if save_vid:
                    if vid_path[i] != save_path:  # 创建新视频
                        vid_path[i] = save_path
                        if isinstance(vid_writer[i], cv2.VideoWriter):
                            vid_writer[i].release()
                        if vid_cap:  # 处理视频
                            fps = vid_cap.get(cv2.CAP_PROP_FPS)
                            w = int(vid_cap.get(cv2.CAP_PROP_FRAME_WIDTH))
                            h = int(vid_cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
                        else:  # 推流
                            fps, w, h = 30, im0.shape[1], im0.shape[0]
                            
                        save_path = str(Path(save_path).with_suffix('.mp4'))  # 强制使用 H.264
                        vid_writer[i] = cv2.VideoWriter(save_path, cv2.VideoWriter_fourcc(*'mp4v'), fps, (w, h))
                    vid_writer[i].write(im0)

                prev_frames[i] = curr_frames[i]

        # 输出结果
        t = tuple(x / seen * 1E3 for x in dt)  # 计算处理速度
        print(f'Speed: %.1fms pre-process, %.1fms inference, %.1fms NMS, %.1fms strong sort update per image at shape {(1, 3, imgsz, imgsz)}' % t)
        if save_txt or save_vid:
            s = f"\n{len(list(save_dir.glob('tracks/*.txt')))} tracks saved to {save_dir / 'tracks'}" if save_txt else ''
            print(f"Results saved to {colorstr('bold', save_dir)}{s}")
        if update:
            strip_optimizer(yolo_weights)  # 更新模型
            
    except KeyboardInterrupt:
        print("\n(KeyboardInterrupt) User Interrupion")
    except StopIteration:
        print("\n(StopIteration) User Interrupion")
    except Exception as e:
        print(f"\n(FFmpeg) Error: {e}")
    finally:
        if process is not None:
            try:
                if process.stdin:
                    process.stdin.close()
                
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                print("(FFmpeg subprocess.TimeoutExpired) FFmpeg process crushed.")
                process.terminate()
                try:
                    process.wait(timeout=2)
                except subprocess.TimeoutExpired:
                    process.kill()
                    process.wait()
            except Exception as e:
                print(f"(FFmpeg Exception) Error: {e}")
    
    print("Resource cleaned.")
    print(f"YOLOv7 + StrongSort 跟踪后共有 {len(tr)} 个轨迹\n")
    return tr

if __name__ == "__main__":
    opt = parse_opt()
    track(**vars(opt))
