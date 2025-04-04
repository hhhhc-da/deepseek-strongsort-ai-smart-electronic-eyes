from flask import Flask, request, redirect, g, jsonify
from flask_cors import CORS
import pymysql
import threading
from datetime import datetime, timedelta
import uuid
import pandas as pd
import psutil

app = Flask(__name__)
CORS(app)

# 嵌入式平台下不需要考虑高并发, 更多的是安全性
data_lock = threading.Lock()

arg_kwargs = {
    'host': "localhost",
    'port': 3308,
    'user': 'nanoka',
    'password': "12345678n",
    'database': "manage",
    'charset': 'utf8mb4'
}

db = pymysql.connections.Connection(**arg_kwargs)
cursor = db.cursor()

@app.route('/')
def index():
    '''
    根路径重定向到 /login
    '''
    return redirect('/login')

@app.route('/login', methods=['POST'])
def login():
    '''
    登录函数, 用于记录所有登录行为
    '''
    data = request.get_json()
    if not data:
        return jsonify({'Code': -2, 'Error': 'No JSON data received'}), 400

    username = data.get('username')
    password = data.get('password')
    
    # 检查用户名和密码是否为空
    if not username or not password:
        return jsonify({'Code': -2, 'Error': 'Missing username or password'}), 400

    token = None
    # 访问数据库
    try:
        sql = "SELECT password FROM account WHERE account = %s;"
        cursor.execute(sql, (username))
        result = cursor.fetchall()
        
        try:
            pwd = result[0][0] if result else None
            if pwd is None or pwd != password:
                # 登录失败
                return jsonify({'Code': -1, 'Error': 'Invalid username or password'}), 401
        except IndexError:
            return jsonify({'Code': -1, 'Error': 'Invalid username or password'}), 401
        except Exception as e:
            app.logger.error(f"Error fetching password: {e}")
            return jsonify({'Code': -1, 'Error': 'Invalid username or password'}), 401
        
        # 插入 Token 数据
        token = uuid.uuid4()
        sql = "INSERT INTO login (username, token, time) VALUES (%s, %s, %s);"
        cursor.execute(sql, (username, token, datetime.now()))
        db.commit()
        
        return jsonify({'Code': 0, 'Message': 'Login successful', 'Token': 'Bearer {}'.format(token)}), 200
    
    except Exception as e:
        app.logger.error(f"Error inserting login data: {e}")
        db.rollback()
        
        return jsonify({'Code': -1, 'Error': 'Database error'}), 500

@app.route('/fetch_data', methods=['POST'])
def fetch_data():
    '''
    获取数据 API, 可以获取一些基本信息
    '''
    data = request.get_json()
    if not data:
        return jsonify({'Code': -2, 'Error': 'No JSON data received'}), 400

    account = data.get('account')
    credit = data.get('credit')
    
    # 检查用户名和 Token 是否为空
    if not account or not token:
        return jsonify({'Code': -2, 'Error': 'Missing username or password'}), 400

    # 访问数据库
    try:
        # 身份校验
        sql = "SELECT token, time FROM cookie WHERE account = %s;"
        cursor.execute(sql, (account))
        result = cursor.fetchall()
        
        try:
            token = result[0][0] if result else None
            if token is None or token != credit:
                # 身份验证失败
                return jsonify({'Code': -1, 'Error': 'Invalid token'}), 401
            
            # 校验时间戳
            time = result[0][1] if result else None
            if time is None:
                return jsonify({'Code': -1, 'Error': 'Invalid token'}), 401
            # Token 有效期设为 30 天
            elif time < datetime.now() - timedelta(days=30):
                # Token 过期
                try:
                    # 更新数据库中的 Token
                    sql = "UPDATE cookie SET time = NOW(), token = %s WHERE account = %s;"
                    credit = 'Bearer {}'.format(uuid.uuid4())
                    cursor.execute(sql, (credit, account))
                    db.commit()
                except Exception as e:
                    app.logger.error(f"Error fetching token: {e}")
            
        except IndexError:
            return jsonify({'Code': -1, 'Error': 'Invalid token'}), 401
        except Exception as e:
            app.logger.error(f"Error fetching token: {e}")
            return jsonify({'Code': -1, 'Error': 'Invalid token'}), 401
        
        # 获取数据
        sql = "SELECT review FROM behavior;"
        cursor.execute(sql)
        result = cursor.fetchall()
        
        acc, cnt = 100., len(result)
        pf = pd.DataFrame(result, columns=["review"])
        hpf = pf[pf['review'] != -1]
        
        if len(hpf['review'].values) > 0:
            # 计算准确率
            acc = hpf['review'].apply(lambda x: 0 if x == 0 else 1).sum() * 100. / len(hpf['review'].values)
        
        # 获取系统信息
        cpu = psutil.cpu_percent(interval=1)
        mem = psutil.virtual_memory().percent
        
        # 获取当前时间
        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # 获取文字数据
        sql = "SELECT plate, text, time FROM behavior ORDER BY time DESC LIMIT 10;"
        cursor.execute(sql)
        result = cursor.fetchall()
        db.commit()
        
        # 参数集合
        params = {'Acc': acc, 'Num_type': 2, 'Cnt': cnt, 'Cpu': cpu, 'Mem': mem, 'Credit': credit,  'Time': now}
        # 标准数据字典
        behavior_data = [{'plate': row[0], 'text': row[1], 'time': row[2].strftime('%Y-%m-%d %H:%M:%S')} for row in result]
        
        return jsonify({'Code': 0, 'Message': 'Data fetched successfully', 'Params': params, 'Data': behavior_data}), 200
    
    except Exception as e:
        app.logger.error(f"Error in fetching data: {e}")
        db.rollback()
        return jsonify({'Code': -3, 'Error': 'Database error'}), 500
    
@app.route('/upload', methods=['POST'])
def deepseek_upload_data():
    '''
    接收来自程序的数据, 用于保存每一个 DeepSeek 输出的结果
    '''
    data = request.get_json()
    if not data:
        return jsonify({'Code': -2, 'Error': 'No JSON data received'}), 400

    credit = data.get('security')
    plate = data.get('plate')
    text = data.get('text')
    real = data.get('real')
    
    # 检查秘钥是否为空
    if not credit:
        return jsonify({'Code': -2, 'Error': 'Missing username or password'}), 400

    # 访问数据库
    try:
        sql = "SELECT hash FROM security;"
        cursor.execute(sql)
        result = cursor.fetchall()
        
        # 身份验证
        hash = result[0][0] if result else None
        if hash is None or hash != credit:
            # 身份验证失败
            return jsonify({'Code': -1, 'Error': 'Invalid token'}), 401

        # 上传数据库
        sql = "INSERT INTO behavior (plate, text, review, time) VALUES (%s, %s, %s, NOW());"
        cursor.execute(sql, (plate, text, real))
        db.commit()
        return jsonify({'Code': 0, 'Message': 'Upload successfully'}), 200
    
    except Exception as e:
        app.logger.error(f"Error in uploading data: {e}")
        db.rollback()
        return jsonify({'Code': -3, 'Error': 'Database error'}), 500
  
@app.before_request
def before_request():
    '''
    同步 request 和 response, 加入线程锁
    '''
    # 获取线程锁
    data_lock.acquire()
    
    request_id = str(uuid.uuid4())
    g.request_id = request_id
    
    client_ip = request.remote_addr
    client_port = request.host.split(":")[-1]
    request_path = request.path
    request_method = request.method
    request_body = request.get_data(as_text=True)
    
    try:
        if request_body is not None:
            sql = "INSERT INTO web (ip, port, path, method, body, time, request_id) VALUES (%s, %s, %s, %s, %s, NOW(), %s)"
            cursor.execute(sql, (client_ip, client_port, request_path, request_method, request_body, request_id))
        else:
            sql = "INSERT INTO web (ip, port, path, method, time, request_id) VALUES (%s, %s, %s, %s, NOW(), %s)"
            cursor.execute(sql, (client_ip, client_port, request_path, request_method, request_id))
        db.commit()
        
    except Exception as e:
        app.logger.error(f"Error in before_request: {e}")
        
@app.after_request
def after_request(response):
    '''
    将同步后的信息都上传到 MySQL
    '''
    request_id = g.get('request_id', 'N/A')
    status_code = response.status_code
    
    try:
        sql = "UPDATE web SET status = %s WHERE request_id = %s"
        cursor.execute(sql, (status_code, request_id))
        db.commit()
        
    except Exception as e:
        app.logger.error(f"Error in after_request: {e}")
    
    data_lock.release()
    return response
        
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=81, debug=False)