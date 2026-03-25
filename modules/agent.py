# coding = utf-8
import os
import pandas as pd
from typing import Literal
from zhipuai import ZhipuAI
import re
import yaml
from copy import copy
from llama_cpp import Llama
import asyncio

'''
统一接口管理大语言模型的交互

--------------------------------------
                Models
--------------------------------------
- ZhipuAI 的 ChatGLM-4-Flash 模型 (通过 API 访问)
- 本地部署的 DeepSeek-R1 模型 (通过 llama-cpp 接口访问
--------------------------------------

--------------------------------------
                Classes
--------------------------------------
- LargeLanguageModelManager 类: 统一管理大语言模型的接口, 支持模型切换和资源管理
- DeepSeekServe 类: 专门负责与 DeepSeek 模型进行交互, 提供流式输出接口
--------------------------------------

模型统一使用 Llama-2 的聊天格式, 以保证输入输出的一致性和兼容性
请避免占用太多核心数导致其他服务运行出现异常
'''

class LargeLanguageModelManager():
    '''
    大语言模型接口类, 用于与语言模型进行交互
    同时负责管理语言模型相关内容
    '''
    def __init__(self, 
                 llm_model:Literal['deepseek-r1', 'zhipuai']='zhipuai', 
                 yaml_path:str=os.path.join('cfg', 'config.yaml'),
                 ):
        yaml_path = os.path.abspath(yaml_path)
        if not os.path.exists(yaml_path):
            raise FileNotFoundError(f"YAML 配置文件未找到: {yaml_path}")
        
        with open(yaml_path, 'r', encoding='utf-8') as f:
            self.config = yaml.safe_load(f)

        self.llm_model = llm_model
        self.serve = DeepSeekServe() # 如果不使用我们就不创建

        self.api_key = self.config['llm']['chatglm-api']
        self.chatglm_model = ZhipuAI(api_key=self.api_key) # 只是一个网络包封装, 不占用太多内存

        self.ask_function = None

        if self.llm_model == 'zhipuai':
            self.ask_function = self.chatglm_response
            
        elif self.llm_model == 'deepseek-r1':
            self.serve.create_deepseek(
                chat_format='llama-2', 
                llama_path=self.config['llm']['llama-path']
            )
            self.ask_function = self.deepseek_response

        prompt_path = self.config['llm']['prompt']
        self.prompt = []
        if os.path.exists(prompt_path):
            with open(prompt_path, 'r', encoding='utf-8') as f:
                while line := f.readline().strip():
                    if line.startswith("(System)"):
                        self.prompt.append({"role": "system", "content": line[len("(System)"):].strip()})
                    elif line.startswith("(User)"):
                        self.prompt.append({"role": "user", "content": line[len("(User)"):].strip()})
                    elif line.startswith("(DeepSeek)"):
                        self.prompt.append({"role": "assistant", "content": line[len("(DeepSeek)"):].strip()})
                    else:
                        print(f"无法识别的行格式: {line}")

        print(f"成功加载 Prompt 模板: \n{self.prompt}\n")

    def change_llm_model(self, new_model:Literal['deepseek-r1', 'zhipuai']):
        '''
        切换语言模型, 这里会清理当前模型资源, 然后重新初始化新的模型
        '''
        if new_model == self.llm_model:
            print(f"当前已经是 {new_model} 模型, 无需切换")
            return
        
        # 从本地模型切换出去之后要即时回收内存
        if self.llm_model == 'deepseek-r1':
            self.serve.remove_deepseek()
        
        self.llm_model = new_model
        if self.llm_model == 'zhipuai':
            self.ask_function = self.chatglm_response

        elif self.llm_model == 'deepseek-r1':
            self.serve.create_deepseek(
                chat_format='llama-2', 
                llama_path=self.config['llm']['llama-path']
            )
            self.ask_function = self.deepseek_response

    async def deepseek_response(self, lnpf:pd.DataFrame, qtpf:pd.DataFrame, option=None):
        '''
        通过批量生成的问题来逐个询问 DeepSeek
        因为我们后端 DeepSeek 是单线程的, 所以实在没有办法进行多线程优化, 只能逐个生成了
        '''
        reply = []
        for plate, question in zip(lnpf['plate'].values, qtpf["question"].values):
            print("开始询问 DeepSeek:", question)
            
            # 获取我们的答案, 正则表达式保正确性, 主要是 7B 参数限制, 所以需要混合 Agent 提升精度
            response = await self.request_deepseek(question, option=option)
            response = response.strip()
            response = re.sub(r"车辆.*?在", "车辆{}在".format(plate), str(response))
            
            reply.append(response)

        return pd.DataFrame({"reply": reply})
    
    async def request_deepseek(self, question, option=None):
        '''
        根据输入的内容进行对话, 这里的对话是单轮的, 不涉及上下文管理
        但是如果后续需要增加上下文管理功能, 可以在这里进行修改, 比如增加一个历史消息列表, 每次对话都将历史消息作为输入的一部分
        '''
        # message = [
        #     {"role": "system", "content": "你是一个乐于解答各种问题的助手，你的任务是为用户提供专业、准确、有见地的建议。"},
        #     {"role": "user", "content": question}
        # ]
        message = copy(self.prompt)
        message.append({"role": "user", "content": question})

        full_response = ""
        print("\n开始生成响应...")
        async for text_chunk in self.serve.generate(messages=message):
            full_response += text_chunk
            print(text_chunk, end='', flush=True)
        print('\n')
        
        return full_response


    def chatglm_response(self, lnpf:pd.DataFrame, qtpf:pd.DataFrame, option=None):
        '''
        通过批量生成的问题来逐个询问
        使用 concurrent.futures 进行并行生成, 提高效率
        '''
        reply = []
        if (len(lnpf) != len(qtpf)):
            raise RuntimeError('len(lnpf) != len(qtpf)')
        
        for plate, question in zip(lnpf['plate'].values, qtpf["question"].values):
            print("开始询问 ChatGLM:", question)
            
            # 获取我们的答案, 正则表达式保正确性
            response = self.request_zhipuai_chatglm(content=question, option=option).strip()
            response = re.sub(r"车辆.*?在", "车辆{}在".format(plate), str(response))
            
            reply.append(response)
            print("ChatGLM 回复信息:", response, "\n")

        return pd.DataFrame({"reply": reply})

    def request_zhipuai_chatglm(self, content='', option=None) -> str:
        """
        请求 ZhipuAI 的 ChatGLM-4-Flash 模型进行对话
        直接返回单句话的回复内容, 不进行任何格式化处理
        """
        if len(content) == 0:
            return False, "内容不能为空"

        message = copy(self.prompt)
        message.append({"role": "user", "content": content})

        response = self.chatglm_model.chat.completions.create(
            model="glm-4-flash",
            messages=message,
        )

        return response.choices[0].message.content
    
class DeepSeekServe():
    '''
    DeepSeek 后端接口类, 使用 llama-cpp 原生的 create_chat_completion 接口
    兼容 ZhipuAI/OpenAI 格式的 messages, 支持流式输出
    '''
    def __init__(self):
        '''
        这里不该插手 prompt 的内容, 只负责提供 Llama 接口
        '''
        self.llama = None
        self.chat_format = None  
        self.llama_path = None

    def create_deepseek(self, 
                        chat_format:Literal['llama-2']='llama-2',
                        llama_path=os.path.join("models", "DeepSeek-R1-Distill-Qwen-1.5B-Q8_0.gguf")
                        ):
        '''
        创建 Llama 模型实例 (使用原生 chat 接口)
        '''
        self.chat_format = chat_format
        self.llama_path = os.path.abspath(llama_path)

        if not os.path.exists(self.llama_path):
            raise FileNotFoundError(f"Llama 模型文件不存在: {self.llama_path}")
        
        self.llama = Llama(
            model_path=self.llama_path,
            n_ctx=512,
            n_threads=2,
            chat_format=self.chat_format,
            verbose=False
        )
        print(f"成功加载 DeepSeek 模型 (chat 格式: {self.chat_format})")

    def remove_deepseek(self):
        '''
        清理模型资源, 保证不占用其他应用的资源
        '''
        if hasattr(self, 'llama') and self.llama is not None:
            del self.llama
            self.llama = None

        self.chat_format = None
        self.llama_path = None

    async def generate(self, messages, temperature:float=0.4, max_tokens:int=512, stop_tokens:list=["<tool_call>"], stream:bool=True):
        '''
        DeepSeek 生成接口
        '''
        if self.llama is None:
            raise RuntimeError("DeepSeek 模型未初始化, 请先调用 create_deepseek")

        try:
            # 调用原生chat接口, stream 表示流式输出
            result = self.llama.create_chat_completion(
                messages=messages,
                max_tokens=max_tokens,
                temperature=temperature,
                stop=stop_tokens,
                stream=stream
            )

            if stream:
                full_response = ""
                for chunk in result:
                    if chunk["choices"][0]["finish_reason"] is None:
                        text = chunk["choices"][0]["delta"].get("content", "")
                        if text:
                            full_response += text
                            yield text
            else:
                text = result["choices"][0]["message"]["content"].strip()
                # print("完整响应:", text)
                yield text
                
        except Exception as e:
            print(f"(Deepseek Genarate) Exception: {e}")
            if str(e) == "Close":
                return
            raise

async def test_deepseek_serve():
    deepseek_serve = DeepSeekServe()
    test_llama_path = os.path.join("models", "DeepSeek-R1-Distill-Qwen-1.5B-Q8_0.gguf")
    
    try:
        messages = []
        with open(r'E:\pandownload1\ML\Police\Project\cfg\prompt.txt', 'r', encoding='utf-8') as f:
            while line := f.readline().strip():
                if line.startswith("(System)"):
                    messages.append({"role": "system", "content": line[len("(System)"):].strip()})
                elif line.startswith("(User)"):
                    messages.append({"role": "user", "content": line[len("(User)"):].strip()})
                elif line.startswith("(DeepSeek)"):
                    messages.append({"role": "assistant", "content": line[len("(DeepSeek)"):].strip()})

        messages.append({"role": "user", "content": "假设以下交通场景，车辆位于直行车道且直左转中，红绿灯状态是红灯，该车辆有无交通违法行为？请先输出结论（**有交通违法行为**或者**无交通违法行为**）然后简要说明理由，限制在100字以内。"})
        print(f"\nprompt:\n{messages}\n")

        deepseek_serve.create_deepseek(
            chat_format='llama-2',
            llama_path=test_llama_path
        )
        
        # 接收流式输出并拼接完整响应
        full_response = ""
        print("\n开始生成响应...")
        async for text_chunk in deepseek_serve.generate(messages):
            full_response += text_chunk
            print(text_chunk, end='', flush=True)
        print('\n')
        
        # 先清理模型资源, 再次测试生成函数是否正确处理未初始化的情况
        deepseek_serve.remove_deepseek()
        try:
            async for _ in deepseek_serve.generate(messages):
                pass
        except RuntimeError as e:
            print(f"预期异常捕获成功: {e}\n")

    except FileNotFoundError as e:
        print(f"模型文件未找到，请检查路径: {e}")
    except Exception as e:
        print(f"测试过程中出现未预期的异常: {e}")
        raise
    finally:
        deepseek_serve.remove_deepseek()
        

if __name__ == "__main__":
    llm_manager = LargeLanguageModelManager(llm_model='deepseek-r1')

    lnpf = pd.DataFrame({"plate": ["京A12345", "沪B67890"]})
    qtpf = pd.DataFrame({"question": ["请问这辆车在红灯状态下位于直行车道且直左转中，有无交通违法行为？请简要说明理由。", "请问这辆车在绿灯状态下位于右转车道且正在右转，有无交通违法行为？请简要说明理由。"]})

    try:
        pf = llm_manager.ask_function(lnpf, qtpf)
        print(f"(Deepseek) 第1次询问结果:\n{pf}\n")

        llm_manager.change_llm_model('zhipuai')
        pf = llm_manager.ask_function(lnpf, qtpf)
        print(f"(Zhipuai) 第2次询问结果:\n{pf}\n")

    except KeyboardInterrupt:
        print("\n程序已正常退出（用户中断）")
    except Exception as e:
        print(f"\n程序异常退出: {e}")
