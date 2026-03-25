import os
import json
import uuid
import tempfile
import shutil
import subprocess
import numpy as np
import torch
import torch.nn as nn
import cv2
import redis
from typing import Optional, Tuple
from collections import defaultdict
import pandas as pd
import traceback
from datetime import datetime

# 设置KMP重复库允许（解决OpenMP冲突）
os.environ["KMP_DUPLICATE_LIB_OK"] = "TRUE"

# 导入自定义模块（根据你的项目结构调整）
from modules.analyzer import DataTransformer, BehaviorAnalyzer, PlateAnalyzer, SignalAnalyzer, BertClassifier
from modules.serve import SMTPClient, MQTTServer, ReportExporter
from modules.agent import LargeLanguageModelManager


class RedisBehaviorAnalyzer:
    def __init__(self,
                 redis_conf: dict = {'host': 'localhost', 'port': 6379, 'db': 1},
                 redis_key: str = 'track',
                 mask_path: str = 'mask.npy',
                 model_path: str = os.path.join('models', 'behavior_model_d1sigma_silu.pth'),
                 video_size: tuple = (1280, 720),  # (width, height)
                 min_track_length: int = 10,
                 lstm_max_length: int = 100,
                 device: str = 'cuda:0' if torch.cuda.is_available() else 'cpu',
                 frame_interval: int = 1,  # 帧间隔，用于计算起始帧
                 # 视频导出相关配置
                 frames_per_video: int = 250,
                 video_source_path: str = r'E:\pandownload1\ML\Police\Project\runs\live',
                 video_output_dir: str = 'output_videos',
                 video_prefix: str = 'stream',
                 ffmpeg_path: str = 'ffmpeg'
                 ):
        self.redis_conf = redis_conf
        self.redis_key = redis_key
        self.video_size = video_size
        self.min_track_length = min_track_length
        self.lstm_max_length = lstm_max_length
        self.device = device
        self.frame_interval = frame_interval

        self.y_compensate_ratio = 0.15

        # Redis连接
        self.redis_handler = self._connect_redis()
        # 车道掩膜
        self.lane_mask = self._load_lane_mask(mask_path)
        # 行为分析器
        self.behavior_analyzer = BehaviorAnalyzer(
            model_path=model_path,
            device=device,
            verbose=True
        )
        
        # 轨迹缓存：track_id -> 坐标点列表
        self.track_cache = defaultdict(list)
        # 轨迹帧信息：track_id -> {end_frame: 最终帧号, start_frame: 起始帧号, frame_list: 各坐标对应的帧号列表}
        self.track_frame_info = defaultdict(lambda: {'end_frame': 0, 'start_frame': 0, 'frame_list': []})

        # 视频导出相关配置
        self.frames_per_video = frames_per_video
        self.video_source_path = video_source_path
        self.video_output_dir = video_output_dir
        self.video_prefix = video_prefix
        self.ffmpeg_path = ffmpeg_path
        os.makedirs(self.video_output_dir, exist_ok=True)

    def _connect_redis(self) -> Optional[redis.Redis]:
        """连接Redis，返回Redis句柄"""
        try:
            r = redis.Redis(**self.redis_conf, decode_responses=True)
            assert r.ping(), "Redis 无响应"
            print("Redis 连接成功")
            return r
        except Exception as e:
            print(f"Redis 连接失败: {e}")
            return None

    def _load_lane_mask(self, mask_path: str) -> np.ndarray:
        """加载并调整车道掩膜尺寸"""
        try:
            mask = np.load(mask_path)
            mask = cv2.resize(mask, self.video_size, interpolation=cv2.INTER_NEAREST)
            return mask
        except FileNotFoundError:
            raise FileNotFoundError("未找到车道线掩膜")
        except Exception as e:
            raise RuntimeError(f"加载掩膜失败: {e}")

    def _get_mask_region(self, x: float, y: float) -> int:
        """获取坐标对应的掩膜区域"""
        x_int, y_int = int(round(x)), int(round(y))
        if 0 <= x_int < self.video_size[0] and 0 <= y_int < self.video_size[1]:
            return int(self.lane_mask[y_int, x_int])
        return 0

    def _check_track_direction(self, track_points: list) -> bool:
        """校验轨迹移动方向（适配3D车辆 + 倾斜摄像头）"""
        if len(track_points) < 8:
            print(f"轨迹点数量不足8个，无法校验方向")
            return False
        
        first_y = track_points[0][1]
        eighth_y = track_points[7][1]
        y_diff = eighth_y - first_y
        
        return y_diff < 0

    def _is_track_valid(self, track_points: list) -> tuple[bool, int]:
        """校验轨迹有效性"""
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
        解析Redis中的轨迹数据（核心修改：适配total_frame_idx是end_frame）
        - total_frame_idx: 当前批次数据的结束帧号
        - 计算每个轨迹的起始帧号：end_frame - 轨迹长度 + 1
        """
        try:
            track_dict = redis_data.get('data', {})
            end_frame = redis_data.get('total_frame_idx', 0)  # Redis中存储的是end_frame
            
            if not isinstance(track_dict, dict):
                print(f"data 字段格式错误，不是字典: {track_dict}")
                return
            
            for track_id, coord_list in track_dict.items():
                if not isinstance(coord_list, list) or len(coord_list) == 0:
                    print(f"轨迹 {track_id} 坐标列表为空或格式错误")
                    continue
                
                # 过滤有效坐标
                valid_coords = []
                for coord in coord_list:
                    if isinstance(coord, list) and len(coord) == 2:
                        x, y = float(coord[0]), float(coord[1])
                        valid_coords.append((x, y))
                
                if valid_coords:
                    # 计算当前批次坐标对应的帧号范围
                    batch_frame_count = len(valid_coords)
                    batch_start_frame = end_frame - batch_frame_count + 1
                    batch_frame_list = list(range(batch_start_frame, end_frame + 1))
                    
                    # 更新轨迹缓存和帧信息
                    self.track_cache[track_id].extend(valid_coords)
                    self.track_frame_info[track_id]['frame_list'].extend(batch_frame_list)
                    self.track_frame_info[track_id]['end_frame'] = end_frame  # 更新最终end_frame
                    
                    # 计算轨迹的起始帧号（首次计算）
                    if self.track_frame_info[track_id]['start_frame'] == 0 and self.track_cache[track_id]:
                        total_length = len(self.track_cache[track_id])
                        self.track_frame_info[track_id]['start_frame'] = end_frame - total_length + 1
                    
                    print(f"轨迹 {track_id} 新增 {len(valid_coords)} 个坐标点，累计 {len(self.track_cache[track_id])} 个")
                    print(f"轨迹 {track_id} 帧范围：{self.track_frame_info[track_id]['start_frame']} ~ {self.track_frame_info[track_id]['end_frame']}")
        
        except Exception as e:
            print(f"解析 Redis 数据失败: {e}")
            traceback.print_exc()

    def _get_track_frame_range(self, track_id: str) -> Tuple[int, int]:
        """获取轨迹的起始帧和结束帧（修正后逻辑）"""
        if track_id not in self.track_frame_info:
            return 0, 0
        
        start_frame = self.track_frame_info[track_id]['start_frame']
        end_frame = self.track_frame_info[track_id]['end_frame']
        
        # 兜底：如果start_frame计算异常，用end_frame - 轨迹长度 + 1
        if start_frame <= 0 and self.track_cache[track_id]:
            start_frame = end_frame - len(self.track_cache[track_id]) + 1
        
        return max(0, start_frame), end_frame

    def process_all_redis_data(self):
        """处理Redis中所有轨迹数据"""
        if self.redis_handler is None:
            print("Redis 未连接，无法处理数据")
            return
        
        print("\n-------------------- 开始复制 Redis 备份轨迹数据 --------------------")
        bkp_data = self.redis_handler.lrange("backup", 0, -1) if self.redis_handler else []
        if bkp_data:
            pipe = self.redis_handler.pipeline()
            pipe.rpush(self.redis_key, *bkp_data)
            pipe.execute()
            print(f"管道批量复制 {len(bkp_data)} 条数据完成")

        print("\n-------------------- 开始读取 Redis 轨迹数据 --------------------")
        total_count = self.redis_handler.llen(self.redis_key) if self.redis_handler else 0
        print(f"Redis 列表中共有 {total_count} 条数据待处理")

        processed_count = 0
        while self.redis_handler and self.redis_handler.llen(self.redis_key) > 0:
            data_str = self.redis_handler.lpop(self.redis_key)
            if data_str:
                try:
                    data = json.loads(data_str)
                    self._parse_redis_data(data)
                    processed_count += 1
                except json.JSONDecodeError:
                    print(f"跳过无效 JSON 数据: {data_str[:100]}...")
        
        print(f"处理完成 | 共读取 {processed_count} 条 Redis 记录 | 聚合得到 {len(self.track_cache)} 条完整轨迹")

    def analyze_all_tracks(self) -> pd.DataFrame:
        """分析所有轨迹，返回结果DataFrame"""
        if not self.track_cache:
            print("无轨迹数据可分析")
            return pd.DataFrame()

        result_data = []
        
        print("\n-------------------- 轨迹有效性校验 --------------------")
        for track_id, points in self.track_cache.items():
            is_valid, start_region = self._is_track_valid(points)
            start_frame, end_frame = self._get_track_frame_range(track_id)  # 获取修正后的帧范围
            
            region_name = {
                1: "红色车道 (1)", 
                2: "蓝色车道 (2)", 
                0: "无效区域 (0)"
            }.get(start_region, f"未知({start_region})")
            
            status = "√ 有效" if is_valid else "X 无效"
            print(f"{status} | 轨迹 {track_id:>4} | 起点区域: {region_name:<12} | 轨迹长度: {len(points):>3} | 帧范围: {start_frame}~{end_frame}")
            
            if is_valid:
                result_data.append({
                    'track_id': track_id,
                    'start_lane': start_region,
                    'start_lane_name': region_name,
                    'track_length': len(points),
                    'start_frame': start_frame,
                    'end_frame': end_frame,
                    'behavior_code': None,
                    'behavior_name': None,
                    'is_valid': True,
                    'coords': points,  # 保存坐标点用于视频标注
                    'frame_list': self.track_frame_info[track_id]['frame_list']  # 保存对应的帧号
                })

        if not result_data:
            print("\n无有效轨迹，跳过行为分析")
            return pd.DataFrame()

        # 行为分析
        valid_track_ids = [item['track_id'] for item in result_data]
        valid_tracks = [self.track_cache[track_id] for track_id in valid_track_ids]

        print("\n-------------------- 生成 LSTM 输入特征 --------------------")
        d1_features = DataTransformer.d1sigma_transpose(valid_tracks, max_length=self.lstm_max_length)
        feature_tensor = torch.tensor(d1_features, dtype=torch.float32).to(self.device)
        print(f"特征生成完成 | 特征形状: {feature_tensor.shape} (样本数, 序列长度, 特征维度)")

        print("\n-------------------- LSTM 行为分类结果 --------------------")
        pred_indices, pred_names = self.behavior_analyzer.predict(feature_tensor)
        
        # 更新行为分析结果
        for i, (track_id, idx, name) in enumerate(zip(valid_track_ids, pred_indices, pred_names)):
            for data_item in result_data:
                if data_item['track_id'] == track_id:
                    data_item['behavior_code'] = int(idx)
                    data_item['behavior_name'] = name
                    break
            
            lane_info = next(item['start_lane_name'] for item in result_data if item['track_id'] == track_id)
            end_frame = next(item['end_frame'] for item in result_data if item['track_id'] == track_id)
            print(f"轨迹ID: {track_id:>4} | 起点车道: {lane_info:<8} | 行为类型: {name:>8} | 类别码: {idx} | 帧范围: {start_frame}~{end_frame}")

        # 创建DataFrame
        df = pd.DataFrame(result_data)
        print("\n-------------------- 分析结果预览 --------------------")
        print(df[['track_id', 'start_lane', 'behavior_code', 'start_frame', 'end_frame']].to_string(index=False))
        
        return df

    def export_violation_video(self, track_id: str, behavior_name: str = "") -> str:
        """
        导出指定轨迹的视频（18位UUID命名）
        :param track_id: 轨迹ID
        :param behavior_name: 行为名称（用于备注）
        :return: 导出的视频路径
        """
        if track_id not in self.track_cache:
            print(f"轨迹 {track_id} 不存在，跳过视频导出")
            return ""
        
        # 获取轨迹信息
        points = self.track_cache[track_id]
        start_frame, end_frame = self._get_track_frame_range(track_id)
        frame_list = self.track_frame_info[track_id]['frame_list']
        
        # 数据打包：[(帧范围), (坐标点列表)]
        data_pack = [((start_frame, end_frame), points)]
        
        # 生成18位UUID（纯数字）
        video_uuid = ''.join(str(uuid.uuid4().int)[:18])
        video_name = f"violation_{video_uuid}_{track_id}_{behavior_name.replace(' ', '_')}.mp4"
        output_video_path = os.path.join(self.video_output_dir, video_name)
        
        # 创建临时目录
        temp_frame_dir = tempfile.mkdtemp(prefix=f'temp_video_frames_{track_id}_')
        
        try:
            # 1. 整理帧信息
            frame_info = {}  # {视频分片编号: {相对帧号: (坐标点, 全局帧号)}}
            total_frames = end_frame - start_frame + 1
            
            for frame_offset in range(total_frames):
                global_frame = start_frame + frame_offset
                # 计算视频分片编号（从0开始）
                video_idx = global_frame // self.frames_per_video
                relative_frame = global_frame - video_idx * self.frames_per_video
                
                # 获取对应坐标点
                point = points[frame_offset] if frame_offset < len(points) else None
                
                if video_idx not in frame_info:
                    frame_info[video_idx] = {}
                frame_info[video_idx][relative_frame] = (point, global_frame)
            
            # 2. 提取并标注帧
            annotated_frames = []
            fps = None
            width = None
            height = None
            
            for video_idx in sorted(frame_info.keys()):
                # 拼接原视频路径
                original_video = os.path.join(self.video_source_path, f"{self.video_prefix}_{video_idx:06d}.mp4")
                if not os.path.exists(original_video):
                    print(f"原视频不存在：{original_video}，跳过该视频段")
                    continue
                
                # 读取视频信息
                cap = cv2.VideoCapture(original_video)
                if fps is None:
                    fps = int(cap.get(cv2.CAP_PROP_FPS)) or 30
                if width is None:
                    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)) or self.video_size[0]
                if height is None:
                    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)) or self.video_size[1]
                
                # 逐帧读取并标注
                for relative_frame in sorted(frame_info[video_idx].keys()):
                    cap.set(cv2.CAP_PROP_POS_FRAMES, relative_frame)
                    ret, frame = cap.read()
                    if not ret:
                        print(f"原视频 {original_video} 第 {relative_frame} 帧读取失败，跳过")
                        continue
                    
                    # 标注关键点和帧号
                    point, global_frame = frame_info[video_idx][relative_frame]
                    if point is not None:
                        x, y = int(point[0]), int(point[1])
                        cv2.circle(frame, (x, y), 8, (0, 0, 255), 3)  # 红色圆圈标注
                        cv2.putText(frame, f"Track: {track_id}", (10, 30), 
                                    cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
                        cv2.putText(frame, f"Frame: {global_frame}", (10, 70), 
                                    cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
                        cv2.putText(frame, f"Behavior: {behavior_name}", (10, 110), 
                                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
                    
                    annotated_frames.append((global_frame, frame))
                
                cap.release()
            
            if not annotated_frames:
                print(f"轨迹 {track_id} 无有效帧，跳过视频导出")
                return ""
            
            # 3. 按帧号排序并保存到临时目录
            annotated_frames.sort(key=lambda x: x[0])
            for frame_seq, (global_frame, frame) in enumerate(annotated_frames):
                temp_frame_path = os.path.join(temp_frame_dir, f"{frame_seq:06d}.jpg")
                cv2.imwrite(temp_frame_path, frame)
            
            # 4. 调用FFmpeg导出视频
            ffmpeg_cmd = [
                self.ffmpeg_path,
                '-y',
                '-framerate', str(fps),
                '-i', os.path.join(temp_frame_dir, '%06d.jpg'),
                '-c:v', 'libx264',
                '-g', '1',  # 所有帧都是关键帧
                '-crf', '18',
                '-pix_fmt', 'yuv420p',
                '-preset', 'fast',
                output_video_path
            ]
            
            subprocess.run(ffmpeg_cmd, check=True, capture_output=True, text=True)
            print(f"违规视频导出成功：{output_video_path}")
            
            return output_video_path
        
        except subprocess.CalledProcessError as e:
            print(f"导出视频失败：{output_video_path}，错误：{e.stderr}")
            return ""
        
        finally:
            # 清理临时目录
            shutil.rmtree(temp_frame_dir)


# -------------------------- 主函数 --------------------------
def main_data_analysis():
    # 初始化分析器（包含视频导出配置）
    analyzer = RedisBehaviorAnalyzer(
        redis_conf={'host': 'localhost', 'port': 6379, 'db': 1},
        redis_key='loader_01',
        mask_path=r'E:\pandownload1\ML\Police\Project\.cache\mask.npy',
        model_path=os.path.join('models', 'behavior_model_d1sigma_silu.pth'),
        video_size=(1920, 1080),
        min_track_length=10,
        lstm_max_length=100,
        device='cuda:0' if torch.cuda.is_available() else 'cpu',
        # 视频导出配置
        frames_per_video=250,
        video_source_path=r'E:\pandownload1\ML\Police\Project\runs\live',
        video_output_dir=os.path.join('runs', 'live', 'ext'),
        video_prefix='stream',
        ffmpeg_path='ffmpeg'
    )

    # 初始化其他模块
    plate_analyzer = PlateAnalyzer(
        url='http://localhost:82/recognize_plate',
        timeout=30, retry=1
    )

    llm_manager = LargeLanguageModelManager(llm_model="zhipuai")

    bert_classifier = BertClassifier(
        pretraind_path='bert-base-chinese',
        classifier_path=os.path.join('models', 'bert_classifier.pth')
    )

    reporter = ReportExporter(
        output_dir=os.path.join('runs', 'reports'),
        verbose=True
    )

    # 处理Redis数据并分析
    analyzer.process_all_redis_data()
    result_df = analyzer.analyze_all_tracks()

    # 车牌识别
    image = cv2.imread(r"E:\pandownload1\ML\Police\Project\source\moto.png")
    plate_result = plate_analyzer.det(image)
    simulation_plate = []
    if plate_result['status'] == 'success':
        det_plate = plate_result['plates'][0]['plate_no']
        simulation_plate = [det_plate] * len(result_df)
    else:
        print("车牌识别失败")

    # 违法行为判断
    bhv_code2ch = {0: '静止', 1: '左转', 2: '直行', 3: '右转', 4: '掉头'}
    lane_code2ch = {0: '未知', 1: '可直行可左转', 2: '可直行可右转'}

    questions = [
        f"请问这辆车在绿灯状态下位于{lane_code2ch[result_df['start_lane'].iloc[i]]}车道且正在{bhv_code2ch[result_df['behavior_code'].iloc[i]]}中，有无交通违法行为？请简要说明理由。"
        for i in range(len(result_df))
    ]

    # LLM询问
    lnpf = pd.DataFrame({"plate": simulation_plate})
    qtpf = pd.DataFrame({"question": questions})
    print(qtpf)

    pf = llm_manager.ask_function(lnpf, qtpf)
    print(f"\n(Zhipuai) 询问结果:\n{pf}\n")

    # BERT分类违规行为并导出视频
    violation_video_paths = []
    for i in range(len(result_df)):
        # BERT分类是否违规（0: 无违规, 1: 有违规）
        cls_result = bert_classifier.bert_predict(pf['reply'].iloc[i], max_len=8)
        
        if cls_result != 0:  # 有违规行为
            track_id = result_df['track_id'].iloc[i]
            behavior_name = result_df['behavior_name'].iloc[i]
            plate = simulation_plate[i] if i < len(simulation_plate) else "未知车牌"
            
            # 导出违规视频
            video_path = analyzer.export_violation_video(track_id, behavior_name)
            if video_path:
                violation_video_paths.append({
                    'plate': plate,
                    'track_id': track_id,
                    'behavior': behavior_name,
                    'video_path': video_path,
                    'llm_reply': pf['reply'].iloc[i]
                })
                
                # 导出违规报告
                reporter.export_report(
                    report_name=f"{plate}-{track_id}-违规报告",
                    format='pdf',
                    status_dict={
                        "datetime_report": str(datetime.now()).split()[0],
                        "plate": plate,
                        "track_id": track_id,
                        "behavior": behavior_name,
                        "report": pf['reply'].iloc[i],
                        "video_path": video_path,
                        "administrator": "审核员 A-103",
                        "template_path": r'E:\pandownload1\ML\Police\Project\source\report.docx'
                    }
                )

    # 打印违规视频列表
    print("\n-------------------- 违规视频列表 --------------------")
    for item in violation_video_paths:
        print(f"车牌: {item['plate']} | 轨迹ID: {item['track_id']} | 行为: {item['behavior']} | 视频: {item['video_path']}")
