import torch
from torch import nn
from modules.data_transpose import d1sigma_transpose, d2sigma_transpose
from modules.data_sample import data_sample
import os
import torch
import pandas as pd

# LSTM 行为预测器
class BehaviorModule(nn.Module):
    '''
    行为分类模型, 训练准确率才到 71%, 直接外部调用 predict 函数即可
    '''
    def __init__(self, input_size=2, hidden_size=64, num_layers=2, num_classes=5):
        super(BehaviorModule, self).__init__()
        
        self.dict_action = {
            "stop": 0,
            "left": 1,
            "straight": 2,
            "right": 3,
            "uturn": 4
        }
        self.r_dict_action = {v: k for k, v in self.dict_action.items()}
        
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        self.layer_norm = nn.LayerNorm(input_size)
        self.lstm = nn.LSTM(input_size=input_size, hidden_size=hidden_size, num_layers=num_layers, batch_first=True, bidirectional=False, dropout=0.1)
        self.fc1 = nn.Linear(in_features=hidden_size, out_features=hidden_size)
        self.fcp = nn.ModuleList([nn.Linear(in_features=hidden_size, out_features=hidden_size) for _ in range(4)])
        self.fc2 = nn.Linear(in_features=hidden_size, out_features=num_classes)
        
        self.activation = nn.SiLU()
        self.softmax = nn.Softmax(dim=1)
        self.drop = nn.Dropout1d(0.1)
        
    def forward(self, x):
        x = self.layer_norm(x)
        o, (h, c) = self.lstm(x)
        x = o[:, -1, :]
        x = self.drop(x)
        
        x = self.fc1(o[:, -1, :])
        x = self.activation(x)
        
        for linear_layer in self.fcp:
            x = linear_layer(x)
            x = self.activation(x)
        
        x = self.fc2(x)
        return self.softmax(x)
    
    @torch.no_grad()
    def predict(self, x):
        return torch.argmax(self.forward(x), dim=1)

    def save(self, path):
        torch.save(self.state_dict(), path)
        return self
    
    def load(self, path):
        self.load_state_dict(torch.load(path, weights_only=True))
        return self
    
    def predict_data(self, data):
        data = torch.tensor(data, dtype=torch.float32)
        return self.r_dict_action[self.predict(data).item()]
    

# 开始我们的预测模型, data.shape = [B, 2]
def predict_behavior(data,
                     model_name=os.path.join('models', 'behavior_model.pth'),
                     device=torch.device('cuda' if torch.cuda.is_available() else 'cpu')):
    '''
    模型预测示例, 用于推理一个数据, 形状为 [B, 2]
    '''
    dict_action = {
        "stop": 0,
        "left": 1,
        "straight": 2,
        "right": 3,
        "uturn": 4
    }
    r_dict_action = {v: k for k, v in dict_action.items()}
        
    nanokaBehaviorModule = BehaviorModule(input_size=2, hidden_size=64, num_layers=2, num_classes=5)
    nanokaBehaviorModule.load(model_name).to(device)
    
    format_data = d1sigma_transpose([data], max_length=101)
    output = nanokaBehaviorModule.predict(torch.tensor(format_data, dtype=torch.float32).to(device)).cpu().numpy()[0]
    return output, r_dict_action[output]

# 开始我们的预测模型, data.shape = [B, (ANY > 0), 2]
def predict_behavior_parallel(data,
                     model_name=os.path.abspath(os.path.join('models', 'behavior_model.pth')),
                     device=torch.device('cuda' if torch.cuda.is_available() else 'cpu'),
                     switch_mode="d2sigma"):
    '''
    用于推理多个不规则数据, 形状为 [B, (ANY > 0), 2]
    '''
    dict_action = {
        "stop": 0,
        "left": 1,
        "straight": 2,
        "right": 3,
        "uturn": 4
    }
    r_dict_action = {v: k for k, v in dict_action.items()}
        
    nanokaBehaviorModule = BehaviorModule(input_size=2, hidden_size=64, num_layers=2, num_classes=5)
    nanokaBehaviorModule.load(model_name).to(device)
    
    result = []
    for i in range(len(data)):
        format_data = None
        if switch_mode == 'd1sigma':
            format_data = d1sigma_transpose([data[i]], max_length=101)
        elif switch_mode == 'd2sigma':
            format_data = d2sigma_transpose([data[i]], max_length=102)
        else:
            print("不支持的 switch_mode")
        output = nanokaBehaviorModule.predict(torch.tensor(format_data, dtype=torch.float32).to(device)).cpu().numpy()[0]
        result.append([output, r_dict_action[output]])
        
    return result

def predict_behavior_sample(model_name=os.path.join('models', 'behavior_model_d1sigma.pth'),
                          device=torch.device('cuda' if torch.cuda.is_available() else 'cpu')):
    '''
    批量测试函数, 除了 DEBUG 一般不会用到
    '''
    dict_action = {
        "stop": 0,
        "left": 1,
        "straight": 2,
        "right": 3,
        "uturn": 4
    }
    r_dict_action = {v: k for k, v in dict_action.items()}
        
    nanokaBehaviorModule = BehaviorModule(input_size=2, hidden_size=64, num_layers=2, num_classes=5)
    nanokaBehaviorModule.load(model_name).to(device)
    
    data = data_sample(os.path.join('source', 'points.txt'))
    format_data = d1sigma_transpose([data], max_length=101)
    output = nanokaBehaviorModule.predict(torch.tensor(format_data, dtype=torch.float32).to(device)).cpu().numpy()[0]
    
    return output, r_dict_action[output], data