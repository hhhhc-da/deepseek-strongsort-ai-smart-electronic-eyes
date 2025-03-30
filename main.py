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

# python main.py --source rtmp://192.168.43.234:1935/live/114514 --output rtmp://192.168.43.234:1935/live/1919810 --save-vid
# python main.py --source source\valid.mp4 --save-vid

from strongsort import parse_opt, track
from prepare import extract_frame, load_tr
from detect_yolov7 import detect_img_path
from lane import environment_explore, lane_mask_create
from behavior import predict_behavior_parallel
from analysis import track_analysis, prompt_create

def main():
    '''
    主函数, 通过行为 API 来直接控制流程
    '''
    # 获取参数信息
    opt = parse_opt()
    
    if opt.source:
        cache = os.path.join(".cache", "lane.jpg")
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
                                    save_path=os.path.join(".cache", "mask_lane.jpg"))
            print("(Main)", colors)
            
            # 轨迹数据 tr 句柄
            tr = {}
            dirs = os.listdir(os.path.join("runs", "track"))
            if len(dirs) == 0:
                print("没有历史数据, 开始跟踪")
                
                # 开始进行追踪 (p.s.案例视频输出结果没有黄灯不代表状态转移失败, 而是该帧没有被记录)
                tr = track(**vars(opt), opt=opt, mask=mask, legends=colors)
            else:
                name = 'exp' + str(len(dirs)) if len(dirs) != 1 else 'exp'
                
                # 直接装载上一次的数据进行测试
                tr = load_tr(path=os.path.join("runs", "track", name, "tr.pkl"))
                print(f"YOLOv7 + StrongSort 跟踪后共有 {len(tr)} 个轨迹\n")
                
            # 对 tr 的路径数据进行归一化
            img_w, img_h = img_wh
            data = [[(x / img_w, y / img_h) for (x, y) in tr[i]] for i in tr.keys()]
            
            # 对车辆行为进行计算
            behavior = predict_behavior_parallel(data=data,
                                      model_name=os.path.join('models', 'behavior_model_d1sigma_silu.pth'),
                                      device=torch.device('cuda' if torch.cuda.is_available() else 'cpu'),
                                      switch_mode="d1sigma")
            
            # 开始使用模型分析路径, 用于程序校验
            lnpf = track_analysis(track_data=tr, img_wh=img_wh, behavior=behavior, mask=mask, colors=colors, keys=list(tr.keys()))

            # 重读数据并生成 Prompt
            
            
        else:
            print("视频提取失败, 请检查视频是否规范")
    else:
        print("视频分析出现错误, 请检查视频源是否正确")

if __name__ == "__main__":
    '''
    程序入口, 所有程序都从这里开始运行
    '''
    main()
