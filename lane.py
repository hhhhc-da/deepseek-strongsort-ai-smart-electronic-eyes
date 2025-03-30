import numpy as np
import cv2
import os
import pandas as pd
import matplotlib.pyplot as plt

def transpose_px_to_string(i, y='y'):
    '''
    将 [a, b, c] 转换为多项式字符串 y = ax^2 + bx + c 的形式, 规范化输出
    '''
    return '{} = {}{}{}{}{}'.format(y,'{:.2f}'.format(i[0]) if i[0] not in [0, 1] else "", "x^2 + " if i[0] != 0 else "", 
                                    '{:.2f}'.format(i[1]) if i[1] not in [0, 1] else "", "x + "if i[1] != 0 else "",
                                    '{:.2f}'.format(i[2]) if i[2] != 0 else (0 if i.all() == 0 else ""))

def extract_ranges(arr):
    '''
    基于梯度的检测, 本质就是切割出转点
    '''
    indices = np.where(arr == 255)[0]
    if len(indices) == 0:
        return []
    
    diffs = np.diff(indices)
    splits = np.where(diffs != 1)[0] + 1
    groups = np.split(indices, splits)
    ranges = [ (group[0], group[-1]) for group in groups if len(group) > 0 ]
    return ranges

def environment_explore(cache=os.path.join(".cache", "lane.jpg"), txt_path=os.path.join(".cache", "lane.txt"), names={}):
    '''
    环境感知函数, 用于获取环境内的基本信息, 实现异步定位与地图构建
    '''
    # 读取图片进行基本的属性获取
    img = cv2.imread(cache)
    img_w, img_h = img.shape[1], img.shape[0]
    print(f"\n图片大小为: {img_w} x {img_h}\n")
            
    pf = {}
    # 读取文本内容
    with open(txt_path, "r") as f:
        lines = f.readlines()
        for i, line in enumerate(lines):
            cls, x, y, w, h, conf = line.strip().split(" ")
            cls = int(cls)
            x, y, w, h = float(x), float(y), float(w), float(h)
            conf = float(conf)
            
            pf[i] = [names[cls], [x, y, w, h], conf]
        f.close()
        
    pf = pd.DataFrame(pf, index=["class", "box", "conf"]).T
    print(pf, "\n")
    
    # 车道环境初始化
    clpf = pf[pf['class'] == 'cross-line']
    lapf = pf[pf['class'] == 'left-straight']
    spf = pf[pf['class'] == 'straight']
    
    sample_y = (lapf['box'].to_numpy()[0][1] + spf['box'].to_numpy()[0][1])/2
    limg = cv2.line(img.copy(), (0, int(sample_y*img_h)), (img_w, int(sample_y*img_h)), (0, 255, 0), 2)
    
    # 采样直线选取
    fig, ax = plt.subplots(1, 3, figsize=(18, 5))
    ax[0].imshow(cv2.cvtColor(limg, cv2.COLOR_BGR2RGB))
    ax[0].set_title("Lane Environment")
    
    # 将这条直线上的所有像素信息取出来
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    sample_line = gray[int(sample_y*img_h), :]
    ax[1].plot(sample_line)
    ax[1].set_title("Sample Line")
    
    # 制作掩膜和二值化
    dst = np.array(sample_line, dtype=np.uint8)
    
    for xywh in [lapf['box'].to_list()[0], spf['box'].to_list()[0]]:
        x1, x2 = int((xywh[0] - xywh[2]*1.2 / 2) * img_w), int((xywh[0] + xywh[2]*1.2 / 2) * img_w)
        dst[min(x1, x2): max(x1, x2)] = 0
    
    cv2.threshold(dst, 200, 255, cv2.THRESH_BINARY, dst)
    ax[2].plot(dst)
    ax[2].set_title("threshold Map")
    
    table = {}
    # 探测区域 (假设只有 left-straight 和 straight)
    num_ways_yolo = len(lapf) + len(spf)
    table['YOLOv7'] = [num_ways_yolo]
    
    # 一阶梯度检测
    ext = extract_ranges(dst)
    num_ways_detected = len(ext) - 1
    table['OpenCV'] = [num_ways_detected]
    pf = pd.DataFrame(table, index=['num_ways']).T
    print(pf, '\n')
    
    x0, xT = np.average(ext[0]), np.average(ext[-1])
    xD = [x2 - x1 for (x1, x2) in ext]
    
    # 我们以 YOLOv7 为准
    pred = [int(x0 + i*(xT - x0)/num_ways_yolo) for i in range(num_ways_yolo + 1)]
    print("预测车道线 HIT 区域 x =", pred)
    
    # 检测是否 HIT, 范围扩张 1.4 倍
    delta = np.average(xD) # 两边是一定 HIT 的所以不用考虑两边宽
    expand_range = [[x - 0.7 * delta, x + 0.7 * delta] for x in pred]

    xM = [(x2 + x1)/2 for (x1, x2) in ext]
    main_way_medium_x = {}
    for i, ro in enumerate(expand_range): # ro 是预测区域, 用真实线界定
        for j, x in enumerate(xM):
            if ro[0] < x < ro[1]:
                main_way_medium_x[i] = float(x)
                break
    
    # # 测试数据
    # expand_range = [[76,77],[1,1],[1, 1],[1,1],[1,1],[463, 465]]
    # main_way_medium_x = {
    #     0: 76.5, 
    #     5: 464
    # }    
        
    # 重整未 HIT 的数据
    hit_dk = list(main_way_medium_x.keys())
    for i in range(len(expand_range)):
        if i not in hit_dk:
            if i == 0 or i == len(expand_range) - 1:
                raise RuntimeError("车道线边缘未 HIT") # 按说可以直接补充进去...

            s = [j for j in hit_dk if j < i][-1]
            e = [j for j in hit_dk if j > i][0]
            
            # 线性扩充
            main_way_medium_x[i] = main_way_medium_x[s] + (main_way_medium_x[e] - main_way_medium_x[s])/(e-s)*(i-s)
            
    # 输出车道线信息
    lanes = [[0, 0, x] for x in [main_way_medium_x[i] for i in range(len(main_way_medium_x))]]
    
    pf = pd.DataFrame({
        'px_stop_line': [transpose_px_to_string(lane, 'x') for lane in lanes]
    })
    print(pf)
    print(f"共归类出 {len(main_way_medium_x)} 条车道线\n")
    
    plt.tight_layout()
    plt.savefig(os.path.join(".cache", "sample_y.jpg"))
    plt.close() 
    
    # 开始检测车道类型
    x2t = {}
    for i, x_ls in enumerate(lapf['box'].to_numpy()):
        x2t[x_ls[0] * img_w] = 'left-straight'
    for i, x_s in enumerate(spf['box'].to_numpy()):
        x2t[x_s[0] * img_w] = 'straight'
        
    # 解析所有斑马线的 y 值
    cl_ranges = []
    for cl_info in clpf['box'].to_numpy():
        y_range = [cl_info[1] - cl_info[3]/2, cl_info[1] + cl_info[3]/2]
        cl_ranges.append(y_range)
    cl_ranges = np.array(cl_ranges)
    
    # 由于我们的车流是从下往上的, 所以我们选择下面的车道线, 直接选最高的就可以了
    y_stop_line = np.nanmax(cl_ranges)
    px_stop_line = [[0, 0, int(y_stop_line * img_h)], [0, 0, img_h]] # 多项式 y = c 不需要其他项
    
    pf = pd.DataFrame({
        'px_stop_line': [transpose_px_to_string(i, y='y') for i in [[0, 0, np.nanmax(cl_ranges)*img_h], [0, 0, np.nanmin(cl_ranges)*img_h]]]
    })
    print(pf)
    print('停止线预测位置在 ' + transpose_px_to_string(px_stop_line[0], y='y') + '\n')
    
    # 开始对车道线内的数据进行分类
    x_labels = list(x2t.keys())
    
    # 如果 label 数等于车道线数减一, 并且每个范围内都有至少一个 x_label 满足, 那么我们就说它是 1-1 对应的
    if len(x_labels) == len(lanes) - 1:
        # 左边界
        for i in range(len(x_labels)):
            x1, x2 = lanes[i][2], lanes[i+1][2]
            
            cnt = 0
            for x_label in x_labels:
                if x1 < x_label < x2:
                    cnt += 1
            if cnt == 0:
                raise RuntimeError("(CNT ZERO) 车道线与地标不是 1-1 对应的")
    else:
        raise RuntimeError("(len(x_labels) != len(lanes)) 车道线与地标不是 1-1 对应的")
    
    # 我们确认过地标与一块范围 1-1 对应后为对应范围确定类型, 我们从左到右开始确认信息
    label_info = [] 
    for i in range(len(x_labels)):
        x1, x2 = lanes[i][2], lanes[i+1][2]
        
        for x_label in x_labels:
            if x1 < x_label < x2:
                label_info.append([[lanes[i], lanes[i+1]], x2t[x_label]])
    if len(label_info) != len(x_labels):
        raise RuntimeError("(len(label_info) != len(x_labels)) 车道线与地标不是 1-1 对应的")
    
    # 返回环境探索后的信息
    return {
        "cross": px_stop_line,
        "im_wh": [img_w, img_h],
        "lanes": label_info,
    } 

def lane_mask_create(img_wh=(640, 720), px_stop_line=[[]], px_lane_info=[[]], save_path=os.path.join(".cache", "mask_lane.jpg")):
    '''
    用于生成车道线类型掩膜, 用于标识区域
    '''
    img_h, img_w = img_wh
    colors = {}
    
    # 制作停止线掩膜 (总车道掩膜)
    mask_stop = np.zeros((img_w, img_h, 3), dtype=np.uint8)

    x = np.arange(0, img_h, 1)
    # 直接用 Numpy 矩阵计算散点, 并行处理多条线
    data = np.array(px_stop_line) @ np.c_[x**2, x, np.ones(len(x))].T

    colors['stop_line'] = np.random.randint(0, 255, size=(3,))
    for i in range(img_h):
        mask_stop[max(0, int(data[0, i])):min(img_w, int(data[1, i])), i, :] = colors['stop_line']

    # 制作车道掩膜 (细分车道掩膜)
    x = np.arange(0, img_w, 1)
    mask_lane = [np.zeros((img_w, img_h, 3), dtype=np.uint8) for _ in range(len(px_lane_info))]
    
    labels = set([i[1] for i in px_lane_info])
    for l in labels:
        colors[l] = np.random.randint(0, 255, size=(3,))
        
    for step, (lanes, label) in enumerate(px_lane_info):
        # 直接用 Numpy 矩阵计算散点, 并行处理多条线
        data = np.array(lanes) @ np.c_[x**2, x, np.ones(len(x))].T

        for i in range(img_w):
            mask_lane[step][i, max(0, int(data[0, i])): min(img_h, int(data[1, i])), :] = colors[label]

    # 将单独的车道线切割进行拼合, 对前面进行过滤
    mask = np.zeros((img_w, img_h, 3), dtype=np.uint8)
    for part in mask_lane:
        mask += part

    mask = np.where(mask_stop == 0, 0, mask)

    # 保存车道图片信息
    fig, ax = plt.subplots(2, 2, figsize=(5, 5))
    
    ax[0, 0].imshow(mask_stop)
    ax[0, 1].imshow(mask_lane[0])
    ax[1, 0].imshow(mask_lane[1])
    ax[1, 1].imshow(mask)
    
    plt.tight_layout()
    plt.savefig(save_path)
    
    print("车道线掩码已保存至", save_path, '\n')
    plt.close()
    
    return mask, colors

if __name__ == '__main__':
    # y = 495.0
    px_stop_line = [[0.01, -6.4, 1200], [0, 0, 640]]
    # x = 0.01 y^2 到 x = y + 2
    px_lane_info = [[[[-0.0001, 0, 76.5], [0, 0, 270.0]], 'left-straight'], [[[0, 0, 270.0], [0.0002, 0, 464.0]], 'straight']]

    # 开始分析车道线多项式
    lane_mask_create(px_stop_line=px_stop_line, px_lane_info=px_lane_info, save_path=os.path.join("images", "mask_lane.jpg"))