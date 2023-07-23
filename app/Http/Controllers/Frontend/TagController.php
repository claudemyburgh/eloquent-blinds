<?php

    namespace App\Http\Controllers\Frontend;

    use App\Http\Controllers\Controller;
    use App\Models\Product;
    use Illuminate\Support\Facades\Cache;
    use Illuminate\Support\Str;
    use Spatie\Tags\Tag;

    class TagController extends Controller
    {
        /**
         * Handle the incoming request.
         */
        public function __invoke(string $slug)
        {
            $tags = Cache::rememberForever('tags-' . $slug, fn() => Tag::where('type', 'products')->get());
            $products = Cache::rememberForever('tags-product-' . $slug, fn() => Product::with('category')->withAnyTags([$slug], 'products')->get());
            return view('tag', ['tags' => $tags, 'products' => $products, 'tagName' => Str::headline($slug)]);
        }
    }
