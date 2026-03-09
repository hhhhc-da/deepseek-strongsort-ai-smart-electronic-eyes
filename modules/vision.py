import redis
import json
import cv2
import numpy as np
import subprocess
import os
from typing import Dict, List, Tuple
import traceback

class TrackVisualizer:
    '''
    用于将 Redis 内的数据可视化的类
    这一部分可有可无，只是在分析的时候起作用
    '''
    def __init__(
        self,
        redis_conf: dict = {"host": "localhost", "port": 6379, "db": 1},
        redis_key: str = "loader_01",
        output_video: str = "track_visualization.mp4",
        canvas_size: Tuple[int, int] = (1920, 1080),
        draw_fps: int = 10,
        video_fps: int = 25,
        extra_frames_after_end: int = 50
    ):
        self.redis_conf = redis_conf
        self.redis_key = redis_key
        self.output_video = output_video
        self.canvas_size = canvas_size
        self.draw_fps = draw_fps
        self.video_fps = video_fps
        self.extra_frames = extra_frames_after_end
        
        self.point_radius = 8
        self.line_width = 6           
        self.text_font = cv2.FONT_HERSHEY_SIMPLEX
        self.text_font_scale = 2
        self.text_thickness = 4
        self.text_color = (0, 0, 255) 
        
        # 跟踪数据
        self.track_data = {} 
        self.frame_mapping = {}
        self.max_frame = 0

        self.redis_handler = None
        self._init_redis()

    def _init_redis(self):
        try:
            self.redis_handler = redis.Redis(**self.redis_conf, decode_responses=True)
            if not self.redis_handler.ping():
                raise Exception("Redis 无响应")
            
            raw_data = self.redis_handler.lrange(self.redis_key, 0, -1)
            if not raw_data:
                raise Exception("Redis 中无跟踪数据")
            
            self._parse_redis_data(raw_data)
            print(f"成功读取 {len(raw_data)} 条跟踪数据，共 {len(self.track_data)} 个目标")
            
        except Exception as e:
            print(f"Redis 初始化失败: {e}")
            traceback.print_exc()
            exit(1)

    def _parse_redis_data(self, raw_data: List[str]):
        for item in raw_data:
            try:
                data = json.loads(item)
                total_frame = data["total_frame_idx"]
                track_points = data["data"]
                
                if total_frame > self.max_frame:
                    self.max_frame = total_frame
                
                for target_id, points in track_points.items():
                    if target_id not in self.track_data:
                        self.track_data[target_id] = []
                    for point in points:
                        if point not in self.track_data[target_id]:
                            self.track_data[target_id].append(point)
                
                if total_frame not in self.frame_mapping:
                    self.frame_mapping[total_frame] = list(track_points.keys())
            
            except json.JSONDecodeError:
                print(f"无效的 JSON 数据: {item}")
                continue
            except KeyError as e:
                print(f"数据字段缺失: {e}，跳过该条数据")
                continue

    def _create_blank_canvas(self) -> np.ndarray:
        return np.zeros((self.canvas_size[1], self.canvas_size[0], 3), dtype=np.uint8)

    def _draw_track(self, target_id: str, points: List[List[int]], current_point_idx: int) -> np.ndarray:
        canvas = self._create_blank_canvas()
        
        if current_point_idx > 0:
            for i in range(1, current_point_idx + 1):
                pt1 = tuple(points[i-1])
                pt2 = tuple(points[i])
                cv2.line(canvas, pt1, pt2, (0, 255, 0), self.line_width)
        
        if current_point_idx >= 0 and current_point_idx < len(points):
            current_pt = tuple(points[current_point_idx])
            cv2.circle(canvas, current_pt, self.point_radius, (255, 0, 0), -1)
        
        text = f"Target: {target_id}"
        cv2.putText(canvas, text, (50, 80), self.text_font, self.text_font_scale, 
                    self.text_color, self.text_thickness)
        
        return canvas

    def generate_video(self):
        frame_interval = 1 / self.draw_fps
        video_frame_interval = 1 / self.video_fps
        
        ffmpeg_cmd = [
            'ffmpeg',
            '-y',
            '-f', 'rawvideo',
            '-vcodec', 'rawvideo',
            '-pix_fmt', 'bgr24',
            '-s', f'{self.canvas_size[0]}x{self.canvas_size[1]}',
            '-r', str(self.video_fps),
            '-i', '-',
            '-c:v', 'libx264',
            '-pix_fmt', 'yuv420p',
            '-preset', 'medium',
            '-crf', '23',
            self.output_video
        ]
        
        try:
            ffmpeg_proc = subprocess.Popen(
                ffmpeg_cmd,
                stdin=subprocess.PIPE,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                shell=False
            )
        except Exception as e:
            print(f"FFmpeg 启动失败: {e}")
            exit(1)
        
        for target_id, points in self.track_data.items():
            print(f"绘制目标 {target_id} 的轨迹（共 {len(points)} 个点）")
            frames_per_point = int(self.video_fps / self.draw_fps)
            
            for point_idx in range(len(points)):
                canvas = self._draw_track(target_id, points, point_idx)
                for _ in range(frames_per_point):
                    ffmpeg_proc.stdin.write(canvas.tobytes())
            
            blank_canvas = self._create_blank_canvas()
            for _ in range(self.extra_frames):
                ffmpeg_proc.stdin.write(blank_canvas.tobytes())
        
        ffmpeg_proc.stdin.close()
        ffmpeg_proc.wait()
        
        print(f"视频生成完成！输出路径: {os.path.abspath(self.output_video)}")

def main():
    visualizer = TrackVisualizer(
        redis_conf={"host": "localhost", "port": 6379, "db": 1},
        redis_key="backup",
        output_video=os.path.join("runs", "track", "track_visualization.mp4"),
        canvas_size=(1920, 1080),
        draw_fps=10,
        video_fps=60,
        extra_frames_after_end=20
    )
    
    visualizer.generate_video()

if __name__ == "__main__":
    main()