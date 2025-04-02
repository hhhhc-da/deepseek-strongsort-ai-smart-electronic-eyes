import cv2
import os
import joblib
import numpy as np

def extract_frame(video_path, output_image_path=os.path.abspath(os.path.join(".cache", "lane.jpg"))):
    '''
    将视频的第一帧取出, 用于做分析
    '''
    cap = cv2.VideoCapture(video_path)
    
    if not cap.isOpened():
        print(f"\n无法打开视频文件: {video_path}\n")
        return False
    
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(output_image_path, frame)
        print(f"\n第一帧已保存为: {output_image_path}\n")
        return True
    else:
        print("\n无法读取视频帧\n")
        cap.release()
        return False
    
def load_tr(path=os.path.abspath(os.path.join("runs", "track", "exp", "tr.pkl"))):
    '''
    直接读取 tr 的备份
    '''
    return joblib.load(path)

def transform_ndarray_to_string(array):
    '''
    将一维的 nd.array 转换为 str 类型输出
    '''
    s = ''
    for i in list(array):
        s += str(i)
    return s

def draw_figure_legend(image, legend_data:dict={}):
    '''
    绘制图例到图片上, 更方便确认车道信息
    '''
    # 图例的位置参数
    w = image.shape[1]

    width = 220
    padding = 30
    hp = 10
    x_start = w - width + padding
    y_start = padding

    # 小矩形选框
    rect_width = 50
    rect_height = 20

    # 绘制白底黑边
    cv2.rectangle(image, (w - width, 0), (w, y_start + (len(legend_data) - 1) * hp + len(legend_data) * rect_height), (255, 255, 255), -1)
    cv2.rectangle(image, (w - width, 0), (w, y_start + (len(legend_data) - 1) * hp + len(legend_data) * rect_height), (0, 0, 0), 1)

    # 绘制图例
    for i, (label, color) in enumerate(legend_data.items()):
        # 实心矩形
        cv2.rectangle(image, (x_start, y_start + i * hp + (i - 1) * rect_height), (x_start + rect_width, y_start + i * hp + i * rect_height), color.tolist(), -1)
        # 矩形黑边外框
        cv2.rectangle(image, (x_start, y_start + i * hp + (i - 1) * rect_height), (x_start + rect_width, y_start + i * hp + i * rect_height), (0, 0, 0), 1)
        # 文本串
        cv2.putText(image, label, (x_start + rect_width + 5, int(y_start + (2 * i - 1) / 2 * hp + i * rect_height)), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 0), 2)

    return image
    

if __name__ == "__main__":
    video_file = os.path.join('source', 'valid.mp4')
    
    print(extract_frame(video_file))