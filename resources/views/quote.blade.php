<x-app-layout title="Get your free quote" description="We’d love to hear from you! Send us a message via email, whatapp or simply give us a call.">

    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | Get your Free quote"/>
        <meta property="og:description"
              content="We’d love to hear from you! Send us a message via email, whatapp or simply give us a call."/>
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | Get your Free quote"/>
        <meta name="twitter:description"
              content="We’d love to hear from you! Send us a message via email, whatapp or simply give us a call."/>
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>
    </x-slot>

    <div class="wrapper pt-24 lg:pt-20 space-y-4 grid md:grid-cols-2 gap-6">
        <div class="w-full relative">
            <x-contact.section/>
        </div>
        <div class="w-full ">
            <div id="quote-form"></div>
        </div>
    </div>
</x-app-layout>
