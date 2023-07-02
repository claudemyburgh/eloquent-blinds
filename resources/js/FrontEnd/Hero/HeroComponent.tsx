import React from "react"
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import hero from "@/../img/hero.webp"
import { PrimaryLink } from "../Links"
import PlainLink from "@/FrontEnd/Links/PlainLink"
import Heading from "@/FrontEnd/Typography/Heading"
import Image from "@/FrontEnd/Image/Image"
import GradientBorder from "@/Components/GradientBorder"

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
          <Heading as={`h1`} type={`h1`} className="mt-5">
            Blind supplies and installers.
          </Heading>
          <p className="mt-3 text-lg leading-8 text-gray-500 dark:text-gray-300">
            We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space.
          </p>
          <div className="mt-5 flex items-center gap-x-6">
            <PrimaryLink size={"2xl"} href={route("quote")}>
              Get a free quote
            </PrimaryLink>

            <PlainLink size={`2xl`} href={route("quote")} className={`border border-secondary-600/10`}>
              Learn more{" "}
              <span aria-hidden="true" className={`pl-2`}>
                <ArrowRightIcon className={`h-5 w-5`} />
              </span>
            </PlainLink>
          </div>
        </div>
        <div className="mx-auto opacity-40 md:opacity-100 flex max-w-full mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32 absolute lg:relative -top-20 lg:top-0 inset-x-0 -z-10">
          <GradientBorder className="max-w-full image-mask-b-20 lg:image-mask-b-100 lg:max-w-5xl relative flex-none sm:max-w-5xl xl:max-w-none">
            <Image src={hero} alt="App screenshot" width={2432} height={1442} className={`w-full lg:max-w-5xl max-w-full rounded-lg `} />
            <div className="absolute inset-0 z-20"></div>
          </GradientBorder>
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
