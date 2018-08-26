<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PayOrder extends Model
{
    protected $guarded = [];

    public function user_info ()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }
}
