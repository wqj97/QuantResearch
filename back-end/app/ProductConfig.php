<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\SoftDeletes;

class ProductConfig extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'user_id', 'code', 'config'
    ];
    protected $casts = [
        'code' => 'json', 'config' => 'json'
    ];
}
