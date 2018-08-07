<?php

namespace App\Http\Controllers;

use App\Meal;
use Illuminate\Http\Request;

class PayController extends Controller
{
    public function createPayOrder (Request $request)
    {
        $this->validate($request, [
            'meal_ids' => 'required'
        ]);
        $total_price = 0;
        $meals = Meal::whereIn('id', $request->meal_ids)->get();
        $meals->each(function (Meal $meal) use (&$total_price) {
            $total_price += $meal->price;
        });
    }

    public function handleNotify ()
    {

    }
}
