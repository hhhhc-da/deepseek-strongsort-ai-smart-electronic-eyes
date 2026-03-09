import numpy as np
import torch
import pandas as pd
import os
import datetime
import yaml
from numpy import random
from copy import copy

from submodules.strongsort.strong_sort.utils.parser import get_config
from submodules.strongsort.strong_sort.strong_sort import StrongSORT

class StrongSortTracker:
    def __init__(self,
                 strong_sort_weights=os.path.abspath(os.path.join('models', 'osnet_x0_25_msmt17.pt')),
                 config_strongsort=os.path.abspath(os.path.join('submodules', 'strongsort', 'strong_sort', 'configs', 'strong_sort.yaml')), # StrongSort 配置文件
                 max_det=1000,
                 device='cuda:0',
                 save_dir=os.path.abspath(os.path.join('runs', 'track', 'exp')),
                 line_thickness=3,
                 mask=np.zeros((640,640,3), dtype=np.uint8)
        ):
        '''
        StrongSort 分析器初始化函数，确定参数、初始化 StrongSort 并汇报部分初始化参数
        '''
        # 初始化参数
        self.max_det = max_det
        self.save_dir = save_dir
        self.line_thickness = line_thickness
        self.mask = mask
        self.names = ['car', 'traffic-lights']
        self.colors = [[random.randint(0, 255) for _ in range(3)] for _ in self.names]

        if not os.path.exists(self.save_dir):  # 修复：原逻辑写反了，应该是不存在才创建
            os.makedirs(self.save_dir, exist_ok=True)
        
        self.__init_strongsort(strong_sort_weights=strong_sort_weights, 
                               config_strongsort=config_strongsort, 
                               max_det=max_det, device=device)

        try:
            tmp_data = None
            with open(config_strongsort, mode='r', encoding='utf-8') as f:
                tmp_data = yaml.safe_load(f.read())
            tmp_data = dict(tmp_data['STRONGSORT'])
            print(tmp_data)

            init_time = datetime.datetime.now()
            report_args = {
                "name": "StrongSort",
                "init time": init_time.strftime("%Y-%m-%d %H:%M:%S"),
                "max det": max_det,
                "device": device,
                "save directory": save_dir
            }

            for k, v in tmp_data.items():
                report_args[' '.join(str(k).lower().split('_'))] = v

            self.__report(report_args)
        except Exception as e:
            print(f"生成报告失败: {e}")
        
    def __report(self, args):
        try:
            report_args = {}
            for k, v in args.items():
                if k == 'name':
                    continue
                try:
                    report_args[k] = [v] if not isinstance(v, list) else [str(v[0])]
                except Exception as e:
                    print(f"处理报告项 {k} 失败: {e}")
                    continue

            pf = pd.DataFrame(report_args, index=[args['name']]).T
            print("\n---------------------- StrongSort 初始化报告 ----------------------")
            print(pf)
        except Exception as e:
            print(f"创建报告 DataFrame 失败: {e}")
        

    def __init_strongsort(self,
                          strong_sort_weights=os.path.abspath(os.path.join('models', 'osnet_x0_25_msmt17.pt')),
                          config_strongsort=os.path.abspath(os.path.join('submodules', 'strongsort', 'strong_sort', 'configs', 'strong_sort.yaml')), # StrongSort 配置文件
                          max_det=1000,
                          device='cuda:0'):
        '''
        专门用于管理 StrongSort 在类内的初始化
        '''
        self.cfg = get_config()
        self.cfg.merge_from_file(config_strongsort)

        self.nr_sources = 1
        self.device = torch.device(device)
        if device.startswith('cuda') and (not torch.cuda.is_available()):
            print("StrongSort 检测到 cuda 启用失败，使用 cpu 进行推理")
            self.device = torch.device('cpu')

        self.strongsort_list = []
        for i in range(self.nr_sources):
            self.strongsort_list.append(
                StrongSORT(
                    strong_sort_weights,
                    self.device,
                    False,        # 关闭 Half 推理
                    max_dist=self.cfg.STRONGSORT.MAX_DIST,
                    max_iou_distance=self.cfg.STRONGSORT.MAX_IOU_DISTANCE,
                    max_age=self.cfg.STRONGSORT.MAX_AGE,
                    n_init=self.cfg.STRONGSORT.N_INIT,
                    nn_budget=self.cfg.STRONGSORT.NN_BUDGET,
                    mc_lambda=self.cfg.STRONGSORT.MC_LAMBDA,
                    ema_alpha=self.cfg.STRONGSORT.EMA_ALPHA,
                )
            )
            self.strongsort_list[i].model.warmup()
        self.outputs = [None] * self.nr_sources

        self.dt, self.seen, self.tr = [0.0, 0.0, 0.0, 0.0], 0, {}
        self.curr_frames, self.prev_frames = [None] * self.nr_sources, [None] * self.nr_sources
        self.frame_idx = 0
        
        # 初始化轨迹年龄字典
        self.track_ages = {}
        self.max_age = self.cfg.STRONGSORT.MAX_AGE

    # 更新 StrongSort 轨迹时一定要关闭梯度跟踪
    @torch.no_grad()
    def update(self, xywh, confs=None, clss=None, source_id=0, ecc:bool=False, im:np.ndarray=None, record=False, save_freq=10, mask=np.zeros((640,640,3), dtype=np.uint8)):
        '''
        更新 StrongSort 信息，同时 ECC 消抖
        
        参数说明：
        - xywh: torch.Tensor/np.ndarray, 形状为 (N,4)，格式为 (x_center, y_center, w, h) 绝对像素值
        - confs: torch.Tensor/np.ndarray, 形状为 (N,)，检测置信度
        - clss: torch.Tensor/np.ndarray, 形状为 (N,), 类别ID
        - source_id: int, 标识使用的 StrongSort ID
        - ecc: bool, 是否启用 ECC 相机运动补偿
        - im: np.ndarray, 当前帧图像 (H,W,C)，用于 ECC 补偿和特征提取
        - record: bool, 用于生成 tr 字典信息, 可以生成以用于静态分析, 但不推荐
        - save_freq: int, tr 轨迹保存间隔, 使用中建议最后手动保存一次
        
        返回值：
        - outputs: list, 跟踪结果, 每个元素为 (x1, y1, x2, y2, track_id, class_id, conf),
                   注意, 在 StrongSort 中 MAX_AGE 用于管理老化 ID, 超过阈值后从 Output 中清理
        - tr: dict, 轨迹信息 {track_id: [point1, point2, ...]}
        - pair_tr: dict, 真正彻底消失的轨迹（age超过MAX_AGE）
        '''
        if source_id < 0 or source_id >= len(self.strongsort_list):
            raise ValueError(f"source_id {source_id} 超出范围！有效范围：0 ~ {len(self.strongsort_list)-1}")
        
        if confs is None:
            confs = torch.ones(len(xywh), device=self.device) if isinstance(xywh, torch.Tensor) else np.ones(len(xywh))
        if clss is None:
            clss = torch.zeros(len(xywh), device=self.device) if isinstance(xywh, torch.Tensor) else np.zeros(len(xywh))
        
        # 一键搞定 detach 和 to_device
        def to_device_with_detach(data):
            if isinstance(data, np.ndarray):
                return torch.from_numpy(data).to(self.device)
            elif isinstance(data, torch.Tensor):
                return data.detach().to(self.device)
            else:
                raise TypeError(f"不支持的数据类型：{type(data)}")
        
        xywh = to_device_with_detach(xywh)
        confs = to_device_with_detach(confs)
        clss = to_device_with_detach(clss)

        self.frame_idx += 1
        self.seen += 1
        # 单次输出清除，要注意多线程的脏读问题
        self.outputs[source_id] = None
        
        if ecc and im is not None:
            self.curr_frames[source_id] = im
            if self.prev_frames[source_id] is not None:
                self.strongsort_list[source_id].tracker.camera_update(self.prev_frames[source_id], self.curr_frames[source_id])
        
        if len(xywh) > 0 and len(xywh) <= self.max_det:
            t1 = datetime.datetime.now()
            if str(self.device).startswith('cuda'):
                self.outputs[source_id] = self.strongsort_list[source_id].update(
                    xywh.cpu(),
                    confs.cpu(),
                    clss.cpu(),
                    im if im is not None else mask
                )
            else:
                self.outputs[source_id] = self.strongsort_list[source_id].update(xywh, confs, clss,
                    im if im is not None else mask
                )
            t2 = datetime.datetime.now()
            self.dt[3] += (t2 - t1).total_seconds() * 1000
            
            if record and self.outputs[source_id] is not None and len(self.outputs[source_id]) > 0:
                confs_cpu = confs.cpu().numpy() if isinstance(confs, torch.Tensor) else confs
                
                for idx, (output, conf) in enumerate(zip(self.outputs[source_id], confs_cpu)):
                    bboxes = output[0:4]
                    track_id = int(output[4])
                    # 这里可以进行类别筛选，也可以直接在 YOLO 进行
                    # cls = int(output[5])

                    center_x = int((bboxes[0] + bboxes[2]) / 2)
                    center_y = int((bboxes[1] + bboxes[3]) / 2)
                    point = (center_x, center_y)
                    
                    if track_id in self.tr:
                        self.tr[track_id].append(point)
                    else:
                        self.tr[track_id] = [point]
                    
                    # 轨迹重新出现，重置age
                    self.track_ages[track_id] = 0
        else:
            self.strongsort_list[source_id].increment_ages()
        
        if im is not None:
            self.prev_frames[source_id] = self.curr_frames[source_id]

        # 基于age判断轨迹是否真正消失
        _ids = [line[4] for line in self.outputs[source_id]] if self.outputs[source_id] is not None else []
        self.pair_tr = {}
        
        for track_id in _ids:
            self.track_ages[track_id] = 0

        for track_id in list(self.tr.keys()):
            if track_id not in _ids:
                self.track_ages[track_id] = self.track_ages.get(track_id, 0) + 1
                
                if self.track_ages[track_id] >= self.max_age:
                    self.pair_tr[track_id] = copy(self.tr[track_id])
                    del self.tr[track_id]
                    del self.track_ages[track_id]

        return self.outputs[source_id] if self.outputs[source_id] is not None else [], self.tr, self.pair_tr

    def track_simulation(self, source=None):
        '''
        模拟数据 StrongSort 跟踪函数
        '''
        print("(使用模拟数据中...) 开始 StrongSort 跟踪...")
        # im = np.random.random(size=(640,640,3))
        output = None

        for s, _ in enumerate(range(80)):
            xywh = np.array([
                [320, 240, 80, 120],
                [480, 320, 60, 100]
            ])
            confs = np.array([0.95, 0.92])
            clss = np.array([0, 0])
            
            output, _, pair_tr = self.update(xywh, confs, clss, ecc=False, record=True)
            # print(f"(tick={s}) pair_tr:", pair_tr, "\noutput:", output)
            if (len(pair_tr) != 0):
                print(f"(tick={s}) pair_tr:", pair_tr)

        for s, _ in enumerate(range(80)):
            xywh = np.array([
                [320, 240, 80, 120],
            ])
            confs = np.array([0.92])
            clss = np.array([0])
            
            output, _, pair_tr = self.update(xywh, confs, clss, ecc=False)
            # print(f"(tick={s+80}) pair_tr:", pair_tr, "\noutput:", output)
            if (len(pair_tr) != 0):
                print(f"(tick={s+80}) pair_tr:", pair_tr)
            
        for s, _ in enumerate(range(80)):
            xywh = np.array([])
            confs = np.array([])
            clss = np.array([])
            
            output, _, pair_tr = self.update(xywh, confs, clss, ecc=False)
            # print(f"(tick={s+160}) pair_tr:", pair_tr, "\noutput:", output)
            if (len(pair_tr) != 0):
                print(f"(tick={s+160}) pair_tr:", pair_tr)
        
        print(f"StrongSort 平均耗时：{self.dt[3]/self.seen:.2f} ms/帧")

if __name__ == "__main__":
    tracker = StrongSortTracker(
        strong_sort_weights=os.path.abspath(os.path.join('models', 'osnet_x0_25_msmt17.pt')),
        config_strongsort=os.path.abspath(os.path.join('submodules', 'strongsort', 'strong_sort', 'configs', 'strong_sort.yaml')),
        max_det=1000,
        device='cuda:0' if torch.cuda.is_available() else 'cpu',
        save_dir=os.path.abspath(os.path.join('runs', 'track', 'exp')),
        line_thickness=3,
        mask=np.zeros((640,640,3), dtype=np.uint8)
    )
    
    try:
        tracker.track_simulation()
    except KeyboardInterrupt:
        print("\n程序已正常退出（用户中断）")
    except Exception as e:
        print(f"\n程序异常退出: {e}")