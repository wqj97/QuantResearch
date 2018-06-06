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
        'unit' => 'json'
    ];

    protected $guarded = [];
}
