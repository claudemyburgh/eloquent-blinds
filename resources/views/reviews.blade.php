<x-app-layout title="Google customer reviews"
              description="Discover firsthand what our valued clients have to say about us, our exceptional products, and top-notch service. We take immense pride in the feedback we receive, and we encourage you to hear it directly from those who have experienced our offerings.">

    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | Google customer reviews"/>
        <meta property="og:description"
              content="Discover firsthand what our valued clients have to say about us, our exceptional products, and top-notch service. We take immense pride in the feedback we receive, and we encourage you to hear it directly from those who have experienced our offerings."/>
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | Google customer reviews"/>
        <meta name="twitter:description"
              content="Discover firsthand what our valued clients have to say about us, our exceptional products, and top-notch service. We take immense pride in the feedback we receive, and we encourage you to hear it directly from those who have experienced our offerings."/>
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>
    </x-slot>

    <div class="wrapper pt-24 lg:pt-32 space-y-4 grid  gap-6">
        <div class="w-full relative lg:w-1/2">
            <h1 class="heading-1 text-shadow-long-[5] text-shadow-primary-500/10 dark:text-shadow-black">
                Google Customer Reviews
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                Discover firsthand what our valued clients have to say about us, our exceptional products, and top-notch service. We take immense pride in the feedback we receive, and we encourage you to hear it directly from those who have
                experienced our offerings.
            </p>
        </div>
        <div class="w-full">
            <div class="text-3xl font-bold text-center my-5 text-gray-800 dark:text-gray-100">
                Coming soon
            </div>
            {{--            <x-google-reviews-container/>--}}
        </div>
    </div>
</x-app-layout>
