<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\Category;
    use Illuminate\Support\Collection;

    class NavigationLinksController extends Controller
    {
        public static function blinds(): Collection
        {
//            dd(Category::whereNot('slug', 'shutters')->with('products')->get()) ;
            return Category::whereNot('slug', 'shutters')->with('products')->get();
        }

        public function shutters(): Collection
        {
            return Category::with('products')->get();
        }
    }
