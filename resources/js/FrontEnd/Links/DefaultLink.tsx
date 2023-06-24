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

const DefaultLink: FC<Props> = ({ children, className, href, size = "md", ...resProps }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `inline-flex items-center justify-center bg-gradient-to-b from-gray-100 to-white border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:to-gray-200 focus:to-gray-200 active:to-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition ease-in-out duration-150 text-shadow  text-center text-gray-800`,
        sizes[size],
        className
      )}
      {...resProps}
    >
      {children}
    </Link>
  )
}

export default DefaultLink
