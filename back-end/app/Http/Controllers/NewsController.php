<?php

namespace App\Http\Controllers;

use App\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * 创建新闻
     * @param Request $request
     * @return News|\Illuminate\Database\Eloquent\Model
     */
    public function createNews (Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'content' => 'required',
            'classify' => 'required',
            'url' => 'required',
            'analysis' => 'required|json'
        ]);

        if (News::where('url', $request->url)->exists()) {
            return response()->json('success');
        }

        return News::create($request->all());
    }

    /**
     * 获取新闻
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getNews ()
    {
        return News::orderByDesc('id')->paginate(15);
    }
}
