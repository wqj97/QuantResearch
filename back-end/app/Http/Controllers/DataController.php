<?php

namespace App\Http\Controllers;

use function foo\func;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    /**
     * 获取日线
     * @param Request $request
     * @return mixed
     */
    public function getDayData (Request $request)
    {
        $this->validate($request, [
            'code' => 'required|json'
        ]);
        define('FUCK_CZC', ["PM", "FG", "WH", "CF", "SR", "OI", "TA", "RI", "LR", "MA", "RS", "RM", "TC", "ZC", "JR", "SF", "SM"]);
        if ($request->has('refresh')) {
            Cache::forget("data_$request->code" . date('ymd'));
        }
        return \Cache::remember("data_$request->code" . date('ymd'), 1440, function () use ($request) {
            return $this->queryData($request);
        });
    }

    private function queryData ($request)
    {
        $output = new \stdClass();
        $codes = json_decode($request->code);
        $db = DB::connection('mongodb');
        foreach ($codes as $code) {
            $type = substr($code, 0, strlen($code) - 4);
            $year = substr($code, -4, 2);
            $month = substr($code, -2, 2);
            $result = [];
            for ($i = 14; $i <= (int)$year; $i++) {
                if (in_array($type, FUCK_CZC)) {
                    $hack_i = $i % 10;
                    foreach ($db->collection('day_data')->where('symbol', "{$type}{$hack_i}{$month}")->get(['date', 'symbol', 'close']) as $data) {
                        $result[] = $data;
                    }
                    continue;
                }
                foreach ($db->collection('day_data')->where('symbol', "{$type}{$i}{$month}")->get(['date', 'symbol', 'close']) as $data) {
                    $result[] = $data;
                }
            }
            $output->$code = $result;
        }
        return response()->json($output);
    }

    /**
     * 获取分钟线
     * @param Request $request
     * @return mixed
     */
    public function getMinuteData (Request $request)
    {
        return \Cache::remember("data_minute_$request->code", 1440, function () use ($request) {
            $output = new \stdClass();
            $codes = json_decode($request->code);
            $db = DB::connection('mongodb');
            foreach ($codes as $code) {
                $type = substr($code, 0, strlen($code) - 4);
                $year = substr($code, -4, 2);
                $month = substr($code, -2, 2);
                $result = [];
                for ($i = 14; $i <= (int)$year; $i++) {
                    foreach ($db->collection("{$type}{$i}{$month}")->groupBy('date')->take(120)->get(['date', 'time', 'symbol', 'close']) as $data) {
                        $result[] = $data;
                    }
                }
                $output->$code = $result;
            }
            return response()->json($output);
        });
    }
}
