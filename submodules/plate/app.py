# -*- coding: UTF-8 -*-
import io
import cv2
import torch
import copy
import numpy as np
from models.experimental import attempt_load
from utils.datasets import letterbox
from utils.general import check_img_size, non_max_suppression_face, scale_coords
from plate_recognition.plate_rec import get_plate_result, init_model
from plate_recognition.double_plate_split_merge import get_split_merge
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image

app = FastAPI(
    title="车牌识别接口", 
    description="车牌检测与识别接口 FastAPI 版", 
    version="1.0"
)

# 添加CORS配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

HTTP_HOST = '0.0.0.0'
HTTP_PORT = 82

'''
默认全局变量初始化, 使用 detect_plate.py 内的逻辑即可
这一部分沿用旧文件, 如果想进行改动请查看 https://github.com/we0091234/Chinese_license_plate_detection_recognition
'''
clors = [(255, 0, 0), (0, 255, 0), (0, 0, 255), (255, 255, 0), (0, 255, 255)]
danger = ['危', '险']

DETECT_MODEL_PATH = 'weights/plate_detect.pt'
REC_MODEL_PATH = 'weights/plate_rec_color.pth'
IMG_SIZE = 640
IS_COLOR = True

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

print("正在加载检测模型...")
detect_model = attempt_load(DETECT_MODEL_PATH, map_location=device)
print("正在加载识别模型...")
plate_rec_model = init_model(device, REC_MODEL_PATH, is_color=IS_COLOR)

total_detect = sum(p.numel() for p in detect_model.parameters())
total_rec = sum(p.numel() for p in plate_rec_model.parameters())
print(f"检测模型参数: {total_detect/1e6:.2f}M, 识别模型参数: {total_rec/1e6:.2f}M")


def order_points(pts):
    """四个点按照左上 右上 右下 左下排列"""
    rect = np.zeros((4, 2), dtype="float32")
    s = pts.sum(axis=1)
    rect[0] = pts[np.argmin(s)]
    rect[2] = pts[np.argmax(s)]
    diff = np.diff(pts, axis=1)
    rect[1] = pts[np.argmin(diff)]
    rect[3] = pts[np.argmax(diff)]
    return rect


def four_point_transform(image, pts):
    """透视变换得到车牌小图"""
    rect = pts.astype('float32')
    (tl, tr, br, bl) = rect
    widthA = np.sqrt(((br[0] - bl[0]) ** 2) + ((br[1] - bl[1]) ** 2))
    widthB = np.sqrt(((tr[0] - tl[0]) ** 2) + ((tr[1] - tl[1]) ** 2))
    maxWidth = max(int(widthA), int(widthB))
    heightA = np.sqrt(((tr[0] - br[0]) ** 2) + ((tr[1] - br[1]) ** 2))
    heightB = np.sqrt(((tl[0] - bl[0]) ** 2) + ((tl[1] - bl[1]) ** 2))
    maxHeight = max(int(heightA), int(heightB))
    dst = np.array([
        [0, 0],
        [maxWidth - 1, 0],
        [maxWidth - 1, maxHeight - 1],
        [0, maxHeight - 1]], dtype="float32")
    M = cv2.getPerspectiveTransform(rect, dst)
    warped = cv2.warpPerspective(image, M, (maxWidth, maxHeight))
    return warped


def scale_coords_landmarks(img1_shape, coords, img0_shape, ratio_pad=None):
    """返回到原图坐标"""
    if ratio_pad is None:
        gain = min(img1_shape[0] / img0_shape[0], img1_shape[1] / img0_shape[1])
        pad = (img1_shape[1] - img0_shape[1] * gain) / 2, (img1_shape[0] - img0_shape[0] * gain) / 2
    else:
        gain = ratio_pad[0][0]
        pad = ratio_pad[1]

    coords[:, [0, 2, 4, 6]] -= pad[0]
    coords[:, [1, 3, 5, 7]] -= pad[1]
    coords[:, :8] /= gain
    coords[:, 0].clamp_(0, img0_shape[1])
    coords[:, 1].clamp_(0, img0_shape[0])
    coords[:, 2].clamp_(0, img0_shape[1])
    coords[:, 3].clamp_(0, img0_shape[0])
    coords[:, 4].clamp_(0, img0_shape[1])
    coords[:, 5].clamp_(0, img0_shape[0])
    coords[:, 6].clamp_(0, img0_shape[1])
    coords[:, 7].clamp_(0, img0_shape[0])
    return coords


def get_plate_rec_landmark(img, xyxy, conf, landmarks, class_num, device, plate_rec_model, is_color=False):
    """获取车牌坐标以及四个角点坐标并获取车牌号"""
    h, w, c = img.shape
    result_dict = {}
    tl = 1 or round(0.002 * (h + w) / 2) + 1

    x1 = int(xyxy[0])
    y1 = int(xyxy[1])
    x2 = int(xyxy[2])
    y2 = int(xyxy[3])
    height = y2 - y1
    landmarks_np = np.zeros((4, 2))
    rect = [x1, y1, x2, y2]
    for i in range(4):
        point_x = int(landmarks[2 * i])
        point_y = int(landmarks[2 * i + 1])
        landmarks_np[i] = np.array([point_x, point_y])

    class_label = int(class_num)
    roi_img = four_point_transform(img, landmarks_np)
    if class_label:
        roi_img = get_split_merge(roi_img)
    
    if not is_color:
        plate_number, rec_prob = get_plate_result(roi_img, device, plate_rec_model, is_color=is_color)
    else:
        plate_number, rec_prob, plate_color, color_conf = get_plate_result(roi_img, device, plate_rec_model, is_color=is_color)
    
    result_dict['rect'] = rect
    result_dict['detect_conf'] = float(conf)
    result_dict['landmarks'] = landmarks_np.tolist()
    result_dict['plate_no'] = plate_number
    result_dict['rec_conf'] = float(rec_prob) if isinstance(rec_prob, (int, float)) else rec_prob
    result_dict['roi_height'] = roi_img.shape[0]
    result_dict['plate_color'] = ""
    if is_color:
        result_dict['plate_color'] = plate_color
        result_dict['color_conf'] = float(color_conf) if isinstance(color_conf, (int, float)) else color_conf
    result_dict['plate_type'] = class_label
    
    return result_dict


def detect_Recognition_plate(model, orgimg, device, plate_rec_model, img_size, is_color=False):
    """获取车牌信息"""
    conf_thres = 0.3
    iou_thres = 0.5
    dict_list = []
    img0 = copy.deepcopy(orgimg)
    
    h0, w0 = orgimg.shape[:2]
    r = img_size / max(h0, w0)
    if r != 1:
        interp = cv2.INTER_AREA if r < 1 else cv2.INTER_LINEAR
        img0 = cv2.resize(img0, (int(w0 * r), int(h0 * r)), interpolation=interp)

    imgsz = check_img_size(img_size, s=model.stride.max())
    img = letterbox(img0, new_shape=imgsz)[0]
    img = img[:, :, ::-1].transpose(2, 0, 1).copy()

    img = torch.from_numpy(img).to(device)
    img = img.float()
    img /= 255.0
    if img.ndimension() == 3:
        img = img.unsqueeze(0)

    pred = model(img)[0]
    pred = non_max_suppression_face(pred, conf_thres, iou_thres)

    for i, det in enumerate(pred):
        if len(det):
            det[:, :4] = scale_coords(img.shape[2:], det[:, :4], orgimg.shape).round()
            det[:, 5:13] = scale_coords_landmarks(img.shape[2:], det[:, 5:13], orgimg.shape).round()

            for j in range(det.size()[0]):
                xyxy = det[j, :4].view(-1).tolist()
                conf = det[j, 4].cpu().numpy()
                landmarks = det[j, 5:13].view(-1).tolist()
                class_num = det[j, 13].cpu().numpy()
                result_dict = get_plate_rec_landmark(orgimg, xyxy, conf, landmarks, class_num, device, plate_rec_model, is_color=is_color)
                dict_list.append(result_dict)
    
    return dict_list


@app.post("/recognize_plate")
async def recognize_plate(file: UploadFile = File(description="上传需要识别的RGB图片文件")):
    """
    接收上传的图片文件，返回车牌识别结果
    只需要上传标准的图片, pillow 能正常识别即可
    """
    try:
        contents = await file.read()
        img_pil = Image.open(io.BytesIO(contents)).convert('RGB')
        img = cv2.cvtColor(np.array(img_pil), cv2.COLOR_RGB2BGR)
        
        if img.shape[-1] == 4:
            img = cv2.cvtColor(img, cv2.COLOR_BGRA2BGR)
        
        result_list = detect_Recognition_plate(detect_model, img, device, plate_rec_model, IMG_SIZE, is_color=IS_COLOR)

        response = {
            "status": "success",
            "plate_count": len(result_list),
            "plates": [{"rect": p["rect"], "detect_conf": float(p["detect_conf"]), "plate_no": p["plate_no"]} for p in result_list]
        }
        return JSONResponse(content=response)
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"处理图片时出错: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app:app",
        host=HTTP_HOST,
        port=HTTP_PORT
    )