import React, { PropsWithChildren } from "react";
import Navbar from "@/FrontEnd/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/FrontEnd/Footer/Footer";
import { useDarkMode } from "usehooks-ts";
import { Head } from "@inertiajs/react";

const themeScript = `
  let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  function updateTheme(savedTheme) {
    let theme = 'system'
    try {
      if (!savedTheme) {
        savedTheme = window.localStorage.theme
      }
      if (savedTheme === 'dark') {
        theme = 'dark'
        document.documentElement.classList.add('dark')
      } else if (savedTheme === 'light') {
        theme = 'light'
        document.documentElement.classList.remove('dark')
      } else if (mediaQuery.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch {
      theme = 'light'
      document.documentElement.classList.remove('dark')
    }
    return theme
  }

  function updateThemeWithoutTransitions(savedTheme) {
    updateTheme(savedTheme)
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  document.documentElement.setAttribute('data-theme', updateTheme())

  new MutationObserver(([{ oldValue }]) => {
    let newValue = document.documentElement.getAttribute('data-theme')
    if (newValue !== oldValue) {
      try {
        window.localStorage.setItem('theme', newValue)
      } catch {}
      updateThemeWithoutTransitions(newValue)
    }
  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

  mediaQuery.addEventListener('change', updateThemeWithoutTransitions)
  window.addEventListener('storage', updateThemeWithoutTransitions)
`;

export default function AppLayout({ children }: PropsWithChildren) {
    const { isDarkMode } = useDarkMode();

    const handleMouseMovement = (e: MouseEvent) => {
        const { currentTarget: target } = e;
        const rect = (target as HTMLElement).getBoundingClientRect();
        let y = e.clientY - rect.top;
        let x = e.clientX - rect.left;
        (target as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (target as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    };

    setTimeout(() => {
        for (const card of document.querySelectorAll(".card")) {
            (card as HTMLElement).onmousemove = handleMouseMovement;
        }
    }, 1000);

    // ${isDarkMode ? "dark" : "light"}
    return (
        <div className={`relative inset-0 `}>
            <div
                className={`min-h-screen relative z-0 bg-white dark:bg-gray-900`}
            >
                <Head>
                    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                </Head>

                {/*<Blob />*/}
                <Toaster
                    position={`top-right`}
                    toastOptions={{
                        duration: 2200,
                    }}
                />
                <Navbar />
                <div className="w-full text-white">{children}</div>
                <Footer />
            </div>
        </div>
    );
}
