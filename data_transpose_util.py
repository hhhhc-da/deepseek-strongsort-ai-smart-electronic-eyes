import numpy as np
import matplotlib.pyplot as plt
import cv2

# 取二十份数据, 将前几个的数据拿出来作为基本值
def calculate_angle(norm_data):
    # 采样数据
    sl = len(norm_data) // 20
    start_pos, range_length = 2, 2
    # print("步长 sl: {}".format(sl))

    # 先采样数据
    sample_data = None
    if sl > 0:
        sample_data = norm_data[::sl][start_pos:start_pos+range_length]
    else:
        sample_data = norm_data[start_pos:start_pos+range_length]
    # print("取出来的数据为: tan(a)|sample = {}".format(sample_data))
    
    # 梯度 k = -△y / △x 
    sd = -sample_data[:, 1] / np.array([1e-15 if i == 0. else i for i in sample_data[:, 0]], dtype=np.float32)

    # 采样方式使用 y = 2^(3.2-x)/Z 计算
    Z = np.sum([2**(3.2-x) for x in range(range_length)])
    weights = np.array([2**(3.2-x)/Z for x in range(range_length)], dtype=np.float32)
    # print('计算出的权重为: w = {}'.format(weights))
             
    # 我们单纯的计算转角, 逆时针为正向
    angles = 0
    if np.sum(weights * sample_data[:, 0]) >= 0 and np.sum(weights * sample_data[:, 1]) <= 0:
        angles = np.arctan(sd)
    elif np.sum(weights * sample_data[:, 0]) < 0:
        angles = np.pi + np.arctan(sd)
    else:
        angles = 2*np.pi + np.arctan(sd)
    # print("计算出的转角为: a|sample = {}".format(angles*180/np.pi))
    # print("最终加权角度为: angle = {}".format((np.sum(weights * angles))*180/np.pi))

    return np.sum(weights * angles)

# 计算旋转角矩阵, 默认向左旋转 (为什么是左转，因为坐标计算是按照正常的 xOy 平面计算的, 但是计算机内的存储方式有 y 轴反转, 所以向左旋转就是顺时针旋转)
def calculate_spin(norm_data):
    angle = calculate_angle(norm_data)
    l = [[np.cos(angle), -np.sin(angle)], [np.sin(angle), np.cos(angle)]]
    return np.array(l, dtype=np.float32)

# 数据构建和重整
def expand_data(data, max_length=50):
    r = []
    prb = len(data) / max_length # 每一条信息的占比

    if len(data) == max_length:
        r = data
    else:
        # 溢出之后按照比例进行采样
        if len(data) > max_length:
            counter = 0
            for i in range(max_length):
                r.append(data[int(i*prb)])
        # 如果没有达到还需要进行插值
        else:
            counter = -1
            for i in range(max_length):
                if int(i*prb) == counter:
                    # 插入下一条和上一条的中值
                    if counter + 1 != len(data):
                        r.append([(data[counter+1][j] + r[-1][j])/2 for j in range(2)])
                    else:
                        r.append([(data[counter][j] + r[-1][j])/2 for j in range(2)])
                else:
                    counter = int(i*prb)
                    r.append(data[counter])
    return np.array(r, dtype=np.float32)

def transpose_data(origin:np.ndarray, max_length=100):
    mask = np.stack([origin[0] for _ in range(len(origin))])
    norm_data = (origin - mask)[1:, :]
    # print("norm_data\n{}\n".format(pd.DataFrame(norm_data)))

    # 清洗有用的数据
    for i in range(len(norm_data)):
        if not (abs(norm_data[i, 0]) < 1e-4 and abs(norm_data[i, 1]) < 1e-4):
            norm_data = norm_data[i:, :]
            break

    # 补齐数据
    norm_data = expand_data(norm_data, max_length=max_length)
    # print("Ex-Feature: {}".format(feature.shape))

    # 左转这么多角度
    norm_data_transpose = norm_data @ calculate_spin(norm_data).T
    return norm_data, norm_data_transpose

def plot_img(feature, labels=None, ax=None, title="Visualization"):
    dict_action = {
        "stop": 0,
        "left": 1,
        "straight": 2,
        "right": 3,
        "uturn": 4
    }
    r_dict_action = {v: k for k, v in dict_action.items()}

    image = np.ones((512, 512, 3), dtype=np.uint8) * 255
    # feature = feature.tolist()
    # labels = labels.tolist()
    
    if labels is not None:
        for i in range(len(feature) - 1):
            (x1, y1), (x2, y2), label = feature[i], feature[i+1], labels[i]
            x1, y1, x2, y2 = int(x1*512), int(y1*512), int(x2*512), int(y2*512)
            
            p = 255 * i // (len(feature) - 1)
            cv2.arrowedLine(image, (x1, y1), (x2, y2), (p, 0, 255 - p), thickness=2, tipLength=0.2)
            
        cv2.putText(image, f"Action: " + r_dict_action[label], (30, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 5)
    else:
        for i in range(len(feature) - 1):
            (x1, y1), (x2, y2) = feature[i], feature[i+1]
            x1, y1, x2, y2 = int(x1*512), int(y1*512), int(x2*512), int(y2*512)
            
            p = 255 * i // (len(feature) - 1)
            cv2.arrowedLine(image, (x1, y1), (x2, y2), (p, 0, 255 - p), thickness=2, tipLength=0.2)
    
    if ax is None:
        plt.figure()
        plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        plt.set_title(title)
        plt.show()
    else:
        ax.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        ax.set_title(title)

def plot_arraw(feature, labels=None, ax=None, title="Visualization"):
    dict_action = {
        "stop": 0,
        "left": 1,
        "straight": 2,
        "right": 3,
        "uturn": 4
    }
    r_dict_action = {v: k for k, v in dict_action.items()}

    img_size = 512
    image = np.ones((img_size, img_size, 3), dtype=np.uint8) * 255
    # feature = feature.tolist()
    # labels = labels.tolist()
    
    if labels is not None:
        for i in range(len(feature)):
            (x1, y1), label = feature[i], labels[i]
            x1, y1, x2, y2 = int(img_size // 2 - 1), int(img_size // 2 - 1), int(img_size // 2 - 1 + x1 * img_size // 2), int(img_size // 2 - 1 + y1 * img_size // 2)
            
            p = min(255, 255 * i // (len(feature)))
            cv2.arrowedLine(image, (x1, y1), (x2, y2), (p, 0, 255 - p), thickness=2, tipLength=0)
            
        cv2.putText(image, f"Action: " + r_dict_action[label], (30, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 5)
    else:
        for i in range(len(feature)):
            (x1, y1) = feature[i]
            x1, y1, x2, y2 = int(img_size // 2 - 1), int(img_size // 2 - 1), int(img_size // 2 - 1 + x1 * img_size // 2), int(img_size // 2 - 1 + y1 * img_size // 2)
            
            p = min(255, 255 * i // (len(feature)))
            cv2.arrowedLine(image, (x1, y1), (x2, y2), (p, 0, 255 - p), thickness=2, tipLength=0)

    if ax is None:
        plt.figure()
        plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        plt.set_title(title)
        plt.show()
    else:
        ax.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
        ax.set_title(title)
        
