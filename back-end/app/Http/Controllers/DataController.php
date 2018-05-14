<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DataController extends Controller
{
    public function getDayData (Request $request)
    {
        return \Cache::remember("data_$request->minute", 1440, function () use ($request) {
            $db = DB::connection('mongodb');
            $day_data = [];
            $collections = $db->listCollections();
            foreach ($collections as $collection) {
                $result = $db->collection($collection->getName())->first();
                if (!$result) continue;
                $result['avg'] = $db->collection($collection->getName())->avg('high');
                $day_data[] = $result;
            }
            return $day_data;
        });
    }
}
