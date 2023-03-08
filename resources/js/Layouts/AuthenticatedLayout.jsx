import { Link } from "@inertiajs/react"

export default function Authenticated({ auth, header, children }) {
  return (
    <div className={`bg-gray-900 min-h-screen relative text-gray-300`}>
      <nav className={`w-[300px] fixed left-4 rounded-xl inset-y-4 bg-gray-800 p-8`}>
        <ul className={`space-y-1`}>
          <li>
            <Link className={`rounded-xl hover:bg-primary-500 active:bg-primary-500 text-white flex px-4 py-2.5`} href={route("dashboard.index")}>
              Home
            </Link>
          </li>
          <li>
            <Link className={`rounded-xl hover:bg-primary-500 active:bg-primary-500 text-white flex px-4 py-2.5`} href={route("dashboard.categories.index")}>
              Categories
            </Link>
          </li>
          <li>
            <Link className={`rounded-xl hover:bg-primary-500 active:bg-primary-500 text-white flex px-4 py-2.5`} href={`/`}>
              Categories
            </Link>
          </li>
        </ul>
      </nav>

      <div className={`ml-[320px] pt-4 px-4`}>
        <header className={`min-h-[120px] bg-gradient-to-br from-primary-500 to-sky-400 rounded-xl mb-4`}></header>
        <main className={`relative text-gray-800`}>{children}</main>
      </div>
    </div>
  )
}
