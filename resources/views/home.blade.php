<x-app-layout title="Blind automation, supplier and installer" description="We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space.">
    <x-slot name="seo">
        {{--  HTML Meta Tags--}}
        <meta property="og:title" content="Eloquent Blinds | Blind automation, supplier and installer"/>
        <meta property="og:description" content="We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space."/>
        <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>
        {{--  Twitter Meta Tags --}}
        <meta name="twitter:title" content="Eloquent Blinds | Blind automation, supplier and installer"/>
        <meta name="twitter:description" content="We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space."/>
        <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>
    </x-slot>


    <x-partials.hero/>
    <div class="wrapper py-24">
        <h1 class="text-5xl">Home</h1>

        <div id="contact"></div>
    </div>
</x-app-layout>
