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
        return Product::where('name', $request->names)->first();
    }
}
