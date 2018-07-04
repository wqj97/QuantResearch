<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use App\UserLoginRecord;
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
            $user = \Auth::user();
            UserLoginRecord::create([
                'user_id' => $user->id,
                'ip' => $request->getClientIp()
            ]);
            return $user->makeVisible('api_token');
        } else {
            return response()->json('账号或密码错误', 403);
        }
    }

    /**
     * 注册用户
     * @param Request $request
     * @return User|\Illuminate\Database\Eloquent\Model|\Illuminate\Http\JsonResponse
     */
    public function signup (Request $request)
    {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required',
            'name' => 'required'
        ]);
        if (User::where('email', $request->email)->exists()) {
            return response()->json('邮箱已经存在', 409);
        }
        $user = User::create([
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'name' => $request->name,
            'api_token' => str_random(40)
        ]);

        $user->roles()->attach(6);

        return User::find($user->id)->makeVisible('api_token');
    }

    /**
     * 获取产品配置信息
     * @param Request $request
     * @return mixed
     */
    public function getProductConfig (Request $request)
    {
        $this->validate($request, [
            'code' => 'required',
            'name' => 'required'
        ]);
        $config = $request->user()->product_config()->where('code', $request->code);
        if ($config->exists()) {
            return $config->first();
        } else {
            return $config->create([
                'code' => json_decode($request->code),
                'name' => $request->name,
                'config' => [
                    'deposit' => 8,
                    'amount' => 100000,
                    'selfSelected' => false
                ]
            ]);
        }
    }

    /**
     * 设置配置信息
     * @param Request $request
     * @return mixed
     */
    public function setProductConfig (Request $request)
    {
        $this->validate($request, [
            'code' => 'required',
            'name' => 'required',
            'config' => 'required'
        ]);
        $config = $request->user()->product_config()->where('code', $request->code);
        $config->update([
            'config' => json_encode($request->config)
        ]);
        return $config->first();
    }

    /**
     * 获取用户的自选
     * @param Request $request
     * @return mixed
     */
    public function getSelfSelected (Request $request)
    {
        return $request->user()->self_selected()->get();
    }

    /**
     * 获取所有的角色
     * @return Role[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getRoles ()
    {
        return Role::all();
    }
}
