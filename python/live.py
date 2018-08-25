# coding=utf-8
import json
import re
import traceback

from OpenSSL import SSL
from flask import Flask, request, abort
from gevent.pywsgi import WSGIServer
from geventwebsocket import WebSocketError
from geventwebsocket.handler import WebSocketHandler

import dataService
from vnpy.trader.gateway.tkproGateway.DataApi import DataApi

# pool = mp.Pool(2)

config = open('config.json')
setting = json.load(config)
config.close()

DATA_SERVER = setting['DATA_SERVER']
USERNAME = setting['USERNAME']
TOKEN = setting['TOKEN']

api = DataApi(DATA_SERVER)
info, msg = api.login(USERNAME, TOKEN)

if not info:
    print u'数据服务器登录失败，原因：%s' % msg

app = Flask(__name__)

client_list = []
code_data = {}


@app.route('/')
def echo():
    if request.environ.get('wsgi.websocket'):
        ws = request.environ['wsgi.websocket']
        code = json.loads(request.args['code'])
        for symbol in code:
            if symbol not in code_data:
                code_data[symbol] = 1
                print
                api.subscribe(symbol_fix(symbol), func=on_quote)
            else:
                code_data[symbol] += 1
        client_list.append((ws, code))
        print("新的连接加入, 当前订阅列表: {}, 客户端数: {}".format(','.join(code_data), len(client_list)))
        if ws is None:
            abort(404)
        else:
            while True:
                if not ws.closed:
                    message = ws.receive()
                    try:
                        ws.send(message)
                    except WebSocketError, e:
                        traceback.print_exc(e)
                        for key, (client, code) in enumerate(client_list):
                            if client is ws:
                                del client_list[key]
                                # for symbol in code:
                                #     code_data[symbol] -= 1
                                #     if code_data[symbol] <= 0:
                                #         print("已经没有请求{}的客户端, 取消订阅".format(symbol))
                                #         api.unsubscribe(symbol)
                        ws.close()
                        print('已删除失效的连接, 当前客户端数: {}'.format(len(client_list)))
                        return 'close'


def on_quote(k, v):
    bar = dataService.generateVtBar(v)
    d = bar.__dict__
    d['datetime'] = bar.datetime.strftime("%Y-%m-%d-%H")
    message = json.dumps(d)

    for clent, code in client_list:
        if d['symbol'] in code:
            clent.send(message)


def symbol_fix(symbol):
    """
    代码加上交易所
    :param str symbol:
    """
    code_type = re.match('[A-Za-z]+', symbol).group()
    number = re.findall('\d+', symbol)[0]
    year = number[0:2]
    month = number[-2:]
    for exchange in setting['SYMBOLS']:
        for type in exchange['type']:
            if type == code_type:
                if exchange['exchange'] == 'CZC':
                    return "{}{}{}.CZC".format(code_type, int(year) % 10, month)
                else:
                    return "{}{}.{}".format(code_type, number, exchange['exchange'])


# df, msg = api.bar("rb1901.SHF, hc1901.SHF", freq='1M', trade_date=20180528)


# def send_mook_data():
#     count_df = len(df)
#     while True:
#         on_quote(None, df.iloc[random.randrange(0, count_df)])
#         time.sleep(random.randint(1, 10) / 10)


if __name__ == '__main__':
    http_server = WSGIServer(('0.0.0.0', 8888), app, handler_class=WebSocketHandler, keyfile='ssl/data.lyquant.com.key',
                             certfile='ssl/data.lyquant.com.cer')
    # pool.apply_async(send_mook_data)
    # api.subscribe(','.join(code_data.keys()), func=on_quote)
    http_server.serve_forever()

    # code, msg = api.subscribe('hc1810.SHF, rb1810.SHF', func=on_quote)
