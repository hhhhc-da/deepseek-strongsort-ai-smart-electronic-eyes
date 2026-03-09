import os
os.environ["KMP_DUPLICATE_LIB_OK"] = "TRUE"

import sys
import json
import numpy as np
import torch
import torch.nn as nn
import cv2
import redis
from typing import Optional
from collections import defaultdict

from analyzer import MacroDefinination, DataTransformer, BehaviorAnalyzer

class RedisBehaviorAnalyzer:
    def __init__(self,
                 redis_conf: dict = {'host': 'localhost', 'port': 6379, 'db': 1},
                 redis_key: str = 'track',
                 mask_path: str = 'mask.npy',
                 model_path: str = os.path.join('models', 'behavior_model_d1sigma_silu.pth'),
                 video_size: tuple = (1280, 720),  # (width, height)
                 min_track_length: int = 10,
                 lstm_max_length: int = 100,
                 device: str = 'cuda:0' if torch.cuda.is_available() else 'cpu'
                 ):
        self.redis_conf = redis_conf
        self.redis_key = redis_key
        self.video_size = video_size
        self.min_track_length = min_track_length
        self.lstm_max_length = lstm_max_length
        self.device = device

        self.y_compensate_ratio = 0.15

        self.redis_handler = self._connect_redis()
        self.lane_mask = self._load_lane_mask(mask_path)
        self.behavior_analyzer = BehaviorAnalyzer(
            model_path=model_path,
            device=device,
            verbose=True
        )
        self.track_cache = defaultdict(list)

    def _connect_redis(self) -> Optional[redis.Redis]:
        try:
            r = redis.Redis(**self.redis_conf, decode_responses=True)
            assert r.ping(), "Redis 无响应"
            print("Redis 连接成功")
            return r
        except Exception as e:
            print(f"Redis 连接失败: {e}")
            return None

    def _load_lane_mask(self, mask_path: str) -> np.ndarray:
        try:
            mask = np.load(mask_path)
            mask = cv2.resize(mask, self.video_size, interpolation=cv2.INTER_NEAREST)
            return mask
        except FileNotFoundError:
            raise FileNotFoundError(f"车道掩膜文件不存在: {mask_path}")
        except Exception as e:
            raise RuntimeError(f"加载掩膜失败: {e}")

    def _get_mask_region(self, x: float, y: float) -> int:
        x_int, y_int = int(round(x)), int(round(y))
        if 0 <= x_int < self.video_size[0] and 0 <= y_int < self.video_size[1]:
            return int(self.lane_mask[y_int, x_int])
        return 0

    def _check_track_direction(self, track_points: list) -> bool:
        """
        校验轨迹移动方向（适配3D车辆 + 倾斜摄像头）
        条件: 第八个点的y - 第一个点的y < 0 (Y轴应该减小)
        """
        # 确保轨迹至少有8个点
        if len(track_points) < 8:
            print(f"轨迹点数量不足8个，无法校验方向")
            return False
        
        first_y = track_points[0][1]
        eighth_y = track_points[7][1]
        y_diff = eighth_y - first_y
        
        return y_diff < 0

    def _is_track_valid(self, track_points: list) -> tuple[bool, int]:
        """
        校验轨迹有效性（新增双重条件）

        1. 轨迹长度 >= 最小长度
        2. 第八个点y - 第一个点y > 0（方向校验）
        3. 起点y轴+5%补偿后，在掩膜1/2区域内
        """
        if len(track_points) < self.min_track_length:
            return False, 0
        
        if not self._check_track_direction(track_points):
            return False, 0
        
        start_x, start_y = track_points[0]
        compensated_y = start_y + (start_y * self.y_compensate_ratio)
        compensated_region = self._get_mask_region(start_x, compensated_y)
        
        if compensated_region not in (1, 2):
            return False, compensated_region
        
        return True, compensated_region

    def _parse_redis_data(self, redis_data: dict):
        """
        解析 Redis 中的轨迹数据
        """
        try:
            track_dict = redis_data.get('data', {})
            if not isinstance(track_dict, dict):
                print(f"data 字段格式错误，不是字典: {track_dict}")
                return
            
            for track_id, coord_list in track_dict.items():
                if not isinstance(coord_list, list) or len(coord_list) == 0:
                    print(f"轨迹 {track_id} 坐标列表为空或格式错误")
                    continue
                
                valid_coords = []
                for coord in coord_list:
                    if isinstance(coord, list) and len(coord) == 2:
                        x, y = float(coord[0]), float(coord[1])
                        valid_coords.append((x, y))
                
                if valid_coords:
                    self.track_cache[track_id].extend(valid_coords)
                    print(f"轨迹 {track_id} 新增 {len(valid_coords)} 个坐标点，累计 {len(self.track_cache[track_id])} 个")
        
        except Exception as e:
            print(f"解析 Redis 数据失败: {e}")
            import traceback
            traceback.print_exc()

    def process_all_redis_data(self):
        if self.redis_handler is None:
            print("Redis 未连接，无法处理数据")
            return
        
        print("\n-------------------- 开始复制 Redis 备份轨迹数据 --------------------")
        bkp_data = self.redis_handler.lrange("backup", 0, -1)
        if bkp_data:
            pipe = self.redis_handler.pipeline()
            pipe.rpush(self.redis_key, *bkp_data)
            pipe.execute()

            print(f"管道批量复制 {len(bkp_data)} 条数据完成")

        print("\n-------------------- 开始读取 Redis 轨迹数据 --------------------")
        total_count = self.redis_handler.llen(self.redis_key)
        print(f"Redis 列表中共有 {total_count} 条数据待处理")

        processed_count = 0
        while self.redis_handler.llen(self.redis_key) > 0:
            data_str = self.redis_handler.lpop(self.redis_key)
            if data_str:
                try:
                    data = json.loads(data_str)
                    self._parse_redis_data(data)
                    processed_count += 1
                except json.JSONDecodeError:
                    print(f"跳过无效 JSON 数据: {data_str[:100]}...")
        
        print(f"处理完成 | 共读取 {processed_count} 条 Redis 记录 | 聚合得到 {len(self.track_cache)} 条完整轨迹")

    def analyze_all_tracks(self):
        if not self.track_cache:
            print("无轨迹数据可分析")
            return

        valid_tracks = []
        track_info = []  # [(track_id, start_region), ...]

        print("\n-------------------- 轨迹有效性校验 --------------------")
        for track_id, points in self.track_cache.items():
            is_valid, start_region = self._is_track_valid(points)
            region_name = {
                1: "红色车道 (1)", 
                2: "蓝色车道 (2)", 
                0: "无效区域 (0)"
            }.get(start_region, f"未知({start_region})")
            
            status = "√ 有效" if is_valid else "X 无效"
            print(f"{status} | 轨迹 {track_id:>4} | 起点区域: {region_name:<12} | 轨迹长度: {len(points):>3}")
            
            if is_valid:
                valid_tracks.append(points)
                track_info.append((track_id, start_region))

        if not valid_tracks:
            print("\n无有效轨迹，跳过行为分析")
            return

        print("\n-------------------- 生成 LSTM 输入特征 --------------------")
        d1_features = DataTransformer.d1sigma_transpose(valid_tracks, max_length=self.lstm_max_length)
        feature_tensor = torch.tensor(d1_features, dtype=torch.float32)
        print(f"特征生成完成 | 特征形状: {feature_tensor.shape} (样本数, 序列长度, 特征维度)")

        print("\n-------------------- LSTM 行为分类结果 --------------------")
        pred_indices, pred_names = self.behavior_analyzer.predict(feature_tensor)
        
        for (track_id, start_region), idx, name in zip(track_info, pred_indices, pred_names):
            region_name = {1: "红色车道", 2: "蓝色车道"}.get(start_region, "未知车道")
            print(f"轨迹ID: {track_id:>4} | 起点车道: {region_name:<8} | 行为类型: {name:>8} | 类别码: {idx}")

# -------------------------- 主函数 --------------------------
def main():
    analyzer = RedisBehaviorAnalyzer(
        redis_conf={'host': 'localhost', 'port': 6379, 'db': 1},
        redis_key='loader_01',  # 你的 Redis 键名
        mask_path=r'E:\pandownload1\ML\Police\Project\.cache\mask.npy',  # 掩膜文件路径
        model_path=os.path.join('models', 'behavior_model_d1sigma_silu.pth'),  # LSTM 模型路径
        video_size=(1920, 1080),  # 视频分辨率（需与掩膜匹配）
        min_track_length=10,  # 最小轨迹长度（过滤短轨迹）
        lstm_max_length=100,  # LSTM 输入序列长度
        device='cuda:0' if torch.cuda.is_available() else 'cpu'
    )

    analyzer.process_all_redis_data()
    analyzer.analyze_all_tracks()

if __name__ == "__main__":
    main()