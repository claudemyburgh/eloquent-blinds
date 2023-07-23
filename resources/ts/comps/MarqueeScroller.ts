import Flickity from "flickity"
import "flickity/css/flickity.css"

// Add this to declare the method on Flickity prototype
declare module "flickity" {
  interface Flickity {
    dragEndRestingSelect(): number
  }
}

class MarqueeScroller extends HTMLElement {
  protected kitty: Flickity | null = null

  constructor() {
    super()
  }

  protected _tickerSpeed: number | undefined

  get tickerSpeed(): number {
    return this._tickerSpeed as number
  }

  set tickerSpeed(value: number) {
    this._tickerSpeed = value
  }

  protected _isPaused: boolean = false

  get isPaused(): boolean {
    return this._isPaused as boolean
  }

  set isPaused(value: boolean) {
    this._isPaused = value
  }

  connectedCallback() {
    this.init()
    this.addEventListener("mouseenter", this.pause.bind(this), false)
    this.addEventListener("focusin", this.pause.bind(this), false)
    this.addEventListener("mouseleave", this.play.bind(this), false)
    this.addEventListener("focusout", this.play.bind(this), false)
  }

  disconnectedCallback() {
    this.removeEventListener("mouseenter", this.pause)
    this.removeEventListener("focusin", this.pause)
    this.removeEventListener("mouseleave", this.play)
    this.removeEventListener("focusout", this.play)
  }

  protected init() {
    this._tickerSpeed = 5
    this._isPaused = false
    this.kitty = new Flickity(this, {
      autoPlay: true,
      prevNextButtons: false,
      pageDots: false,
      draggable: true,
      wrapAround: true,
      selectedAttraction: 0.05,
      friction: 0.25,
    })
    this.kitty?.selectCell(0) // Use selectCell method instead of accessing kitty.x directly
    this.updateAnimation()
  }

  protected updateAnimation = () => {
    if (this.isPaused || !this.kitty) return
    // Do your animation update here
    if (this.kitty.slides) {
      //@ts-expect-error
      this.kitty.x = (this.kitty.x - this.tickerSpeed) % this.kitty.slideableWidth
      //@ts-expect-error
      this.kitty.selectedIndex = this.kitty.dragEndRestingSelect() // Access the method from the prototype
      //@ts-expect-error
      this.kitty.updateSelectedSlide()
      //@ts-expect-error
      this.kitty.settle(this.kitty.x)
    }
    window.requestAnimationFrame(this.updateAnimation)
  }

  protected pause() {
    this.isPaused = true
  }

  protected play() {
    if (!this.isPaused || !this.kitty) return
    this.isPaused = false
    window.requestAnimationFrame(this.updateAnimation)
  }
}

customElements.define("marquee-scroller", MarqueeScroller)
