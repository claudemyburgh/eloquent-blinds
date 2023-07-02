import React, { PropsWithChildren } from "react"
import Navbar from "@/FrontEnd/Navbar/Navbar"
import { Toaster } from "react-hot-toast"
import Footer from "@/FrontEnd/Footer/Footer"
import GridPattern from "@/FrontEnd/Theme/GridPattern"
import "@/lib/theme-script"
import ContactSection from "@/Sections/ContactSection"
import { Link, usePage } from "@inertiajs/react"
import Marquee from "@/Components/Marquee"
import SectionProducts from "@/Sections/SectionProducts"
import DevBanner from "@/Components/DevBanner"

export default function AppLayout({ children }: PropsWithChildren) {
  const component = usePage().component
  const { categories_all, production } = usePage<any>().props
  const handleMouseMovement = (e: MouseEvent) => {
    const { currentTarget: target } = e
    const rect = (target as HTMLElement).getBoundingClientRect()
    let y = e.clientY - rect.top
    let x = e.clientX - rect.left
    ;(target as HTMLElement).style.setProperty("--mouse-x", `${x}px`)
    ;(target as HTMLElement).style.setProperty("--mouse-y", `${y}px`)
  }

  setTimeout(() => {
    for (const card of document.querySelectorAll(".card")) {
      ;(card as HTMLElement).onmousemove = handleMouseMovement
    }
  }, 1000)

  return (
    <div className={`relative inset-0 `}>
      <DevBanner on={!production} />

      <div className={`min-h-screen relative z-0`}>
        {/*<Blob />*/}
        <GridPattern aria-hidden={true} className={`h-[300px] fixed top-0 inset-x-0`} />
        <Toaster
          position={`top-right`}
          toastOptions={{
            duration: 2200,
          }}
        />
        <Navbar />
        <main className="w-full text-white">{children}</main>

        {/*<Incentives />*/}
        <SectionProducts />
        <Marquee speed={25500} className={` min-w-full relative z-10 shadow-xl shadow-black/20`}>
          {categories_all.map((category: any) => (
            <div key={category.id} className={` shrink-0 flex`}>
              <Link href={route("category", category)} className={`hover:underline underline-offset-8 decoration-wavy decoration-primary-500 decoration-2 shrink-0 px-4`}>
                {category.title}
              </Link>
              {category.children.map((child: any) => (
                <Link
                  href={route("category", {
                    category: child,
                  })}
                  key={child.id}
                  className={`hover:underline underline-offset-8 decoration-wavy decoration-primary-500 decoration-2 px-4 shrink-0`}
                >
                  {child.title}
                </Link>
              ))}
            </div>
          ))}
        </Marquee>
        {component !== "Frontend/Quote" && (
          <div className={`wrapper`}>
            <ContactSection className={`-mx-4 px-4`} />
          </div>
        )}
        {/*<MapComponent />*/}
        <Footer />
      </div>
    </div>
  )
}
