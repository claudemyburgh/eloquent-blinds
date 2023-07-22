<image-swap {{ $attributes->merge(['class' => 'grid grid-cols-12 gap-6 relative']) }}>

    <div class="relative  col-span-12 ">
        <img height="480" width="600" id="main-product-image" data-image="main" class="bg-gray-200 rounded-global w-full aspect-4/3 object-cover" src="{{ $product->getFirstMediaUrl('default', 'card') }}" alt="{{ $product->title }} main
        image">
        <button data-image-reset
                class="hidden items-center bg-gradient-to-b from-primary-600 to-secondary-400 border border-transparent rounded-global font-semibold text-xs  uppercase tracking-widest hover:to-secondary-300
                            focus:to-secondary-300 active:to-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition ease-in-out duration-150 text-shadow text-white h-16 w-16 justify-center
                            left-1/2 -translate-x-1/2 bottom-3 absolute shadow-2xl text-shadow"
                type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
            </svg>
        </button>
    </div>
    @if($product->getMedia())
        @foreach($product->getMedia() as $media)
            @unless($loop->first)
                <button type="button" data-image-url="{{ $media->getFullUrl('card') }}" class="aspect-square  col-span-3  w-full">
                    <img class="bg-gray-200 rounded-global w-full aspect-square object-cover pointer-events-none" src="{{ $media->getFullUrl('small') }}" alt="{{ $product->title }} small image">
                </button>
            @endif
        @endforeach
    @endif

</image-swap>
