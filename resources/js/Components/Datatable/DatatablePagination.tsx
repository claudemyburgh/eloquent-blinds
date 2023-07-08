import React from "react"
import { Link, usePage } from "@inertiajs/react"
import { UsePageDatatableProps } from "@/types/datatable"
import useDatatable from "@/Components/Datatable/DatatableContext"
import { twMerge } from "tailwind-merge"

const DatatablePagination = () => {
  const {
    data: { records },
  } = usePage<UsePageDatatableProps<any>>().props

  const { limit } = useDatatable()

  return (
    <>
      {records.links.length > 3 && (
        <nav className="relative space-x-1 z-0 my-4 md:my-6 flex justify-center shadow-sm -space-x-px" aria-label="Pagination">
          {records?.links.map((link, index) => (
            <Link
              key={index.toString()}
              preserveScroll={false}
              method={`get`}
              href={link.url || ""}
              disabled={link.active || !link.url}
              as={`button`}
              data={{ limit }}
              className={twMerge(
                `z-10 relative inline-flex items-center px-4 py-2 hover:bg-gray-200 text-sm font-medium  disabled:cursor-not-allowed rounded mb-5`,
                link.active ? " bg-primary-500" : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100"
              )}
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          ))}
        </nav>
      )}
    </>
  )
}

export default DatatablePagination
