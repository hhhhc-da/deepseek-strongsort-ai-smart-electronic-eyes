import os
import sys
import argparse
import cv2
import numpy as np
import torch
import pandas as pd
import matplotlib.pyplot as plt

plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

ROOT = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ROOT)

from lib.config import Config

IMAGENET_MEAN = np.array([0.485, 0.456, 0.406])
IMAGENET_STD = np.array([0.229, 0.224, 0.225])


def preprocess_image(img, img_size, normalize):
    '''
    图像前置处理流程
    '''
    h, w = img_size
    img = cv2.resize(img, (w, h))
    img = img.astype(np.float32) / 255.0
    if normalize:
        img = (img - IMAGENET_MEAN) / IMAGENET_STD
    tensor = torch.from_numpy(img).permute(2, 0, 1).unsqueeze(0).float()
    return tensor


# 解析车道线并绘制可视化
def plot_lanes(img, lanes_data):
    """
    绘制车道线信息, 只有可视化时会使用, 其他时候较少
    """
    # 仅处理一个图片
    if len(lanes_data) == 1 and isinstance(lanes_data[0], list):
        lanes_data = lanes_data[0]
    
    orig_h, orig_w = img.shape[:2]

    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    plt.figure(figsize=(12, 8))
    plt.imshow(img_rgb)
    plt.axis('off')
    plt.title('PolyLaneNet 车道检测结果', fontsize=16)

    colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF']
    for idx, lane in enumerate(lanes_data):
        # 过滤无效车道
        if len(lane) < 7 or all(v == 0 for v in lane):
            continue
        conf, lower, upper, *coeffs = lane

        conf = float(conf)
        if conf < 1e-5:
            continue
        if len(coeffs) < 4:
            continue
        a3, a2, a1, a0 = coeffs[:4]

        y_norm = np.linspace(float(lower), float(upper), num=100)
        y_abs = y_norm * orig_h

        # 计算x坐标
        x_norm = np.polyval([a3, a2, a1, a0], y_norm)
        x_abs = x_norm * orig_w

        mask = (x_abs >= 0) & (x_abs < orig_w) & (y_abs >= 0) & (y_abs < orig_h)
        x_abs = x_abs[mask]
        y_abs = y_abs[mask]
        if len(x_abs) < 2:
            continue

        plt.plot(x_abs, y_abs, color=colors[idx % len(colors)], linewidth=4, 
                 label=f'车道{idx+1} (置信度:{conf:.4f})')

    if len(plt.gca().get_lines()) > 0:
        plt.legend(loc='lower right', fontsize=12)
    plt.tight_layout()
    plt.show()

# 用 pandas 整理多项式结果
def print_lane_polynomial(lanes_data):
    """
    格式化输出车道线多项式信息
    """
    # 一次只处理一张图片, 不考虑 parallel
    if len(lanes_data) == 1 and isinstance(lanes_data[0], list):
        lanes_data = lanes_data[0]
    
    lane_list = []
    for idx, lane in enumerate(lanes_data):
        # 过滤无效车道
        if len(lane) < 7 or all(v == 0 for v in lane):
            continue

        try:
            conf = float(lane[0])
            lower = float(lane[1])
            upper = float(lane[2])
            coeffs = [float(c) for c in lane[3:7]]  # 三次多项式
        except (ValueError, IndexError):
            continue

        if conf < 1e-5:
            continue

        # 多项式：x = a3*y³ + a2*y² + a1*y + a0
        a3, a2, a1, a0 = coeffs
        lane_list.append({
            'idx': idx+1,
            'conf': round(conf, 6),
            'y_lower': round(lower, 6),
            'y_upper': round(upper, 6),
            'a3': round(a3, 6),
            'a2': round(a2, 6),
            'a1': round(a1, 6),
            'a0': round(a0, 6),
            'method': f'x = {a3:.4f}y³ + {a2:.4f}y² + {a1:.4f}y + {a0:.4f}'
        })

    if lane_list:
        df = pd.DataFrame(lane_list)
        pd.set_option('display.max_columns', None)
        pd.set_option('display.width', 200)
        pd.set_option('display.precision', 6)
        print(df)
    else:
        print("未检测到有效车道线")


def main():
    parser = argparse.ArgumentParser(description="PolyLaneNet 推理测试文件")
    parser.add_argument("--cfg", type=str, default=os.path.join(ROOT, 'cfgs', 'tusimple_fulltrain.yaml'), help="模型装载文件")
    parser.add_argument("--weights", type=str, default=r'E:\pandownload1\ML\Police\Project\models\model_tusimple_fulltrain.pt', help="保存的模型文件")
    parser.add_argument("--image", type=str, default=r'E:\pandownload1\ML\Police\Project\source\lane.jpg', help="One or more image files to process")
    args = parser.parse_args()

    cfg = Config(args.cfg)
    device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
    model = cfg.get_model().to(device)

    checkpoint = torch.load(args.weights, map_location=device)
    if 'model' in checkpoint:
        model.load_state_dict(checkpoint['model'])
    else:
        model.load_state_dict(checkpoint)
    model.eval()

    ds_cfg = cfg.config['datasets']['test']['parameters']
    img_size = tuple(ds_cfg.get('img_size', [720, 1280]))
    normalize = ds_cfg.get('normalize', False)

    test_params = cfg.get_test_parameters()

    results = None
    with torch.no_grad():
        img_original = cv2.imread(args.image)
        if img_original is None:
            print(f"Warning: failed to load {args.image}")
            raise RuntimeError(f"没有找到图片 {args.image}")

        inp = preprocess_image(img_original.copy(), img_size, normalize).to(device)
        outputs = model(inp)
        decoded = model.decode(outputs, None, **test_params)
        lane_outputs, extra_outputs = decoded
        lane_data = lane_outputs.cpu().numpy().tolist()
        results = lane_data

        print_lane_polynomial(lane_data)
        plot_lanes(img_original, lane_data)

    print(results)

if __name__ == "__main__":
    main()