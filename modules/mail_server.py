import json
import smtplib
import paho.mqtt.client as mqtt
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import requests

# 配置好 MQTT 代理
broker = "www.ayasaki-nanoka.xyz"
port = 30001
username = "admin"
password = "admin"

# 配置好邮箱账户信息
smtp_server = "smtp.163.com"
smtp_port = 465

sender_email = "zhengbindesu@163.com"
sender_password = "QKZEZBjNBMYtaJUR"

receiver_email = "zhengbindesu@gmail.com"
subject = "你的服务器正在被攻击"

# 配置好 HTTP 服务器
url = "http://127.0.0.1:81"

def on_connect(client, userdata, flags, rc):
    '''
    这个是连接出结果后的回调函数
    '''
    print(f"MQTT 连接返回码: {rc}")
    client.subscribe("awa")

# 当接收到消息时的回调函数
def on_message(client, userdata, msg):
    '''
    订阅的主题获得消息之后的回调函数
    '''
    print(f"MQTT 接收到来自 {msg.topic} 主题的消息: {msg.payload.decode()}")
    # 我们接收到的数据形如 {"Event": 0, "Code": 0, "Type": "正常访问"}, 我们将字符串转换为 json 对象
    
    try:
        data = json.loads(msg.payload.decode())
        
        # 我们只需要处理 Event 为 0 的数据
        if int(data['Event']) == 0:
            # 我们首先比对数据库状态
            json_data = {
                "security": '686814B53720631FB57FD83CE57A1D20',
                "code": data['Code']
            }
            
            # response 形如 {'Code': 0, 'Message': 'Upload successfully', 'Change': 1}
            response = requests.post(url + '/security', json=json_data)
            response_data = response.json()
            print("接收到的数据:", response_data)
            
            # 如果没有发生改变, 那么我们不需要发送邮箱数据
            if int(response_data['Change']) != 0:
                print("数据库状态发生改变, 需要发送邮件")
                body = "我们检测到了你受到了{}, 认证码为: {}, 时间为: {}.".format(data['Type'], data['Code'], datetime.now())

                message = MIMEMultipart()
                message["From"] = sender_email
                message["To"] = receiver_email
                message["Subject"] = subject

                message.attach(MIMEText(body, "plain"))

                try:
                    with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
                        server.login(sender_email, sender_password)
                        server.sendmail(sender_email, receiver_email, message.as_string())
                        print("邮件发送成功！")
                except Exception as e:
                    print(f"邮件发送失败: {e}")
    except json.JSONDecodeError:
        print("接收到的消息不是有效的 JSON 格式")
    except KeyError:
        print("接收到的消息缺少必要的字段")
    except Exception as e:
        print(f"处理消息时发生错误: {e}")
    

def handle_mqtt_service():
    '''
    开始监听 MQTT 服务
    '''
    client = mqtt.Client()
    client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(broker, port, 60)
    client.loop_forever()
    

if __name__ == "__main__":
    '''
    循环处理我们的数据
    '''
    handle_mqtt_service()
    
