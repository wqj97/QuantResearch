<?php

namespace App\Http\Controllers;

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
            return \Auth::user();
        } else {
            return response()->json('账号或密码错误', 403);
        }
    }
}
