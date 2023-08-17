<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    @production
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
            })(window, document, 'script', 'dataLayer', '{{ config('google.gtag.id') }}');</script>
        <!-- End Google Tag Manager -->

    @endproduction
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#0284c7"/>
    <link rel="canonical" href="{{ URL::current() }}"/>

    <title>@isset($title)
            {{ $title }} |
        @endisset {{ config('app.name', 'Eloquent Blinds') }} </title>
    <meta name="description" content="{{ $description }}"/>

    <meta property="fb:app_id" content="{{ config('social.facebook.app_id') }}"/>
    {{--  HTML Meta Tags--}}
    <meta property="og:url" content="{{  URL::current() }}"/>
    <meta property="og:type" content="website"/>
    {{--  Twitter Meta Tags --}}
    <meta name="twitter:card" content="summary_large_image"/>
    <meta property="twitter:domain" content="eloquentblinds.co.za"/>
    <meta property="twitter:url" content="{{ URL::current() }}"/>

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
    @vite(['resources/ts/lib/dark-mode.ts', 'resources/css/app.css', 'resources/ts/app.tsx'])
</head>
<body class="font-sans antialiased overflow-x-hidden">

<a class="bg-gray-200 text-gray-900 dark:text-gray-100 dark:bg-gray-950 border border-primary-500  focus:px-5 rounded-lg shadow-2xl text-sm font-semibold focus:outline-2 focus:outline-primary-500 focus:py-3 focus:fixed focus:z-[1000]
top-5 left-5
not-sr-only:block sr-only focus:not-sr-only"
   href="#main">
    Skip to main
</a>

@production
    <!-- Google Tag Manager (noscript) -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id={{ config('google.gtag.id') }}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
@endproduction
<div class="min-h-screen relative bg-white dark:bg-gray-900">
    <x-pattern.grid class="h-1/3 "/>
    <x-navigation/>
    <div id="portal"></div>
    <!-- Page Content -->
    <main id="main" class="relative z-10">
        {{ $slot }}
    </main>
    <x-partials.section-products/>
    <x-partials.marquee2/>
    @if(Route::currentRouteName() !== 'quote')
        <div class="wrapper">
            <div class="lg:-mr-4">
                <x-contact.section/>
            </div>
        </div>
    @endif
    <x-footer/>

    <div aria-hidden="true" class="fixed bottom-20 inset-x-0 z-[1001] pointer-events-none">
        <div class="wrapper relative">
            <button class="absolute right-4 pointer-events-auto md:-right-14 h-12 w-12 flex items-center justify-center rounded-lg border border-gray-700 bg-primary-500 text-white" is="headless-scrolltop">
                <span class="sr-only"> Scroll to top</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 pointer-events-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"/>
                </svg>
            </button>
        </div>
    </div>
</div>
</body>
</html>
