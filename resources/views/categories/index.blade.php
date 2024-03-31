<x-app-layout title="Product Categories">
    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | Product Categories" />
        <meta property="og:description"
              content="Discover a world of stunning blinds as you explore our diverse product categories. From timeless classics to contemporary designs, our curated selection offers unparalleled style and functionality." />
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | Product Categories" />
        <meta name="twitter:description"
              content="Discover a world of stunning blinds as you explore our diverse product categories. From timeless classics to contemporary designs, our curated selection offers unparalleled style and functionality." />
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
    </x-slot>

    <section class="relative">
        <div class="wrapper pt-24 lg:pt-32 space-y-4">
            <div class="lg:flex flex-row-reverse">
                <div>
                    <x-youtube-video class="mb-6" src="https://www.youtube.com/embed/FwIDKoVmtsY" />
                </div>
                <div class="w-full  lg:w-1/2 pr-6">
                    <h1 class="col-span-12 heading-1 text-shadow-long-[5] text-shadow-primary-500/10 dark:text-shadow-black">
                        Product Categories
                    </h1>
                    <article class="prose prose-lg dark:prose-invert my-8 ">
                        <p>Discover a world of stunning blinds as you explore our diverse product categories. From
                            timeless classics to contemporary designs, our curated selection offers unparalleled style
                            and functionality.</p>
                        <p>Browse through our user-friendly website and find the perfect window coverings to enhance
                            your living space. Elevate your home with privacy, light control, and exquisite aesthetics.
                            Start exploring now and
                            transform your decor with our captivating blinds.</p>
                    </article>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-6 my-12">
                @foreach($categories as $category)
                    <div class="col-span-12">
                        <a class="relative group inline-block text-2xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white hover-underline text-shadow-long-[5] text-shadow-primary-500/10 dark:text-shadow-black"
                           href="{{ route('categories.show', $category) }}">
                            {{ $category->title }}
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor"
                                     class="h-6 w-6 absolute -left-[36px] top-2 hidden group-hover:lg:block"><path
                                        stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
                            </span>
                        </a>
                    </div>
                    @foreach($category->children as $child)
                        <x-product-card class="col-span-6 md:col-span-4 lg:col-span-3" :product="$child"
                                        route="{{ route('categories.show', $child) }}" />
                    @endforeach
                @endforeach
            </div>
        </div>
    </section>
</x-app-layout>

