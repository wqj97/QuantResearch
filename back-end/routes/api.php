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
        Route::get('selfSelected', 'UserController@getSelfSelected'); // 获取自选列表
    });
    Route::post('', 'UserController@login'); // 登录
});

Route::group(['prefix' => 'data'], function () {
    Route::get('', 'DataController@getDayData'); // 获取日线数据
});

Route::group(['prefix' => 'product'], function () {
    Route::get('', 'ProductController@getProductConfig'); // 获取产品配置
    Route::get('list', 'ProductController@getProductConfigList'); // 获取产品配置列表
});
