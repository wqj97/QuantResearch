<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'user'], function () {
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('', 'UserController@getUser'); // 获取用户基础信息
        Route::get('productConfig', 'UserController@getProductConfig'); // 获取产品配置
        Route::patch('productConfig', 'UserController@setProductConfig'); // 更新产品配置
    });
    Route::post('', 'UserController@login'); // 登录
});

Route::group(['prefix' => 'data'], function () {
    Route::get('', 'DataController@getDayData');
    Route::get('minute', 'DataController@getMinuteData');
});

