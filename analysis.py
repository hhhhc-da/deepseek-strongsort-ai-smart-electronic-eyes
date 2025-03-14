import joblib
import os
from sqlalchemy import create_engine
import pandas as pd
import numpy as np


def attack_classify(model_path = os.path.join('models', 'random_forest_model.pkl'), db_url = 'mysql+pymysql://nanoka:12345678n@localhost:3308/manage'):
    # 决策树模型
    clf = joblib.load(model_path)
    # 数据库读取句柄
    engine = create_engine(db_url)

    # 查询最近 10 分钟的数据
    query = '''
        SELECT
            COUNT(*) AS num_length,
            COALESCE (
                SUM( CASE WHEN STATUS NOT IN ( 200, 302 ) THEN 1 WHEN STATUS != 302 THEN 1 ELSE 0 END ) / NULLIF( COUNT(*), 0 ),
                0 
            ) AS rate_failure,
            COALESCE (
                SUM( CASE WHEN path = '/login' AND method = 'POST' AND STATUS != 200 THEN 1 ELSE 0 END ) / NULLIF( COUNT( CASE WHEN path = '/login' AND method = 'POST' THEN 1 ELSE NULL END ), 0 ),
                0 
            ) AS rate_failure_login_post,
            COUNT( DISTINCT PORT ) AS num_port,
            COALESCE ( SUM( IFNULL( LENGTH( body ), 0 )), 0 ) AS total_body_length,
            COALESCE ( SUM( IFNULL( LENGTH( REGEXP_REPLACE ( body, '[a-zA-Z0-9 ]', '' )), 0 )), 0 ) AS special_characters_length 
        FROM
            web 
        WHERE
            time >= NOW() - INTERVAL 10 MINUTE;
    '''
    data = pd.read_sql(query, engine)
    print(data.T)

    data_input = np.array([data[col][0] for col in data.columns])
    output = clf.predict(data_input.reshape(1, -1))
    
    label = {
    0: '正常访问',
    1: '拒绝服务攻击',
    2: '扫描攻击',
    3: '注入攻击',
    4: '密码爆破或密码播撒'
    }

    return output[0], label[output[0]]
    
if __name__ == '__main__':
    i, s = attack_classify()
    print(pd.DataFrame({'认证数字' : i, '攻击类型': [s]}).T)