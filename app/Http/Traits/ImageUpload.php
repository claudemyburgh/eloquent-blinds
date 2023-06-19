<?php

namespace App\Http\Traits;

use Illuminate\Http\Request;

trait ImageUpload
{
    public function upload(Request $request): void
    {
        dd($request);
        //        $request->validate([
        //            'image.*' => 'image|mimes:jpeg,jpg,png,gif,webp|max:10000',
        //        ]);
        //
        //        if ($request->has('image')) {
        //            $post = Post::find($request->id);
        //            $post->addMedia($request->image)
        //                ->toMediaCollection('default');
        //        }
    }
}
