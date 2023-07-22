interface SmallImageElement extends HTMLElement {
  dataset: {
    imageUrl: string
  }
}

interface ImageSwapElement extends HTMLElement {
  mainImage: HTMLImageElement | null
  smallImages: NodeListOf<SmallImageElement>
  initialUrl: string
  resetButton: HTMLButtonElement | null
}

class ImageSwap extends HTMLElement implements ImageSwapElement {
  mainImage: HTMLImageElement | null
  smallImages: NodeListOf<SmallImageElement>
  initialUrl: string
  resetButton: HTMLButtonElement | null

  constructor() {
    super()
    this.mainImage = this.querySelector("[data-image]") as HTMLImageElement | null
    this.smallImages = this.querySelectorAll("[data-image-url]") as NodeListOf<SmallImageElement>
    this.initialUrl = this.mainImage?.getAttribute("src") || ""
    this.resetButton = this.querySelector("[data-image-reset]") as HTMLButtonElement | null
  }

  private get checkIfFirstImageIsCurrent(): boolean {
    return this.mainImage?.getAttribute("src") === this.initialUrl
  }

  connectedCallback(): void {
    if (!this.mainImage || this.smallImages.length === 0 || !this.resetButton) {
      // console.error("Required elements not found in 'image-swap' element.")
      return
    }

    this.hideShowButton()
    this.smallImages.forEach((button) => button.addEventListener("click", this.swapImage.bind(this)))
    this.resetButton.addEventListener("click", this.reset.bind(this))
    document.body.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        this.reset()
      }
    })
  }

  disconnectedCallback(): void {
    this.smallImages.forEach((button) => button.removeEventListener("click", this.swapImage))
    if (this.resetButton) {
      this.resetButton.removeEventListener("click", this.reset)
    }
    document.body.removeEventListener("keydown", this.reset)
  }

  private hideShowButton(): void {
    if (this.checkIfFirstImageIsCurrent && this.resetButton) {
      this.resetButton.style.display = "none"
    } else if (this.resetButton) {
      this.resetButton.style.display = "flex"
    }
  }

  private swapImage(event: MouseEvent): void {
    if (!this.mainImage) return
    const target = event.target as SmallImageElement
    this.mainImage.setAttribute("src", target.dataset.imageUrl)
    this.hideShowButton()
  }

  private reset(): void {
    if (!this.mainImage) return
    this.mainImage.setAttribute("src", this.initialUrl)
    this.hideShowButton()
  }
}

customElements.define("image-swap", ImageSwap)
