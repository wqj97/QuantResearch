<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * @param Request $request
     * @return Product|\Illuminate\Database\Eloquent\Model|null|object
     */
    public function getProductConfig (Request $request)
    {
        $this->validate($request, [
            'names' => 'required'
        ]);
        $product_config = Product::where('name', $request->names)->first();
        if (!$product_config) {
            return response()->json('这个产品还没有被支持');
        }
        $current_year = (int)date('y');
        $current_month = (int)date('m');
        $current_date = (int)date('d');
        $product1_month = $product_config->product1_month;
        $product2_month = $product_config->product2_month;
        foreach ($product1_month as &$month) {
            if ($month > $current_month) {
                $month = $current_year . $this->month_pad($month);
            } else if ($month == $current_month) {
                if ($current_date >= 15) {
                    $month = ($current_year + 1) . $this->month_pad($month);
                } else {
                    $month = $current_year . $this->month_pad($month);
                }
            } else {
                $month = ($current_year + 1) . $this->month_pad($month);
            }
        }
        foreach ($product2_month as &$month) {
            if ($month > $current_month) {
                $month = $current_year . $this->month_pad($month);
            } else if ($month == $current_month) {
                if ($current_date >= 15) {
                    $month = ($current_year + 1) . $this->month_pad($month);
                } else {
                    $month = $current_year . $this->month_pad($month);
                }
            } else {
                $month = ($current_year + 1) . $this->month_pad($month);
            }
        }
        $product_config->product1_month = $product1_month;
        $product_config->product2_month = $product2_month;
        return $product_config;
    }

    /**
     * 获取所有的产品配置
     * @return array
     */
    public function getProductConfigList ()
    {
        return Product::all();
    }

    /**
     * 获取所有的产品提醒配置
     * @return array
     */
    public function getProductConfigNoticeList ()
    {
        return Product::with(['roles'])->get(['name', 'stop', 'doable', 'id']);
    }

    private function month_pad ($month)
    {
        return str_pad($month, 2, '0', 0);
    }

    /**
     * 修改产品配置
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function setProductConfig (Request $request)
    {
        $this->validate($request, [
            'stableCoefficient' => 'required',
            'code' => 'required',
            'names' => 'required',
            'product1_month' => 'required',
            'product2_month' => 'required',
            'openPosition' => 'required',
            'stopLoss' => 'required',
            'doable' => 'required',
            'stop' => 'required',
            'unit' => 'required',
            'roles' => 'required'
        ]);
        $product = Product::findOrNew($request->id);
        $product->stableCoefficient = $request->stableCoefficient;
        $product->code = $request->code;
        $product->names = $request->names;
        $product->name = $request->name;
        $product->product1_month = $request->product1_month;
        $product->product2_month = $request->product2_month;
        $product->openPosition = $request->openPosition;
        $product->stopLoss = $request->stopLoss;
        $product->unit = $request->unit;
        $product->doable = $request->doable;
        $product->stop = $request->stop;
        $product->save();
        $product->roles()->sync($request->roles);
        return response()->json('成功');
    }

    /**
     * 删除一个产品
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function deleteProductConfig (Request $request)
    {
        $this->validate($request, [
            'id' => 'required'
        ]);
        $product = Product::find($request->id);
        $product->roles()->detach();
        $product->delete($request->id);
        return response()->json('删除成功');
    }
}
