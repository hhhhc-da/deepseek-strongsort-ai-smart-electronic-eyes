import traceback
import joblib
import os
from sqlalchemy import create_engine
import pandas as pd
import numpy as np
import cv2
import matplotlib.pyplot as plt
from multiprocessing import Pool
from transformers import BertTokenizer, BertConfig, BertForSequenceClassification
import subprocess
import requests
from io import BytesIO
import cv2
import numpy as np
import pandas as pd
import io
from PIL import Image
from scipy.signal import find_peaks
import math
from scipy import stats
from typing import Literal
import torch
import torch.nn as nn
from torchvision import models, transforms
from torchvision.models.inception import Inception_V3_Weights
import argparse

class EarlyStop():
    '''
    提前退出控制类, 用于描述是否有下降
    '''
    def __init__(self,
        bare_rate=20,
        direction:Literal['up', 'down']='down',
        method:Literal['rel', 'abs']='rel'
    ):
        '''
        初始化容忍率和迭代方向
        '''
        self.bare_rate = 20 
        self.direction = direction
        self.method = method
        self.counter = 0

        if direction == 'down':
            self.loss = math.inf
            self.best_loss = math.inf
        elif direction == 'up':
            self.loss = -math.inf
            self.best_loss = -math.inf
        else:
            raise ValueError(f"direction = {direction} 错误")

    def update(self, loss: float):
        '''
        更新迭代, 并且进行判断
        '''
        if self.method == 'rel':
            # 相对变化迭代器, 不用全局最优下降
            if loss < self.loss:
                self.loss = loss
                self.best_loss = loss
                self.counter = 0 # 更新并清除计数器
                return True, 0
            else:
                self.counter += 1
                if self.counter >= self.bare_rate:
                    return False, 2
                return True, 1
                
        elif self.method == 'abs':
            # 绝对变化迭代器, 需要全局最优下降才可以
            if loss < self.best_loss:
                self.best_loss = loss
                self.counter = 0
                return True, 0
            else:
                self.counter += 1
                if self.counter >= self.bare_rate:
                    return False, 2
                return True, 1

class LastClassifier(nn.Module):
    '''
    Bert 最后一层的自定义分类器, 我们最后要用这个进行分类
    '''
    def __init__(self, hidden_dim=768, output_dim=2):
        super().__init__()
        self.fn1 = nn.Linear(768, hidden_dim)
        self.ac1 = nn.Hardtanh()
        self.fn2 = nn.Linear(hidden_dim, output_dim)

    def forward(self, x):
        '''
        映射到非线性算子空间
        但不使用 Dropout 增大随机性（数据太少）
        '''
        out = self.fn1(x)
        out = self.ac1(out)
        out = self.fn2(out)
        return out

class MacroDefinination():
    '''
    全局宏定义结构体, 存储所有的全局宏定义
    不然 OutLine 太难看, 也不方便管理
    '''
    STOP = 0
    LEFT = 1
    STRAIGHT = 2
    RIGHT = 3
    U_TURN = 4

    ERROR = -2
    NODET = -1
    COLOR_RED = 0
    COLOR_YELLOW = 1
    COLOR_GREEN = 2

class DataTransformer():
    '''
    数据清洗器, 用于便捷的输出转换后的数据信息
    '''
    @staticmethod
    def bert_transform(text, tokenizer, max_len=32):
        '''
        将文字信息转换为 bert 能处理的格式
        '''
        inputs = tokenizer(
            text,
            add_special_tokens=True,
            max_length=max_len,
            padding='max_length',
            return_token_type_ids=True,
            truncation=True,
            return_tensors=None
        )
        input_ids = inputs['input_ids']
        attention_mask = inputs['attention_mask']
        token_type_ids = inputs['token_type_ids']

        return {
            'input_text': text,
            'input_ids': torch.tensor(input_ids, dtype=torch.long),
            'attention_mask': torch.tensor(attention_mask, dtype=torch.long),
            'token_type_ids': torch.tensor(token_type_ids, dtype=torch.long),
        }

    @staticmethod
    def behavior_dataset_create(file_path):
        '''
        随机取出一行轨迹数据, 前期用于验证 Behavior 模型质量
        '''
        data = None
        with open(file_path, 'r') as f:
            data = f.readlines()
            f.close()
            
        rd = np.random.randint(0, len(data)-1)
        return eval(data[rd].split(':')[1])
    
    @staticmethod
    def _d1sigma(data):
        '''
        计算一阶梯度函数
        最后一行置零, 因为无法计算一阶梯度
        '''
        d1sigma = np.zeros_like(data)
        # (B, F) 处理所有维度数据, 批次层操作
        d1sigma[:-1, :] = data[1:, :] - data[:-1, :]
        return d1sigma

    @staticmethod
    def _d2sigma(data):
        '''
        计算二阶梯度函数
        最后两行置零, 因为无法计算二阶梯度
        '''
        d2sigma = np.zeros_like(data)
        # (B, F) 处理所有维度数据, 批次层操作
        d2sigma[:-2, :] = (data[2:, :] - 2 * data[1:-1, :] + data[:-2, :])
        return d2sigma

    @staticmethod
    def calculate_angle(norm_data):
        '''
        用于计算旋转角, 输出弧度制数据
        取二十份数据, 将前几个的数据拿出来作为基本值
        '''
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

    @staticmethod
    def calculate_spin(norm_data):
        '''
        计算旋转角矩阵, 默认向左旋转
        左转：坐标计算是按照正常的 xOy 平面计算的, 但是计算机内的存储方式有 y 轴反转, 所以向左旋转就是顺时针旋转
        '''
        angle = DataTransformer.calculate_angle(norm_data)
        l = [[np.cos(angle), -np.sin(angle)], [np.sin(angle), np.cos(angle)]]
        return np.array(l, dtype=np.float32)

    @staticmethod
    def expand_data(data, max_length=50):
        '''
        进行数据截断和补齐, 对齐到一个时序数据包
        使用采样虽然可以修正我们需要的点, 但是破坏了其数学性质
        所以我们分两种情况进行, 如果长度比较多我们就 sample
        如果点数比较少, 那我们就在最后补零就可以了
        这很反直觉但是这完全符合数学规律, 为了更好的结果不得已做出的物理意义妥协
        '''
        r = []
        prb = len(data) / max_length # 每一条信息的占比

        if len(data) == max_length:
            r = data
        else:
            # 溢出之后按照比例进行 sample
            if len(data) > max_length:
                for i in range(max_length):
                    r.append(data[int(i*prb)])

                # 校验采样结果, 保证结果准确性
                if len(r) > max_length:
                    r = r[:max_length]
                elif len(data) < max_length:
                    while len(r) < max_length:
                        r.append(np.zeros((2,), dtype=np.float32))

            # 如果没有达到直接 pad
            else:
                r = data.tolist()
                while len(r) < max_length:
                    r.append(np.zeros((2,), dtype=np.float32))
                
        return np.array(r, dtype=np.float32)

    @staticmethod
    def transpose_data(origin:np.ndarray, max_length=100):
        '''
        对数据进行重整和旋转归一化
        '''
        mask = np.stack([origin[0] for _ in range(len(origin))])
        norm_data = (origin - mask)[1:, :]
        # print("norm_data\n{}\n".format(pd.DataFrame(norm_data)))

        # 清洗有用的数据
        for i in range(len(norm_data)):
            if not (abs(norm_data[i, 0]) < 1e-4 and abs(norm_data[i, 1]) < 1e-4):
                norm_data = norm_data[i:, :]
                break

        # 补齐数据
        norm_data = DataTransformer.expand_data(norm_data, max_length=max_length)
        # print("Ex-Feature: {}".format(feature.shape))

        # 左转这么多角度
        norm_data_transpose = norm_data @ DataTransformer.calculate_spin(norm_data).T
        return norm_data, norm_data_transpose

    @staticmethod
    def plot_arraw(feature, labels=None, ax=None, title="Visualization"):
        '''
        绘制归一化到 R^2 空间内的向量图, 从红色到蓝色
        '''
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
            plt.title(title)
            plt.savefig(title + '.png')
            plt.close()
        else:
            ax.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
            ax.set_title(title)
    
    @staticmethod
    def d0sigma_transpose(data:list, max_length=100):
        '''
        将原始数据转换为一维导数格式
        '''
        lst = []
        for index in range(0, len(data)):
            feature = data[index]
            feature = np.array(feature, dtype=np.float32)

            _, norm_data_transpose = DataTransformer.transpose_data(feature, max_length=max_length)
            
            d0sigma = norm_data_transpose
            lst.append(d0sigma.tolist())
            
        return np.array(lst, dtype=np.float32)

    @staticmethod
    def d1sigma_transpose(data:list, max_length=100):
        '''
        将原始数据转换为一维导数格式
        '''
        lst = []
        for index in range(0, len(data)):
            feature = data[index]
            feature = np.array(feature, dtype=np.float32)

            _, norm_data_transpose = DataTransformer.transpose_data(feature, max_length=max_length)
            
            d1sigma = DataTransformer._d1sigma(norm_data_transpose)[1:, :]
            lst.append(d1sigma.tolist())
            
        return np.array(lst, dtype=np.float32)

    @staticmethod
    def d2sigma_transpose(data:list, max_length=100):
        '''
        将原始数据转换为二维导数格式
        '''
        lst = []
        for index in range(0, len(data)):
            feature = data[index]
            feature = np.array(feature, dtype=np.float32)

            _, norm_data_transpose = DataTransformer.transpose_data(feature, max_length=max_length)
            
            d2sigma = DataTransformer._d2sigma(norm_data_transpose)[1:-1, :]
            lst.append(d2sigma.tolist())
            
        return np.array(lst, dtype=np.float32)
    
class SignalAnalyzer():
    '''
    检测红绿灯状态的分析器, 主要基于图形学, 需要切割模型精确
    '''
    def __init__(self):
        '''
        红绿灯状态机在这里进行轮转, 使用 update 进行轮转
        '''
        self.dfa_rule = {
            MacroDefinination.COLOR_RED: MacroDefinination.COLOR_GREEN,
            MacroDefinination.COLOR_YELLOW: MacroDefinination.COLOR_RED,
            MacroDefinination.COLOR_GREEN: MacroDefinination.COLOR_YELLOW
        }
        self.current_state = None # None 值表示可以赋值任意状态

    def update(self, img, mode:Literal['bgr', 'rgb', 'hsv', 'path']='bgr'):
        '''
        更新红绿灯状态, 输入图片和模式
        '''
        color = self.classify(img, mode=mode)
        if color < 0:
            return color
        
        if self.current_state is None:
            self.current_state = color
        else:
            # 符合转换规则, 进行状态转移
            target_state = self.dfa_rule[self.current_state]
            if color != target_state:
                self.current_state = color
                return color

    @staticmethod
    def color_mapping(color_code):
        '''
        将颜色代码转换为字符串
        '''
        if color_code == MacroDefinination.COLOR_RED:
            return "Red"
        elif color_code == MacroDefinination.COLOR_YELLOW:
            return "Yellow"
        elif color_code == MacroDefinination.COLOR_GREEN:
            return "Green"
        elif color_code == MacroDefinination.ERROR:
            return "Error"
        elif color_code == MacroDefinination.NODET:
            return "No Traffic Light Detected"
        else:
            return "Unknown"

    def classify(img, mode:Literal['bgr', 'rgb', 'hsv', 'path']='bgr'):
        '''
        对 HSV 图片进行色相检测对红绿灯进行识别, 要求输入 BGR 图片
        '''
        if img is None:
            return MacroDefinination.ERROR
        
        hsv = None
        if mode == 'path':
            img = cv2.imread(img)
            if img is None:
                return MacroDefinination.ERROR
            hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

        if mode == 'bgr':
            hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
        elif mode == 'rgb':
            hsv = cv2.cvtColor(img, cv2.COLOR_RGB2HSV)
        elif mode == 'hsv':
            hsv = img
        else:
            return MacroDefinination.ERROR
        
        # 色相阈值
        lower_red1 = np.array([0, 120, 120])
        upper_red1 = np.array([10, 255, 255])
        lower_red2 = np.array([160, 120, 120])
        upper_red2 = np.array([180, 255, 255])
        lower_yellow = np.array([20, 120, 120])
        upper_yellow = np.array([35, 255, 255])
        lower_green = np.array([36, 120, 120])
        upper_green = np.array([85, 255, 255])
        
        mask_red1 = cv2.inRange(hsv, lower_red1, upper_red1)
        mask_red2 = cv2.inRange(hsv, lower_red2, upper_red2)
        mask_red = cv2.bitwise_or(mask_red1, mask_red2)
        mask_yellow = cv2.inRange(hsv, lower_yellow, upper_yellow)
        mask_green = cv2.inRange(hsv, lower_green, upper_green)
        
        red_pixels = cv2.countNonZero(mask_red)
        yellow_pixels = cv2.countNonZero(mask_yellow)
        green_pixels = cv2.countNonZero(mask_green)
        
        mthreshold = 10
        max_pixels = max(red_pixels, yellow_pixels, green_pixels)
        
        if max_pixels < mthreshold:
            return MacroDefinination.NODET
        
        if max_pixels == red_pixels:
            return MacroDefinination.COLOR_RED
        elif max_pixels == yellow_pixels:
            return MacroDefinination.COLOR_YELLOW
        else:
            return MacroDefinination.COLOR_GREEN
        
class AttackAnalyzer():
    '''
    检测攻击的分析器, 主要使用 sklearn.ensemble.RandomForestClassifier 类型
    '''
    def __init__(self, 
                 model_path=os.path.join('models', 'random_forest_model.pkl'),
                 db_url='mysql+pymysql://nanoka:12345678n@localhost:3306/manage'):
        '''
        self.clf 是 sklearn.ensemble.RandomForestClassifier 类型
        决策树可以通过后面携带的训练内容进行训练
        '''
        self.clf = joblib.load(model_path)
        self.engine = create_engine(db_url)
        self.label = {
            0: '正常访问',
            1: '拒绝服务攻击',
            2: '扫描攻击',
            3: '注入攻击',
            4: '密码爆破或密码播撒'
        }

        self.sample_query = '''
            SELECT
                COUNT(*) AS num_length,
                COALESCE (
                    SUM( CASE WHEN STATUS NOT IN ( 200, 302 ) THEN 1 WHEN STATUS != 200 THEN 1 ELSE 0 END ) / NULLIF( COUNT(*), 0 ),
                    0 
                ) AS rate_failure,
                COALESCE (
                    SUM( CASE WHEN path = '/login' AND method = 'POST' AND STATUS != 200 THEN 1 ELSE 0 END ) / NULLIF( COUNT( CASE WHEN path = '/login' AND method = 'POST' THEN 1 ELSE NULL END ), 0 ),
                    0 
                ) AS rate_failure_login_post,
                COUNT( DISTINCT PORT ) AS num_port,
                COALESCE ( SUM( IFNULL( LENGTH( REGEXP_REPLACE ( body, '[a-zA-Z0-9 ]', '' )), 0 )) / NULLIF(COUNT(*), 0), 0 ) AS special_characters_length,
                COALESCE ( SUM( IFNULL( LENGTH( body ), 0 )) / NULLIF(COUNT(*), 0), 0 ) AS total_body_length
            FROM
                web 
            WHERE
                time >= NOW() - INTERVAL 10 MINUTE;
        '''

        self.__report()

    def run(self, query=None):
        '''
        使用分类器检验数据库是否被攻击
        '''
        data = pd.read_sql(self.sample_query if query is None else query, self.engine)

        data_input = np.array([data[col][0] for col in data.columns])
        output = self.clf.predict(data_input.reshape(1, -1))

        return output[0], self.label[output[0]]

    def __report(self):
        '''
        进行格式化输出, 输出鉴别器的主要内容
        '''
        print("\n---------------------- AttackAnalyzer 运行报告 ----------------------")
        print("查询五大指标:\n",
        "- 服务访问次数 (DDOS 特征)\n",
        "- 请求失败率 (DDOS 特征、入侵特征)\n",
        "- 登录尝试失败次数 (密码播撒和密码爆破)\n",
        "- 端口请求个数 (扫描特征)",
        "- 发送内容特殊字符数量 (XSS、SQL 注入特征)\n",
        "- 请求的 URL 长度 (XSS、SQL 注入特征)\n")

        args = {
            "name": "AttackAnalyzer",
            "database": 'MySQL',
            "classifier": 'sklearn.ensemble.RandomForestClassifier',
        }

        try:
            report_args = {}
            for k, v in args.items():
                if k == 'name':
                    continue
                try:
                    report_args[k] = [v] if not isinstance(v, list) else [str(v[0])]
                except Exception as e:
                    print(f"处理报告项 {k} 失败: {e}")
                    continue

            pf = pd.DataFrame(report_args, index=[args['name']]).T
            print(pf)
        except Exception as e:
            print(f"创建报告 DataFrame 失败: {e}")

def _core_cpu_predict_worker(task_args: dict):
    '''
    子进程工作函数: 独立初始化 BehaviorAnalyzer
    鉴于 Python 的包导入特性, 所以建议将这个部分的所有模块单独封装一个最小模块
    否则每次导入大量库文件也是比较费时间的
    '''
    try:
        method = task_args['method']
        module_kargs = task_args['module_kargs']
        model_path = task_args['model_path']
        data_np = task_args['data_np']
        
        # 每一个子进程都需要创建新的实例
        analyzer = BehaviorAnalyzer(
            method=method,
            module_kargs=module_kargs,
            model_path=model_path,
            device='cpu',
            verbose=False
        )
        
        data = torch.from_numpy(data_np)
        pred_idx, pred_name = analyzer.predict(data)
        
        return (pred_idx, pred_name)
    except Exception as e:
        print(f"子进程预测失败：{e}")
        traceback.print_exc()
        return (None, None)

class BehaviorAnalyzer():
    '''
    五个不同状态, 分别对应

    | name | code |       describe|
    |------|------|---------------|
    | STOP |    0 |    车辆静止行为|
    | LEFT |    1 |    车辆左转行为|
    | STRA |    2 |    车辆直行行为|
    | RIGH |    3 |    车辆右转行为|
    | TURN |    4 |    车辆掉头行为|
    '''
    def __init__(self, 
                 method:Literal['fast', 'deep']='deep',
                 module_kargs:dict={
                     'input_size': 2, 
                     'hidden_size': 64, 
                     'num_layers': 2, 
                     'num_classes': 5
                 },
                 model_path=os.path.join('models', 'behavior_model_d1sigma_silu.pth'),
                 device='cuda:0' if torch.cuda.is_available() else 'cpu',
                 verbose=True
        ):
        '''
        初始化我们的分类器, 并且确定好我们需要的分类类别
        '''
        self.method = method
        self.module_kargs = module_kargs
        self.model_path = model_path
        self.device = device

        if self.method == 'fast':
            self.module = _core_Behavior_Simple()
        elif self.method == 'deep':
            self.module = _core_Behavior_Module(**module_kargs)

            try:
                self.module.load_state_dict(torch.load(model_path, weights_only=True))
                self.module.eval()
            except FileNotFoundError:
                print(f"Warning: 未找到模型文件 {model_path}，使用随机初始化权重")
                self.module.eval()

        self.module.to(self.device)

        # 确定分类码
        self.dict_action = {
            "stop": MacroDefinination.STOP,
            "left": MacroDefinination.LEFT,
            "straight": MacroDefinination.STRAIGHT,
            "right": MacroDefinination.RIGHT,
            "uturn": MacroDefinination.U_TURN
        }
        self.r_dict_action = {v: k for k, v in self.dict_action.items()}

        if verbose:
            self.__report(args = {
                "name": "BehaviorAnalyzer",
                "method": self.method,
                "classifier": '_core_Behavior_Module' if self.method == 'deep' else '_core_Behavior_Simple',
                "model_path": model_path,
                "device": self.device,
                "label": "STOP, LEFT, STRAIGHT, RIGHT, UTURN"
            })

    def __report(self, args:dict):
        '''
        进行格式化输出, 输出鉴别器的主要内容
        '''
        try:
            report_args = {}
            for k, v in args.items():
                if k == 'name':
                    continue
                try:
                    report_args[k] = [v] if not isinstance(v, list) else [str(v[0])]
                except Exception as e:
                    print(f"处理报告项 {k} 失败: {e}")
                    continue

            pf = pd.DataFrame(report_args, index=[args['name']]).T
            print("\n---------------------- BehaviorAnalyzer 运行报告 ----------------------")
            print(pf)
        except Exception as e:
            print(f"创建报告 DataFrame 失败: {e}")

    @torch.no_grad()
    def predict(self, data: torch.Tensor):
        '''
        直接预测行为, 如果维度不够的话, 主动升维

        data: 输入张量，支持的形状：
              - [depth, feature] (单样本)
              - [batch, depth, feature] (多样本)
        '''
        # 单样本标记量
        flag = False 
        if len(data.shape) < 3:
            flag = True
            data = data.unsqueeze(0)
        
        data = data.to(self.device)
        pred_idx = self.module.predict(data)

        if self.device.startswith('cuda'):
            pred_idx = pred_idx.cpu().numpy()
        else:
            pred_idx = pred_idx.numpy()
        
        if flag:
            try:
                if len(pred_idx.shape) == 1 and pred_idx.shape[0] == 1:
                    pred_idx = pred_idx[0]
                    pred_name = self.r_dict_action[pred_idx]

                    return pred_idx, pred_name
                else:
                    raise ValueError("返回数据不匹配")
                
            except Exception as e:
                print("单样本预测中遇到问题:", e)
                return None, None
        else:
            pred_name = [self.r_dict_action[idx.item()] for idx in pred_idx]
            return pred_idx, pred_name
        
    @torch.no_grad()
    def predict_parallel(self, data_list: list):
        '''
        预测多个样本, 输入为一个列表, 每个元素是一批次张量
        仅针对 CPU 进行优化, GPU 上的并行性能可能不如直接 predict 预测
        '''
        # 检测数据是否位于 GPU 上, 如果是则直接使用 predict 进行预测
        if self.device.startswith('cuda'):
            print("Warning: 检测在 GPU 设备上调用 predict_parallel, 自动切换到 predict (CUDA) 进行串行预测")
            results = []
            for data in data_list:
                pred_idx, pred_name = self.predict(data)
                results.append((pred_idx, pred_name))
            return results
        
        elif self.device.startswith('cpu'):
            # 进程池并行预测
            num_workers = os.cpu_count() or 4
            num_workers = min(num_workers, len(data_list))
            
            task_args = []
            for data in data_list:
                task_args.append({
                    'method': self.method,
                    'module_kargs': self.module_kargs,
                    'model_path': self.model_path,
                    'data_np': data.numpy()
                })
            
            try:
                with Pool(processes=num_workers) as pool:
                    results = pool.map(_core_cpu_predict_worker, task_args)
                return results
            except Exception as e:
                print(f"CPU 多进程预测失败，降级为串行：{e}")
                traceback.print_exc()
                
                # 降级串行
                results = []
                for data in data_list:
                    pred_idx, pred_name = self.predict(data)
                    results.append((pred_idx, pred_name))
                return results

class _core_Behavior_Module(nn.Module):
    '''
    LSTM 行为分类模型, 训练准确率才到 71%
    '''
    def __init__(self, 
                 input_size=2, 
                 hidden_size=64, 
                 num_layers=2, 
                 num_classes=5):
        super(_core_Behavior_Module, self).__init__()
        
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
        '''
        predict 函数应输入 [batch, depth, feature]
        forward 函数输出时，返回的应该是 [batch, feature]

        所以 argmax 应该筛选 dim=1 的值，最后返回 [batch]
        '''
        return torch.argmax(self.forward(x), dim=1)

class _core_Behavior_Simple():
    '''
    行为分析器, 使用计算机视觉
    '''
    def __init__(self):
        self.dict_action = {
            "stop": 0,
            "left": 1,
            "straight": 2,
            "right": 3,
            "uturn": 4
        }
        self.r_dict_action = {v: k for k, v in self.dict_action.items()}

    def predict(self, x):
        '''
        输入的数据为: [[[  0.0098132   0.0034554]
        [   0.012496 -0.00031777]
        [   0.019485    0.001357]
        [   0.025039   0.0012157]
        [   0.029204   0.0011098]
        ......
        ......               (共 100 行)
        ......
        [    0.94122   -0.029492]
        [    0.94539   -0.029598]
        [    0.95367   -0.031661]
        [     0.9564   -0.033583]]]
        '''

        '''
        [0.9564, -0.0335] - [0.0098, 0.0034] = [0.9466, -0.0369]
        '''
        print("输入的数据为:", x)

        lst = []
        # 逐行处理数据
        for input_norm_data in x:
            pf = pd.DataFrame(input_norm_data, columns=['x', 'y'])

        raise Exception("暂未完成，敬请期待")

class BertClassifier():
    '''
    基于 Bert 模型的文本分类器, 主要用于分析 LLM 输出的内容
    需要与训练好的模型文件配合使用, 由于每个模型性能不完全相同，所以我们使用 BERT 分类器进行对接
    '''
    def __init__(self,
                 pretraind_path='bert-base-chinese',
                 classifier_path=os.path.join('models', 'bert_classifier.pth')
    ):
        '''
        Bert 专用的模型, 用于归类 Deepseek 给出的判断
        '''
        self.device = torch.device('cuda:0' if torch.cuda.is_available() else 'cpu')
        print(f"模型运行在 {self.device} 上")

        self.pretraind_path = pretraind_path
        self.bert_tokenizer = BertTokenizer.from_pretrained(pretraind_path)
        self.bert_config = BertConfig.from_pretrained(
            pretraind_path,
            num_labels=2,
            hidden_dropout_prob=0.3
        )
        self.bert_model = BertForSequenceClassification.from_pretrained(pretraind_path, config=self.bert_config).to(self.device)
        self.bert_model.classifier = LastClassifier(hidden_dim=768, output_dim=2).to(self.device)

        self.bert_model.classifier.load_state_dict(torch.load(classifier_path, map_location=self.device))
        self.bert_model.eval()

    @torch.no_grad()
    def bert_predict(self, text, max_len=100):
        '''
        使用 Bert 进行文本分类
        单句识别, 如果想要 parallel 平行计算, 还需要再深入接触一下 Transformers
        '''
        if len(text) > max_len:
            text = text[:max_len]
        inputs = DataTransformer.bert_transform(text, tokenizer=self.bert_tokenizer)

        input_ids = torch.tensor(inputs['input_ids']).unsqueeze(0).to(self.device)
        attention_mask = torch.tensor(inputs['attention_mask']).unsqueeze(0).to(self.device)
        token_type_ids = torch.tensor(inputs['token_type_ids']).unsqueeze(0).to(self.device)

        out = self.bert_model(input_ids, attention_mask, token_type_ids)
        predicted = torch.argmax(out.logits, 1).cpu().numpy()[0]
        return predicted

class PlateAnalyzer:
    '''
    车牌分析器, 主要基于图形学, 需要切割模型精确
    本类主要使用开源项目 we0091234/Chinese_license_plate_detection_recognition
    开源 LICENCE 为 GPL-3.0 License, 需要遵守相关协议, 导入本模块时请务必注意
    '''
    def __init__(self,
                 url: str = 'http://localhost:82/recognize_plate',
                 timeout: int = 30,
                 retry: int = 1
                 ):
        '''
        初始化方法, 如果使用 PolyLaneNet 还需要额外初始化
        '''
        self.url = url
        self.timeout = timeout
        self.retry = retry
        self.session = requests.Session()

    def _cv2mat_to_bytes(self, image: cv2.Mat, format: str = 'JPEG') -> BytesIO:
        '''
        将 cv2.Mat 格式图像转为二进制流
        '''
        if len(image.shape) == 2:
            image = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)
        elif image.shape[-1] == 4:
            image = cv2.cvtColor(image, cv2.COLOR_BGRA2BGR)
        
        ret, img_encoded = cv2.imencode(f'.{format.lower()}', image)
        if not ret:
            raise ValueError("图像编码失败，请检查图像格式")
        
        img_bytes = BytesIO(img_encoded.tobytes())
        img_bytes.name = f'plate.{format.lower()}'
        return img_bytes

    def det(self, image: cv2.Mat):
        '''
        解析车牌内容信息, 输入cv2.Mat格式图片即可
        
        Args:
            image: cv2读取的图像矩阵（BGR格式）
        
        Returns:
            Dict: 车牌识别结果，格式如下：
                {
                    "status": "success/fail",
                    "plate_count": 车牌数量,
                    "plates": [
                        {
                            "rect": [x1, y1, x2, y2],  # 车牌检测框
                            "detect_conf": 检测置信度,
                            "plate_no": 车牌号码
                        }
                    ],
                    "error": 错误信息（仅失败时存在）
                }
        '''
        if not isinstance(image, np.ndarray) or len(image.shape) < 2:
            return {
                "status": "fail",
                "plate_count": 0,
                "plates": [],
                "error": "输入图像不是有效的cv2.Mat格式"
            }
        
        # 转换图像为二进制流
        try:
            img_bytes = self._cv2mat_to_bytes(image)
        except Exception as e:
            return {
                "status": "fail",
                "plate_count": 0,
                "plates": [],
                "error": f"图像格式转换失败: {str(e)}"
            }
        
        files = {
            'file': img_bytes
        }
        
        for attempt in range(self.retry + 1):
            try:
                response = self.session.post(
                    self.url,
                    files=files,
                    timeout=self.timeout
                )
                response.raise_for_status()
                result = response.json()
                return result
            
            except requests.exceptions.Timeout:
                if attempt < self.retry:
                    continue
                return {
                    "status": "fail",
                    "plate_count": 0,
                    "plates": [],
                    "error": f"请求超时（超时时间：{self.timeout}秒）"
                }
            
            except requests.exceptions.ConnectionError:
                if attempt < self.retry:
                    continue
                return {
                    "status": "fail",
                    "plate_count": 0,
                    "plates": [],
                    "error": f"无法连接到接口：{self.url}"
                }
            
            except requests.exceptions.HTTPError as e:
                return {
                    "status": "fail",
                    "plate_count": 0,
                    "plates": [],
                    "error": f"接口返回错误：{str(e)}，响应内容：{response.text if 'response' in locals() else ''}"
                }
            
            except Exception as e:
                if attempt < self.retry:
                    continue
                return {
                    "status": "fail",
                    "plate_count": 0,
                    "plates": [],
                    "error": f"识别失败：{str(e)}"
                }
    

    def close(self):
        self.session.close()
        self.session = None

    def __del__(self):
        if self.session is not None:
            self.close()

class EnvAnalyzer():
    '''
    环境解析器, 用于解析环境信息并进行拆分、绘图等功能
    '''
    def __init__(self,
                 image = None,
                 url: str = 'http://localhost:83/recognize_lane',
                 method: Literal['polylanenet', 'cv'] = 'cv',
                 model_path = r"E:\pandownload1\ML\Police\Project\models\inception_arrow_model.pth",
                 device = 'cuda:0'
    ):
        '''
        初始化方法, 如果使用 PolyLaneNet 还需要额外初始化
        '''
        self.init_image = image
        self.url = url
        self.method = method
        self.process = None

        self.H = None
        self.H_inv = None

        # Inception v3 参数
        IMG_SIZE = 299 

        self.transform = transforms.Compose([
            transforms.ToPILImage(),
            transforms.Resize((IMG_SIZE, IMG_SIZE)),
            transforms.RandomRotation(8),
            transforms.ToTensor(),
            transforms.Normalize(mean=[0.485, 0.456, 0.406],    # ImageNet均值
                                std=[0.229, 0.224, 0.225])      # ImageNet方差
        ])

        self.model_path = model_path
        self.device = device

        self.inception_model = get_inception_model(2).to(self.device)
        self.inception_model.load_state_dict(torch.load(self.model_path, weights_only=True, map_location=self.device))

    def __del__(self):
        if self.method == 'polylanenet':
            self.stop_polylanenet_serve()

    def create_polylanenet_serve(self):
        '''
        创建 PolyLaneNet 的后端服务
        '''
        self.stop_polylanenet_serve()

        self.process = subprocess.Popen(
            ['cmd', '/c', r'conda activate proj && python app.py'],
            cwd=os.path.join('submodules', 'polylanenet')
        )

    def stop_polylanenet_serve(self):
        '''
        杀死 PolyLaneNet 的后端服务
        '''
        if self.process is not None:
            self.process.terminate()
            self.process.wait(timeout=5)
            self.process = None

    def fetch_lane_pos(self, image):
        '''
        获取车道线的线信息 x = ay^3 + by^2 + cy + d
        '''
        pass

    def analyze_lane_pos(self, image):
        '''
        使用 Canny 算子, 利用掩膜处理局部车道线
        以黄色相为主线, 右侧其他颜色区域为线终点
        将线中的色相拿出来 (沥青的光学性质) 进行分析
        '''
        pass

    def analyze_lane_label(self, image):
        '''
        识别车道线中间的标识信息, 并输出标识中心和类型
        '''
        pass

    def mask_genarate(self):
        '''
        生成我们最后需要的掩码信息
        通过 lane 的线和标识信息, 用标识信息为基本分类条数
        绘制出最后的车道掩膜用于描述不同类型的车道
        (有几根不重要, 重要的是图像位置对应的是什么类型的车道)
        '''
        if self.method == 'cv':
            # 使用计算机视觉进行车道线分析
            return self._cv_analyze_lane_info()
        else:
            # 使用 PolyLaneNet 进行端到端车道线分析
            raise Exception("暂未实现敬请期待")
        
    def save_color_mask(self, lane_mask, save_path=r'E:\pandownload1\ML\Police\Project\.cache\lane.png'):
        '''
        将 mask 使用有颜色的方式绘制出来, 并且保存到部分位置
        '''
        image = self.init_image.copy()

        color_map = {
            0: (0, 0, 0),
            1: (0, 0, 255),
            2: (255, 0, 0)
        }

        mask_color = np.zeros((lane_mask.shape[0], lane_mask.shape[1], 3), dtype=np.uint8)
        for val in [1, 2]:
            mask_color[lane_mask == val] = color_map[val]
        
        alpha = 0.3
        img_overlay = cv2.addWeighted(image, 1-alpha, mask_color, alpha, 0)

        fig, ax = plt.subplots(1, 1, figsize=(6, 4))

        ax.imshow(cv2.cvtColor(img_overlay, cv2.COLOR_BGR2RGB))
        ax.set_title(f"Image + Color Mask (α={alpha})", fontsize=12)
        ax.axis('off')
        
        plt.tight_layout()
        plt.savefig(save_path, dpi=300, bbox_inches='tight')
        plt.close()

        print("车道掩膜图像已保存至:", save_path)

    def _cv_fetch_image(self, 
                        path = r'E:\pandownload1\ML\Police\Project\source\lane.jpg', 
                        method:Literal['local']='local'
        ):
        '''
        获取我们需要分析的图像, 由于不可能没有车辆干扰
        所以我们单独抽象出来作为一个前置的分析器, 当然也可以直接上传图片
        '''
        try:
            with open(path, 'rb') as img:
                rgb_image = Image.open(io.BytesIO(img.read()))
                self.init_image = cv2.cvtColor(np.array(rgb_image, dtype=np.uint8), cv2.COLOR_RGB2BGR)

                self.height, self.width = self.init_image.shape[:2]
                self.method = method

        except Exception as e:
            traceback.print_exc()
        
    def _cv_feature_convert(self):
        '''
        将 image 图像使用滤波器和二值化出我们想要的表征信息
        '''
        gray = cv2.cvtColor(self.init_image, cv2.COLOR_BGR2GRAY)

        kernel = np.ones((3,3), np.uint8)

        _, threshold = cv2.threshold(gray, 130, 255, cv2.THRESH_BINARY)
        dilated_edges = cv2.dilate(threshold, kernel)
        dilated_edges = cv2.dilate(dilated_edges, kernel)
        dilated_edges = cv2.dilate(dilated_edges, kernel)
        eroded_edges = cv2.erode(dilated_edges, kernel)
        eroded_edges = cv2.erode(eroded_edges, kernel)
        threshold = cv2.erode(eroded_edges, kernel)
        threshold = cv2.medianBlur(threshold, 13)

        return threshold
    
    def __row_fft_detect_optimized(threshold, row_data, peak_ratio_thresh=8.0, 
                                min_freq=0.005, max_freq=0.05, max_peak_num=3):
        """
        对二值化行数据做FFT，检测周期性峰值（含峰数量过滤）
        """
        row_no_dc = row_data - np.mean(row_data)
        
        f = np.fft.fft(row_no_dc)
        f_shift = np.fft.fftshift(f)
        f_amp = np.abs(f_shift)
        freq_x = np.fft.fftfreq(len(row_data))
        freq_x = np.fft.fftshift(freq_x)
        
        freq_mask = (np.abs(freq_x) >= min_freq) & (np.abs(freq_x) <= max_freq)
        valid_amp = f_amp[freq_mask]
        valid_freq = freq_x[freq_mask]
        
        if len(valid_amp) == 0 or np.mean(valid_amp) < 1e-6:
            return False, 0, 0, 0
        
        max_amp = np.max(valid_amp)
        mean_amp = np.mean(valid_amp)
        peak_ratio = max_amp / mean_amp
        
        peaks, _ = find_peaks(valid_amp, height=0.5*max_amp, distance=5)
        peak_num = len(peaks)
        
        is_zebra_row = (peak_ratio > peak_ratio_thresh) and (peak_num <= max_peak_num)
        main_freq = valid_freq[peaks[0]] if peak_num > 0 else 0
        
        return is_zebra_row, main_freq, peak_ratio, peak_num

    def _cv_zebra_crossing_recognize(self, threshold):
        '''
        识别斑马线信息, 使用 FFT 进行一维滤波分析
        最后将斑马线信息作为截断起点筛选小框
        最后返回斑马线的 y_id 信息用于确认最小分析框
        '''
        detect_results = []
        data_1d = []

        for y in range(self.height):
            row_data = threshold[y, :]
            
            is_zebra, main_freq, peak_ratio, peak_num = self.__row_fft_detect_optimized(
                row_data,
                peak_ratio_thresh=8.0,
                min_freq=0.005,
                max_freq=0.05,
                max_peak_num=3
            )

            data_1d.append(1 if is_zebra else 0)
            detect_results.append({
                '行号': y,
                '是否为斑马线': is_zebra,
                '主频率': f"{main_freq:.6f}",
                '间距': f"{1/main_freq:.1f}" if main_freq != 0 else "N/A",
                '归一化峰值比': f"{peak_ratio:.1f}",
                '峰值数量': peak_num
            })
            

        results_df = pd.DataFrame(detect_results)
        zebra_df = results_df[results_df['是否为斑马线'] == True]
        print(f"总计检测到 {len(zebra_df)} 行斑马线")


        non_zero_indices = np.nonzero(data_1d)[0]
        return non_zero_indices

    def __custom_loss(self, points, edge_img, edge_type:Literal["vertical", "horizontal"]="vertical"):
        """
        自定义的损失函数, 根据最近的点的距离进行判断
        因为我们要用梯度下降法进行搜索
        """
        h, w = edge_img.shape
        origin_input = 0
        
        # 垂直方向延伸, 所以比较 width 维度
        if edge_type == "vertical":
            for i in range(self.height):
                line = edge_img[i, :]
                data_pack = [x for (x,y) in points if y == i]

                ids = np.nonzero(line)[0]
                if len(ids) == 0 or len(data_pack) == 0:
                    continue
                origin_input += criterion(np.min(np.abs(ids - data_pack[0])))
        else: # 水平方向延伸, 比较 height 差值
            for i in range(self.width):
                line = edge_img[:, i]
                data_pack = [y for (x,y) in points if x == i]
                    
                ids = np.nonzero(line)[0]
                if len(ids) == 0 or len(data_pack) == 0:
                    continue
                origin_input += criterion(np.min(np.abs(ids - data_pack[0])))
            
        return origin_input

    def _cv_find_target_area(self, threshold, non_zero_indices):
        '''
        根据斑马线的限制框搜索目标区域，这里有两个假设
        1. 平直假设，也就是我们的横向线要尽可能水平
        2. 连续最大假设，也就是我们的主线路的面积应该是最大的
        '''
        contours, _ = cv2.findContours(
            threshold,
            cv2.RETR_EXTERNAL,
            cv2.CHAIN_APPROX_SIMPLE
        )

        if len(non_zero_indices) > 0:
            min_line_y = np.max(non_zero_indices)
        else:
            min_line_y = 0

        filtered_by_y_contours = []
        for cnt in contours:
            cnt_ys = cnt[:, 0, 1]
            cnt_min_y = np.min(cnt_ys)
            if cnt_min_y > min_line_y:
                filtered_by_y_contours.append(cnt)

        zebra_contours = []
        if filtered_by_y_contours:
            contour_areas = [cv2.contourArea(cnt) for cnt in filtered_by_y_contours]
            max_area = max(contour_areas)
            area_threshold = max_area * 0.8
            
            for cnt, area in zip(filtered_by_y_contours, contour_areas):
                if area >= area_threshold:
                    zebra_contours.append(cnt)
        else:
            print("无符合y坐标条件的轮廓")

        new_edges = np.zeros((self.height, self.width))
        cv2.drawContours(new_edges, zebra_contours, -1, 255, 5)

        return zebra_contours, new_edges
    
    def __iterative_ray_fitting(self, center, init_rad, edge_img,
        edge_type: Literal["vertical", "horizontal"],
        length: int = 200,
        init_step: float = 0.05,              # 初始角度步长（弧度）
        decay_rate: float = 0.5,              # 反向时步长衰减系数
        max_iter: int = 50,                   # 最大迭代次数, 基本达不到
        converge_thresh: float = 1e-4         # 收敛阈值
    ):
        """
        带动态步长衰减的梯形边迭代拟合
        """
        h, w = edge_img.shape
        current_rad = init_rad
        current_step = init_step

        stopper = EarlyStop(bare_rate=20, direction='down', method='rel')
        
        best_loss = self.__custom_loss(
            polar_ray_sample(center, current_rad, int(np.sqrt(w**2+h**2)+5), max_x=w, max_y=h),
            edge_img,
            edge_type
        )
        cond, updated = stopper.update(best_loss)
        
        best_rad = current_rad
        direction = 'right'
        
        for iter_idx in range(max_iter):
            # 双边收敛
            loss_plus = None
            loss_minus = None

            trigger = True
            
            if direction == 'right':
                new_rad_plus = current_rad - current_step
                points_plus = polar_ray_sample(center, new_rad_plus, length, 0, 0, w, h)
                loss_plus = self.__custom_loss(points_plus, edge_img, edge_type)

                if loss_plus < best_loss:
                    best_loss = loss_plus
                    best_rad = new_rad_plus
                    current_rad = new_rad_plus
                    trigger = False

                cond, updated = stopper.update(loss_plus)
                # print(f"{'*' if updated == 0 else ' '}Loss: {loss_plus}, direction: right")
                if not cond:
                    print("触发 EarlyStop 准备结算")
                    break
                    
            elif direction == 'left':
                new_rad_minus = current_rad + current_step
                points_minus = polar_ray_sample(center, new_rad_minus, length, 0, 0, w, h)
                loss_minus = self.__custom_loss(points_minus, edge_img, edge_type)

                if loss_minus < best_loss:
                    best_loss = loss_minus
                    best_rad = new_rad_minus
                    current_rad = new_rad_minus
                    trigger = False

                cond, updated = stopper.update(loss_minus)
                # print(f"{'*' if updated == 0 else ' '}Loss: {loss_minus}, direction: left")
                if not cond:
                    print("触发 EarlyStop 准备结算")
                    break
                    
            else:
                raise ValueError(f"方向出现错误: value = {direction}")

            if trigger:
                direction = 'left' if direction == 'right' else 'right'
                current_step *= decay_rate
                if current_step < converge_thresh:
                    break
        
        best_points = polar_ray_sample(center, best_rad, int(np.sqrt(w**2+h**2)+5), max_x=w, max_y=h)
        intersections = find_edge_intersections(best_points, edge_img)
        farthest_p = get_farthest_intersection(intersections, center)
        
        return best_rad, farthest_p, intersections

    def __fit_trapezoid(self, center, edge_img,
        code: int,  # 0=左下角开始，1=右下角开始
        x_min: int, x_max: int, y_min: int, y_max: int
    ):
        """
        完整梯形拟合流程函数
        咱们是靠右行所以就没有写右边的函数
        应该没有井盖或者下水道会修黄线上
        """
        h, w = edge_img.shape
        trapezoid_corners = [center]
        current_center = center
        length_vertical = int(y_max - y_min)  # 垂直边长度
        length_horizontal = int(x_max - x_min)  # 水平边长度
        
        if code == 0:
            '''
            第一步, 从左下角拟合到左上角的直线，由于我们都是要求尽可能多的包含点
            所以我们认为最后的点也在这个范围内, 至少应该在线内
            '''
            init_rad = np.pi/2  # 初始角度90度（向上）
            best_rad_left, left_p, left_inter = self.__iterative_ray_fitting(
                current_center, init_rad, edge_img,
                edge_type="vertical", length=int(np.sqrt(self.width**2+self.height**2)+5)
            )
            trapezoid_corners.append(left_p)
            current_center = left_p
            print(f"左上点：{left_p}，左侧边角度：{math.degrees(best_rad_left):.2f}°")
            
            '''
            第二步, 从左上角拟合到右上角的直线
            这一个和其他的评估标准不同, 值得注意
            '''
            init_rad = np.pi/6  # 初始角度三十度（向右）
            best_rad_top, top_p, top_inter = self.__iterative_ray_fitting(
                current_center, init_rad, edge_img,
                edge_type="horizontal", length=length_horizontal
            )
            trapezoid_corners.append(top_p)
            current_center = top_p
            print(f"右上点：{top_p}，上侧边角度：{math.degrees(best_rad_top):.2f}°")
            
            '''
            第三步, 从右上角拟合到右下角的直线
            目前 y = log(x) 对内部的点的要求还是极高的
            短一点也可以满足我们的先验条件
            '''
            init_rad = 0  # 初始角度270度（向下）
            best_rad_right, right_p, right_inter = self.__iterative_ray_fitting(
                current_center, init_rad, edge_img,
                edge_type="vertical", length=length_vertical
            )
            trapezoid_corners.append(right_p)
            print(f"右下点：{right_p}，右侧边角度：{math.degrees(best_rad_right):.2f}°")
        
        return trapezoid_corners

    def __validate_and_correct_corners(self, trapezoid_corners, edge_img):
        """
        校验并修正梯形角点，确保右下角点满足x最大/ y最大，且补充绝对最右下角点
        """
        if len(trapezoid_corners) != 4:
            print(f"角点数量异常（{len(trapezoid_corners)}个），直接返回")
            return trapezoid_corners
        
        bottom_left, top_left, top_right, bottom_right = trapezoid_corners
        h, w = edge_img.shape

        corrected_corners = [bottom_left.tolist(), top_left.tolist(), top_right.tolist()]

        x, y = bottom_right[0]
        if x != w-1 and y != h-1:
            xt, yt = top_right[0]
            pre_x = int(x + (h - 1 - y) / ((y - yt) / (x - xt)))
            
            if pre_x > w:
                new_y = int(y + (w - 1 - x) * (y - yt) / (x - xt))
                corrected_corners.append([[w - 1, new_y]])
                corrected_corners.append([[w - 1, h - 1]])
            else:
                corrected_corners.append([[pre_x, h - 1]])
                
        return np.array(corrected_corners, dtype=np.int32)

    def _cv_fit_trapezoid(self, zebra_contours, edge_img):
        '''
        梯形图案拟合，用于计算我们最后需要展开的区域
        这一步会严重决定后面是否精确, 这一步发现最下角可以使用不严格约束的方案
        如果在左下角使用范围检索会更好一些，留一些范围做缓冲效果最稳定

        1. 底边假设，假设我们的道路总是从图像下面延伸而来
        '''
        pts = np.array(zebra_contours[0]).astype(np.uint32)[:,0,:]
        x, y = pts[:,0], pts[:,1]

        ptlst = pts.tolist()
        x_min, x_max, y_min, y_max = np.min(x), np.max(x), np.min(y), np.max(y)
        print(f'发现坐标 {x_min} - {x_max}, {y_min} - {y_max}')

        code = -1
        if ([int(x_min), int(y_max)] in ptlst):
            code = 0
            # print(f'发现左下角')
        if ([int(x_max), int(y_max)] in ptlst):
            code = 1
            # print(f'发现右下角')
        if code == -1:
            raise ValueError('未能检测到有效点')

        center = (x_min, y_max) if code == 0 else (x_max, y_max)
        trapezoid_corners = self.__fit_trapezoid(center, edge_img, code, x_min, x_max, y_min, y_max)

        trapezoid_pts = np.array(trapezoid_corners, np.int32).reshape((-1, 1, 2))
        corrected_corners = self.__validate_and_correct_corners(trapezoid_pts, edge_img)

        return corrected_corners, trapezoid_pts

    def _cv_image_crop_transform(self, threshold, corrected_corners, trapezoid_pts):
        '''
        将裁剪下来的梯形框进行逆透视变换，得到俯视图
        corrected_corners 是修正后的图像点, trapezoid_pts 是原始缩放角点
        如果 len(corrected_corners) == 5 则使用原始角点，扩展图像宽度避免越界
        '''
        src_pts = None
        extend_threshold = threshold.copy()

        if len(corrected_corners) == 5:
            src_pts_raw = np.array([i[0] for i in trapezoid_pts], dtype=np.float32)
            bottom_right_pt = src_pts_raw[-1]

            original_width = threshold.shape[1]
            extend_width = int(max(0, bottom_right_pt[0] - original_width))
            
            if extend_width > 0:
                extend_region = np.zeros((threshold.shape[0], extend_width), dtype=threshold.dtype)
                extend_threshold = np.hstack((threshold, extend_region))
            
            src_pts = src_pts_raw
        else:
            src_pts = np.float32([i[0] for i in corrected_corners])

        output_size = (640, 480)
        dst_pts = np.float32([
            [0, output_size[1]],
            [0, 0],
            [output_size[0], 0],
            [output_size[0], output_size[1]]
        ])

        src_pts = src_pts[:4].reshape((4, 2))

        self.H = cv2.getPerspectiveTransform(src_pts, dst_pts)
        bird_view = cv2.warpPerspective(extend_threshold, self.H, output_size)

        return bird_view

    def _cv_analyze_marks(self, bird_view):
        '''
        识别车道的各种信息，如道路标识、车道线区域等
        '''
        self.H_inv = cv2.invert(self.H)[1] if self.H is not None else None

        bird_view_gray = bird_view
        bh, bw = bird_view.shape[:2]
        bird_view_bin = cv2.bitwise_not(bird_view_gray)

        lane_contours, _ = cv2.findContours(bird_view_bin, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        whole_lane_info_list = []

        for cnt in lane_contours:
            area = cv2.contourArea(cnt)
            if area < 0.1 * bh * bw:
                continue
            x, y, w, h = cv2.boundingRect(cnt)
            aspect_ratio = h / w
            if aspect_ratio > 1.0 and aspect_ratio < 6.0:
                
                M = cv2.moments(cnt)
                if M["m00"] == 0:
                    continue
                cnt_center_x = M["m10"] / M["m00"]
                cnt_center_y = M["m01"] / M["m00"]
                
                whole_lane_info = {
                    "area": area,
                    "center_bird": (cnt_center_x, cnt_center_y),
                    "rect_bird": (x, y, w, h),
                    "center_original": None,
                    "rect_original": None,
                    "contour": cnt,
                    "is_valid": True
                }
                
                if self.H_inv is not None:
                    pt_bird = np.array([[cnt_center_x, cnt_center_y]], dtype=np.float32)
                    pt_original = cv2.perspectiveTransform(pt_bird.reshape(-1, 1, 2), self.H_inv)
                    whole_lane_info["center_original"] = (pt_original[0][0][0], pt_original[0][0][1])
                    
                    rect_pts_bird = np.array([
                        [x, y], [x+w, y], [x+w, y+h], [x, y+h]
                    ], dtype=np.float32)
                    rect_pts_original = cv2.perspectiveTransform(rect_pts_bird.reshape(-1, 1, 2), self.H_inv)
                    whole_lane_info["rect_original"] = rect_pts_original.reshape(4, 2).tolist()
                
                whole_lane_info_list.append(whole_lane_info)

        arrow_contours = []
        for cnt in lane_contours:
            area = cv2.contourArea(cnt)
            if area < 0.2 * bh * bw:
                continue
            x, y, w, h = cv2.boundingRect(cnt)
            aspect_ratio = h / w
            if aspect_ratio > 1.5 and aspect_ratio < 5:
                arrow_contours.append(cnt)

        arrow_contours = sorted(arrow_contours, key=lambda c: cv2.boundingRect(c)[0])

        final_arrows = []
        lane_info_list = []

        for cnt in arrow_contours:
            x, y, w, h = cv2.boundingRect(cnt)
            cropped = bird_view_bin[y:y+h, x:x+w]
            crop_reversed = cv2.bitwise_not(cropped)
            
            inner_contours, _ = cv2.findContours(crop_reversed, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            if not inner_contours:
                continue

            # 最大面积的 0.8 倍筛选
            crop_h, crop_w = crop_reversed.shape[:2]
            min_area = 0.05 * crop_h * crop_w
            valid_contours_with_info = []
            
            for inner_cnt in inner_contours:
                area = cv2.contourArea(inner_cnt)
                if area < min_area:
                    continue
                
                M = cv2.moments(inner_cnt)
                if M["m00"] == 0:
                    continue
                cnt_center_x = M["m10"] / M["m00"]
                cnt_center_y = M["m01"] / M["m00"]
                
                rect_x = x + cv2.boundingRect(inner_cnt)[0]
                rect_y = y + cv2.boundingRect(inner_cnt)[1]
                rect_w = cv2.boundingRect(inner_cnt)[2]
                rect_h = cv2.boundingRect(inner_cnt)[3]
                
                valid_contours_with_info.append({
                    "contour": inner_cnt,
                    "area": area,
                    "center_bird": (cnt_center_x, cnt_center_y),
                    "rect_bird": (rect_x, rect_y, rect_w, rect_h),
                    "crop_offset": (x, y)
                })
            
            if len(valid_contours_with_info) == 0:
                continue
            
            max_area = max([item["area"] for item in valid_contours_with_info])
            threshold_area = max_area * 0.8
            filtered_contours = [item for item in valid_contours_with_info if item["area"] >= threshold_area]
            
            for filtered_item in filtered_contours:
                inner_cnt = filtered_item["contour"]
                x_inner, y_inner, w_inner, h_inner = cv2.boundingRect(inner_cnt)
                x_pad = max(0, x_inner - 1)
                y_pad = max(0, y_inner - 1)
                w_pad = min(crop_reversed.shape[1] - x_pad, w_inner + 2)
                h_pad = min(crop_reversed.shape[0] - y_pad, h_inner + 2)
                final_crop = crop_reversed[y_pad:y_pad+h_pad, x_pad:x_pad+w_pad]
                final_arrows.append(final_crop)
                
                lane_info = {
                    "area": filtered_item["area"],
                    "area_ratio": filtered_item["area"] / max_area,
                    "center_bird": filtered_item["center_bird"],
                    "rect_bird": filtered_item["rect_bird"],
                    "center_original": None,
                    "rect_original": None,
                    "crop_img": final_crop,
                    "is_valid": True
                }
                
                # 计算原图坐标
                if self.H_inv is not None:
                    pt_bird = np.array([[lane_info["center_bird"][0], lane_info["center_bird"][1]]], dtype=np.float32)
                    pt_original = cv2.perspectiveTransform(pt_bird.reshape(-1, 1, 2), self.H_inv)
                    lane_info["center_original"] = (pt_original[0][0][0], pt_original[0][0][1])
                    
                    rect_x, rect_y, rect_w, rect_h = lane_info["rect_bird"]
                    rect_pts_bird = np.array([
                        [rect_x, rect_y],
                        [rect_x + rect_w, rect_y],
                        [rect_x + rect_w, rect_y + rect_h],
                        [rect_x, rect_y + rect_h]
                    ], dtype=np.float32)
                    rect_pts_original = cv2.perspectiveTransform(rect_pts_bird.reshape(-1, 1, 2), self.H_inv)
                    lane_info["rect_original"] = rect_pts_original.reshape(4, 2).tolist()
                
                lane_info_list.append(lane_info)

        # 这两个分别是 "内部标识信息"、"车道线区域信息"、"车道标识灰度图像集"
        return lane_info_list, whole_lane_info_list, final_arrows

    @torch.no_grad()
    def __run_inception_predict(self, inception_model, final_arrows, class_names=["左前", "右前"], verbose=True):
        """
        用加载好的Inception模型预测裁剪后的箭头图片
        """
        if len(final_arrows) == 0:
            print("警告：输入的箭头图片列表为空！")
            return [], []
        
        input_tensors = []
        for idx, img in enumerate(final_arrows):
            if img is None or len(img.shape) == 0:
                print(f"警告：第{idx}张图片无效，跳过")
                continue
            if len(img.shape) == 2:
                img_rgb = cv2.cvtColor(img, cv2.COLOR_GRAY2RGB)
            else:
                img_rgb = img
            
            img_tensor = self.transform(img_rgb)
            input_tensors.append(img_tensor)
        
        if len(input_tensors) == 0:
            print("警告：无有效图片可预测！")
            return [], []
        
        batch_tensor = torch.stack(input_tensors).to(self.device)
        
        outputs = inception_model(batch_tensor)
        if isinstance(outputs, tuple):
            outputs = outputs[0]
        
        preds_probs = torch.softmax(outputs, dim=1)
        preds_idx = torch.argmax(preds_probs, dim=1).cpu().numpy()
        preds_conf = preds_probs[range(len(preds_idx)), preds_idx].cpu().numpy()
        
        if verbose:
            for idx, (pred_idx, pred_conf) in enumerate(zip(preds_idx, preds_conf)):
                pred_name = class_names[pred_idx]
                print(f"箭头图片 {idx+1}：预测类别={pred_name} (索引={pred_idx})，置信度={pred_conf:.4f}")
        
        return preds_idx, preds_conf

    def _cv_mask_generate(self, lane_info_list, whole_lane_info_list, preds_idx, preds_conf):
        '''
        通过我们之前的步骤生成最终需要的掩膜
        '''
        mask_idx_map = {
            0: 1, 
            1: 2
        }

        for i, lane_info in enumerate(lane_info_list):
            if i < len(preds_idx):
                lane_info["pred_idx"] = preds_idx[i]
                lane_info["pred_conf"] = preds_conf[i]
                lane_info["mask_value"] = mask_idx_map.get(preds_idx[i], 0)

        whole_lane_info_list_sorted = sorted(
            whole_lane_info_list,
            key=lambda x: x["center_original"][0] if (x["center_original"] and len(x["center_original"]) > 0) else 0
        )
        for i, lane_info in enumerate(whole_lane_info_list_sorted):
            if i < len(preds_idx):
                lane_info["pred_idx"] = preds_idx[i]
                lane_info["pred_conf"] = preds_conf[i]
                lane_info["mask_value"] = mask_idx_map.get(preds_idx[i], 0)

        if self.H_inv is not None:
            lane_mask = np.zeros(self.init_image.shape[:2], dtype=np.uint8)
            
            for lane_info in whole_lane_info_list_sorted:
                if lane_info.get("rect_original") and lane_info.get("mask_value", 0) > 0:
                    rect_pts = np.array(lane_info["rect_original"], dtype=np.int32)
                    cv2.fillPoly(lane_mask, [rect_pts], color=lane_info["mask_value"])

        return lane_mask
            
    def _cv_analyze_lane_info(self):
        '''
        计算车道线信息, 最后输出绘制好的掩膜
        '''
        self._cv_fetch_image( # 读取信息到 self.init_image, 无锁
            path = r'E:\pandownload1\ML\Police\Project\source\lane.jpg', 
            method = 'local'
        )
        # 特征转换和滤波
        threshold = self._cv_feature_convert()
        # 斑马线信息识别, 输出 y 过滤范围
        non_zero_indices = self._cv_zebra_crossing_recognize(threshold)
        # 寻找 lane 信息
        zebra_contours, new_edges = self._cv_find_target_area(threshold, non_zero_indices)
        # 梯形拟合, 寻找目标区域, 输出梯形角点 (可能是 4 或 5 个角点)
        # 如果是 5 个角点, 还需要额外做一些保护措施
        corrected_corners, trapezoid_pts = self._cv_fit_trapezoid(zebra_contours, new_edges)
        # 逆透视变换, 归一化图像特征信息, 准备使用 Inception v3 进行识别
        bird_view = self._cv_image_crop_transform(threshold, corrected_corners, trapezoid_pts)
        # 车道信息识别, 全面识别所有信息, 这一步输入的俯视图应已经是干净的图像数据
        lane_info_list, whole_lane_info_list, final_arrows = self._cv_analyze_marks(bird_view)
        # 使用 Inception v3 进行识别
        preds_idx, preds_conf = self.__run_inception_predict(self.inception_model, final_arrows)
        # 生成我们最终的掩膜数据
        return self._cv_mask_generate(lane_info_list, whole_lane_info_list, preds_idx, preds_conf)


def polar_ray_sample(center, rad, length, min_x=0, min_y=0, max_x=50, max_y=50):
    """
    极坐标系生成射线采样点
    """
    x0, y0 = center
    points = []
    for r in range(0, length):
        x = max(min_x, min(max_x - 1, int(x0 + r * math.cos(rad))))
        y = max(min_y, min(max_y - 1, int(y0 - r * math.sin(rad))))  # 图像y轴向下，sin取负
        points.append((x, y))
    return points

def criterion(x):
    """
    对数计算模式, 越远越没有存在感, 追求平滑所以选择了一个比较大的值
    超过 40 像素后变成加法群幺元， 后续点不再影响本数值
    """
    return min(0, np.log(max(1e-3, np.abs(x)/40)))

def find_edge_intersections(points, edge_img):
    """
    找到射线与边缘的所有交点
    """
    intersections = []
    h, w = edge_img.shape
    for (x, y) in points:
        if x < 0 or x >= w or y < 0 or y >= h:
            continue
        if edge_img[y, x] == 255 and (x, y) not in intersections:
            intersections.append((x, y))
    return intersections

def get_farthest_intersection(intersections, center):
    """
    找到离起点最远的交点, 若无交点则返回center
    """
    if len(intersections) == 0:
        return center
    
    try:
        intersections_arr = np.array(intersections, dtype=np.float64)
        center_arr = np.array(center, dtype=np.float64)
        
        valid_mask = np.isfinite(intersections_arr).all(axis=1)
        valid_intersections = intersections_arr[valid_mask]
        
        if len(valid_intersections) == 0:
            return center
        
        max_coord = 1e6
        valid_intersections = np.clip(valid_intersections, -max_coord, max_coord)
        center_arr = np.clip(center_arr, -max_coord, max_coord)
        
        diff = valid_intersections - center_arr
        distances = np.hypot(diff[:, 0], diff[:, 1])
        
        farthest_idx = np.argmax(distances)
        farthest_point = valid_intersections[farthest_idx]
        
        return (float(farthest_point[0]), float(farthest_point[1]))
        
    except Exception as e:
        print(f"计算最远交点时出错: {e}")
        return center

def least_squares_fit(points):
    """
    最小二乘拟合直线, scipy 直出
    """
    if len(points) < 2:
        raise ValueError("最小二乘法拟合直线至少要有两个点")
    
    x = np.array([p[0] for p in points])
    y = np.array([p[1] for p in points])
    
    if np.std(x) < 1e-6:
        return None, np.mean(x)
    slope, intercept, _, _, _ = stats.linregress(x, y)
    return slope, intercept

def get_ray_line_intersection(ray_center, ray_rad, fit_line):
    """
    计算射线与拟合直线的交点
    """
    x0, y0 = ray_center
    cos_theta = math.cos(ray_rad)
    sin_theta = math.sin(ray_rad) # 点向式直接计算交点
    
    # 拟合直线是垂直直线 x = x_fit
    if fit_line[0] is None:
        x_fit = fit_line[1]
        if cos_theta == 0:  # 射线垂直，无交点
            return (x0, y0)
        t = (x_fit - x0) / cos_theta
        x = int(x_fit)
        y = int(y0 - t * sin_theta)
    # 拟合直线是 y = kx + b
    else:
        k, b = fit_line
        # 联立射线参数方程：x = x0 + t*cosθ, y = y0 - t*sinθ
        denominator = cos_theta + k * sin_theta
        if denominator == 0:  # 平行无交点
            return (x0, y0)
        t = (b - y0 + k * x0) / denominator
        x = int(x0 + t * cos_theta)
        y = int(y0 - t * sin_theta)
    
    return (x, y)

def get_inception_model(num_classes):
    '''
    由于分类任务特殊, 所以这次必须全调
    '''
    weights = Inception_V3_Weights.DEFAULT
    model = models.inception_v3(weights=weights)

    # 迁移训练参数冻结
    # for param in model.parameters():
    #     param.requires_grad = False
    
    in_features = model.fc.in_features
    model.fc = nn.Linear(in_features, num_classes)
    model.AuxLogits.fc = nn.Linear(768, num_classes)

    return model

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--env", action='store_true', help='初始化环境信息并保存 npy 文件')
    parser.add_argument("--save_path", type=str, default=r'E:\pandownload1\ML\Police\Project\.cache\mask.npy', help='保存路径')
    opt = parser.parse_args()

    if opt.env:
        env_analyzer = EnvAnalyzer(
            image = None,
            url = 'http://localhost:83/recognize_lane',
            method = 'cv',
            model_path = r"E:\pandownload1\ML\Police\Project\models\inception_arrow_model.pth",
            device = 'cuda:0'
        )

        try:
            mask = env_analyzer.mask_genarate()
            env_analyzer.save_color_mask(
                lane_mask=mask, 
                save_path=r'E:\pandownload1\ML\Police\Project\.cache\lane.png'
            )

            np.save(opt.save_path, mask)
            print(f"Numpy 文件已保存至 {opt.save_path}")
            
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()
