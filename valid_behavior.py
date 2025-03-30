from behavior import predict_behavior, predict_behavior_sample
from data_transpose_util import plot_img
import pandas as pd
import matplotlib.pyplot as plt
import os
import numpy as np
import random

# 批量测试数据
def sample_tracks():
    '''
    批量测试 Behavior 模型, 仅在测试中使用
    '''
    fig, ax = plt.subplots(4, 4, figsize=(8, 8))
    for ax_fla in ax.flatten():
        o, t, data = predict_behavior_sample()
        print("输出为: {}, 类型为: {}, 数据为 \n{}".format(t, o, pd.DataFrame({"数据": data}).T))
        plot_img(data, title="{}".format(t), ax=ax_fla)
    plt.tight_layout()
    plt.savefig(os.path.join('images', 'samples.jpg'))
    plt.show()
    
def track_from_data(data):
    '''
    对数据进行计算并可视化, 仅在测试中使用
    '''
    o, t = predict_behavior(data)
    print("输出为: {}, 类型为: {}".format(t, o))
    fig, ax = plt.subplots(1, 1, figsize=(4, 4))
    plot_img(data, title="{}".format(t), ax=ax)
    plt.show()
    
if __name__ == '__main__':
    # 抽样一个数据进行测试
    data = None
    with open(os.path.join('source', 'points.txt'), 'r') as f:
        data = np.array(random.choice([eval(i.split(':')[1]) for i in f.readlines()]), dtype=np.float32)
        f.close()
        
    track_from_data(data)