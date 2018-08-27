<?php

namespace App\Http\Controllers;

use App\Meal;
use App\PayOrder;
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
        $out_trade_no = date('YmdHis') . '_' . str_random(12);
        /**
         * @type $user User
         */
        $user = $request->user();

        $payOrder = PayOrder::create([
            'total_fee' => $total_price * 100,
            'out_trade_no' => $out_trade_no,
            'user_id' => $user->id,
            'body' => join(',', $meal_ids->toArray())
        ]);
        $param = [
            'appid' => config('wechat.payment.default.app_id'),
            'mch_id' => config('wechat.payment.default.mch_id'),
            'time_stamp' => time(),
            'nonce_str' => str_random(32),
            'product_id' => $payOrder->id
        ];
        $sign = \EasyWeChat\Kernel\Support\generate_sign($param, config('wechat.payment.default.key'));
        $param['sign'] = $sign;
        return json_encode($param);
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
            $products = Meal::findMany(explode(',', $order_info->body));
            $product_name = $products->map(function (Meal $meal) {
                return $meal->title;
            });
            $result = $app->order->unify([
                'trade_type' => 'NATIVE',
                'spbill_create_ip' => '180.76.97.240',
                'product_id' => $message['product_id'],
                'out_trade_no' => $order_info->out_trade_no,
                'body' => join(',', $product_name->toArray()),
                'total_fee' => $order_info->total_fee,
            ]);

            return $result['prepay_id'];
        });

        return $response;
    }

    /**
     * @return mixed
     * @throws \EasyWeChat\Kernel\Exceptions\Exception
     */
    public function handlePaymentNotify ()
    {
        /**
         * @var $app \EasyWeChat\Payment\Application
         */
        $app = \EasyWeChat::payment();
        $response = $app->handlePaidNotify(function ($message, $fail) {
            $order = PayOrder::with('user_info')
                ->where('out_trade_no', $message['out_trade_no'])
                ->first();
            if ($order->status === 'success') {
                return true;
            }
            if (array_get($message, 'result_code') === 'SUCCESS') {
                $order->status = 'success';
                $order_user = $order->user_info;
                $order_user->group()->sync(explode(',', $order->body));
                $order->save();
            }
            return true;
        });

        return $response;
    }
}
