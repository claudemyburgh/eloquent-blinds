import Authenticated from "@/Layouts/AuthenticatedLayout"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { Head, router, usePage } from "@inertiajs/react"
import { Fragment, useState } from "react"
import { Dialog, Menu, Transition } from "@headlessui/react"

const Categories = ({ categories }) => {
  const { errors } = usePage().props

  const [createCategory, setCreateCategory] = useState(false)
  const [title, setTitle] = useState("")

  const categoryHandler = (e) => {
    e.preventDefault()
    setTitle(e.target.value)
  }

  const closeModal = () => {
    setCreateCategory(false)
    setTitle("")
  }

  const submitHandler = (e) => {
    e.preventDefault()
    router.post(route("dashboard.categories.store", { title }))
    if (errors) return
    setCreateCategory(false)
    setTitle("")
  }

  return (
    <Authenticated>
      <Head>
        <title>Dashboard Categories</title>
      </Head>

      <Transition appear show={createCategory} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-100" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Create a new category
                  </Dialog.Title>
                  <div className="mt-2">
                    <label htmlFor="title" className={`w-full mb-1 block text-sm sr-only`}>
                      Category Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      onChange={categoryHandler}
                      className={`rounded w-full text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2`}
                      placeholder={`Title`}
                    />
                    {errors && <p className="text-red-500 text-sm my-2">{errors.title}</p>}
                  </div>

                  <div className="mt-4 ">
                    <button
                      type="button"
                      className="flex flex-1 w-full justify-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                      onClick={submitHandler}
                    >
                      Create
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="pb-12">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-100">Categories</h1>
            <p className="mt-2 text-sm text-gray-400">A list of all the categories in your account including their title, description and images.</p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              onClick={() => setCreateCategory(true)}
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
            >
              Add category
            </button>
          </div>
        </div>
        {/* header end */}

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 w-8 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        <a href="#" className="group inline-flex">
                          ID
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        <a href="#" className="group inline-flex">
                          Title
                          <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        <a href="#" className="group inline-flex">
                          Description
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" aria-hidden="true" />
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        <a href="#" className="group inline-flex">
                          Active
                          <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible" aria-hidden="true" />
                          </span>
                        </a>
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {categories &&
                      categories.map((category) => (
                        <tr key={category.id.toString()}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{category.id}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{category.title}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className={`h-3 w-3 rounded-full ${category.parent_id ? "bg-green-400" : "bg-rose-500"}`}></div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">role</td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <Menu className={`relative inline-block`} as="div">
                              <Menu.Button className="text-red-500 mr-4">Delete</Menu.Button>
                              <Menu.Items as="div" className={`absolute bg-white top-0 translate-x-1/2  rounded border border-gray-500  right-1/2 z-10`}>
                                <Menu.Item className={`flex text-center w-full items-center rounded-md px-2 py-2 text-sm bg-red-500 text-white`} as="button">
                                  Are you sure?
                                </Menu.Item>
                              </Menu.Items>
                            </Menu>

                            <a href="#" className="text-primary-500 hover:text-primary-600">
                              Edit<span className="sr-only">, name</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  )
}

export default Categories
