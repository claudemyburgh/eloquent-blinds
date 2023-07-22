<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#0284c7"/>
    <link rel="canonical" href="{{ config('app.url') }}"/>

    <title>@isset($title)
            {{ $title }} |
        @endisset {{ config('app.name', 'Eloquent Blinds') }} </title>
    <meta name="description" content="{{ $description }}"/>

    <meta name="facebook-domain-verification" content="28lq7xcnda4nkrexr76giuekw41nc8"/>
    <meta property="fb:app_id" content="{{ config('social.facebook.app_id') }}"/>
    {{ $seo }}

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600,700,800,900&display=swap" rel="stylesheet"/>
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/ts/app.tsx'])
</head>
<body class="font-sans antialiased">
<div class="min-h-screen relative bg-white dark:bg-gray-900">
    <x-pattern.grid class="h-1/3"/>
    <x-navigation/>
    <div id="portal"></div>
    <!-- Page Content -->
    <main>
        {{ $slot }}
    </main>
    <x-partials.section-products/>
    <x-partials.marquee/>
    @if(Route::currentRouteName() !== 'quote')
        <div class="wrapper">
            <div class="-mr-4">
                <x-contact.section/>
            </div>
        </div>
    @endif
    <x-footer/>
    <x-main.footer/>
</div>
</body>
</html>
