import os
# limit the number of cpus used by high performance libraries
os.environ["OMP_NUM_THREADS"] = "1"
os.environ["OPENBLAS_NUM_THREADS"] = "1"
os.environ["MKL_NUM_THREADS"] = "1"
os.environ["VECLIB_MAXIMUM_THREADS"] = "1"
os.environ["NUMEXPR_NUM_THREADS"] = "1"

import numpy as np
import cv2
import pandas as pd
import matplotlib.pyplot as plt
import torch
from datetime import datetime
import requests

r'''
使用可以按照以下命令行启动

------------------------- 使用视频推流, 默认使用 YOLOv12 -------------------------
python main.py --source rtmp://192.168.43.234:1935/live/114514 --output rtmp://192.168.43.234:1935/live/1919810 --save-vid

------------------------- 使用静态视频文件, 使用 YOLOv7 -------------------------
python main.py --source source\valid.mp4 --yolo-weights E:\pandownload1\ML\Police\Project\models\nanoka-car-valid-yolov7.pt --version 7 --save-vid

------------------------- 使用静态视频文件, 显式使用 YOLOv12 -------------------------
python main.py --source source\valid.mp4 --yolo-weights E:\pandownload1\ML\Police\Project\models\nanoka-car-valid-yolov12.pt --version 12 --save-vid
'''

from modules.strongsort import parse_opt, track
from modules.prepare import extract_frame, load_tr
from modules.lane import environment_explore, lane_mask_create
from modules.behavior import predict_behavior_parallel
from modules.analysis import track_analysis, prompt_create
from modules.chatapi import request_deepseek
from modules.report import create_abnormal_behavior_dict, create_windows_format_report

def main():
    '''
    主函数, 通过行为 API 来直接控制流程
    '''
    # 获取参数信息
    opt = parse_opt()
    
    '''我们可以选择使用 YOLOv7 或使用 YOLOv12, 库 API 是完全一致的'''
    if opt.version == 7:
        from modules.detect_yolov7 import detect_img_path
    elif opt.version == 12:
        from modules.detect_yolov12 import detect_img_path
    else:
        raise RuntimeError("不支持的 YOLO 版本")
    
    if opt.source:
        cache = os.path.abspath(os.path.join(".cache", "lane.jpg"))
        # 把第一帧摘取出来
        if extract_frame(opt.source, output_image_path=cache):
            # 特征识别检测
            txt_path, names = detect_img_path(source=cache, view_img=False)
            # 环境感知
            env = environment_explore(cache=cache, txt_path=txt_path, names=names)
            # 解包环境探测结果
            img_wh, px_stop_line, px_lane_info = env["im_wh"], env["cross"], env["lanes"]
            # 绘制车道线掩码
            mask, colors = lane_mask_create(img_wh=img_wh,
                                    px_stop_line=px_stop_line,
                                    px_lane_info=px_lane_info,
                                    save_path=os.path.abspath(os.path.join(".cache", "mask_lane.jpg")))
            
            # 轨迹数据 tr 句柄
            tr, name = {}, None
            dirs = os.listdir(os.path.abspath(os.path.join("runs", "track")))
            if len(dirs) == 0:
                print("没有历史数据, 开始跟踪")
                
                # 开始进行追踪 (p.s.案例视频输出结果没有黄灯不代表状态转移失败, 而是该帧没有被记录)
                tr = track(**vars(opt), opt=opt, mask=mask, legends=colors)
                name = 'exp'
            else:
                name = 'exp' + str(len(dirs)) if len(dirs) != 1 else 'exp'
                
                # 直接装载上一次的数据进行测试
                tr = load_tr(path=os.path.abspath(os.path.join("runs", "track", name, "tr.pkl")))
                print(f"YOLOv7 + StrongSort 跟踪后共有 {len(tr)} 个轨迹\n")
                
            # 对 tr 的路径数据进行归一化
            img_w, img_h = img_wh
            data = [[(x / img_w, y / img_h) for (x, y) in tr[i]] for i in tr.keys()]
            
            # 对车辆行为进行计算
            behavior = predict_behavior_parallel(data=data,
                                      model_name=os.path.abspath(os.path.join('models', 'behavior_model_d1sigma_silu.pth')),
                                      device=torch.device('cuda' if torch.cuda.is_available() else 'cpu'),
                                      switch_mode="d1sigma")
            
            # 开始使用模型分析路径, 用于程序校验
            lnpf = track_analysis(track_data=tr, img_wh=img_wh, behavior=behavior, mask=mask, colors=colors, keys=list(tr.keys()))

            # 重读数据并生成 Prompt
            qtpf = prompt_create(lnpf, tr_txt=os.path.abspath(os.path.join("runs", "track", name, "trace_frames.txt")))
            
            # 开始询问 DeepSeek, 获取问答结果
            rlpf = request_deepseek(lnpf, qtpf)
            
            # 开始解析 DeepSeek 输出结果, 并生成报告字典
            rst = create_abnormal_behavior_dict(lnpf, rlpf)
            
            for dc in rst:
                # 生成对应的 PDF 证书
                create_windows_format_report(dc)
                
                # dc 字典案例
                # {
                #     "datetime_report": "2025-04-04",
                #     "plate": "津ABCDEF",
                #     "report": "车辆津ABCDEF在直行车道内、绿灯下左转，属于闯红灯加左转未按交通信号灯，有交通违法行为。如果你有其他问题，欢迎随时提问。",
                #     "administrator": "审核员 A-103",
                #     "template_path": "E:\\pandownload1\\ML\\Police\\Project\\source\\report.docx",
                #     "report_output_path": "E:\\pandownload1\\ML\\Police\\Project\\pdfs\\report-2025-04-04 20-37-47.507592-e84ebe2e-b3d0-45db-bded-90bec4d7ebe0.pdf"
                # }
                
                data = {
                    "security": "86fb269d190d2c85f6e0468ceca42a20",
                    "plate": dc['plate'],
                    "text": dc['report'],
                    "real": -1
                }
                
                # 将数据发送到后端上传数据库
                requests.post(opt.url + '/upload', json=data)
        else:
            print("视频提取失败, 请检查视频是否规范")
    else:
        print("视频分析出现错误, 请检查视频源是否正确")

if __name__ == "__main__":
    '''
    程序入口, 所有程序都从这里开始运行
    '''
    main()