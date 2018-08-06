<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\SoftDeletes;

class MealGroup extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function group_item ()
    {
        return $this->hasMany('App\Meal');
    }
}
