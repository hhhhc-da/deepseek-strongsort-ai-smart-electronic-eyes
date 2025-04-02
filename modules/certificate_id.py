import numpy as np
import uuid

# 存储已生成的随机数
class certificate_id_genarator():
    '''
    随机序列 ID 生成器, 使用 uuid + numpy 批量生成
    '''
    def __init__(self, length=100, num_min=0, num_max=80):
        '''
        初始化随机数生成器
        '''
        self.length = length
        self.num_min = num_min
        self.num_max = num_max
        
        self.storage = np.random.randint(self.num_min, self.num_max, size=(self.length,))
        self.idx = 0

    def __getitem__(self, idx):
        '''
        获取对应位置数据
        '''
        return self.storage[idx]

    def __call__(self):
        '''
        直接函数调用获取 ID
        '''
        # 两次检查
        if self.idx > self.length:
            self.storage = np.random.randint(self.num_min, self.num_max, size=(self.length,))
            self.idx = 0
            
        num = self.storage[self.idx]
        self.idx += 1
        
        if self.idx > self.length:
            self.storage = np.random.randint(self.num_min, self.num_max, size=(self.length,))
            self.idx = 0
            
        return str(uuid.uuid3(uuid.NAMESPACE_DNS, str(num)))
    
    def get_id(self):
        '''
        使用函数获取 ID
        '''
        # 两次检查
        if self.idx > self.length:
            self.storage = np.random.randn((self.length,))
            self.idx = 0
            
        num = self.storage[self.idx]
        self.idx += 1
        
        if self.idx > self.length:
            self.storage = np.random.randn((self.length,))
            self.idx = 0
            
        return str(uuid.uuid3(uuid.NAMESPACE_DNS, str(num)))

