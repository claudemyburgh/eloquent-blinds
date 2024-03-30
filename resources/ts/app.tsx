import "vanilla-headless"
import "@designbycode/traverse"
import { createRoot } from "react-dom/client"
import QuoteForm from "./components/QuoteForm"
import "@/../ts/comps/MouseSpotlight"
import "@/../ts/comps/MarqueeScroller"
import "@/../ts/comps/ImageRotator"
import "./lib/search"
import Splide from "@splidejs/splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import "@splidejs/splide/css/core"

import PhotoSwipeLightbox from "photoswipe/lightbox"
import "photoswipe/style.css"

import.meta.glob(["../img/**"])

let form = document.getElementById("quote-form")
if (form) {
  createRoot(form).render(<QuoteForm />)
}

const lightbox_gallery = document.querySelectorAll("[data-lightbox-gallery]")
if (lightbox_gallery.length > 0) {
  for (let i = 0; i < lightbox_gallery.length; i++) {
    const lightbox = new PhotoSwipeLightbox({
      //@ts-expect-error
      gallery: lightbox_gallery[i],
      children: "a",
      initialZoomLevel: 0.5,
      secondaryZoomLevel: "fill",
      showHideAnimationType: "zoom",
      showAnimationDuration: 300,
      hideAnimationDuration: 300,
      maxZoomLevel: 6,
      bgOpacity: 0.85,
      wheelToZoom: true,
      pinchToClose: true,
      pswpModule: () => import("photoswipe"),
    })
    lightbox.init()
  }
}

const elms = document.getElementsByClassName("splide")
for (let i = 0; i < elms.length; i++) {
  // @ts-ignore
  new Splide(elms[i], {
    type: "loop",
    drag: "free",
    focus: "center",
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
  }).mount({ AutoScroll })
}
