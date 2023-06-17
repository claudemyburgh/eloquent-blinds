import React, { FC } from "react"
import { Link } from "@inertiajs/react"

import blackBlinds from "@/../img/black-blinds.webp"
import aluBlinds from "@/../img/alu-blinds.webp"
import bambooBlinds from "@/../img/bambo-blinds.webp"
import zebraBlinds from "@/../img/zebra-blinds.webp"
import rollerBlinds from "@/../img/roller-blinds.webp"
import honeyBlinds from "@/../img/honey-blinds.webp"
import TiltItem from "@/FrontEnd/Parts/TiltItem"
import { twMerge } from "tailwind-merge"

const SectionProducts: FC<{ className?: string }> = ({ className }) => {
  return (
    <section aria-labelledby="sale-heading" className={twMerge(`relative`, className)}>
      <div className="md:overflow-hidden sm:pt-14 ">
        <div className="bg-gradient-to-br dark:from-gray-900/80 from-gray-50/80 dark:to-gray-950/70 to-gray-100/70 relative border-y border-gray-200 dark:border-gray-800/50">
          <div aria-hidden={true} className="absolute w-1/2 top-0 h-[1px] left-1/2 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
            <div className="w-1/2 h-[20px] rounded-b-full absolute top-0 translate-x-1/2 blur-md bg-secondary-500/10 "></div>
          </div>

          <div aria-hidden={true} className="absolute w-1/2 top-full h-[10px] left-1/3 bg-gradient-to-r from-transparent via-primary-500 to-transparent">
            <div className="w-1/2 h-[110px] rounded-t-full absolute top-0 -translate-y-1/2 blur-md bg-primary-500/10 "></div>
          </div>

          <div className="wrapper flex flex-col-reverse md:flex-row-reverse min-h-[300px] gap-8 py-12 ">
            <div className={`flex-1`}>
              <h2 className="mt-10 drop-shadow-md text-3xl font-black tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
                Supplier and installer of top quality blinds.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space.
                We have a variety of options to choose from, including Aluminium Blinds , Bamboo Blinds , Basswood Blinds , Honeycomb Blinds , Roller Blinds , Venetian Blinds , and
                Zebra Blinds.
              </p>

              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href={route("quote")}
                  className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-primary-500 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get a free quote
                </Link>
              </div>
            </div>
            <div className={`flex-1 relative`}>
              <div className="md:absolute md:right-0 ">
                <div className="md:ml-24 flex min-w-full md:min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                  <div className="flex space-y-6 flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <TiltItem options={{ glare: true, speed: 2000, perspective: 800, max: 5 }}>
                        <img
                          height={290}
                          width={290}
                          loading={`lazy`}
                          className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                          src={blackBlinds}
                          alt="blinds"
                        />
                      </TiltItem>
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <TiltItem options={{ glare: true, speed: 2000, perspective: 800, max: 5 }}>
                        <img
                          height={290}
                          width={290}
                          loading={`lazy`}
                          className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                          src={aluBlinds}
                          alt="blinds"
                        />
                      </TiltItem>
                    </div>
                  </div>
                  <div className="flex space-y-6 sm:-mt-20 flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <TiltItem options={{ glare: true, speed: 2000, perspective: 800, max: 5 }}>
                        <img
                          height={290}
                          width={290}
                          loading={`lazy`}
                          className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                          src={bambooBlinds}
                          alt="blinds"
                        />
                      </TiltItem>
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <TiltItem options={{ glare: true, speed: 2000, perspective: 800, max: 5 }}>
                        <img
                          height={290}
                          width={290}
                          loading={`lazy`}
                          className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                          src={zebraBlinds}
                          alt="blinds"
                        />
                      </TiltItem>
                    </div>
                  </div>
                  <div className="flex space-y-6 flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <TiltItem options={{ glare: true, speed: 2000, perspective: 800, max: 5 }}>
                        <img
                          height={290}
                          width={290}
                          loading={`lazy`}
                          className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                          src={rollerBlinds}
                          alt="blinds"
                        />
                      </TiltItem>
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <TiltItem options={{ glare: true, speed: 2000, perspective: 800, max: 5 }}>
                        <img
                          height={290}
                          width={290}
                          loading={`lazy`}
                          className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                          src={honeyBlinds}
                          alt="blinds"
                        />
                      </TiltItem>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionProducts
