<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0284c7"/>
  <link rel="canonical" href="{{ config('app.url') }}"/>
  <title inertia>{{ config('app.name', 'Eloquent Blinds') }}</title>
  <meta head-key="description" inertia name="description" content="We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space."/>
  {{--  HTML Meta Tags--}}
  <meta head-key="fb-url" property="og:url" content="{{ config('app.url') }}"/>
  <meta head-key="fb-type" property="og:type" content="website"/>
  <meta head-key="fb-title" property="og:title" content="Eloquent Blinds"/>
  <meta head-key="fb-description" property="og:description" content="{{ config('app.description') }}"/>
  <meta head-key="fb-image" property="og:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>
  {{--  Twitter Meta Tags --}}
  <meta head-key="tw-card" name="twitter:card" content="summary_large_image"/>
  <meta head-key="tw-domain" property="twitter:domain" content="eloquentblinds.co.za"/>
  <meta head-key="tw-url" property="twitter:url" content="{{ config('app.url') }}"/>
  <meta head-key="tw-title" name="twitter:title" content="Eloquent Blinds"/>
  <meta head-key="tw-description" name="twitter:description" content="{{ config('app.description') }}"/>
  <meta head-key="tw-image" name="twitter:image" content="{{ config('app.url') . "/img/hero.webp" }}"/>


  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=figtree:400,500,600,700,800,900&display=swap" rel="stylesheet"/>

  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

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

  <!-- Scripts -->
  @routes
  @viteReactRefresh
  @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
  @inertiaHead
</head>
<body
  class="font-sans antialiased overflow-x-hidden relative bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-300">
@inertia

@production
  <!-- prettier-ignore -->
  <!-- Google Tag Manager (noscript) -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id={{config('google.gtag.id')}}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  <!-- End Google Tag Manager (noscript) -->
@endproduction


<!-- prettier-ignore -->
<script>(g => {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__",
      m = document, b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams,
      u = () => h || (h = new Promise(async (f, n) => {
        await (a = m.createElement("script"));
        e.set("libraries", [...r] + "");
        for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
        e.set("callback", c + ".maps." + q);
        a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
        d[q] = f;
        a.onerror = () => h = n(Error(p + " could not load."));
        a.nonce = m.querySelector("script[nonce]")?.nonce || "";
        m.head.append(a)
      }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
  })
  ({key: `{{ config('google.api.maps') }}`, v: "weekly"});</script>
</body>
</html>
