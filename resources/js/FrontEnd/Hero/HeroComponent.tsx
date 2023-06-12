import React from "react"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { Link } from "@inertiajs/react"
import hero from "@/../img/hero.webp"

const HeroComponent = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="wrapper pt-10 pb-4 sm:pb-32 lg:flex lg:pt-32">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-4">
              <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-primary-500/20">What's new</span>
              <a
                href={`https://view.publitas.com/e-books/quantum-signature/page/1`}
                target={`_blank`}
                className="inline-flex group uppercase items-center space-x-2 text-sm font-medium leading-6 text-gray-300"
              >
                <span>E-Catalogue</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-500 transition-transform group-hover:translate-x-[5px]" aria-hidden="true" />
              </a>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-black tracking-tight text-gray-800 dark:text-white sm:text-6xl">Supplier and installer of top quality blinds.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
            We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space. We
            have a variety of options to choose from, including Aluminium Blinds , Bamboo Blinds , Basswood Blinds , Honeycomb Blinds , Roller Blinds , Venetian Blinds , and Zebra
            Blinds.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={route("contact")}
              className="rounded-md bg-primary-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            >
              Get a free quote
            </Link>
            <Link href={route("contact")} className="text-base font-semibold leading-7 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl relative flex-none sm:max-w-5xl lg:max-w-none">
            <img src={hero} alt="App screenshot" width={2432} height={1442} className="w-[76rem]  rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10" />
            <div className="absolute inset-0 z-10 card w-full h-full "></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
