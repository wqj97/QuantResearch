<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use SoftDeletes, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'phone', 'head', 'api_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'api_token'
    ];

    protected $with = [
        'roles', 'group'
    ];

    /**
     * 用户的产品配置
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function product_config ()
    {
        return $this->hasOne('App\ProductConfig');
    }

    public function self_selected ()
    {
        return $this->hasOne('App\ProductConfig')->where('selfSelected', 1);
    }

    public function roles ()
    {
        return $this->belongsToMany('App\Role')->withTimestamps();
    }

    public function group ()
    {
        return $this->belongsToMany('App\MealGroup', 'user_meal', 'user_id', 'meal_group_id');
    }
}
