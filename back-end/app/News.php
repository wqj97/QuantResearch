<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    protected $casts = [
        'analysis' => 'json'
    ];
}
