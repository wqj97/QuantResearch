<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * 返回当前用户信息
     * @param Request $request
     * @return mixed
     */
    public function getUser (Request $request)
    {
        return $request->user();
    }

    /**
     * 登录
     * @param Request $request
     * @return \App\User|\Illuminate\Http\JsonResponse|null
     */
    public function login (Request $request)
    {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required'
        ]);

        if (\Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            return \Auth::user()->makeVisible('api_token');
        } else {
            return response()->json('账号或密码错误', 403);
        }
    }

    /**
     * 获取产品配置信息
     * @param Request $request
     * @return mixed
     */
    public function getProductConfig (Request $request)
    {
        $this->validate($request, [
            'code' => 'required'
        ]);
        $config = $request->user()->product_config()->where('code', $request->code);
        if ($config->exists()) {
            return $config->first();
        } else {
            return $config->create([
                'code' =>$request->code,
                'config' => [
                    'deposit' => 8,
                    'amount' => 100000,
                    'selfSelected' => true
                ]
            ]);
        }
    }

    public function setProductConfig (Request $request)
    {
        $this->validate($request, [
            'code' => 'required',
            'config' => 'required'
        ]);
        $config = $request->user()->product_config()->where('code', $request->code);
        $config->update([
            'config' => json_encode($request->config)
        ]);
        return $config->first();

    }
}
