<div class="bg-gray-100 dark:bg-gray-950 text-gray-700 overflow-hidden dark:text-white h-16 border-y-2 md:border-y-[5px] border-primary-500 ">
    <marquee-scroller ticker-speed="1" class="carousel ">
        @foreach($categories as $category)
            <div class="carousel-cell py-2 mr-10">
                <a class="hover-underline inline-block btn py-3 px-4 shrink-0" href="{{ route('category', $category) }}">{{ $category->title }}</a>
            </div>

            @foreach($category->children as $child)
                <div class="carousel-cell py-2 mr-10">
                    <a class="hover-underline inline-block btn py-3 px-4 shrink-0" href="{{ route('category', $child) }}">{{ $child->title }}</a>
                </div>

                @foreach($child->products as $product)
                    <div class="carousel-cell py-2 mr-10">
                        <a class="hover-underline inline-block btn py-3 px-4 shrink-0" href="{{ route('product', [$child, $product]) }}">{{ $product->title }}</a>
                    </div>
                @endforeach
            @endforeach
        @endforeach
    </marquee-scroller>
</div>

