import Swiper from "swiper"
import { Autoplay, FreeMode } from "swiper/modules"
import "swiper/css"

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
