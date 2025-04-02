import os
import cv2
import pandas as pd
from ultralytics import YOLO

def detect_img_path(source:str=os.path.abspath(os.path.join(".cache", "lane.jpg")),
    model_path=os.path.join(os.path.abspath(os.path.join('models', 'nanoka-car-valid-yolov12.pt'))),
    view_img=True, save_txt=True):
    '''
    输入图片路径的方式使用 YOLOv12 检测图片并保存
    '''
    txt_path = None
    model = YOLO(model_path)
    results = model(source)
    
    pf = pd.DataFrame({
        "cls": [model.names[cls] for cls in results[0].boxes.cls.cpu().numpy()],
        "xywh": ["{} {} {} {}".format(*xywh) for xywh in results[0].boxes.xywhn.cpu().numpy()],
        "conf": results[0].boxes.conf.cpu().numpy()
    })
    print(pf, '\n')
    
    # 写入文本文件
    if save_txt:
        txt_path = os.path.abspath(os.path.join('runs', 'image0'))
        with open(txt_path + '.txt', 'w+') as f:
            f.write('')
            f.close()
                
        for cls, xywh, conf in zip(results[0].boxes.cls.cpu().numpy(),
                                   results[0].boxes.xywhn.cpu().numpy(),
                                   results[0].boxes.conf.cpu().numpy()):
            line = (cls, *xywh, conf)
            with open(txt_path + '.txt', 'a+') as f:
                f.write(('%g ' * len(line)).rstrip() % line + '\n')
                f.close()
    
    # 展示图片
    if view_img:
        results[0].show()
        
    return txt_path + '.txt', model.names
    

def detect_img(img, model_path=os.path.join(os.path.abspath(os.path.join('models', 'nanoka-car-valid-yolov12.pt')))):
    '''
    直接用图片的形式输入 YOLOv12, 可以是 BGR 的也可以是 RGB 的
    '''
    model = YOLO(model_path)
    results = model(img)
    
    pf = pd.DataFrame({
        "cls": [model.names[cls] for cls in results[0].boxes.cls.cpu().numpy()],
        "xywh": ["{} {} {} {}".format(*xywh) for xywh in results[0].boxes.xywhn.cpu().numpy()],
        "conf": results[0].boxes.conf.cpu().numpy()
    })
    print(pf, '\n')
    
    # 绘制后的图片
    draw = results[0].plot()    
    return pf, draw