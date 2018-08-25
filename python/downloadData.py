# encoding: UTF-8

"""
立即下载数据到数据库中，用于手动执行更新操作。
"""
import argparse
from dataService import *

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="config thread")
    parser.add_argument('--thread', type=int, default=4)
    parser.add_argument('--start', type=int)
    args = parser.parse_args()
    # 创建API对象
    api = DataApi(DATA_SERVER)
    info, msg = api.login(USERNAME, TOKEN)

    if not info:
        print ('数据服务器登录失败，原因：%s', msg)
    # 下载数据
    downloadAllMinuteBar(api, args.thread, args.start)
