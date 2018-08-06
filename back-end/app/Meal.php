<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\SoftDeletes;

class Meal extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    /**
     * 套餐组信息
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function group_info ()
    {
        return $this->belongsTo('App\MealGroup');
    }
}
