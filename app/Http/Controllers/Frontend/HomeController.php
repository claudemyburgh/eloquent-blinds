<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\Product;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Cache;

    class HomeController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request)
        {
            $products = Cache::rememberForever('home-products', fn() => Product::with('media', 'category')->where('popular', 1)->limit(4)->get());
            return view('home', ['products' => $products]);
        }
    }
