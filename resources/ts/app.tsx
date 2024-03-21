import "vanilla-headless"
import "@designbycode/traverse"
import { createRoot } from "react-dom/client"
import QuoteForm from "./components/QuoteForm"
import "@/../ts/comps/MouseSpotlight"
import "@/../ts/comps/MarqueeScroller"
import "@/../ts/comps/ImageRotator"
import "./lib/search" // import "./comps/search-dialog"

import.meta.glob(["../img/**"])

let form = document.getElementById("quote-form")
if (form) {
  createRoot(form).render(<QuoteForm />)
}


import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/splide/css/core';

const elms = document.getElementsByClassName( 'splide' );

for ( let i = 0; i < elms.length; i++ ) {
  // @ts-ignore
  new Splide( elms[ i ], {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    cloneStatus: true,
    arrows: false,
    gap: 50,
    start: 10,
    autoWidth: true,
    preloadPages: 20,
    // perPage: 3,
    autoScroll: {
      speed: 2,
    },
  } ).mount({AutoScroll});
}
