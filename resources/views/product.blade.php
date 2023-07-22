<x-app-layout title="{{ $product->title }} {{ $category->title }}">

    <div class="wrapper pt-24 lg:pt-32 relative z-10">

        <div class="grid md:grid-cols-5 lg:grid-cols-12 gap-6 dark:border-gray-800">
            <div class="relative md:col-span-2 lg:col-span-5">
                <x-product.media class="sticky top-32" :$product/>
            </div>

            <div class=" md:col-span-3 lg:col-span-7">
                <h1 class="heading-1 text-shadow-lg mt-5">{{ $product->title }} {{ $category->title }}</h1>
                <a href="{{ route('category', $category) }}" class="rounded-full bg-primary-500/10 px-3 py-1 mt-2 inline-block text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-primary-500/20">In category {{
                Str::lower($category->title)
                }}</a>
                <div class="prose prose-lg dark:prose-invert my-2 ">
                    @markdown($product->body)
                </div>
                <div class="relative">
                    <div id="quote-form" data-product="{{ $product->title }}"></div>
                </div>
            </div>
        </div>
    </div>

</x-app-layout>
