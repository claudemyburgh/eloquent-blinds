<x-app-layout title="Brochures"
              description="Download and view all our latest brochures ">
    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | Brochures" />
        <meta property="og:description"
              content="Download and view all our latest brochures " />
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | Frequently asked questions" />
        <meta name="twitter:description"
              content="Download and view all our latest brochures " />
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}" />
    </x-slot>

    <div class="wrapper pt-24 lg:pt-24 space-y-4">
        <h1 class="heading-1">Brochures</h1>
    </div>
</x-app-layout>
