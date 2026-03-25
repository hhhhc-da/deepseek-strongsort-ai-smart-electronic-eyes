import os
import numpy as np
import torch
import traceback
import argparse
import redis

from modules.strongsort import StrongSortTracker
from modules.processor import StreamProcessor
from modules.analyzer import SignalAnalyzer
from modules.predict import main_data_analysis

def clean_redis_backup():
    '''
    用于处理调试过程中遇到的 Redis 备份键
    '''
    r = redis.Redis(
        host='localhost',
        port=6379,
        db=1,
        decode_responses=True
    )

    r.delete("backup")
    r.delete("traffic_light_info")

    del r


def main_video_process():
    '''
    处理主函数, 用于处理 StrongSort 跟踪事件全流程
    '''
    parser = argparse.ArgumentParser()
    parser.add_argument('--mask_path', type=str, default=r'E:\pandownload1\ML\Police\Project\.cache\mask.npy', help='numpy 掩码文件保存地址')
    opt = parser.parse_args()

    # 第一开始应该先检查初始环境
    if not os.path.exists(opt.mask_path):
        print("掩码文件不存在, 请提前执行初始化操作")

    tracker = StrongSortTracker(
        strong_sort_weights=os.path.abspath(os.path.join('models', 'osnet_x0_25_msmt17.pt')),
        config_strongsort=os.path.abspath(os.path.join('submodules', 'strongsort', 'strong_sort', 'configs', 'strong_sort.yaml')),
        max_det=1000,
        device='cuda:0' if torch.cuda.is_available() else 'cpu',
        save_dir=os.path.abspath(os.path.join('runs', 'track', 'exp')),
        line_thickness=3,
        mask=np.zeros((640,640,3), dtype=np.uint8)
    )

    loader = StreamProcessor(
        # source='http://192.168.1.212:7000/live?app=live&stream=114514',
        source=r'E:\pandownload1\ML\Police\Project\source\video_01.mp4',
        target='rtmp://192.168.1.212:1935/live/1919810',
        split_sec=10,
        fps=25,
        model_path=os.path.join('models', 'yolo11l.pt'),
        device='cuda:0',
        redis_conf={
            'host': 'localhost',
            'port': 6379,
            'db': 1
        },
        redis_key='backup',
        enable_push=False,
        enable_save=True,
        signal_analyzer=SignalAnalyzer()
    )
    
    try:
        loader.bind_tracker(tracker=tracker)
        loader.process_stream(base_dir=os.path.join("runs", "live"))

    except KeyboardInterrupt:
        print("\n程序已正常退出（用户中断）")
    except Exception as e:
        print(f"\n程序异常退出: {e}")
        traceback.print_exc()
        
        loader.stop_all_processes()

if __name__ == '__main__':
    print("删除 Redis 存储的旧数据")
    clean_redis_backup()

    print("开始处理 Video 并制作基础切片")
    main_video_process()

    print("开始执行分析与预测")
    main_data_analysis()