import React from "react"
import { Link } from "@inertiajs/react"

const Footer = () => {
  return (
    <footer className={`w-full mt-12`} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div
        className={`wrapper card text-gray-500 dark:bg-gray-900/60 bg-gray-200/60 border border-gray-300 dark:border-primary-900/40 dark:text-gray-100 px-6 py-6 rounded-lg flex justify-between relative items-center shadow-2xl shadow-primary-900/30 backdrop-blur-sm`}
      >
        <div aria-hidden={true} className="absolute w-1/2 top-0 h-[1px] left-1/3 bg-gradient-to-r from-transparent via-secondary-500 to-transparent">
          <div className="w-1/2 h-[20px] rounded-b-full absolute top-0 translate-x-1/2 blur-md bg-secondary-500/10 "></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-8 ">
          <div className={`mb-6`}>
            <h3 className="text-md font-semibold text-gray-400 tracking-wider uppercase">Product Categories</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li className={`text-base text-gray-300 hover:text-gray-600`}>Product Item</li>
              <li className={`text-base text-gray-300 hover:text-gray-600`}>Product Item</li>
              <li className={`text-base text-gray-300 hover:text-gray-600`}>Product Item</li>
              <li className={`text-base text-gray-300 hover:text-gray-600`}>Product Item</li>
            </ul>
          </div>

          <div className={`mb-6`}>
            <h3 className="text-md font-semibold text-gray-400 tracking-wider uppercase">Friend's of us</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <a href={`https://designbycode.co.za`} target={`_blank`} className={`text-base text-gray-300 hover:text-gray-600`}>
                  DesignByCode
                </a>
              </li>
              <li>
                <a href={"https://crystalbars.co.za"} target={`_blank`} className={`text-base text-gray-300 hover:text-gray-600`}>
                  Crystal Bars
                </a>
              </li>
            </ul>
          </div>

          <div className={`mb-6`}>
            <h3 className="text-md font-semibold text-gray-400 tracking-wider uppercase">Legal Stuff</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <Link href={"/"} className={`text-base text-gray-300 hover:text-gray-600`}>
                  Policy
                </Link>
              </li>
              <li>
                <Link href={"/"} className={`text-base text-gray-300 hover:text-gray-600`}>
                  Cookie
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrapper relative z-10 pb-6 pt-6 w-full">
        <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Eloquent Blinds, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
