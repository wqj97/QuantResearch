# encoding: UTF-8

import sys
import json
from datetime import datetime, timedelta
from time import time, sleep
import random
from pymongo import MongoClient, ASCENDING

import numpy as np

from vnpy.trader.vtObject import VtBarData
from vnpy.trader.app.ctaStrategy.ctaBase import MINUTE_DB_NAME
from vnpy.trader.gateway.tkproGateway.DataApi import DataApi
from multiprocessing.dummy import Pool

# 交易所类型映射
exchangeMap = {}
exchangeMap['CFFEX'] = 'CFE'
exchangeMap['SHFE'] = 'SHF'
exchangeMap['CZCE'] = 'CZC'
exchangeMap['DCE'] = 'DCE'
exchangeMap['SSE'] = 'SH'
exchangeMap['SZSE'] = 'SZ'
exchangeMapReverse = {v: k for k, v in exchangeMap.items()}

# 加载配置
config = open('config.json')
setting = json.load(config)
config.close()

MONGO_HOST = setting['MONGO_HOST']
MONGO_PORT = setting['MONGO_PORT']
SYMBOLS = setting['SYMBOLS']
USERNAME = setting['USERNAME']
TOKEN = setting['TOKEN']
DATA_SERVER = setting['DATA_SERVER']

# 创建API对象
mc = MongoClient(MONGO_HOST, MONGO_PORT)  # Mongo连接
db = mc[MINUTE_DB_NAME]  # 数据库
collections = db.collection_names()
cl = db['day_data']


# cl.ensure_index([('_id', ASCENDING)], unique=True)  # 添加索引


# ----------------------------------------------------------------------
def generateVtBar(row):
    """生成K线"""
    bar = VtBarData()

    symbol, exchange = row['symbol'].split('.')

    bar.symbol = symbol
    bar.exchange = exchangeMapReverse[exchange]
    bar.vtSymbol = '.'.join([bar.symbol, bar.exchange])
    bar.open = row['open']
    bar.high = row['high']
    bar.low = row['low']
    bar.close = row['close']
    bar.volume = row['volume']

    bar.date = str(row['trade_date'])

    bar.datetime = datetime.strptime(' '.join([bar.date]), '%Y%m%d')

    return bar


# ----------------------------------------------------------------------
def down_minute_bar_by_symbol(api, vt_symbol, start_date, end_date=''):
    """下载某一合约的分钟线数据"""
    print('线程启动')
    try:
        # dt = datetime.strptime(start_date, '%Y%m%d')
        dt = datetime(2014, 01, 01)
        if end_date:
            end = datetime.strptime(end_date, '%Y%m%d')
        else:
            end = datetime.today()
        delta = timedelta(1)
        # symbol = '.'.join([code, exchangeMap[exchange]])
        # latest_day = cl.find().sort('datetime', -1).limit(1)

        # if latest_day.count() != 0:
        #     latest_day = latest_day[0]['datetime']
        #     latest_day = datetime(latest_day.year, latest_day.month, latest_day.day)
        #     print("上次合约: {} 更新到了: {}, 正在同步新的内容".format(code, latest_day))
        #     dt = latest_day

        while dt <= end:
            d = int(dt.strftime('%Y%m%d'))
            df, msg = api.bar(vt_symbol, freq='1M', trade_date=d)

            if msg == '0,':
                dt += delta
            else:
                print("合约下载线程出现错误, 错误信息: {}".format(msg))
                sleep(random.randrange(25, 45))
                print("合约下载线程恢复工作")
                continue

            if df is None:
                continue

            for ix, row in df.iterrows():
                bar = generateVtBar(row)
                d = bar.__dict__
                flt = {'datetime': bar.datetime, 'symbol': bar.symbol}
                cl.replace_one(flt, d, True)

    except Exception, e:
        import traceback
        traceback.print_exc(e)
    finally:
        print '合约下载完成'


def down_daily_bar_by_symbol(api, vt_symbol, start_date, end_date=''):
    """下载某一合约的分钟线数据"""
    print('线程启动')
    try:
        end = datetime.today()
        end += timedelta(1)
        end = end.strftime('%Y%M%d')
        df, msg = api.daily(vt_symbol, start_date=int(start_date), end_date=int(end))

        if msg != '0,':
            print("合约下载线程出现错误, 错误信息: {}".format(msg))
            sleep(random.randrange(25, 45))
            print("合约下载线程恢复工作")

        for ix, row in df.iterrows():
            bar = generateVtBar(row)
            d = bar.__dict__
            flt = {'datetime': bar.datetime, 'symbol': bar.symbol}
            cl.replace_one(flt, d, True)

    except Exception, e:
        import traceback
        traceback.print_exc(e)
    finally:
        print '合约下载完成'


# ----------------------------------------------------------------------
def downloadAllMinuteBar(api, thread=4, start=None, update=True):
    """下载所有配置中的合约的分钟线数据"""
    print '-' * 50
    print u'开始下载合约分钟线数据'
    print '-' * 50
    poll = Pool(thread)
    today = datetime.today()
    # 添加下载任务
    random.shuffle(SYMBOLS)
    query_code = []
    symbols = set()
    for symbol in SYMBOLS:
        if not symbol.has_key('key_month'):
            symbol['key_month'] = [1, 5, 9]
        random.shuffle(symbol['key_month'])
        for type in symbol['type']:
            for month in symbol['key_month']:
                if today.month >= month:
                    search_year = today.year + 1
                else:
                    search_year = today.year
                for year in xrange(2014, search_year + 1):
                    if symbol['exchange'] != 'CZC':
                        code = "{}{}{}.{}".format(type, year % 2000, str(month).zfill(2), symbol['exchange'])
                    else:
                        code = "{}{}{}.{}".format(type, year % 2010, str(month).zfill(2), symbol['exchange'])
                    symbols.add("{}{}{}".format(type, year % 2000, str(month).zfill(2)))
                    query_code.append(code)
    # 分4个线程查询数据

    if start:
        startDate = start
    else:
        if update:
            codes = list(symbols)
            startDate = None
            for code in codes:
                query_date = cl.find({
                    "symbol": code
                }).sort("datetime", ASCENDING).limit(1)
                if query_date.count():
                    query_date = query_date[0]['datetime']
                else:
                    continue
                if startDate == None or startDate < query_date:
                    startDate = query_date
            startDate = startDate.strftime('%Y%m%d')
        else:
            startDate = datetime(2014, 01, 01).strftime('%Y%m%d')

    print("从{}开始更新".format(startDate))
    query_code = np.array(query_code)
    np.random.shuffle(query_code)
    query_code = np.array_split(query_code, thread)
    for code in query_code:
        poll.apply_async(down_daily_bar_by_symbol, (api, ','.join(code), startDate))
    poll.close()
    poll.join()
    print '-' * 50
    print ('合约分钟线数据下载完成')
    print '-' * 50
