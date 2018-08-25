<?php

namespace App\Http\Controllers;

use App\Meal;
use App\PayOrder;
use App\Product;
use Illuminate\Http\Request;
use Jenssegers\Mongodb\Auth\User;

class PayController extends Controller
{
    /**
     * @param Request $request
     * @return PayOrder|\Illuminate\Database\Eloquent\Model
     */
    public function createPayOrder (Request $request)
    {
        $this->validate($request, [
            'meal_ids' => 'required'
        ]);
        $total_price = 0;
        $meals = Meal::whereIn('id', $request->meal_ids)->get();
        $meals->each(function (Meal $meal) use (&$total_price) {
            $total_price += $meal->price;
        });
        $meal_ids = $meals->map(function (Meal $meal) {
            return $meal->id;
        });
        $meal_names = $meals->map(function (Meal $meal) {
            return $meal->title;
        });
        $out_trade_no = date('YmdHis') . '_' . base64_encode($meal_ids);
        /**
         * @type $user User
         */
        $user = $request->user();

        $payOrder = PayOrder::create([
            'total_fee' => $total_price,
            'out_trade_no' => $out_trade_no,
            'user_id' => $user->id,
            'body' => join(',', $meal_names->toArray())
        ]);

        /**
         * @var $app \EasyWeChat\Payment\Application;
         */
        $app = \EasyWeChat::payment();
        $sign = \EasyWeChat\Kernel\Support\generate_sign([
            'appid' => config('wechat.payment.default.app_id'),
            'mch_id' => config('wechat.payment.default.mch_id'),
            'time_stamp' => time(),
            'nonce_str' => str_random(32),
            'product_id' => $payOrder->id
        ], config('wechat.payment.default.key'));
        return json_encode([
            'appid' => config('wechat.payment.default.app_id'),
            'mch_id' => config('wechat.payment.default.mch_id'),
            'time_stamp' => time(),
            'nonce_str' => str_random(32),
            'product_id' => $payOrder->id,
            'sign' => $sign
        ]);
    }

    /**
     * @return mixed
     * @throws \EasyWeChat\Kernel\Exceptions\Exception
     */
    public function handleQrCodeNotify ()
    {
        /**
         * @var $app \EasyWeChat\Payment\Application
         */
        $app = \EasyWeChat::payment();
        $response = $app->handleScannedNotify(function ($message, $fail, $alert) use ($app) {
            $order_info = PayOrder::find($message['product_id']);
            $total_fee = 0;
            $products = Meal::findMany(explode(',', $order_info->body));
            $products->each(function (Meal $meal) use (&$total_fee) {
                $total_fee += $meal->price;
            });
            $product_name = $products->map(function (Meal $meal) {
                return $meal->title;
            });
            $total_fee *= 100;
            $result = $app->order->unify([
                'trade_type' => 'NATIVE',
                'product_id' => $message['product_id'],
                'out_trade_no' => $order_info->out_trade_no,
                'body' => join(',', $product_name->toArray()),
                'total_fee' => $total_fee,
                'openid' => $message['openid']
            ]);

            return $result['prepay_id'];
        });

        return $response;
    }
}