import os
import psutil
import pandas as pd
import numpy  as np
import traceback
import requests
import time
import json

from analyzer import AttackAnalyzer
from serve import MQTTServer, on_connect, on_message

ROOT = r'E:\pandownload1\ML\Police\Project'

class ResourceMonitor():
    '''
    资源管理程序, 用于直接管理循环事件状态
    '''
    def __init__(self,
                 model_path: str = os.path.join(ROOT, 'models', 'random_forest_model.pkl'),
                 db_url: str = 'mysql+pymysql://nanoka:12345678n@localhost:3306/manage',
                 base_dir: str = os.path.join(ROOT, 'submodules', 'mosquitto'), 
                 yaml_path: str = os.path.join(ROOT, 'cfg', 'config.yaml'),
                 http_url: str = 'http://localhost:81/api'
    ):
        '''
        初始化所有信息, 这一部分用于维护 AttackAnalyzer 的 Loop 部分和 MQTT 事件
        '''
        self.http_url = None
        self.anly = None
        self.mqtt = None

        self.http_url = http_url
        self.anly = AttackAnalyzer(model_path = model_path, db_url = db_url)
        self.mqtt = MQTTServer(base_dir=base_dir, yaml_path=yaml_path, verbose=False)

        self.mqtt.start_mosquitto()
        self.mqtt.register_mqtt_service(on_connect, on_message)

    def __del__(self):
        if self.mqtt is not None:
            self.mqtt.stop_mosquitto()

    def get_machine_resources(self):
        '''
        获取简化的系统资源信息
        '''
        cpu_percent = psutil.cpu_percent(interval=0.5)
        mem_percent = psutil.virtual_memory().percent

        return cpu_percent, mem_percent

    def run(self, time_gap=5):
        '''
        开始执行循环操作, 并主动管理状态
        '''
        try:
            while True:
                i, s = self.anly.run()
                print(pd.DataFrame({'认证数字' : [i], '攻击类型': [s]}).T)

                string = '系统运行正常'
                if i != 0:
                    string = "检测到{}".format(s)

                cpu, mem = self.get_machine_resources()
                cnt = requests.get(self.http_url + '/fetch_count').json()['Params']['Cnt']

                data = {
                "Event": 0,
                "Code": int(i),
                "Type": s,
                "notice": [
                    string
                ],
                "params": {
                    "Cpu": cpu,
                    "Mem": mem,
                    "Acc": 'nan',
                    "Num_type": 5,
                    "Cnt": cnt
                }
                }

                self.mqtt.publish_message(topic='awa', payload=json.dumps(data))
                time.sleep(time_gap)

        except KeyboardInterrupt:
            print("用户正常退出")
        except Exception as e:
            traceback.print_exc()

if __name__ == '__main__':
    monitor = ResourceMonitor()
    monitor.run(time_gap=1)