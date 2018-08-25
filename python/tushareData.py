# coding:utf-8
import tushare as ts

import time
from QcloudApi.qcloudapi import QcloudApi
import requests as rq

import json

Wenzhi_config = {
    'Region': 'bj',
    'secretId': 'AKID99jjLdep9fbPZP96VmYfRkjORy3gocKV',
    'secretKey': 'rNSnqdmBIqB65Je73GoJIwCulXdXp9Pt',
    'method': 'POST',
    'SignatureMethod': 'HmacSHA1'
}

Wenzhi_action = 'TextSentiment'
Wenzhi_module = 'wenzhi'
service = QcloudApi(Wenzhi_module, Wenzhi_config)

# number_to_claw = input('输入想要抓取的新闻数, 默认为10\r\n')
# if not number_to_claw:
number_to_claw = 10

while True:
    print("开始抓取数据")
    data = ts.get_latest_news(number_to_claw, True)
    for index, val in data.iterrows():
        print('processing {}/{}'.format(index + 1, len(data)))
        exist = rq.post('https://www.lyquant.com/api/news/check', {
            'url': val['url']
        })
        if exist.status_code == 200:
            continue
        analysis = service.call(Wenzhi_action, {'content': val['content']}).decode('utf-8')
        result = rq.post('https://www.lyquant.com/api/news', {
            'title': val['title'],
            'url': val['url'],
            'classify': val['classify'],
            'content': val['content'],
            'analysis': analysis
        })
    print("等待下一轮查询")
    time.sleep(120)
