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
            'analysis' => 'required'
        ]);

        if (News::where('url', $request->url)->exists()) {
            return response()->json('success');
        }

        return News::create([
            'title' => $request->title,
            'content' => $request->post('content'),
            'classify' => $request->classify,
            'url' => $request->url,
            'analysis' => json_decode($request->analysis)
        ]);
    }

    /**
     * 获取新闻
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getNews ()
    {
        return News::orderByDesc('id')->paginate(15);
    }

    /**
     * 检测新闻是否存在
     * @param Request $request
     * @return bool
     */
    public function checkNews (Request $request)
    {
        $this->validate($request, [
            'url' => 'required'
        ]);

        if (News::where('url', $request->url)->exists()) {
            return response('', 200);
        } else {
            return response('', 404);
        }
    }
}
