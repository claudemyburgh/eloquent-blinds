<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\Product;
    use Illuminate\Contracts\Foundation\Application;
    use Illuminate\Contracts\View\Factory;
    use Illuminate\Contracts\View\View;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Cache;

    class HomeController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request): View|\Illuminate\Foundation\Application|Factory|Application
        {
            $products = Cache::rememberForever('home-products', fn() => Product::with('media', 'category')->where('popular', 1)->limit(4)->get());
            return view('home', ['products' => $products]);
        }
    }
