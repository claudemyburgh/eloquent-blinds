<x-app-layout title="Tag: {{ $tagName }}" description="Discover our products and services by looking through our list of tags.">
    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | Tag: {{ $tagName }}"/>
        <meta property="og:description"
              content="Discover our products and services by looking through our list of tags."/>
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | Tag: {{ $tagName }}"/>
        <meta name="twitter:description"
              content="Discover our products and services by looking through our list of tags."/>
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>
    </x-slot>


    <section class="relative">
        <div class="wrapper pt-24 lg:pt-32 space-y-4">
            <div class="lg:flex flex-row-reverse">
                <div class="w-full lg:w-1/2 ">
                    @foreach($tags as $tag)
                        <a href="{{ route('tag', $tag) }}" @class(['rounded-full px-3 py-1 mt-2 inline-block text-xs font-semibold leading-6 ring-1 ring-inset ',
                            'border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 ring-amber-500/40' => request()->segment(2) === $tag->slug,
                            'border-gray-500/40 bg-gray-500/10 hover:bg-gray-500/20 text-gray-400 ring-gray-500/40' => request()->segment(2) !== $tag->slug,
])>
                            #{{ $tag->name }}
                        </a>
                    @endforeach

                </div>
                <div class="w-full lg:w-1/2 pr-6">
                    <h1 class="col-span-12 heading-1 text-shadow-lg">
                        Tag: {{ $tagName }}
                    </h1>
                    <article class="prose prose-lg dark:prose-invert my-8 ">
                        <p>Discover our products and services by looking through our list of tags.</p>
                    </article>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-6 my-12">
                @foreach($products as $product)
                    <x-product-card class="col-span-6 md:col-span-3" :$product route="{{ route('product', [$product->category, $product]) }}"/>
                @endforeach
            </div>
        </div>
    </section>
</x-app-layout>
