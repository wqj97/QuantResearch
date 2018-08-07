<?php
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
    Route::post('signup', 'UserController@signup'); // 注册
    Route::get('group', 'UserController@getRoles'); // 获取所有的角色
});

Route::group(['prefix' => 'pay'], function () {
    Route::get('notify', 'PayController@handleNotify')->name('payNotifyUrl'); // 收取支付回调
    Route::group(['middleware' => 'auth:api'], function () {

    });
});

Route::group(['prefix' => 'data', 'middleware' => 'auth:api'], function () {
    Route::get('', 'DataController@getDayData'); // 获取日线数据
});

Route::group(['prefix' => 'product', 'middleware' => 'auth:api'], function () {
    Route::get('', 'ProductController@getProductConfig'); // 获取产品配置
    Route::post('', 'ProductController@setProductConfig'); // 设置产品配置
    Route::delete('', 'ProductController@deleteProductConfig'); // 删除产品配置
    Route::get('list', 'ProductController@getProductConfigList'); // 获取产品配置列表
});

Route::group(['prefix' => 'news'], function () {
    Route::post('', 'NewsController@createNews'); // 创建新闻
    Route::post('check', 'NewsController@checkNews'); // 检测新闻是否已经存在
    Route::get('', 'NewsController@getNews'); // 获取新闻
});

Route::group(['prefix' => 'meal'], function () {
    Route::get('', 'MealController@getMealList'); // 获取套餐列表
    Route::get('group', 'MealController@getMealGroup'); // 获取套餐列表
});

Route::any('wechat', 'WechatController@serve');
