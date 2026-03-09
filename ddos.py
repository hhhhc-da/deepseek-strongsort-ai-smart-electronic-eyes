from modules.serve import DDOSClient

if __name__ == '__main__':
    '''
    导入库开始进行压力测试
    '''
    client = DDOSClient(target_url='http://localhost:81/api/*')
    client.attack()