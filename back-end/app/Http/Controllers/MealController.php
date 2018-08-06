<?php

namespace App\Http\Controllers;

use App\MealGroup;
use Illuminate\Http\Request;

class MealController extends Controller
{
    /**
     * 获取所有套餐
     * @return MealGroup[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection
     */
    public function getMealList ()
    {
        return MealGroup::with('group_item')->get();
    }
}
