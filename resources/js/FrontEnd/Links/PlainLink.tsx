import React, { FC } from "react"
import { Link } from "@inertiajs/react"
import { twMerge } from "tailwind-merge"
import { ChildrenProps } from "@/types"

interface Props extends ChildrenProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  href: string
}

const sizes = {
  sm: "px-2.5 py-1.5",
  md: "px-3 py-2",
  lg: "px-4 py-2",
  xl: "px-6 py-3",
  "2xl": "px-8 py-4",
}

const PlainLink: FC<Props> = ({ children, className, href, size = "md", ...resProps }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `inline-flex justify-center items-center border hover:bg-secondary-600/10 border-transparent rounded-md font-semibold text-xs dark:text-white text-gray-800 uppercase tracking-widest h focus:outline-none focus:ring-2 hover:text-primary-600 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150`,
        sizes[size],
        className
      )}
      {...resProps}
    >
      {children}
    </Link>
  )
}

export default PlainLink
