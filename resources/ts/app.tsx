import "vanilla-headless"
import "./comps/ImageSwap"
import { createRoot } from "react-dom/client"
import QuoteForm from "./components/QuoteForm"

let form = document.getElementById("quote-form")
if (form) {
  createRoot(form).render(<QuoteForm />)
}

const moveMouse = (e: MouseEvent) => {
  const { currentTarget: target } = e
  const rect = (target as HTMLElement).getBoundingClientRect()
  let y = e.clientY - rect.top
  let x = e.clientX - rect.left
  ;(target as HTMLElement).style.setProperty("--mouse-x", `${x}px`)
  ;(target as HTMLElement).style.setProperty("--mouse-y", `${y}px`)
}

setTimeout(() => {
  for (const card of document.querySelectorAll(".card")) {
    ;(card as HTMLElement).onmousemove = moveMouse
  }
}, 1000)
