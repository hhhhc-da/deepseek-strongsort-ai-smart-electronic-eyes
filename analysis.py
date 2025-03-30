import joblib
import os
from sqlalchemy import create_engine
import pandas as pd
import numpy as np
from prepare import transform_ndarray_to_string


def attack_classify(model_path=os.path.join('models', 'random_forest_model.pkl'), db_url='mysql+pymysql://nanoka:12345678n@localhost:3308/manage'):
    '''
    使用随机森林分类器的示例, 真正使用中还是要自己初始化一个实例
    '''
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

def track_analysis(track_data:dict={}, img_wh=(640,640), behavior=[], mask=np.zeros((640,640,3), dtype=np.uint8), colors={}, keys=[]):
    '''
    处理跟踪后的各项数据, 用于简单的程序鉴别
    '''
    img_w, img_h = img_wh
    
    # 字典转换
    r_dict_action = {}
    for k, v in colors.items():
        s = transform_ndarray_to_string(v)
        r_dict_action[s] = k
    
    # 逐个分析车辆来自哪个车道
    lane_info = []
    for key in track_data.keys():
        track_line = np.array(track_data[key], dtype=np.uint32)
        
        slice_piece = max(1, int(track_line.shape[0] * 0.1))
        pixel_feature = mask[int(np.average(track_line[:slice_piece, 1])), int(np.average(track_line[:slice_piece, 0])), :]

        # 检测车辆是不是在这些范围内, 否则未按照规定车道行驶
        info, str_handler = None, transform_ndarray_to_string(pixel_feature)
        if str_handler in r_dict_action.keys():
            info = r_dict_action[str_handler]
        else:
            info = "unknown"
            
        lane_info.append(info)
        
    pf = pd.DataFrame({"ID": keys, "lane": lane_info, "behavior": [i[1] for i in behavior],
                       "true": ['straight', 'straight', 'left', 'left', 'left', 'left']})
    
    # 识别车道类型
    allowed_type = [i.split('-') for i in pf["lane"].values]
    
    # 校验是否合规
    exmap = []
    for bv, al in zip(pf["behavior"].values, allowed_type):
        exmap.append("Normal") if bv in al else exmap.append("Abnormal")
    pf['judge'] = exmap
    
    print(pf, '\n')
    return pf

def prompt_create():
    '''
    生成 Prompt 输入到 DeepSeek
    '''
    pass

if __name__ == '__main__':
    i, s = attack_classify()
    print(pd.DataFrame({'认证数字' : i, '攻击类型': [s]}).T)