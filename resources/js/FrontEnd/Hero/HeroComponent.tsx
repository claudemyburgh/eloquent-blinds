import React from "react"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { Link } from "@inertiajs/react"
import hero from "@/../img/hero.webp"

const HeroComponent = () => {
  return (
    <div className="relative overflow-hidden isolate">
      <div className="wrapper pt-10 pb-4 sm:pb-1 lg:flex z-20 lg:pt-22 2xl:pt-32">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href={`https://view.publitas.com/e-books/quantum-signature/page/1`} target={`_blank`} className="inline-flex space-x-4">
              <span className="rounded-full bg-primary-500/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-400 ring-1 ring-inset ring-primary-500/20">What's new</span>
              <span className="inline-flex group  items-center space-x-2 text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300 ">
                <span>E-Catalogue</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-500 transition-transform group-hover:translate-x-[5px]" aria-hidden="true" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-black tracking-tight text-gray-800 dark:text-white sm:text-6xl">Supplier and installer of top quality blinds.</h1>
          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
            We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={route("quote")}
              className="rounded-md bg-primary-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            >
              Get a free quote
            </Link>
            <Link href={route("quote")} className="text-base font-semibold leading-7 text-gray-700 dark:text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 opacity-40 md:opacity-100 flex max-w-full sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32 absolute md:relative top-0 inset-x-0 -z-10">
          <div className="max-w-full image-mask-b-20 md:image-mask-b-100 md:max-w-3xl relative flex-none sm:max-w-5xl lg:max-w-none">
            <div aria-hidden={true} className="absolute w-1/2 top-0 h-[1px] left-0 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
              <div className="w-1/2 h-[20px] rounded-b-full absolute top-0 translate-x-1/2 blur-md bg-secondary-500/10 "></div>
            </div>
            <img src={hero} alt="App screenshot" width={2432} height={1442} className={`w-full md:max-w-5xl max-w-full rounded-lg`} />
            <div className="absolute inset-0 z-20 card w-full h-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
