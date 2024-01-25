<div data-swiper class="swiper bg-gray-100 dark:bg-gray-950 text-gray-700 overflow-hidden whitespace-nowrap dark:text-white h-16 border-y-2 md:border-y-[5px] border-primary-500 ">
    <div class="swiper-wrapper">
        @foreach($categories as $category)
            <div class="swiper-slide inline-block w-auto items-center justify-center">
                <a class="hover-underline py-4 px-8 inline-block" href="{{ route('category', $category) }}">{{ $category->title }}</a>
            </div>
            @foreach($category->children as $child)
                <div class="swiper-slide inline-block w-auto items-center justify-center">
                    <a class="hover-underline py-4 px-8 inline-block" href="{{ route('category', $child) }}">{{ $child->title }}</a>
                </div>
                @foreach($child->products as $product)
                    <div class="swiper-slide inline-block w-auto items-center justify-center">
                        <a class="hover-underline py-4 px-8 inline-block" href="{{ route('product', [$child, $product]) }}">{{ $product->title }}</a>
                    </div>
                @endforeach
            @endforeach
        @endforeach
    </div>
</div>

