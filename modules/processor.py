import os
import sys
import subprocess
import datetime
import pandas as pd
import signal
import psutil
import time
import cv2
import numpy as np
from typing import Optional
import traceback

# YOLO 模型导入
from ultralytics import YOLO
import torch
import tqdm
import redis
import json

class StreamProcessor:
    def __init__(
        self,
        source: str = 'http://192.168.1.4:7000/live?app=live&stream=114514',
        target: str = 'rtmp://192.168.1.4:1935/live/1919810',
        split_sec: int = 30,
        fps: int = 30,
        model_path: str = 'yolo11l.pt',
        line_thickness: int = 3,
        device: str = 'cuda:0',
        redis_conf: dict = {
            'host': 'localhost',
            'port': 6379,
            'db': 1
        },
        redis_key: str = 'track',
        tracker=None,
        enable_push: bool = True,
        enable_save: bool = False
    ):
        self.init_time = datetime.datetime.now()
        self.split_sec = split_sec
        self.fps = fps
        self.frames_per_slice = int(round(split_sec * fps))
        self.current_slice_frames = 0 
        self.current_slice_idx = 0

        self.set_stream_source(source)
        self.set_stream_target(target)

        self.line_thickness = line_thickness

        # 状态计数
        self.total_frames_processed = 0
        self.processing_start_time = None
        

        self.is_file_source = False
        self.is_stream_source = False
        if source:
            if source.startswith(('rtmp', 'rtsp', 'http', 'https')):
                self.is_stream_source = True
            elif os.path.isfile(source) and source.split('.')[-1] in ['mp4', 'avi', 'mkv', 'flv']:
                self.is_file_source = True
                self.is_stream_source = False

        # 文件名前缀
        self.unique_video_prefix = f"stream"

        self.device = device
        self.model = YOLO(model_path).to(device)
        self.conf_threshold = 0.7
        print(f"YOLO 模型加载完成：设备={self.device} | 置信度阈值={self.conf_threshold}")

        self.tracker = tracker

        # FFmpeg 进程句柄
        self.ffmpeg_reader: Optional[subprocess.Popen] = None
        self.width = 1280
        self.height = 720
        self.ffmpeg_push_handler: Optional[subprocess.Popen] = None
        self.ffmpeg_save_handler: Optional[subprocess.Popen] = None
        
        self.enable_push = enable_push
        self.enable_save = enable_save
        
        self.bar = None
        self.total_frames = 0
        self.total_slices = 0

        # 信号处理, 如果不这样会出现析构函数异步执行的问题
        self.original_sigint_handler = signal.getsignal(signal.SIGINT)
        signal.signal(signal.SIGINT, self._handle_sigint)

        self.redis_conf = redis_conf
        self.redis_key = redis_key
        self.redis_handler = None
        try:
            self.redis_handler = redis.Redis(**self.redis_conf, decode_responses=True)
            if self.redis_handler.ping():
                print("Redis 连接响应成功")
            else:
                print("Redis 无响应")
        except Exception as e:
            print(f"初始化 Redis 错误: {str(e)}")

        self.mask = None 
        self.target_class = 'car'

        self.class_names = self.model.names
        self.car_class_ids = [k for k, v in self.class_names.items() if v.lower() == self.target_class.lower()]
        if not self.car_class_ids:
            print(f"警告：模型中未找到 '{self.target_class}' 类别，将使用所有类别")
            self.car_class_ids = None

    def _handle_sigint(self, signum: int, frame):
        try:
            self.stop_all_processes()
            print("所有进程已清理完成")
        except Exception as e:
            print(f"清理进程失败: {e}")
        
        try:
            end_time = datetime.datetime.now()
            time_delta = end_time - self.init_time
            total_processing_time = ""
            if self.processing_start_time:
                total_processing_time = str(end_time - self.processing_start_time)
            
            report_args = {
                "name": "StreamLoader-YOLO",
                "source": self.source,
                "target": self.target or "无",
                "total_runtime": str(time_delta),
                "processing_time": total_processing_time,
                "start_time": self.init_time.strftime("%Y-%m-%d %H:%M:%S"),
                "end_time": end_time.strftime("%Y-%m-%d %H:%M:%S"),
                "total_frames_processed": self.total_frames_processed,
                "total_slices_processed": self.current_slice_idx + (1 if self.current_slice_frames > 0 else 0),
                "device": self.device,
                "push_enabled": self.enable_push,
                "save_enabled": self.enable_save,
                "split_seconds": self.split_sec,
                "frames_per_slice": self.frames_per_slice
            }
            self.__report(report_args)
        except Exception as e:
            print(f"生成报告失败: {e}")
        
        signal.signal(signal.SIGINT, self.original_sigint_handler)
        raise KeyboardInterrupt("用户中断，已完成清理")

    def set_stream_source(self, source: str):
        self.source = source
        if source:
            if source.startswith(('rtmp', 'rtsp', 'http', 'https')):
                self.is_stream_source = True
                self.is_file_source = False
            elif os.path.isfile(source) and source.split('.')[-1] in ['mp4', 'avi', 'mkv', 'flv']:
                self.is_file_source = True
                self.is_stream_source = False

    def set_stream_target(self, target: str):
        self.target = target

    def bind_tracker(self, tracker):
        self.tracker = tracker

    def track_update(self, xywh, confs, clss, source_id=0):
        return self.tracker.update(xywh, confs, clss, 
                                   source_id=source_id, 
                                   mask=np.zeros((self.height,self.width,3), dtype=np.uint8),
                                   record=True)

    def __del__(self):
        try:
            self.stop_all_processes()
        except Exception as e:
            print(f"析构函数清理资源失败: {e}")

    def __report(self, args):
        try:
            report_data = {}
            for k, v in args.items():
                if k == 'name':
                    continue
                report_data[k] = [v]
            
            df = pd.DataFrame(report_data, index=[args['name']]).T
            print("\n---------------------- StreamLoader-YOLO 运行报告 ----------------------")
            print(df)
        except Exception as e:
            print(f"创建报告失败: {e}")

    def _init_progress_bar(self):
        if self.bar is not None:
            self.bar.close()
            print(f"切片 {self.current_slice_idx} 处理完成 (累计帧数: {self.total_frames_processed})")
        
        self.current_slice_idx += 1
        self.current_slice_frames = 0
        
        desc = f"处理切片 {self.current_slice_idx}"
        if self.is_file_source and self.total_slices > 0:
            desc += f"/{self.total_slices}"
        
        self.bar = tqdm.tqdm(
            total=self.frames_per_slice,
            unit='帧',
            desc=desc,
            dynamic_ncols=True,
            leave=True
        )

    def _init_capture(self) -> bool:
        if self.ffmpeg_reader is not None:
            self.ffmpeg_reader.terminate()
            self.ffmpeg_reader.wait()

        if self.is_file_source:
            temp_cap = cv2.VideoCapture(self.source)
            if not temp_cap.isOpened():
                temp_cap.release()
                print("静态视频 Capture 初始化失败")
                self.width = 1280
                self.height = 720
                self.fps = 30
            else:
                try:
                    self.width = int(temp_cap.get(cv2.CAP_PROP_FRAME_WIDTH))
                    self.height = int(temp_cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
                    
                    if self.width == 0 or self.height == 0:
                        ret, frame = temp_cap.read()
                        if ret:
                            self.height, self.width = frame.shape[:2]
                        else:
                            self.width = 1280
                            self.height = 720
                            self.fps = 30

                    self.fps = temp_cap.get(cv2.CAP_PROP_FPS) or 30
                    self.total_frames = int(temp_cap.get(cv2.CAP_PROP_FRAME_COUNT)) or 0

                    self.frames_per_slice = int(round(self.split_sec * self.fps))
                    self.total_slices = (self.total_frames + self.frames_per_slice - 1) // self.frames_per_slice
                    print(f"文件信息 - 总帧数: {self.total_frames} | 实际帧率: {self.fps:.2f}fps | 总切片数: {self.total_slices} | 每切片帧数: {self.frames_per_slice}")
                    
                except Exception as e:
                    traceback.print_exc()
                    self.width = 1280
                    self.height = 720
                    self.fps = 30
                finally:
                    temp_cap.release()
        else:
            print("处理视频流数据使用手动输入参数")
            self.width = 1280
            self.height = 720
            self.fps = 30
        
        self._init_mask()
            
        ffmpeg_cmd = [
            'ffmpeg',
            '-i', self.source,
            '-fflags', 'nobuffer',
            '-flags', 'low_delay',
            '-timeout', '5000000',
            '-rw_timeout', '5000000',
            '-pix_fmt', 'bgr24',
            '-vcodec', 'rawvideo',
            '-f', 'rawvideo',
            '-'
        ]
        
        if self.is_file_source:
            ffmpeg_cmd.insert(1, '-re')

        try:
            self.ffmpeg_reader = subprocess.Popen(
                ffmpeg_cmd,
                stdout=subprocess.PIPE,
                stderr=subprocess.DEVNULL,
                shell=False
            )
            print(f"捕获进程启动成功 | 分辨率: {self.width}x{self.height} | 帧率: {self.fps:.2f} | 源类型: {'文件' if self.is_file_source else '网络流'}")
            return True
        except Exception as e:
            print(f"无法打开源 {self.source}: {e}")
            self.ffmpeg_reader = None
            return False

    def _init_mask(self):
        self.mask = np.zeros((self.height, self.width), dtype=np.uint8)
        mask_start_y = int(self.height * 0.3)
        self.mask[mask_start_y:self.height, :] = 255

    def _filter_detections(self, results):
        if results[0].boxes is None:
            return results
        
        boxes = results[0].boxes
        keep_indices = []
        
        for idx in range(len(boxes)):
            conf = boxes.conf[idx].item()
            if conf < self.conf_threshold:
                continue
            
            if self.car_class_ids and boxes.cls[idx].item() not in self.car_class_ids:
                continue

            xyxy = boxes.xyxy[idx].cpu().numpy()
            center_x = int((xyxy[0] + xyxy[2]) / 2)
            center_y = int((xyxy[1] + xyxy[3]) / 2)
            
            if 0 <= center_x < self.width and 0 <= center_y < self.height:
                if self.mask[center_y, center_x] == 255:
                    keep_indices.append(idx)
        
        if keep_indices:
            results[0].boxes = boxes[keep_indices]
        else:
            results[0].boxes = None
        
        return results

    def _init_ffmpeg_save_single_slice(self, base_dir: str) -> bool:
        if self.ffmpeg_save_handler is not None:
            self._stop_ffmpeg_process(self.ffmpeg_save_handler)

        os.makedirs(base_dir, exist_ok=True)

        slice_filename = f"{self.unique_video_prefix}_{self.current_slice_idx:06d}.mp4"
        save_path = os.path.join(base_dir, slice_filename)
        
        save_cmd = [
            'ffmpeg',
            '-y',
            '-f', 'rawvideo',
            '-vcodec', 'rawvideo',
            '-pix_fmt', 'bgr24',
            '-s', f'{self.width}x{self.height}',
            '-r', str(self.fps),
            '-i', '-',
            '-c:v', 'libx264',
            '-profile:v', 'baseline',
            '-level', '3.0',
            '-pix_fmt', 'yuv420p',
            '-preset', 'medium',
            '-crf', '23',
            '-movflags', '+faststart',
            '-g', '1',
            save_path
        ]

        try:
            self.ffmpeg_save_handler = subprocess.Popen(
                save_cmd,
                stdin=subprocess.PIPE,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                shell=False
            )
            print(f"切片 {self.current_slice_idx} 保存进程启动成功 (PID: {self.ffmpeg_save_handler.pid}) -> {save_path}")
            return True
        except Exception as e:
            print(f"切片 {self.current_slice_idx} 保存进程启动失败: {e}")
            return False

    def _init_ffmpeg_push(self) -> bool:
        if not self.enable_push:
            return True
        
        if self.ffmpeg_push_handler is not None:
            self._stop_ffmpeg_process(self.ffmpeg_push_handler)
        
        push_cmd = [
            'ffmpeg',
            '-f', 'rawvideo',
            '-pix_fmt', 'bgr24',
            '-s', f'{self.width}x{self.height}',
            '-r', str(self.fps),
            '-i', '-',
            '-c:v', 'libx264',
            '-profile:v', 'baseline',
            '-level', '3.0',
            '-pix_fmt', 'yuv420p',
            '-preset', 'ultrafast',
            '-b:v', '2M',
            '-f', 'flv',
            '-fflags', 'nobuffer',
            '-flags', 'low_delay',
            self.target
        ]

        try:
            self.ffmpeg_push_handler = subprocess.Popen(
                push_cmd,
                stdin=subprocess.PIPE,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                shell=False
            )
            print(f"推流进程启动成功 (PID: {self.ffmpeg_push_handler.pid}) -> {self.target}")
            return True
        except Exception as e:
            print(f"推流进程启动失败: {e}")
            return False

    def _read_frame(self):
        frame_size = self.width * self.height * 3
        raw_frame = self.ffmpeg_reader.stdout.read(frame_size)
        
        if len(raw_frame) != frame_size:
            return None
        
        frame = np.frombuffer(raw_frame, dtype=np.uint8).reshape((self.height, self.width, 3))
        return frame

    def _stop_ffmpeg_process(self, proc: subprocess.Popen) -> bool:
        if proc is None or proc.poll() is not None:
            return True
        
        try:
            if proc.stdin:
                proc.stdin.flush()
                proc.stdin.close()
            proc.wait(timeout=2.0)
            proc.terminate()
            proc.wait(timeout=3.0)
            print(f"进程 (PID: {proc.pid}) 已正常关闭")
            return True
        except subprocess.TimeoutExpired:
            proc.kill()
            proc.wait(timeout=1)
            print(f"进程 (PID: {proc.pid}) 已强制关闭")
            return True
        except Exception as e:
            print(f"关闭进程失败: {e}")
            return False

    def stop_all_processes(self):
        failed = False
        
        if self.bar is not None:
            self.bar.close()
        
        if self.ffmpeg_push_handler is not None:
            failed |= not self._stop_ffmpeg_process(self.ffmpeg_push_handler)
            self.ffmpeg_push_handler = None
        if self.ffmpeg_save_handler is not None:
            failed |= not self._stop_ffmpeg_process(self.ffmpeg_save_handler)
            self.ffmpeg_save_handler = None
        if self.ffmpeg_reader is not None:
            failed |= not self._stop_ffmpeg_process(self.ffmpeg_reader)
            self.ffmpeg_reader = None

        if failed:
            print("检测到进程关闭失败，强制清理 FFmpeg 进程")
            self.__force_kill_ffmpeg()

    def __force_kill_ffmpeg(self):
        try:
            for proc in psutil.process_iter(['pid', 'name']):
                if proc.info['name'] and 'ffmpeg' in proc.info['name'].lower():
                    try:
                        p = psutil.Process(proc.info['pid'])
                        p.terminate()
                        p.wait(timeout=2)
                    except (psutil.TimeoutExpired, psutil.NoSuchProcess):
                        continue
                    print(f"强制终止 FFmpeg 进程 (PID: {proc.info['pid']})")
        except Exception as e:
            print(f"强制清理失败: {e}")
            if sys.platform.startswith('win32'):
                os.system('taskkill /f /im ffmpeg.exe >nul 2>&1')
            else:
                os.system('pkill -9 ffmpeg >/dev/null 2>&1')

    def process_stream(self, base_dir: str = os.path.join("runs", "live")) -> None:
        if not self._init_capture():
            raise RuntimeError("无法初始化视频捕获")
        
        if self.enable_push and not self._init_ffmpeg_push():
            self.stop_all_processes()
            raise RuntimeError("无法初始化推流")
        
        # 初始化第一个切片的保存进程
        if self.enable_save:
            if not self._init_ffmpeg_save_single_slice(base_dir):
                self.stop_all_processes()
                raise RuntimeError("无法初始化切片保存进程")

        print(f"开始处理 | 推流: {'开启' if self.enable_push else '关闭'} | 保存: {'开启' if self.enable_save else '关闭'} | 切片配置: 每 {self.split_sec} 秒 / {self.frames_per_slice} 帧一个切片 | 按 Ctrl+C 停止处理")
        self._init_progress_bar()

        self.processing_start_time = datetime.datetime.now()

        try:
            tr = None
            while True:
                frame = self._read_frame()
                self.bar.update(1)

                if frame is None:
                    if self.is_stream_source:
                        print("帧读取失败，尝试重连流...")
                        time.sleep(1)
                        if not self._init_capture():
                            print("重连失败，停止处理")
                            break
                        continue
                    else:
                        if self.bar is not None:
                            remaining_frames = self.frames_per_slice - self.current_slice_frames
                            self.bar.close()
                            print(f"最后一个切片 {self.current_slice_idx} 处理完成 (累计帧数: {self.total_frames_processed})")
                        if self.enable_save and self.ffmpeg_save_handler is not None:
                            self._stop_ffmpeg_process(self.ffmpeg_save_handler)
                        print("视频文件处理完成")
                        break

                if len(frame.shape) != 3 or frame.shape[2] != 3:
                    if frame.shape[2] == 4:
                        frame = cv2.cvtColor(frame, cv2.COLOR_RGBA2BGR)
                    elif frame.shape[2] == 1:
                        frame = cv2.cvtColor(frame, cv2.COLOR_GRAY2BGR)
                    else:
                        frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)

                results = self.model(frame, device=self.device, verbose=False)
                results = self._filter_detections(results)
                
                frame_with_boxes = results[0].plot(img=frame.copy(), conf=True, line_width=self.line_thickness)
                
                if isinstance(frame_with_boxes, torch.Tensor):
                    frame_with_boxes = frame_with_boxes.cpu().numpy()
                frame_with_boxes = frame_with_boxes.astype(np.uint8)
                frame_with_boxes = cv2.resize(frame_with_boxes, (self.width, self.height))
                frame_with_boxes = np.ascontiguousarray(frame_with_boxes)

                expected_bytes = self.width * self.height * 3
                actual_bytes = len(frame_with_boxes.tobytes())
                if actual_bytes != expected_bytes:
                    print(f"警告：帧大小不匹配 (预期 {expected_bytes}, 实际 {actual_bytes})，跳过该帧")
                    continue

                if self.tracker is not None:
                    try:
                        if results[0].boxes is not None and len(results[0].boxes) > 0:
                            output, tr, pair_tr = self.track_update(
                                xywh=results[0].boxes.xywh,
                                confs=results[0].boxes.conf,
                                clss=results[0].boxes.cls
                            )

                            if len(pair_tr) > 0 and self.redis_handler is not None:
                                redis_data = {
                                    "total_frame_idx": self.total_frames_processed,
                                    "slice_idx": self.current_slice_idx,
                                    "slice_frame_idx": self.current_slice_frames,
                                    "data": pair_tr,
                                    "slice_file": f"{self.unique_video_prefix}_{self.current_slice_idx:06d}.mp4"
                                }
                                self.redis_handler.rpush(self.redis_key, json.dumps(redis_data))
                        else:
                            tr = None
                    except Exception as e:
                        print(f"跟踪更新失败: {e}")
                        tr = None

                # 推流输出
                if self.enable_push:
                    try:
                        self.ffmpeg_push_handler.stdin.write(frame_with_boxes.tobytes())
                        self.ffmpeg_push_handler.stdin.flush()
                    except Exception as e:
                        print(f"推流写入失败: {e}，尝试重启推流...")
                        if not self._init_ffmpeg_push():
                            break
                        continue

                # 保存输出
                if self.enable_save:
                    try:
                        self.ffmpeg_save_handler.stdin.write(frame_with_boxes.tobytes())
                        self.ffmpeg_save_handler.stdin.flush()
                    except Exception as e:
                        print(f"保存写入失败: {e}，尝试重启保存进程...")
                        if not self._init_ffmpeg_save_single_slice(base_dir):
                            break
                        continue

                self.total_frames_processed += 1
                self.current_slice_frames += 1

                # 切片控制, 如果不使用手动控制 FFmpeg 会用时间而非帧数控制, 我不希望帧被乱改
                if self.current_slice_frames >= self.frames_per_slice:
                    self._init_progress_bar()
                    if self.enable_save:
                        self._stop_ffmpeg_process(self.ffmpeg_save_handler)
                    
                    if self.enable_save:
                        if not self._init_ffmpeg_save_single_slice(base_dir):
                            print(f"无法启动新切片 {self.current_slice_idx} 的保存进程，停止处理")
                            break

        except Exception as e:
            print(f"处理异常: {e}")
            traceback.print_exc()
        finally:
            print(f"处理统计 - 总帧数: {self.total_frames_processed} | 总切片数: {self.current_slice_idx}")
            self.stop_all_processes()

if __name__ == "__main__":
    loader = StreamProcessor(
        source='test_video.mp4',
        target='rtmp://192.168.1.4:1935/live/1919810',
        split_sec=10,
        fps=25,
        model_path=os.path.join('models', 'yolo11l.pt'),
        device='cuda:0',
        redis_conf={
            'host': 'localhost',
            'port': 6379,
            'db': 1
        },
        redis_key='loader_01',
        enable_push=False,
        enable_save=True
    )
    
    try:
        loader.process_stream(base_dir=os.path.join("runs", "live"))
    except KeyboardInterrupt:
        print("程序已正常退出（用户中断）")
    except Exception as e:
        print(f"程序异常退出: {e}")
        loader.stop_all_processes()