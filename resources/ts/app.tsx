import "vanilla-headless"
import "@designbycode/traverse"
import { createRoot } from "react-dom/client"
import QuoteForm from "./components/QuoteForm"
import "@/../ts/comps/MouseSpotlight"
import "@/../ts/comps/MarqueeScroller"
import "@/../ts/comps/ImageRotator"
import "./lib/search" // import "./comps/search-dialog"
import "swiper/css"
import Swiper from "swiper"
import { Autoplay, FreeMode } from "swiper/modules"

import.meta.glob(["../img/**"])

let form = document.getElementById("quote-form")
if (form) {
  createRoot(form).render(<QuoteForm />)
}

document.querySelectorAll(".swiper")!.forEach((swiper) => {
  //@ts-expect-error
  new Swiper(swiper, {
    modules: [Autoplay, FreeMode],
    spaceBetween: 20,
    // centeredSlides: true,
    speed: 3000,
    edgeSwipeDetection: true,
    freeMode: {
      enabled: true,
      momentum: true,
    },
    grabCursor: true,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
    },
    loop: true,
    slidesPerView: 2,
    // initialSlide: 4,
    // width: 300,
    allowTouchMove: true,
    disableOnInteraction: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  })
})
