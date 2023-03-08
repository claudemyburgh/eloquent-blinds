import { Link, usePage } from "@inertiajs/react"

const Footer = () => {
  const {
    categories,
    app: { name },
  } = usePage().props

  return (
    <footer className={`w-full mt-12`} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div
        className="py-12 wrapper min-h-[40px] rounded-xl text-gray-900 dark:text-white p-4 dark:bg-gray-800/50 bg-gradient-to-bl
         from-white/50 dark:from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 shadow-2xl
          shadow-gray-500/20 dark:shadow-none duration-250 focus:outline focus:outline-2 focus:outline-primary-500 backdrop-blur"
      >
        <div className="grid grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div>
            <h3 className="text-md font-semibold text-gray-400 tracking-wider uppercase">Product Categories</h3>
            <ul role="list" className="mt-4 space-y-3">
              {categories.map((category) => (
                <li key={category.id.toString()}>
                  <Link href={route("products.index", category.slug)} className={`text-base text-gray-300 hover:text-gray-600`}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
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
              <li>
                <a href={"/"} className={`text-base text-gray-300 hover:text-gray-600`}>
                  AllyCat Garage Doors
                </a>
              </li>
            </ul>
          </div>

          <div>
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
        <div className="border-t border-gray-700 mt-6 pt-6">
          <p className="text-base text-gray-400 ">
            &copy; {new Date().getFullYear()} {name}, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
