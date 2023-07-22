<x-app-layout :title="$category->title" :description="$category->description">

    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | {{ $category->title }}"/>
        <meta property="og:description"
              content="{{ $category->description }}"/>
        <meta property="og:image" content="{{ $category->getFirstMediaUrl('default', 'card') }}"/>
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | {{ $category->title }}"/>
        <meta name="twitter:description"
              content="{{ $category->description }}"/>
        <meta name="twitter:image" content="{{ $category->getFirstMediaUrl('default', 'card') }}"/>
    </x-slot>

    <section class="relative">
        <div class="wrapper pt-24 lg:pt-32 space-y-4">
            <div class="lg:flex flex-row-reverse">
                <div class="w-full lg:w-1/2">
                    <figure class="relative p-[2px] flex rounded-global shadow-2xl shadow-primary-500/50 bg-gradient-to-br from-primary-500 to-secondary-400">
                        <div aria-hidden="true" class="absolute w-1/2 top-0 h-[2px] left-0 bg-gradient-to-r  from-transparent via-primary-200 to-transparent"></div>
                        <img width="800" height="600" class="rounded-global aspect-4/3 object-cover" src="{{ $category->getFirstMediaUrl('default', 'large') }}" alt="{{ $category->title }} image">
                    </figure>
                </div>
                <div class="w-full lg:w-1/2 pr-6">
                    <h1 class="col-span-12 heading-1 text-shadow-lg">
                        {{ $category->title }}
                    </h1>
                    <article class="prose prose-lg dark:prose-invert my-8 ">
                        @markdown($category->body)
                    </article>
                </div>
            </div>


            @if($category->products->count())
                <div class="grid grid-cols-12 gap-6 my-12">
                    <div class="col-span-12">
                        <h3 class="heading-3 text-shadow-lg">
                            {{ $category->products->count() }} Products in category {{ $category->title }}
                        </h3>
                    </div>
                    @foreach($category->products as $product)
                        <x-product-card class="col-span-6 md:col-span-3" :$product route="{{ route('product', [$category, $product]) }}"/>
                    @endforeach
                </div>
            @endif

            @if($descendants->descendants->count())
                <div class="grid grid-cols-12 gap-6 my-12">
                    <div class="col-span-12">
                        <h3 class="heading-3 text-shadow-lg">
                            All products in {{ $category->title }}
                        </h3>
                    </div>
                    @foreach($descendants->descendants as $descendant)
                        @foreach($descendant->products as $product)
                            <x-product-card class="col-span-6 md:col-span-3" :$product route="{{ route('product', [$descendant, $product]) }}"/>
                        @endforeach
                    @endforeach


                </div>
            @endif
        </div>
    </section>
</x-app-layout>

