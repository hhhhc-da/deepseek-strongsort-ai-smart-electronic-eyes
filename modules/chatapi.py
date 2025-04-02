# coding=utf-8
from modules.deepseek import chat
import pandas as pd
import re

def request_deepseek(lnpf:pd.DataFrame, qtpf:pd.DataFrame):
    '''
    通过批量生成的问题来逐个询问 DeepSeek, 后续如果 DeekSeek 后端支持并行这里可以改成并行生成
    '''
    reply = []
    for plate, question in zip(lnpf['plate'].values, qtpf["question"].values):
        print("开始询问 DeepSeek:", question)
        
        # 获取我们的答案, 正则表达式保正确性
        response = chat(question).strip()
        response = re.sub(r"车辆.*?在", "车辆{}在".format(plate), str(response))
        
        reply.append(response)
        print("DeepSeek 回复信息:", response, "\n")
        
    pf = pd.DataFrame({
        "reply": reply
    })
    print(pf, "\n")
    return pf

if __name__ == '__main__':
#     question = "现在有一辆车A进行右转，右边有一个行人B正常直行，这时候发生了交通事故，这是谁的责任?"
    
#     question = '''视频第10帧，绿灯，车牌津AH2568，位于第2车道（直行车道），正在直行，未越过停止线，
# 视频第20帧，红灯，车牌津AH2568，位于第2车道（直行车道），正在直行，未越过停止线，
# 视频第30帧，红灯，车牌津AH2568，位于第2车道（直行车道），正在直行，已越过停止线，
# 请问视频中有没有交通违法行为？请尽可能简短的回答问题。'''

    question = '''视频第10帧，红灯，车牌津AH2568，位于第2车道（直行车道），正在直行，未越过停止线，
视频第10帧，红灯，车牌津A15SHE，位于第2车道（直行车道），正在直行，未越过停止线，
两辆车发生了碰撞，请问视频中该怎么划分？请尽可能简短的回答问题。'''


    print("生成问题(来自程序):", question)    
    # 运行客户端
    print("问答结果（来自DeepSeek）:", chat(question))