import Flickity from "flickity"
import "flickity/css/flickity.css" // Add this to declare the method on Flickity prototype
import "flickity-as-nav-for"

const elem: HTMLElement | null = document?.querySelector(".main-carousel")
if (elem) {
  new Flickity(elem, {})
}
const subEle: HTMLElement | null = document?.querySelector(".nav-carousel")
if (subEle && elem) {
  new Flickity(subEle, {
    asNavFor: ".main-carousel",
    contain: true,
    pageDots: false,
  })
}
