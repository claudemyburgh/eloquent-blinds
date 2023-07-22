<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#0284c7"/>
    <link rel="canonical" href="{{ config('app.url') }}"/>

    <title>{{ config('app.name', 'Eloquent Blinds') }}</title>
    <meta  name="description" content="We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space."/>

    {{--  HTML Meta Tags--}}
    <meta property="og:url" content="{{ config('app.url') }}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Eloquent Blinds"/>
    <meta property="og:description" content="{{ config('app.description') }}"/>
    <meta property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>
    {{--  Twitter Meta Tags --}}
    <meta name="twitter:card" content="summary_large_image"/>
    <meta property="twitter:domain" content="eloquentblinds.co.za"/>
    <meta property="twitter:url" content="{{ config('app.url') }}"/>
    <meta name="twitter:title" content="Eloquent Blinds"/>
    <meta name="twitter:description" content="{{ config('app.description') }}"/>
    <meta name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>


    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/frontend.tsx'])
    <!-- Google Tag Manager -->
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', `{{config('google.gtag.id')}}`);</script>
    <!-- End Google Tag Manager -->
</head>
<body class="font-sans antialiased">
<div class="min-h-screen  bg-white dark:bg-gray-900">
    <x-pattern.grid/>
    <x-navigation/>
    <!-- Page Content -->
    <main>
    {{ $slot }}
    </main>
    <div id="root"></div>
     <x-footer/>
</div>
</body>
</html>
