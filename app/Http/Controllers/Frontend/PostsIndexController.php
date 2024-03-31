<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use JetBrains\PhpStorm\NoReturn;

class PostsIndexController extends Controller
{
    #[NoReturn] public function __invoke()
    {
        dd('posts');
    }
}
