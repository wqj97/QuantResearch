<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    public function getDayData (Request $request)
    {
        $this->validate($request, [
            'code' => 'required|json'
        ]);
        return \Cache::remember("data_$request->code", 1440, function () use ($request) {
            $output = new \stdClass();
            $codes = json_decode($request->code);
            $db = DB::connection('mongodb');
            foreach ($codes as $code) {
                $type = substr($code, 0, strlen($code) - 4);
                $year = substr($code, -4, 2);
                $month = substr($code, -2, 2);
                $result = [];
                for ($i = 14; $i < (int)$year; $i++) {
                    foreach ($db->collection("{$type}{$i}{$month}")->groupBy('date')->get(['date', 'symbol', 'close']) as $data) {
                        $result[] = $data;
                    }
                }
                $output->$code = $result;
            }
            return response()->json($output);
        });
    }
}
