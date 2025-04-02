import numpy as np
import os
import pandas as pd

def data_sample(file_path):
    '''
    随机取出一行轨迹数据, 前期用于验证 Behavior 模型质量
    '''
    data = None
    with open(file_path, 'r') as f:
        data = f.readlines()
        f.close()
        
    rd = np.random.randint(0, len(data)-1) # 这里是为了防止溢出
    return eval(data[rd].split(':')[1])

if __name__ == '__main__':
    data = data_sample(os.path.join('source', 'points.txt'))
    print(pd.DataFrame({"points": data}))