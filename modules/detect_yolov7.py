import time
from pathlib import Path
import os
import cv2
import torch
import torch.backends.cudnn as cudnn
from numpy import random
from models.experimental import attempt_load
from utils.datasets import LoadImages
from utils.general import check_img_size, non_max_suppression, scale_coords, xyxy2xywh, set_logging
from utils.plots import plot_one_box
from utils.torch_utils import select_device, time_synchronized

def detect_img_path(source=os.path.abspath(os.path.join('source', 'lane.jpg')), 
                    weights=os.path.abspath(os.path.join('models', 'nanoka-car-valid.pt')), 
                    view_img=True, save_txt=True, imgsz=640, trace=False, save_img=True, device='0'):
    '''
    通过路经的方式使用 YOLOv7 进行检测
    '''
    # 保存目录
    save_dir = os.path.abspath(os.path.join('runs'))
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)

    set_logging()
    device = select_device(device)
    half = device.type != 'cpu'  # Half 模式只能运行在 CUDA 上

    # 加载 YOLOv7 模型
    model = attempt_load(Path(weights), map_location=device)  # FP32 模式
    stride = int(model.stride.max())
    imgsz = check_img_size(imgsz, s=stride)

    if half:
        model.half()  # FP16 模式

    # 读取图片数据
    dataset = LoadImages(source, img_size=imgsz, stride=stride)

    # 获取模型基本信息 
    names = model.module.names if hasattr(model, 'module') else model.names
    colors = [[random.randint(0, 255) for _ in range(3)] for _ in names]

    # 推理模型
    if device.type != 'cpu':
        model(torch.zeros(1, 3, imgsz, imgsz).to(device).type_as(next(model.parameters())))  # 在 CUDA 上做模型 Warm up
    old_img_w = old_img_h = imgsz
    old_img_b = 1

    t0 = time.time()
    for path, img, im0s, vid_cap in dataset:
        img = torch.from_numpy(img).to(device)
        img = img.half() if half else img.float()  # uint8 -> fp16/32
        img /= 255.0  # 归一化
        if img.ndimension() == 3:
            img = img.unsqueeze(0)

        # Warm up 操作
        if device.type != 'cpu' and (old_img_b != img.shape[0] or old_img_h != img.shape[2] or old_img_w != img.shape[3]):
            old_img_b = img.shape[0]
            old_img_h = img.shape[2]
            old_img_w = img.shape[3]
            for i in range(3):
                model(img)[0]

        # 模型推理
        t1 = time_synchronized()
        with torch.no_grad():   # 计算梯度会导致 GPU 内存泄漏
            pred = model(img)[0]
        t2 = time_synchronized()

        # NMS 操作
        pred = non_max_suppression(pred, conf_thres=0.3, iou_thres=0.3, classes=None)
        t3 = time_synchronized()

        # 处理模型计算结果
        for i, det in enumerate(pred):
            p, s, im0, frame = path, '', im0s, getattr(dataset, 'frame', 0)

            p = Path(p)
            save_path = os.path.join(save_dir, p.name)
            txt_path = os.path.join(save_dir, 'image{}'.format(i))
            with open(txt_path + '.txt', 'w+') as f:
                f.write('')
                f.close()
            
            
            gn = torch.tensor(im0.shape)[[1, 0, 1, 0]]  # 归一化
            if len(det):
                det[:, :4] = scale_coords(img.shape[2:], det[:, :4], im0.shape).round()

                # 每张图片的检测结果统计
                for c in det[:, -1].unique():
                    n = (det[:, -1] == c).sum()
                    s += f"{n} {names[int(c)]}{'s' * (n > 1)}, "

                # 绘制图片 Box 框
                for *xyxy, conf, cls in reversed(det):
                    if save_txt:
                        xywh = (xyxy2xywh(torch.tensor(xyxy).view(1, 4)) / gn).view(-1).tolist()
                        line = (cls, *xywh, conf)
                        with open(txt_path + '.txt', 'a+') as f:
                            f.write(('%g ' * len(line)).rstrip() % line + '\n')

                    if save_img or view_img:  # 绘制图片
                        label = f'{names[int(cls)]} {conf:.2f}'
                        plot_one_box(xyxy, im0, label=label, color=colors[int(cls)], line_thickness=1)

            # 输出检测时间
            print(f'{s}Done. ({(1E3 * (t2 - t1)):.1f}ms) Inference, ({(1E3 * (t3 - t2)):.1f}ms) NMS')

            # 显示图片
            if view_img:
                cv2.imshow(str(p), im0)
                cv2.waitKey(0)

            # 保存输出结果
            if save_img:
                cv2.imwrite(save_path, im0)
                print(f" The image with the result is saved in: {save_path}")
    print(f'Done. ({time.time() - t0:.3f}s)')
    return txt_path + '.txt', names

if __name__ == '__main__':
    detect_img_path()