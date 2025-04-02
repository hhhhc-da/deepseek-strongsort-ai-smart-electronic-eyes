import joblib
import os
from sqlalchemy import create_engine
import pandas as pd
import numpy as np
from prepare import transform_ndarray_to_string
from lane import extract_ranges
from plate import extract_plate


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
        
    pf = pd.DataFrame({
        "ID": keys,
        "lane": lane_info, 
        "behavior": [i[1] for i in behavior],
    })
    
    # 识别车道类型
    allowed_type = [i.split('-') for i in pf["lane"].values]
    
    # 校验是否合规
    exmap = []
    for bv, al in zip(pf["behavior"].values, allowed_type):
        exmap.append("Normal") if bv in al else exmap.append("Abnormal")
    pf['judge'] = exmap
    pf['plate'] = [extract_plate() for i in range(len(exmap))]
    
    print(pf, '\n')
    return pf

def prompt_create(lnpf, tr_txt=os.path.join("runs", "track", "exp", "trace_frames.txt"), encoding='utf-8'):
    '''
    生成 Prompt 输入到 DeepSeek
    '''
    # 首先我们装载所有 DIY 类型数据 (这里是破坏性操作, 应该改成动态扩展的)
    lst = []
    with open(tr_txt, 'r', encoding=encoding) as f:
        while line := f.readline().strip():
            lst.append(map(int, line.split()))
        f.close()

    trpf = pd.DataFrame(lst, columns=['frame', 'id', 'x', 'y', 'w', 'h', 'x_3d', 'y_3d', 'z_3d', 'frame-object-id', 'traffic-lights'])
    trpf
    
    # 排序并按组别分类
    sorted_pf = trpf.groupby('id', group_keys=False).apply(lambda x: x.sort_values('frame'))
    sub_tables = {id: group for id, group in sorted_pf.groupby('id')}
    
    # Prompt 生成逻辑, pr 嵌套 + ed 结束语
    # Frame, Trrafic-light (eg.由红灯转为绿灯), plate, lane_type, behavior, status (eg.未)
    pr1 = "视频第{}帧，{}，车牌{}，位于{}车道，正在{}。\n"
    pr2 = "视频第{}帧，{}，车牌{}，位于{}车道，正在{}，{}越过停止线。\n"
    ed = "请问视频中有没有交通违法行为？请尽可能简短的回答问题。"
    
    traffic_lights_dict = {
        "0": "红灯",
        "1": "黄灯",
        "2": "绿灯",
        "02": "由红灯转为绿灯",
        "21": "由绿灯转为黄灯",
        "10": "由黄灯转为红灯",
    }
    
    lane_status_dict = {
        "stop": "静止",
        "straight": "直行",
        "left": "左转",
        "right": "右转",
        "uturn": "掉头",
        "left-straight": "直行和左转",
        "right-straight": "直行和右转",
        "left-right": "左转和右转",
        "left-uturn": "左转和掉头",
    }
    
    questions = []
    for i, k in enumerate(sub_tables.keys()):
        trigger = extract_ranges(sub_tables[k]['traffic-lights'].values)
        # 如果只有一个灯
        if len(trigger) == 0:
            # 首尾数据
            top_line, bottom_line = sub_tables[k].iloc[0], sub_tables[k].iloc[-1]
            lights = str(int(top_line['traffic-lights']))
            
            # 生成数据
            question = pr1.format(
                # 帧号
                "{}到{}".format(top_line['frame'], bottom_line['frame']),
                # 红绿灯状态
                traffic_lights_dict[lights],
                # 车牌信息
                extract_plate(),
                # 车道信息
                lane_status_dict[lnpf[lnpf['ID'] == top_line['id']]['lane'].values[0]],
                # 行为 (与车道共用一套, 集合更小)
                lane_status_dict[lnpf[lnpf['ID'] == top_line['id']]['behavior'].values[0]]
            ) + ed
            
            questions.append(question)
        else:
            print("未知领域")
            pass
        
    pf = pd.DataFrame({
        "question": questions
        })
    print(pf, '\n')
    return pf
    

if __name__ == '__main__':
    i, s = attack_classify()
    print(pd.DataFrame({'认证数字' : i, '攻击类型': [s]}).T)