<section class="max-w-full overflow-x-clip relative z-10">
    <div style="--speed: 30000ms; --direction: normal" class="flex  py-px group bg-gradient-to-r from-primary-600 to-secondary-400">
        <div class="bg-gray-100 dark:bg-gray-900 py-8">
            <div class="flex animate-loop min-w-full space-x-20 w-full text-gray-700 dark:text-gray-100 fit-content">
                @foreach($categories as $category)
                    <a class="hover-underline px-4 shrink-0" href="{{ route('category', $category) }}">{{ $category->title }}</a>
                    @foreach($category->children as $child)
                        <a class="hover-underline px-4 shrink-0" href="{{ route('category', $child) }}">{{ $child->title }}</a>
                        @foreach($child->products as $product)
                            <a class="hover-underline px-4 shrink-0" href="{{ route('product', [$child, $product]) }}">{{ $product->title }}</a>
                        @endforeach
                    @endforeach
                @endforeach

                @foreach($categories as $category)
                    <a class="hover-underline px-4 shrink-0" href="#">{{ $category->title }}</a>
                    @foreach($category->children as $child)
                        <a class="hover-underline px-4 shrink-0" href="#">{{ $child->title }}</a>
                        @foreach($child->products as $product)
                            <a class="hover-underline px-4 shrink-0" href="#">{{ $product->title }}</a>
                        @endforeach
                    @endforeach
                @endforeach

            </div>
        </div>
    </div>
</section>
