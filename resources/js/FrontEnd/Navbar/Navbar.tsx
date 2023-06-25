import React, { Fragment } from "react"
import dark_logo from "@/../img/logo-on-dark.svg"
import light_logo from "@/../img/logo-on-light.svg"
import { Link, usePage } from "@inertiajs/react"
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid"
import { Popover, Transition } from "@headlessui/react"
import { ThemeSelector } from "@/FrontEnd/Theme/ThemeSelector"
import { twMerge } from "tailwind-merge"

const links = [
  { href: "/", label: "Home", classes: "" },
  { href: "/categories", label: "Products", classes: "" },
  { href: "/reviews", label: "Reviews", classes: "" },
  { href: "/faq", label: "FAQ's", classes: "" },
  {
    href: "/quote",
    label: "Free Quote",
    classes: "text-white bg-primary-500 hover:bg-primary-600 px-3 py-2 rounded-md",
  },
]

const Navbar = () => {
  const url = usePage().url

  return (
    <>
      <Popover as={"nav"} className={`fixed w-full z-50 top-0 md:top-2`}>
        <div
          className={`wrapper relative card text-gray-500 dark:bg-gray-900/80 bg-gray-200/90 border border-gray-300 dark:border-primary-900/40 dark:text-gray-100 px-6 py-4 rounded-b-lg md:rounded-lg flex flex-wrap justify-between items-center shadow-2xl shadow-primary-900/30 backdrop-blur-sm`}
        >
          <div aria-hidden={true} className="absolute w-1/2 top-0 h-[1px] left-0 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
            <div className="w-1/2 h-[20px] rounded-b-full absolute top-0 translate-x-1/2 blur-md bg-secondary-500/10 "></div>
          </div>
          <Link href={route("home")} id="logo" className="flex shrink-0 -ml-12 md:ml-0">
            <>
              <img height={37} width={252} loading={`lazy`} className={`h-6 md:h-9 md:ml-0 hidden dark:block`} src={dark_logo} alt="Eloquent Blinds Logo" />
              <img height={37} width={252} loading={`lazy`} className={`h-6 md:h-9 md:ml-0 dark:hidden block`} src={light_logo} alt="Eloquent Blinds Logo" />
              <div className="sr-only">Eloquent Blinds</div>
            </>
          </Link>
          <div className={`flex space-x-2 md:space-x-6 items-center`}>
            <div className="md:flex space-x-8 font-bold hidden items-center">
              {links.map((link, index) => (
                <Link key={index} className={twMerge(url == link.href && "text-primary-500", link.classes)} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <ThemeSelector className="relative z-10" />
            <Popover.Button className="h-8 w-8 md:h-9 md:w-9 rounded-lg border border-gray-500 hover:scale-105 text-gray-600 dark:text-gray-200 dark:bg-gray-900 flex justify-center items-center md:hidden">
              <Bars3BottomRightIcon height={20} width={20} className={`block`} />
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className={`w-full space-y-2.5 mt-3 flex flex-col`}>
              {links.map((link) => (
                <Link href={link.href} key={link.href} className={twMerge(url === link.href && "text-primary-500", "flex font-semibold")}>
                  {link.label}
                </Link>
              ))}
            </Popover.Panel>
          </Transition>
        </div>
      </Popover>
    </>
  )
}

export default Navbar
