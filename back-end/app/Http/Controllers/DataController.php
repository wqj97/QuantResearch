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
                $max_time = $db->collection($code)->max('time');
                $result = $db->collection($code)->where('time', $max_time)->get();
                $output->$code = $result;
            }
            return response()->json($output);
        });
    }
}
