import Flickity from "flickity"
import "flickity/css/flickity.css" // Add this to declare the method on Flickity prototype

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

  // Define observedAttributes to watch for changes in attributes
  static get observedAttributes() {
    return ["ticker-speed"]
  }

  protected _tickerSpeed: number = 2

  get tickerSpeed(): number {
    return this._tickerSpeed
  }

  set tickerSpeed(value: number) {
    this._tickerSpeed = value
  }

  protected _isPaused: boolean = false

  get isPaused(): boolean {
    return this._isPaused
  }

  set isPaused(value: boolean) {
    this._isPaused = value
  }

  // Handle attribute changes
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "ticker-speed" && oldValue !== newValue) {
      this.tickerSpeed = parseFloat(newValue) || 2
    }
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
    //@ts-expect-error
    this.tickerSpeed = parseFloat(this.getAttribute("ticker-speed")) || 2
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
      this.kitty.selectedIndex = this.kitty["dragEndRestingSelect"]() // Access the method from the prototype
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
