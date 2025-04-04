import paho.mqtt.client as mqtt

# 配置好 MQTT 代理
broker = "www.ayasaki-nanoka.xyz"
port = 30001
username = "admin"
password = "admin"

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

def mqtt_client():
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
    mqtt_client()


