<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $casts = [
        'code' => 'json',
        'names' => 'json',
        'product1_month' => 'json',
        'product2_month' => 'json',
        'openPosition' => 'json',
        'stopLoss' => 'json',
        'unit' => 'json',
        'doable' => 'boolean',
        'stop' => 'boolean'
    ];

    protected $with = [
        'roles'
    ];

    public function roles ()
    {
        return $this->belongsToMany('App\Role')->withTimestamps();
    }

    public function group ()
    {
        return $this->belongsToMany('App\MealGroup', 'product_meal', 'product_id', 'meal_group_id')
            ->withTimestamps();
    }

    protected $guarded = [];
}
