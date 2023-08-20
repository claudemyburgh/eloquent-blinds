<x-app-layout title="{{ $product->title }} {{ $category->title }}" :description="$product->description">
    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | {{ $product->title }} {{ $category->title }}"/>
        <meta property="og:description"
              content="{{ $product->description }}"/>
        <meta property="og:image" content="{{ $category->getFirstMediaUrl('default', 'card') }}"/>
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | {{ $product->title }} {{ $category->title }}"/>
        <meta name="twitter:description"
              content="{{ $product->description }}"/>
        <meta name="twitter:image" content="{{ $product->getFirstMediaUrl('default', 'card') }}"/>
    </x-slot>
    <div class="wrapper pt-24 lg:pt-32 relative z-10">

        <div class="grid md:grid-cols-5 lg:grid-cols-12 gap-6 dark:border-gray-800">
            <div class="relative md:col-span-2 lg:col-span-5">
                <x-product.media class="sticky top-32" :$product/>
            </div>
            <div class=" md:col-span-3 lg:col-span-7">
                <h1 class="heading-1 text-shadow-long-[5] text-shadow-primary-500/10 dark:text-shadow-black mt-5 mb-2">{{ $product->title }} {{ $category->title }}</h1>

                <div class="space-x-2 ">
                    <a href="{{ route('category', $category) }}" class="rounded-full bg-primary-500/10 hover:bg-primary-500/20 px-3 py-1 mt-2 inline-block text-xs font-semibold leading-6 text-primary-400 ring-1 ring-inset
                    ring-primary-500/20">In
                        category {{ Str::lower($category->title) }}</a>
                </div>
                <div class="prose prose-lg dark:prose-invert my-2 ">
                    @markdown($product->body)
                </div>
                <div class="relative">
                    <div id="quote-form" data-product="{{ $product->title }}"></div>
                </div>
            </div>
        </div>
        @if($category->products->count() > 1)
            <div class="my-12">
                <h2 class="heading-1 text-shadow-long-[5] text-shadow-primary-500/10 dark:text-shadow-black mt-5 md:w-2/3">
                    Other {{ strtolower($category->title) }} you may be interested in.
                </h2>
                <div class="grid grid-cols-12 gap-6 my-12">
                    @foreach($category->products as $prod)
                        @unless($prod->id === $product->id)
                            <x-product-card class="col-span-6 md:col-span-4 lg:col-span-3" :product="$prod" route="{{ route('product', [$category, $prod]) }}"/>
                        @endunless
                    @endforeach
                </div>
            </div>
        @endif
    </div>

</x-app-layout>
