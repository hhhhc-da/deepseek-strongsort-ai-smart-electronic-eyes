# coding = utf-8
import asyncio
import os
import numpy as np
import torch
import traceback
import pandas as pd
import cv2

from modules.strongsort import StrongSortTracker
from modules.processor import StreamProcessor
from modules.analyzer import AttackAnalyzer, BehaviorAnalyzer, EnvAnalyzer, PlateAnalyzer
from modules.agent import LargeLanguageModelManager, DeepSeekServe, test_deepseek_serve
from modules.serve import MQTTServer, SMTPClient, ReportExporter, on_connect, on_message

import argparse
from tqdm import tqdm
import time
import subprocess
# import matplotlib.pyplot as plt

def user_sleep(seconds):
    '''
    给用户一个可见进度条的的等待时间, 便于用户观察系统状态
    可以使用 Ctrl + C 来中断等待, 进入下一步测试
    '''
    print("本项测试完毕, 正在等待下一项测试... (按 Ctrl + C 可跳过等待)")
    with tqdm(range(seconds), desc="等待中", unit="s") as tbar:
        try:
            for _ in tbar:
                time.sleep(1)
        except KeyboardInterrupt:
            # 将进度条更新为 100% 并完成
            tbar.n = seconds
            tbar.refresh()
        finally:
            print("\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="单元测试主函数")
    parser.add_argument('--strongsort', action='store_true', help='测试 StrongSortTracker 模块')
    parser.add_argument('--processor', action='store_true', help='测试 StreamProcessor 模块')
    parser.add_argument('--attack', action='store_true', help='测试 AttackAnalyzer 模块')
    parser.add_argument('--behavior', action='store_true', help='测试 BehaviorAnalyzer 模块')
    parser.add_argument('--deepseek', action='store_true', help='测试 DeepSeekServe 模块')
    parser.add_argument('--llmmanager', action='store_true', help='测试 LargeLanguageModelManager 模块')
    parser.add_argument('--env', action='store_true', help='测试 EnvAnalyzer 模块')
    parser.add_argument('--mqtt', action='store_true', help='测试 MQTTServer 模块')
    parser.add_argument('--smtp', action='store_true', help='测试 SMTP 邮件发送功能')
    parser.add_argument('--report', action='store_true', help='测试 Word 报告导出功能')
    parser.add_argument('--plate', action='store_true', help='测试 PlateAnalyzer 模块')
    parser.add_argument('--all', action='store_true', help='测试所有模块')
    opt = parser.parse_args()

    if opt.strongsort or opt.all:
        try:
            '''
            StrongSortTracker 的单元测试函数
            主要实现了 delta 跟踪分析, 便于后续直接处理跟踪数据进行行为分析
            track_simulation 模拟跟踪数据生成
            '''
            tracker = StrongSortTracker(
                strong_sort_weights=os.path.abspath(os.path.join('models', 'osnet_x0_25_msmt17.pt')),
                config_strongsort=os.path.abspath(os.path.join('submodules', 'strongsort', 'strong_sort', 'configs', 'strong_sort.yaml')),
                max_det=1000,
                device='cuda:0' if torch.cuda.is_available() else 'cpu',
                save_dir=os.path.abspath(os.path.join('runs', 'track', 'exp')),
                line_thickness=3,
                mask=np.zeros((640,640,3), dtype=np.uint8)
            )

            # 模拟跟踪函数
            tracker.track_simulation()
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()
        
        user_sleep(20)

    if opt.processor or opt.all:
        try:
            '''
            StreamProcessor 的单元测试函数
            支持使用 rtmp 流和本地视频两种方式
            '''
            tracker = StrongSortTracker(
                strong_sort_weights=os.path.abspath(os.path.join('models', 'osnet_x0_25_msmt17.pt')),
                config_strongsort=os.path.abspath(os.path.join('submodules', 'strongsort', 'strong_sort', 'configs', 'strong_sort.yaml')),
                max_det=1000,
                device='cuda:0' if torch.cuda.is_available() else 'cpu',
                save_dir=os.path.abspath(os.path.join('runs', 'track', 'exp')),
                line_thickness=3,
                mask=np.zeros((640,640,3), dtype=np.uint8)
            ) # 必须先初始化 Strongsort 才可以
            loader = StreamProcessor(
                # source='http://192.168.43.63:7000/live?app=live&stream=114514',
                source=r'E:\pandownload1\ML\Police\Project\source\valid.mp4',
                target='rtmp://192.168.43.63:1935/live/1919810',
                split_sec=30,
                model_path=os.path.join('models', 'yolo11s.pt'),
                device='cuda:0',
                redis_conf={
                    'host': 'localhost',
                    'port': 6379,
                    'db': 1
                },
                redis_key='loader_01',
                enable_push=False,
                enable_save=True
            )

            # 直播分析函数
            loader.bind_tracker(tracker=tracker)
            loader.process_stream(base_dir=os.path.join("runs", "live"))
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()
        finally:
            loader.stop_all_processes()

        user_sleep(20)

    if opt.attack or opt.all:
        try:
            '''
            AttackAnalyzer 的单元测试函数
            完全抽离了模型和数据库连接, 直接调用 run 方法即可
            '''
            attack = AttackAnalyzer(
                model_path=os.path.join('models', 'random_forest_model.pkl'),
                db_url='mysql+pymysql://nanoka:12345678n@localhost:3306/manage'
            )

            # 数据库分析函数
            code, string = attack.run()
            print(f"\n当前状态 {code} - {string}\n")
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()

        user_sleep(20)

    if opt.behavior or opt.all:
        try:
            '''
            BehaviorAnalyzer 的单元测试函数
            predict 支持两种模式

            主要优化部分:
            - CPU : 多进程跟踪、串行
            - GPU : 串行
            '''
            analyzer = BehaviorAnalyzer(
                method='deep',
                module_kargs = { 
                    'input_size': 2,
                    'hidden_size': 64,
                    'num_layers': 2,
                    'num_classes': 5 
                }, 
                model_path = os.path.join('models', 'behavior_model_d1sigma_silu.pth'), 
                device = 'cpu'
            )

            # 路径分析函数
            data_x = np.random.rand(15, 2)*200
            data_x_2 = np.random.rand(80, 2)*200
            code, behavior = analyzer.predict(torch.tensor(data_x, dtype=torch.float32)) # 单条识别
            print(f"单条识别结果: {code} - {behavior}")

            lst = analyzer.predict_parallel([torch.tensor([data_x], dtype=torch.float32), 
                                            torch.tensor([data_x_2], dtype=torch.float32)]) # 多条并行识别
            for idx, (code, behavior) in enumerate(lst):
                print(f"批量识别结果 {idx}: {code} - {behavior}")
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()

        user_sleep(20)

    if opt.deepseek or opt.all:
        try:
            '''
            DeepSeekServe 的单元测试函数
            主要测试了模型的稳定性与流式访问接口, prompt 的调整还需要探索
            '''
            serve = DeepSeekServe()
            serve.create_deepseek(
                chat_format='zhipuai', 
                llama_path=os.path.join('models', 'DeepSeek-R1-Distill-Qwen-1.5B-Q8_0.gguf')
            )

            # 调用 DeepseekServe 测试函数
            asyncio.run(test_deepseek_serve())
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()

        user_sleep(20)

    if opt.llmmanager or opt.all:
        llm_manager = LargeLanguageModelManager(llm_model='deepseek-r1')

        lnpf = pd.DataFrame({"plate": ["京A12345", "沪B67890"]})
        qtpf = pd.DataFrame({"question": ["请问这辆车在红灯状态下位于直行车道且直左转中，有无交通违法行为？请简要说明理由。", "请问这辆车在绿灯状态下位于右转车道且正在右转，有无交通违法行为？请简要说明理由。"]})

        try:
            pf = asyncio.run(llm_manager.ask_function(lnpf, qtpf))
            print(f"(Deepseek) 第1次询问结果:\n{pf}\n")

            llm_manager.change_llm_model('zhipuai')
            pf = llm_manager.ask_function(lnpf, qtpf)
            print(f"(Zhipuai) 第2次询问结果:\n{pf}\n")
            
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()

        user_sleep(20)

    if opt.env or opt.all:
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
            
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()

        user_sleep(20)

    if opt.mqtt or opt.all:
        mqtt_serve = MQTTServer(
            base_dir=os.path.join('submodules', 'mosquitto'),
            yaml_path=os.path.join('cfg', 'config.yaml')
        )


        try:
            mqtt_serve.start_mosquitto()
            time.sleep(2)
            result = subprocess.run(args=['tasklist', '|', 'findstr', 'mosquitto'], 
                                    shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            if result.returncode == 0:
                # 输出查询内容
                print(f"\nMosquitto 服务器进程信息:\n{result.stdout}")
            else:
                print("MQTT 服务器启动失败, 请检查 mosquitto 进程是否正常运行\n")
                raise RuntimeError("MQTT 服务器启动失败")

            mqtt_serve.register_mqtt_service(on_connect, on_message)
            print("MQTT 服务器已注册服务\n")

            input("请打开 MQTTX 连接, 按 Enter 键继续测试 MQTT 消息发布功能...\n")
            mqtt_serve.publish_message(topic='awa', payload='Hello MQTT!')
            mqtt_serve.fall_in_loop() # 记得把 on_message 打开打印功能
            
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()
        finally:
            mqtt_serve.stop_mosquitto()

        user_sleep(20)

    if opt.smtp or opt.all:
        smtp_client = SMTPClient(
            yaml_path=os.path.join('cfg', 'config.yaml'),
            subject="测试邮件 - 来自 Police AI 系统",
        )

        try:
            smtp_client.send_email(
                event_type="测试事件",
                code=0
            )
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()

        user_sleep(20)

    if opt.report or opt.all:
        report_exporter = ReportExporter(
            output_dir=os.path.join('runs', 'reports')
        )

        try:
            report_exporter.export_report(
                report_name="测试报告",
                format='pdf',
                status_dict={ 
                    "datetime_report": "xx",
                    "plate": "津ABCDEF",
                    "report": "（这是一段普通的报告内容）",
                    "administrator": "审核员 A-103",
                    "template_path": os.path.abspath(os.path.join('source', 'report.docx'))
                }
            )

            report_exporter.export_report(
                report_name="测试报告",
                format='docx',
                status_dict={ 
                    "datetime_report": "xx",
                    "plate": "津ABCDEF",
                    "report": "（这是一段普通的报告内容）",
                    "administrator": "审核员 A-103",
                    "template_path": os.path.abspath(os.path.join('source', 'report.docx'))
                }
            )
        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()

        user_sleep(20)

    if opt.plate or opt.all:
        plate_analyzer = PlateAnalyzer(
            url = 'http://localhost:82/recognize_plate', 
            timeout = 30, retry = 1
        )

        try:
            image = cv2.imread(r"E:\pandownload1\ML\Police\Project\source\moto.png")
            result = plate_analyzer.det(image)

            print(result['plates'][0]['plate_no'])

        except KeyboardInterrupt:
            print("\n程序已正常退出（用户中断）")
        except Exception as e:
            print(f"\n程序异常退出: {e}")
            traceback.print_exc()

        user_sleep(20)

    if not any([opt.all, opt.strongsort, opt.processor, opt.attack, opt.behavior, 
                opt.deepseek, opt.llmmanager, opt.mqtt, opt.smtp, opt.report, opt.env, opt.plate]):
        print("\n未指定测试项，请使用 --help 查看可用选项\n")
    else:
        print("\n测试完成, 请详细阅读 Output 内容\n")