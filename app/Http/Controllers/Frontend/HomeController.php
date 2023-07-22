<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\Product;
    use Illuminate\Http\Request;

    class HomeController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(Request $request)
        {
            $products = Product::with('media', 'category')->where('popular', 1)->get()->take(4);
            return view('home', ['products' => $products]);
        }
    }
