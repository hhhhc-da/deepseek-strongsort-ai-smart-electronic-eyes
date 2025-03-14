import torch
from torch import nn
from data_transpose import d1sigma_transpose
from data_sample import data_sample
import os
import torch

# LSTM 行为预测器
class BehaviorModule(nn.Module):
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
        self.lstm = nn.LSTM(input_size=input_size, hidden_size=hidden_size, num_layers=num_layers, batch_first=True, bidirectional=False)
        self.fc1 = nn.Linear(in_features=hidden_size, out_features=hidden_size)
        self.fc2 = nn.Linear(in_features=hidden_size, out_features=num_classes)
        
        self.activation = nn.ReLU6()
        self.softmax = nn.Softmax(dim=1)
        self.drop = nn.Dropout1d(0.3)
        
    def forward(self, x):
        x = self.layer_norm(x)
        o, (h, c) = self.lstm(x)
        x = self.drop(x)
        
        x = self.fc1(o[:, -1, :])
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
                     model_name=os.path.join('models', 'behavior_model_d1sigma.pth'),
                     device=torch.device('cuda' if torch.cuda.is_available() else 'cpu')):
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

def predict_behavior_sample(model_name=os.path.join('models', 'behavior_model_d1sigma.pth'),
                          device=torch.device('cuda' if torch.cuda.is_available() else 'cpu')):
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