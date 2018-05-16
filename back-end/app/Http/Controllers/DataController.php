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
                $result = $db->collection($code)->where('time', '235900')->get();
                $output->$code = $result;
            }
            return response()->json($output);
        });
    }
}
