import React, { PropsWithChildren, ReactNode, useState } from "react"
import ApplicationLogo from "@/Components/ApplicationLogo"
import Dropdown from "@/Components/Form/Dropdown"
import NavLink from "@/Components/NavLink"
import ResponsiveNavLink from "@/Components/ResponsiveNavLink"
import { Link, usePage } from "@inertiajs/react"
import { PageProps, User } from "@/types"
import useDatatable from "@/Components/Datatable/DatatableContext"
import { Toaster } from "react-hot-toast"
import "@/lib/theme-script"
import { ThemeSelector } from "@/FrontEnd/Theme/ThemeSelector"

export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{
  user: User
  header?: ReactNode
}>) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false)

  const { limit } = useDatatable()

  const {
    emails: { unread },
  } = usePage<PageProps>().props

  return (
    <div id={`dashboard`} className="min-h-screen bg-gray-100 dark:bg-gray-900 relative md:pt-[100px]">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 md:fixed top-0 inset-x-0 z-40">
        <div className="wrapper">
          <div className="flex justify-between items-center min-h-16">
            <div className="flex">
              <div className="shrink-0 flex items-center">
                <a href={route("home")} target="_blank">
                  <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                </a>
              </div>

              <div className="hidden sm:-my-px sm:ml-10 sm:flex items-center">
                <NavLink href={route("dashboard")} active={route().current("dashboard")}>
                  Dashboard
                </NavLink>
                <NavLink href={route("dashboard.messages.index")} active={route().current("dashboard.messages.*")}>
                  Message
                  {unread > 0 && <span className={`bg-red-500 text-white px-2 absolute top-1.5 -right-1.5 rounded-lg text-xs`}>{unread}</span>}
                </NavLink>
                <NavLink data={{ limit }} href={route("dashboard.users.index")} active={route().current("dashboard.users.index")}>
                  Users
                </NavLink>
                <NavLink data={{ limit }} href={route("dashboard.posts.index")} active={route().current("dashboard.posts.*")}>
                  Posts
                </NavLink>
                <NavLink href={route("dashboard.categories.index")} active={route().current("dashboard.categories.*")}>
                  Categories
                </NavLink>
                <NavLink href={route("dashboard.products.index")} active={route().current("dashboard.products.*")}>
                  Products
                </NavLink>
                <NavLink href={route("dashboard.galleries.index")} active={route().current("dashboard.galleries.*")}>
                  Galleries
                </NavLink>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="ml-3 relative">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                      >
                        {user.name}
                        <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route("profile.edit")}>Profile</Dropdown.Link>
                    <Dropdown.Link href={route("logout")} method="post" as="button">
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
              <ThemeSelector className="relative z-10" />
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    className={!showingNavigationDropdown ? "inline-flex" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path className={showingNavigationDropdown ? "inline-flex" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={(showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"}>
          <div className="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink href={route("dashboard")} active={route().current("dashboard")}>
              Dashboard
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route("dashboard.messages.index")} active={route().current("dashboard.messages.*")}>
              Messages
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route("dashboard.users.index")} active={route().current("dashboard.users.*")}>
              Users
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route("dashboard.posts.index")} active={route().current("dashboard.posts.*")}>
              Posts
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route("dashboard.categories.index")} active={route().current("dashboard.categories.*")}>
              Categories
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route("dashboard.products.index")} active={route().current("dashboard.products.*")}>
              Products
            </ResponsiveNavLink>
            <ResponsiveNavLink href={route("dashboard.galleries.index")} active={route().current("dashboard.galleries.*")}>
              Galleries
            </ResponsiveNavLink>
          </div>

          <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
            <div className="px-4">
              <div className="font-medium text-base text-gray-800 dark:text-gray-200">{user.name}</div>
              <div className="font-medium text-sm text-gray-500">{user.email}</div>
            </div>

            <div className="mt-3 space-y-1">
              <ResponsiveNavLink href={route("profile.edit")}>Profile</ResponsiveNavLink>
              <ResponsiveNavLink method="post" href={route("logout")} as="button">
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
        {header && (
          <header className="bg-white dark:bg-gray-800 shadow relative border-t border-gray-700/50">
            <div className="wrapper py-4">
              <div className={`flex justify-between`}>{header}</div>
            </div>
          </header>
        )}
      </nav>

      <main>{children}</main>
      <div className="wrapper">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6 space-x-4">
          <Link className={`btn btn-secondary`} href={route("dashboard.sitemap")} method="post" as={`button`} type={`button`}>
            Sitemap
          </Link>
          <Link className={`btn btn-secondary`} href={route("dashboard.cache")} method="post" as={`button`} type={`button`}>
            Clear Cache
          </Link>
          <Link
            className={`btn btn-secondary`}
            href={`https://www.google.com/ping?sitemap=https://www.eloquentblinds.co.za/sitemap.xml`}
            method="post"
            as={`button`}
            type={`button`}
          >
            Ping Google Sitemap
          </Link>
        </div>
      </div>
      <Toaster
        position={`top-right`}
        toastOptions={{
          duration: 2200,
        }}
      />
    </div>
  )
}
