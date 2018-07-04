<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserLoginRecord extends Model
{
    protected $guarded = [];

    public function user_info ()
    {
        return $this->belongsTo('App\User');
    }
}
