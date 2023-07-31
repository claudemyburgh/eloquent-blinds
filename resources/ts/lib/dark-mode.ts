//@ts-expect-error
let mediaQuery: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")

function changeTheme(value?: "system" | "dark" | "light" | undefined): string {
  let theme: string = "system"
  if (value === undefined) value = localStorage.theme
  if (value === "dark") {
    theme = "dark"
    document.documentElement.classList.add("dark")
  } else if (value === "light") {
    theme = "light"
    document.documentElement.classList.remove("dark")
  } else if (mediaQuery.matches) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
  localStorage.theme = value
  return theme
}

document.documentElement.setAttribute("data-theme", changeTheme())

// @ts-ignore
function updateThemeWithoutTransitions(theme?: string) {
  updateTheme(theme)
  document.documentElement.classList.add("[&_*]:!transition-none")
  window.setTimeout(() => {
    document.documentElement.classList.remove("[&_*]:!transition-none")
  }, 0)
}

document.querySelectorAll("[data-theme-value]")?.forEach((button: any) => {
  button.addEventListener("click", () => {
    changeTheme(button.dataset.themeValue)
  })
})
