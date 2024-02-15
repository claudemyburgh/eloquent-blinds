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
