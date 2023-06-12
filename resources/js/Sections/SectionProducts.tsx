import React from "react"
import { Link } from "@inertiajs/react"

import blackBlinds from "@/../img/black-blinds.webp"
import aluBlinds from "@/../img/alu-blinds.webp"
import bambooBlinds from "@/../img/bambo-blinds.webp"
import zebraBlinds from "@/../img/zebra-blinds.webp"
import rollerBlinds from "@/../img/roller-blinds.webp"
import honeyBlinds from "@/../img/honey-blinds.webp"

const SectionProducts = () => {
  return (
    <section aria-labelledby="sale-heading">
      <div className="md:overflow-hidden sm:pt-14">
        <div className="bg-gradient-to-br from-primary-500 to-secondary-400 relative">
          <div className="wrapper flex flex-col-reverse md:flex-row-reverse min-h-[300px] gap-8 py-12">
            <div className={`flex-1`}>
              <h2 className="mt-10 drop-shadow-md text-3xl font-black tracking-tight text-white dark:text-primary-950 sm:text-5xl">
                Supplier and installer of top quality blinds.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-100 dark:text-gray-600">
                We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space.
                We have a variety of options to choose from, including Aluminium Blinds , Bamboo Blinds , Basswood Blinds , Honeycomb Blinds , Roller Blinds , Venetian Blinds , and
                Zebra Blinds.
              </p>

              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href={route("contact")}
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
                      <img
                        height={290}
                        width={290}
                        loading={`lazy`}
                        className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                        src={blackBlinds}
                        alt="blinds"
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <img
                        height={290}
                        width={290}
                        loading={`lazy`}
                        className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                        src={aluBlinds}
                        alt="blinds"
                      />
                    </div>
                  </div>
                  <div className="flex space-y-6 sm:-mt-20 flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <img
                        height={290}
                        width={290}
                        loading={`lazy`}
                        className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                        src={bambooBlinds}
                        alt="blinds"
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <img
                        height={290}
                        width={290}
                        loading={`lazy`}
                        className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                        src={zebraBlinds}
                        alt="blinds"
                      />
                    </div>
                  </div>
                  <div className="flex space-y-6 flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <img
                        height={290}
                        width={290}
                        loading={`lazy`}
                        className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                        src={rollerBlinds}
                        alt="blinds"
                      />
                    </div>

                    <div className="mt-6 flex-shrink-0 sm:mt-0">
                      <img
                        height={290}
                        width={290}
                        loading={`lazy`}
                        className="h-44 shadow-2xl rounded-lg object-cover md:h-64 2xl:h-72 aspect-square"
                        src={honeyBlinds}
                        alt="blinds"
                      />
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
