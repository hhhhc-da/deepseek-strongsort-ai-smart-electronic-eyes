import cv2
import numpy as np

# 色相检测, 需要输入 BGR 图片
def color_dicision_bgr(img):
    if img is None:
        return -2, "Error: Invalid img."
    
    # 转换为HSV颜色空间
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    
    # 定义颜色阈值范围 (H: 0-180, S: 0-255, V: 0-255)
    lower_red1 = np.array([0, 120, 120])
    upper_red1 = np.array([10, 255, 255])
    lower_red2 = np.array([160, 120, 120])
    upper_red2 = np.array([180, 255, 255])
    
    lower_yellow = np.array([20, 120, 120])
    upper_yellow = np.array([35, 255, 255])
    
    lower_green = np.array([36, 120, 120])
    upper_green = np.array([85, 255, 255])
    
    mask_red1 = cv2.inRange(hsv, lower_red1, upper_red1)
    mask_red2 = cv2.inRange(hsv, lower_red2, upper_red2)
    mask_red = cv2.bitwise_or(mask_red1, mask_red2)
    
    mask_yellow = cv2.inRange(hsv, lower_yellow, upper_yellow)
    mask_green = cv2.inRange(hsv, lower_green, upper_green)
    
    # 计算各颜色像素数量
    red_pixels = cv2.countNonZero(mask_red)
    yellow_pixels = cv2.countNonZero(mask_yellow)
    green_pixels = cv2.countNonZero(mask_green)
    
    mthreshold = 10
    max_pixels = max(red_pixels, yellow_pixels, green_pixels)
    
    if max_pixels < mthreshold:
        return -1, "Error: No traffic-lights detected."
    
    if max_pixels == red_pixels:
        return 0, "Red"
    elif max_pixels == yellow_pixels:
        return 1, "Yellow"
    else:
        return 2, "Green"

def color_dicision_rgb(img):
    img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    return color_dicision_bgr(img)

def color_dicision_path(img_path):
    img = cv2.imread(img_path)
    return color_dicision_bgr(img)