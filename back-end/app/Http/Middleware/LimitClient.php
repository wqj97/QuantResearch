<?php

namespace App\Http\Middleware;

use App\UserLoginRecord;
use Closure;
use Illuminate\Auth\Middleware\Authenticate;

class LimitClient extends Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     * @throws \Illuminate\Auth\AuthenticationException
     */
    public function handle ($request, Closure $next, ...$guards)
    {
        $this->authenticate($guards);

        if ($user = $request->user()) {
            $record = UserLoginRecord::where('user_id', $user->id)->orderByDesc('created_at')->first();
            if ($record && $record->ip !== $request->getClientIp()) {
                return response()->json('更具您目前的账号等级, 同一时间您的账号只能登陆一个客户端, 请重新登录', 421);
            }
        }

        return $next($request);
    }
}
