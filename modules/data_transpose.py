import numpy as np
import matplotlib.pyplot as plt
from modules.data_transpose_util import transpose_data
from modules.dxsigma import _d1sigma, _d2sigma

def d1sigma_transpose(data:list, max_length=100):
    '''
    将原始数据转换为一维导数格式
    '''
    lst = []
    for index in range(0, len(data)):
        feature = data[index]
        feature = np.array(feature, dtype=np.float32)

        _, norm_data_transpose = transpose_data(feature, max_length=max_length)
        
        d1sigma = _d1sigma(norm_data_transpose)[1:, :]
        lst.append(d1sigma.tolist())
        
    return np.array(lst, dtype=np.float32)

def d2sigma_transpose(data:list, max_length=100):
    '''
    将原始数据转换为二维导数格式
    '''
    lst = []
    for index in range(0, len(data)):
        feature = data[index]
        feature = np.array(feature, dtype=np.float32)

        _, norm_data_transpose = transpose_data(feature, max_length=max_length)
        
        d1sigma = _d2sigma(norm_data_transpose)[1:, :]
        lst.append(d1sigma.tolist())
        
    return np.array(lst, dtype=np.float32)