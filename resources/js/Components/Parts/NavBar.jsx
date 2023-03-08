import logo from "@/../img/SVG/logo-on-dark.svg"
import logoAlt from "@/../img/SVG/logo-on-light.svg"
import motion from "@/../img/motion.webp"
import motionBadge from "@/../img/Powered-by-MotionBlinds.webp"
import { Link, usePage } from "@inertiajs/react"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"

const NavBar = () => {
  const { categories } = usePage().props

  return (
    <nav className={`fixed inset-x-0 top-4 px-4 md:px-6 lg:px-8 z-50`}>
      <div
        className={`wrapper min-h-[40px] rounded-xl text-gray-900 dark:text-white p-4 dark:bg-gray-800/50 bg-gradient-to-bl
         from-white/50 dark:from-gray-700/50 via-transparent shadow-2xl flex justify-between items-center
          shadow-gray-500/20 dark:shadow-none duration-250  backdrop-blur`}
      >
        <Link href={route("index")}>
          <img loading={`lazy`} className={`hidden dark:inline-block`} src={logo} alt="eloquent logo" height={32} width={223} />
          <img loading={`lazy`} className={`inline-block dark:hidden`} src={logoAlt} alt="eloquent logo" height={32} width={223} />
        </Link>

        <button type={`button`} className={`md:hidden`}>
          <span className="sr-only">Toggle navigation</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div className="md:flex space-x-2 hidden ">
          <Link className={`border border-transparent hover:border-primary-500 rounded-xl px-6 py-2`} href={route("index")}>
            Home
          </Link>

          <Popover>
            {({ open }) => (
              <>
                <Popover.Button className={`border border-transparent hover:border-primary-500 rounded-xl pl-6 pr-4 py-2 flex items-center space-x-2`}>
                  <span className={`block`}>Products</span>
                  <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className={`absolute inset-x-0 z-10 rounded-xl bg-gray-800 top-20 p-4 shadow-xl shadow-primary-500/30`}>
                    <div className="w-full pb-2 border-b border-dashed border-gray-700/50 mb-4">
                      <Link href={route("categories.index")}>All Products</Link>
                    </div>
                    <div className="flex gap-6">
                      <div className="grid grid-cols-3 gap-6 w-2/3">
                        {categories[0].children.map((cat) => (
                          <Link href={route("products.index", cat.slug)} className={`border border-gray-500 text-gray-300 p-4 rounded-xl text-shadow hover:bg-primary-500`} key={cat.id.toString()}>
                            {cat.title}
                          </Link>
                        ))}
                      </div>
                      <div className="w-1/3">
                        <Link href={`/`} className={`relative`}>
                          <img className={`rounded-xl absolute h-12 bg-white/80 bottom-3 right-3 p-1.5`} src={motionBadge} alt="" />
                          <img className={`rounded-xl`} src={motion} alt="" />
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Link className={`border border-transparent hover:border-primary-500 rounded-xl px-6 py-2`} href={route("categories.index")}>
            Products
          </Link>
          <Link className={`border border-transparent hover:border-primary-500 rounded-xl px-6 py-2`} href={route("how-to-order")}>
            How to order
          </Link>
          <Link className={`bg-gradient-to-r from-primary-500 hover:to-indigo-500 to-sky-300 border border-primary-500 rounded-xl px-6 py-2 text-shadow`} href={route("free-quote")}>
            Free Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
