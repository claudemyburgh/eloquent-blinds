import React from "react"
import roller from "@/../img/SVG/roller.svg"
import zebra from "@/../img/SVG/zebra_1.svg"
import honey from "@/../img/SVG/honey.svg"
import automation from "@/../img/SVG/automation.svg"
import vertical from "@/../img/SVG/verticle.svg"
import horizontal from "@/../img/SVG/horizontal.svg"
import Heading from "@/FrontEnd/Typography/Heading"

const IntroIcons2 = () => {
  return (
    <div className="wrapper grid mt-24 md:mt-32 grid-cols-12 lg:grid-rows-3 gap-8 text-gray-500 dark:text-gray-300">
      <div className={`card relative col-span-12 row-span-2 lg:col-span-6 overflow-hidden  shadow-xl shadow-primary-500/10 rounded-lg p-6  border border-primary-500/20`}>
        <div aria-hidden={true} className="absolute w-[2px] h-2/3 left-0 bg-gradient-to-b from-transparent via-secondary-500 to-transparent">
          <div className="w-[80px] h-full rounded-full absolute top-1/2 -translate-y-1/2 -translate-x-1/2 blur-md bg-secondary-500/10 "></div>
        </div>
        <Heading as={`h3`} type={`h3`} className={`mt-10`}>
          What we can do for you
        </Heading>
        <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
          We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space. We have
          a variety of options to choose from, including Aluminium Blinds , Bamboo Blinds , Basswood Blinds , Honeycomb Blinds , Roller Blinds , Venetian Blinds , and Zebra Blinds.
        </p>
      </div>
      <div className={`card col-span-4 flex-shrink-0 lg:col-span-2 text-center  overflow-hidden  rounded-lg p-6 relative`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px] relative`} src={roller} alt="" />
        <h4 className={`font-semibold`}>Roller Blinds</h4>
      </div>
      <div className={`card col-span-4 flex-shrink-0 lg:col-span-2 text-center  overflow-hidden  rounded-lg p-6 relative`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px] relative`} src={zebra} alt="" />
        <h4 className={`font-semibold`}>Zebra Blinds</h4>
      </div>
      <div className={`card col-span-4 flex-shrink-0 lg:col-span-2 text-center  overflow-hidden  rounded-lg p-6 relative`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px] relative`} src={honey} alt="" />
        <h4 className={`font-semibold`}>Honey Comb Blinds</h4>
      </div>
      <div className={`card col-span-4 flex-shrink-0 lg:col-span-2 text-center  overflow-hidden  rounded-lg p-6 relative`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px] relative`} src={automation} alt="" />
        <h4 className={`font-semibold`}>Blinds Automation </h4>
      </div>
      <div className={`card col-span-4 flex-shrink-0 lg:col-span-2 text-center  overflow-hidden  rounded-lg p-6 relative`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px] relative`} src={vertical} alt="" />
        <h4 className={`font-semibold`}>Vertical Blinds</h4>
      </div>
      <div className={`card col-span-4 flex-shrink-0 lg:col-span-2 text-center  overflow-hidden  rounded-lg p-6 relative`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px] relative`} src={horizontal} alt="" />
        <h4 className={`font-semibold`}>Horizontal Blinds</h4>
      </div>
    </div>
  )
}

export default IntroIcons2
