import React from "react"
import roller from "@/../img/SVG/roller.svg"
import zebra from "@/../img/SVG/zebra.svg"
import honey from "@/../img/SVG/honey.svg"
import automation from "@/../img/SVG/automation.svg"
import vertical from "@/../img/SVG/verticle.svg"
import horizontal from "@/../img/SVG/horizontal.svg"

const IntroIcons = () => {
  return (
    <div className="wrapper my-12 grid md:grid-cols-5 gap-8 text-gray-500 dark:text-gray-300">
      <div className={`card col-span-2 row-span-2 overflow-hidden  rounded-lg p-6`}>
        <h2 className={`mt-10 drop-shadow-md text-4xl font-black tracking-tight text-gray-800 dark:text-gray-100 sm:text-3xl`}>What we can do for you</h2>
        <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
          We offer a wide range of high-quality blinds at affordable prices. Our blinds are perfect for any room in the house and will add style and function to your space. We have
          a variety of options to choose from, including Aluminium Blinds , Bamboo Blinds , Basswood Blinds , Honeycomb Blinds , Roller Blinds , Venetian Blinds , and Zebra Blinds.
        </p>
      </div>
      <div className={`card col-span-1  row-span-1 text-center  overflow-hidden  rounded-lg p-6`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px]`} src={roller} alt="" />
        <h4 className={`font-semibold`}>Roller Blinds</h4>
      </div>
      <div className={`card col-span-1  row-span-1 text-center  overflow-hidden  rounded-lg p-6`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px]`} src={zebra} alt="" />
        <h4 className={`font-semibold`}>Zebra Blinds</h4>
      </div>
      <div className={`card col-span-1  row-span-1 text-center  overflow-hidden  rounded-lg p-6`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px]`} src={honey} alt="" />
        <h4 className={`font-semibold`}>Honey Comb Blinds</h4>
      </div>
      <div className={`card col-span-1  row-span-1 text-center  overflow-hidden  rounded-lg p-6`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px]`} src={automation} alt="" />
        <h4 className={`font-semibold`}>Blinds Automation </h4>
      </div>
      <div className={`card col-span-1  row-span-1 text-center  overflow-hidden  rounded-lg p-6`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px]`} src={vertical} alt="" />
        <h4 className={`font-semibold`}>Vertical Blinds</h4>
      </div>
      <div className={`card col-span-1  row-span-1 text-center  overflow-hidden  rounded-lg p-6`}>
        <img height={100} width={75} className={`block mx-auto mb-2 w-75px] h-[100px]`} src={horizontal} alt="" />
        <h4 className={`font-semibold`}>Horizontal Blinds</h4>
      </div>
    </div>
  )
}

export default IntroIcons
