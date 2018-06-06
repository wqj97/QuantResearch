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
     * @param Request $request
     * @return array
     */
    public function getProductConfigList (Request $request)
    {
        return Product::all();
    }

    private function month_pad ($month)
    {
        return str_pad($month, 2, '0', 0);
    }
}
