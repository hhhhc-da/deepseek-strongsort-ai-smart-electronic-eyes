import numpy as np

# 计算二阶梯度
def _d2sigma(data):
    '''
    计算二阶梯度函数
    '''
    d2sigma = np.zeros_like(data)
    # (B, F) 处理所有维度数据, 批次层操作
    d2sigma[1:-1, :] = (data[2:, :] - 2 * data[1:-1, :] + data[:-2, :])
    return d2sigma

# 计算一阶梯度
def _d1sigma(data):
    '''
    计算一阶梯度函数
    '''
    d1sigma = np.zeros_like(data)
    # (B, F) 处理所有维度数据, 批次层操作
    d1sigma[1:, :] = data[1:, :] - data[:-1, :]
    return d1sigma