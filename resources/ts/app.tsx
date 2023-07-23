import "vanilla-headless"
import "./comps/ImageSwap"
import { createRoot } from "react-dom/client"
import QuoteForm from "./components/QuoteForm"
import "@/../ts/comps/MouseSpotlight"
import "@/../ts/comps/MarqueeScroller"

let form = document.getElementById("quote-form")
if (form) {
  createRoot(form).render(<QuoteForm />)
}
