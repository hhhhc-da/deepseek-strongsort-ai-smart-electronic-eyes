from flask import Flask, request, g, jsonify, make_response, send_file
from flask_cors import CORS
import pymysql
import threading
from datetime import datetime, timedelta
import uuid
import pandas as pd
import psutil
import paho.mqtt.client as mqtt
import argparse
import yaml
import os
import mimetypes
from waitress import serve
import logging
import traceback

from serve import ReportExporter

# 传奇 WSGI 纯净服务器不需要回显！！！
logging.getLogger('waitress').setLevel(logging.ERROR)

mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('application/javascript', '.mjs')

HTTP_HOST = '0.0.0.0'
HTTP_PORT = 81
HTTP_THREADS = 4

BASE_DIR = r'E:\pandownload1\ML\Police\Project'
VUE_DIST_DIR = os.path.join(BASE_DIR, 'web', 'dist')

# 全局 Code 回复状态
SERVE_SUCCESS = 0
INVALID_TOKEN = 1
TOKEN_EXPIRED = 2
NONE_RESOURCE = 3
INVALID_DAFMT = 4
REQUIRED_HEAD = 5
INVALID_INPUT = 6
DB_NONE_ERROR = 7
INVALID_PBTOK = 8

app = Flask(__name__, static_folder=None)
CORS(app)

# 嵌入式平台下不需要考虑高并发, 更多的是安全性
data_lock = threading.Lock()

arg_kwargs = {
    'host': "localhost",
    'port': 3306,
    'user': 'nanoka',
    'password': "12345678n",
    'database': "manage",
    'charset': 'utf8mb4'
}

db = pymysql.connections.Connection(**arg_kwargs)
cursor = db.cursor()

broker = None
port = None
username = None
password = None

def parse_opt():
    '''
    获取 YAML 配置文件
    '''
    parser = argparse.ArgumentParser()
    parser.add_argument('--yaml', type=str, default=os.path.join(BASE_DIR, 'cfg', 'config.yaml'), help='TAML file path')
    parser.add_argument('--verbose', action='store_true', help='启用 Flask 日志输出（非生产环境）')
    parser.add_argument('--debug', action='store_true', help='启用 Flask 的调试模式')
    opt = parser.parse_args()
    return opt

def _generate_token() -> str:
    '''
    生成网页需要的 Token 信息, 可修改 token 生成逻辑
    '''
    token = uuid.uuid4()
    return token

def _update_token_by_username(username) -> str:
    '''
    使用 username 对 token 进行更新并返回 token, 此处不做校验因为是内部函数
    '''
    global db, cursor

    sql = "SELECT token FROM cookie WHERE account = %s;"
    cursor.execute(sql, (username))
    result = cursor.fetchall()
    
    if len(result) != 0:
        sql = "DELETE FROM cookie WHERE account = %s; "
        cursor.execute(sql, (username))
        db.commit()
    
    token = _generate_token()
    sql = "INSERT INTO cookie (account, token, time) VALUES (%s, %s, %s);"
    cursor.execute(sql, (username, token, datetime.now()))
    db.commit()

    return token

def _check_token(credit):
    '''
    校验 token 的有效性，简化代码
    '''
    global db, cursor

    return {'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS'}, 0

    sql = "SELECT time FROM cookie WHERE token = %s;"
    cursor.execute(sql, (credit))
    result = cursor.fetchall()
    
    try:
        if len(result) == 0:
            return {'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_1'}, -1
        
        time = result[0][0] if result else None
        if time is None:
            return {'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_2'}, -2
        elif time < datetime.now() - timedelta(days=30):
            try:
                sql = "DELETE FROM cookie WHERE token = %s;"
                cursor.execute(sql, (credit))
                db.commit()
            except Exception as e:
                app.logger.error(f"Error fetching token: {e}")
                traceback.print_exc()

            # Token 过期了但是不生成新的，因为这里全靠 token 运行，直接跳转并限制登陆
            return {'Code': -TOKEN_EXPIRED, 'Error': 'TOKEN_EXPIRED_1'}, -3
        
    except IndexError:
        traceback.print_exc()
        return {'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_3'}, -4
    except Exception as e:
        app.logger.error(f"Error fetching token: {e}")
        traceback.print_exc()
        return {'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_4'}, -5
    
    return {'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS'}, 0

def _convert_cookie_to_username(credit):
    '''
    将 token 转换为用户账号，必须先经过检验才可以
    '''
    global db, cursor

    sql = "SELECT time FROM cookie WHERE token = %s;"
    cursor.execute(sql, (credit))
    result = cursor.fetchall()
    
    try:
        if len(result) == 0:
            return {'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_1'}, -1
        
        time = result[0][0] if result else None
        if time is None:
            return {'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_2'}, -2
        elif time < datetime.now() - timedelta(days=30):
            try:
                sql = "DELETE FROM cookie WHERE token = %s;"
                cursor.execute(sql, (credit))
                db.commit()
            except Exception as e:
                app.logger.error(f"Error fetching token: {e}")
                traceback.print_exc()

            # Token 过期了但是不生成新的，因为这里全靠 token 运行，直接跳转并限制登陆
            return {'Code': -TOKEN_EXPIRED, 'Error': 'TOKEN_EXPIRED_1'}, -3
        
    except IndexError:
        traceback.print_exc()
        return {'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_3'}, -4
    except Exception as e:
        app.logger.error(f"Error fetching token: {e}")
        traceback.print_exc()
        return {'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_4'}, -5
    
    account = None
    try:
        sql = "SELECT account FROM cookie WHERE token = %s;"
        cursor.execute(sql, (credit))
        result = cursor.fetchall()

        if len(result) == 0:
            return {'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_1'}, -6
        
        account = result[0][0] if result else None
    except IndexError:
        traceback.print_exc()
        return {'Code': -NONE_RESOURCE, 'Error': 'NONE_RESOURCE_1'}, -7
    except Exception as e:
        app.logger.error(f"Error fetching token: {e}")
        traceback.print_exc()
        return {'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_2'}, -8
    
    return {'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS', 'Account': account}, 0

def _check_security(credit, service='upload'):
    '''
    校验是否来自可信任的服务
    '''
    global db, cursor

    sql = "SELECT hash FROM security WHERE name = %s;"
    cursor.execute(sql, (service))
    result = cursor.fetchall()
    
    hash = result[0][0] if result else None
    if hash is None or hash != credit:
        print("身份验证失败")
        return {'Code': -INVALID_PBTOK, 'Error': 'INVALID_PBTOK_1'}, 401
    
    return {'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS'}, 0


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_vue_app(path):
    '''
    这里直接把需要搜索的资源发回去了，作为一层保底，也可以用于过滤和筛选
    send_from_directory 会把标头截断，而 Windows 又会把 js 推断成 text/plain
    没办法那就只能重写了，反正都是一样的内容，直接 make_response 了
    '''
    if path and os.path.exists(os.path.join(VUE_DIST_DIR, path)):
        full_path = os.path.join(VUE_DIST_DIR, path)
        with open(full_path, 'rb') as f:
            content = f.read()
        resp = make_response(content)
        
        mime_type, _ = mimetypes.guess_type(full_path)
        ext = path.rsplit('.', 1)[-1].lower() if '.' in path else ''
        fix_mime = {
            'js': 'application/javascript',
            'mjs': 'application/javascript',
            'css': 'text/css',
            'html': 'text/html; charset=utf-8',
            'ico': 'image/x-icon'
        }
        final_mime = fix_mime.get(ext, mime_type) or 'application/octet-stream'
        
        resp.headers['Content-Type'] = final_mime
        resp.headers.setdefault('Access-Control-Allow-Origin', '*')
        resp.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate'
        return resp
    
    elif os.path.exists(os.path.join(VUE_DIST_DIR, 'index.html')):
        full_path = os.path.join(VUE_DIST_DIR, 'index.html')
        with open(full_path, 'rb') as f:
            content = f.read()
        resp = make_response(content)
        resp.headers['Content-Type'] = 'text/html; charset=utf-8'
        resp.headers.setdefault('Access-Control-Allow-Origin', '*')
        resp.headers['Cache-Control'] = 'no-store'
        return resp
    
    else:
        resp = make_response(jsonify({'Code': -NONE_RESOURCE, 'Error': 'NONE_RESOURCE_1'}), 404)
        resp.headers.setdefault('Access-Control-Allow-Origin', '*')
        return resp
    

@app.route('/assets/<path:filename>')
def serve_assets(filename):
    '''
    这个东西出的问题最大，静态资源（狠狠的谴责 mimetypes）
    环境是 Windows 11 24H2，就不太适合用 Flask
    而且 gunicorn 也是 Linux 专供，还要用 ASGI 强行去适配
    '''
    full_path = os.path.join(VUE_DIST_DIR, 'assets', filename)
    if os.path.exists(full_path):
        with open(full_path, 'rb') as f:
            content = f.read()
        resp = make_response(content)
        
        mime_type, _ = mimetypes.guess_type(full_path)
        ext = filename.rsplit('.', 1)[-1].lower() if '.' in filename else ''
        fix_mime = {
            'js': 'application/javascript',
            'mjs': 'application/javascript',
            'css': 'text/css',
            'svg': 'image/svg+xml',
            'ico': 'image/x-icon',
            'png': 'image/png',
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg'
        }
        final_mime = fix_mime.get(ext, mime_type) or 'application/octet-stream'
        resp.headers['Content-Type'] = final_mime
        resp.headers.setdefault('Access-Control-Allow-Origin', '*')
        resp.headers['Cache-Control'] = 'no-store'
        return resp
    else:
        resp = make_response(jsonify({'Code': -NONE_RESOURCE, 'Error': 'NONE_RESOURCE_1'}), 404)
        resp.headers.setdefault('Access-Control-Allow-Origin', '*')
        return resp
    
@app.route('/runs/<path:filename>')
def serve_runs(filename):
    '''
    Copy and Paste (同 /assets/<path:filename>)
    但是这里只出视频, 不出其他静态文件, 所以会拦截其他请求
    '''
    if not str(filename).endswith('mp4'):
        return make_response(jsonify({'Code': -NONE_RESOURCE, 'Error': 'NONE_RESOURCE_1'}), 404)
    
    full_path = os.path.join(BASE_DIR, 'runs', *str(filename).split('/'))
    if os.path.exists(full_path):
        return send_file(full_path)
    else:
        return make_response(jsonify({'Code': -NONE_RESOURCE, 'Error': 'NONE_RESOURCE_1'}), 404)
    

@app.route('/favicon.ico')
def serve_favicon():
    full_path = os.path.join(VUE_DIST_DIR, 'favicon.ico')
    if os.path.exists(full_path):
        with open(full_path, 'rb') as f:
            content = f.read()
        resp = make_response(content)
        
        mime_type, _ = mimetypes.guess_type(full_path)
        resp.headers['Content-Type'] = mime_type
        resp.headers.setdefault('Access-Control-Allow-Origin', '*')
        resp.headers['Cache-Control'] = 'no-store'
        return resp
    else:
        resp = make_response(jsonify({'Code': -NONE_RESOURCE, 'Error': 'NONE_RESOURCE_1'}), 404)
        resp.headers.setdefault('Access-Control-Allow-Origin', '*')
        return resp
    
    
@app.route('/api/login', methods=['POST'])
def serve_login():
    '''
    登录函数, 用于记录所有登录行为
    '''
    global db, cursor

    data = request.get_json()
    if not data:
        return jsonify({'Code': -INVALID_DAFMT, 'Error': 'INVALID_DAFMT_1'}), 400

    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'Code': -REQUIRED_HEAD, 'Error': 'REQUIRED_HEAD_1'}), 400

    token = None
    try:
        sql = "SELECT password FROM account WHERE account = %s;"
        cursor.execute(sql, (username))
        result = cursor.fetchall()
        
        try:
            pwd = result[0][0] if result else None
            if pwd is None or pwd != password:
                return jsonify({'Code': -INVALID_INPUT, 'Error': 'INVALID_INPUT_1'}), 401
        except IndexError:
            traceback.print_exc()
            return jsonify({'Code': -INVALID_INPUT, 'Error': 'INVALID_INPUT_2'}), 401
        except Exception as e:
            traceback.print_exc()
            app.logger.error(f"Error fetching password: {e}")
            return jsonify({'Code': -INVALID_INPUT, 'Error': 'INVALID_INPUT_3'}), 401
        
        # 获取 token 并绑定 username
        token = _update_token_by_username(username=username)
        
        return jsonify({'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS', 'Token': '{}'.format(token)}), 200
    
    except Exception as e:
        app.logger.error(f"Error inserting login data: {e}")
        db.rollback()
        
        traceback.print_exc()
        return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_1'}), 500
    

@app.route('/api/fetch_profile', methods=['GET'])
def serve_fetch_profile():
    '''
    用于获取用户个人信息
    '''
    global db, cursor

    try:
        credit = request.headers.get('Authorization')[7:]
        if credit is None:
            return jsonify({'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_5'}), 401
        
        msg, code = _check_token(credit=credit)
        if code < 0:
            return jsonify(msg), 401
        
        msg, code = _convert_cookie_to_username(credit=credit) # 校验 account 之后联合查询即可
        if code < 0:
            return jsonify(msg), 401
        account = msg['Account']

        sql = "SELECT username, email FROM account WHERE account = %s;"
        cursor.execute(sql, (account))
        result = cursor.fetchall()
        if len(result) == 0:
            return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_1'}), 500
        
        datapack = {
            'username': result[0][0],
            'email': result[0][1]
        }

        sql = "SELECT bio, urls FROM profile WHERE account = %s;"
        cursor.execute(sql, (account))
        result = cursor.fetchall()
        if len(result) == 0:
            return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_2'}), 500
        
        datapack['bio'] = result[0][0]
        datapack['urls'] = str(result[0][0]).split('@') # urls 使用 @ 分割
        
        return jsonify({'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS', 'Data': datapack}), 200
    
    except Exception as e:
        app.logger.error(f"Error in fetching data: {e}")
        db.rollback()

        traceback.print_exc()
        return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_3'}), 500
    
    
@app.route('/api/fetch_account', methods=['GET'])
def serve_fetch_account():
    '''
    用于获取用户账户信息，专门为前端页适配版本
    '''
    global db, cursor
    
    try:
        credit = request.headers.get('Authorization')[7:]
        if credit is None:
            return jsonify({'Code': -INVALID_TOKEN, 'Error': 'INVALID_TOKEN_5'}), 401

        msg, code = _check_token(credit=credit)
        if code < 0:
            return jsonify(msg), 401
        
        msg, code = _convert_cookie_to_username(credit=credit)
        if code < 0:
            return jsonify(msg), 401
        account = msg['Account']

        sql = "SELECT name, date, lang FROM profile WHERE account = %s;"
        cursor.execute(sql, (account))
        result = cursor.fetchall()
        if len(result) == 0:
            return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_1'}), 500
        
        datapack = {
            'name': result[0][0],
            'date': result[0][1],
            'lang': result[0][2]
        }
        
        return jsonify({'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS', 'Data': datapack}), 200
    
    except Exception as e:
        app.logger.error(f"Error in fetching data: {e}")
        db.rollback()

        traceback.print_exc()
        return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_3'}), 500
    

@app.route('/api/fetch_data', methods=['POST'])
def serve_fetch_data():
    '''
    获取数据 API, 可以获取一些基本信息
    '''
    global db, cursor

    try:
        credit = request.headers.get('Authorization')[7:]

        msg, code = _check_token(credit=credit)
        if code < 0:
            # Token 校验失败
            return jsonify(msg), 401
        
        sql = "SELECT review FROM behavior;"
        cursor.execute(sql)
        result = cursor.fetchall()
        
        acc, cnt = 100., len(result)
        pf = pd.DataFrame(result, columns=["review"])
        hpf = pf[pf['review'] != -1]
        
        if len(hpf['review'].values) > 0:
            acc = hpf['review'].apply(lambda x: 0 if x == 0 else 1).sum() * 100. / len(hpf['review'].values)
        
        cpu = psutil.cpu_percent(interval=1)
        mem = psutil.virtual_memory().percent
        now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        sql = "SELECT plate, text, time FROM behavior ORDER BY time DESC LIMIT 10;"
        cursor.execute(sql)
        result = cursor.fetchall()
        db.commit()
        
        params = {'Acc': acc, 'Num_type': 2, 'Cnt': cnt, 'Cpu': cpu, 'Mem': mem, 'Time': now}
        behavior_data = [{'plate': row[0], 'text': row[1], 'time': row[2].strftime('%Y-%m-%d %H:%M:%S')} for row in result]
        
        return jsonify({'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS', 'Params': params, 'Data': behavior_data}), 200
    
    except Exception as e:
        app.logger.error(f"Error in fetching data: {e}")
        db.rollback()

        traceback.print_exc()
        return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_1'}), 500
    
@app.route('/api/fetch_count', methods=['GET'])
def serve_fetch_count():
    '''
    获取前端 web 的一些基本参数
    '''
    global db, cursor

    try:
        sql = "SELECT COUNT(*) FROM `behavior` WHERE review = -1;"
        cursor.execute(sql)
        result = cursor.fetchall()
        db.commit()
        
        params = {'Cnt': result[0][0] if len(result) > 0 else 0}
        return jsonify({'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS', 'Params': params}), 200
    
    except Exception as e:
        app.logger.error(f"Error in fetching data: {e}")
        db.rollback()

        traceback.print_exc()
        return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_1'}), 500

@app.route('/api/publish', methods=['POST'])
def serve_publish():
    '''
    接收来自程序的数据, 用于保存每一个 DeepSeek 输出的结果
    '''
    global db, cursor

    data = request.get_json()
    if not data:
        return jsonify({'Code': -INVALID_INPUT, 'Error': 'INVALID_INPUT_1'}), 401

    credit = data.get('security')
    topic = data.get('topic')
    text = data.get('text')
    
    if not credit:
        return jsonify({'Code': -INVALID_INPUT, 'Error': 'INVALID_INPUT_2'}), 401

    try:
        msg, code = _check_security(credit=credit, service='publish')
        if code < 0:
            return jsonify(msg), 401

        client.publish(topic, "{" + '"Event": 1, "Text": "{}"'.format(text) + "}")
        print("主题发布成功, 主题: {}, 消息: {}".format(topic, text))
        
        return jsonify({'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS'}), 200
    
    except Exception as e:
        app.logger.error(f"Error in uploading data: {e}")
        db.rollback()

        traceback.print_exc()
        return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_1'}), 500
    
@app.route('/api/upload', methods=['POST'])
def serve_deepseek_upload_data():
    '''
    接收来自程序的数据, 用于保存每一个 DeepSeek 输出的结果
    '''
    global db, cursor

    data = request.get_json()
    if not data:
        return jsonify({'Code': -INVALID_INPUT, 'Error': 'INVALID_INPUT_1'}), 401

    credit = data.get('security')
    plate = data.get('plate')
    text = data.get('text')
    real = data.get('real')
    
    if not credit:
        return jsonify({'Code': -INVALID_INPUT, 'Error': 'INVALID_INPUT_2'}), 401

    try:
        msg, code = _check_security(credit=credit, service='upload')
        if code < 0:
            return jsonify(msg), 401

        sql = "INSERT INTO behavior (plate, text, review, time) VALUES (%s, %s, %s, NOW());"
        cursor.execute(sql, (plate, text, real))
        db.commit()
        return jsonify({'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS'}), 200
    
    except Exception as e:
        app.logger.error(f"Error in uploading data: {e}")
        db.rollback()

        traceback.print_exc()
        return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_1'}), 500

@app.route('/api/security', methods=['POST'])
def serve_security_main():
    '''
    接收来自程序的数据, 用于记录有没有被攻击
    '''
    global db, cursor

    data = request.get_json()
    if not data:
        return jsonify({'Code': -INVALID_INPUT, 'Error': 'INVALID_INPUT_1'}), 400

    credit = data.get('security')
    code = data.get('code')
    
    if not credit:
        return jsonify({'Code': -INVALID_INPUT, 'Error': 'INVALID_INPUT_2'}), 400

    try:
        msg, code = _check_security(credit=credit, service='classify')
        if code < 0:
            return jsonify(msg), 401

        sql = "SELECT code FROM status;"
        cursor.execute(sql)
        result = cursor.fetchall()
        
        old_code = result[0][0] if result else None
        if old_code is None:
            return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_1'}), 401
        
        change_flag = 0
        if old_code != code:
            change_flag = 1
            
        sql = "UPDATE status SET code = %s, time = NOW();"
        cursor.execute(sql, (code))
        db.commit()
            
        return jsonify({'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS', 'Change': change_flag}), 200
    
    except Exception as e:
        app.logger.error(f"Error in uploading data: {e}")
        db.rollback()

        traceback.print_exc()
        return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'SERVE_SUCCESS_2'}), 500
    
@app.route('/api/receive_review', methods=['GET'])
def serve_receive_review():
    '''
    获取所有当前 ID 的基本信息，用于给 review 部分提供接口
    '''
    global db, cursor

    credit = request.headers.get('Authorization')[7:]

    msg, code = _check_token(credit=credit)
    if code < 0:
        return jsonify(msg), 401
    
    try:
        sql = "SELECT id, plate, text, video_path, time FROM behavior WHERE review = -1;"
        cursor.execute(sql)
        result = cursor.fetchall()
            
        return jsonify({'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS', 'Data': result}), 200
    
    except Exception as e:
        app.logger.error(f"Error in uploading data: {e}")
        db.rollback()

        traceback.print_exc()
        return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'SERVE_SUCCESS_2'}), 500


@app.route('/api/upload_review', methods=['POST'])
def serve_update_review():
    '''
    用于更新违规行为的内容, 如果输出 accept 就直接输出, 如果使用的是 reject 那我们根据 text 内容进行判断
    状态 -1 表示没有进行审核，状态 0 表示车辆行为没有问题，状态 1 表示车辆行为存在问题，所以我们要重新规划 text 的表达
    之后我们直接导出成 PDF 即可, 之后就可以发送到对应位置了
    '''
    global db, cursor

    data = request.get_json()
    if not data:
        return jsonify({'Code': -INVALID_INPUT, 'Error': 'INVALID_INPUT_1'}), 400

    credit = request.headers.get('Authorization')[7:]

    msg, code = _check_token(credit=credit)
    if code < 0:
        return jsonify(msg), 401

    _id = int(data.get('id'))
    plate = data.get('plate')
    text = data.get('text')
    h_sts = int(data.get('status')[0])
    status = data.get('status')[1:]
    
    try:
        sql = "SELECT COUNT(*) FROM behavior WHERE id = %s;"
        cursor.execute(sql, (_id,))
        result = cursor.fetchall()
        
        re_count = result[0][0] if result else None
        if re_count is None or re_count < 1:
            return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_1'}), 401
        
        if status == 'accept':
            sql = "UPDATE behavior SET review = %s WHERE id = %s;"
            cursor.execute(sql, (1, _id))
            db.commit()
        else:
            if h_sts == 0:
                sql = "UPDATE behavior SET text = %s, review = %s WHERE id = %s;"
                cursor.execute(sql, (text, 0, _id))
                db.commit()
            else:
                sql = "UPDATE behavior SET text = %s, review = %s WHERE id = %s;"
                cursor.execute(sql, (text, 1, _id))
                db.commit()

        
        script_dir = r"E:\pandownload1\ML\Police\Project"
        command = f'''cd /d "{script_dir}" && conda activate proj && python modules\export.py --plate "{plate}" --report "{text}"'''
        os.system(command)

        app.logger.debug("已输出 export_report")
        return jsonify({'Code': SERVE_SUCCESS, 'Message': 'SERVE_SUCCESS'}), 200
    
    except Exception as e:
        app.logger.error(f"Error in uploading data: {e}")
        db.rollback()

        traceback.print_exc()
        return jsonify({'Code': -DB_NONE_ERROR, 'Error': 'DB_NONE_ERROR_2'}), 500
    

@app.before_request
def serve_before_request():
    '''
    同步 request 和 response, 加入线程锁
    '''
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
        traceback.print_exc()
        
@app.after_request
def serve_after_request(response):
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
        traceback.print_exc()
    
    data_lock.release()
    return response

        
if __name__ == '__main__':
    opt = parse_opt()

    with open(opt.yaml, 'r', encoding='utf-8') as f:
        config = yaml.safe_load(f)
        broker = config['mqtt']['broker']
        port = config['mqtt']['port']
        username = config['mqtt']['username']
        password = config['mqtt']['password']
        f.close()

    client = mqtt.Client()
    client.username_pw_set(username, password)
    client.connect(broker, port, 60)

    if opt.verbose:
        app.run(host=HTTP_HOST, port=HTTP_PORT, debug=True if opt.debug else False)
    else:
        serve(
            app,
            host=HTTP_HOST,
            port=HTTP_PORT,
            threads=HTTP_THREADS
        )