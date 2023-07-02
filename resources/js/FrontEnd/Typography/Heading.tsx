import React, { FC } from "react"
import { ChildrenProps } from "@/types"
import { twJoin } from "tailwind-merge"

interface Props extends ChildrenProps {
  as?: "h1" | "h2" | "h3"
  type?: "h1" | "h2" | "h3"
  className?: string
}

const Heading: FC<Props> = ({ as: Element = "h1", type = `h1`, children, className, ...restProps }) => {
  let headingClass = ""

  switch (type) {
    case "h1":
      headingClass = "text-4xl font-black sm:text-6xl"
      break
    case "h2":
      headingClass = "text-3xl font-black sm:text-5xl"
      break
    case "h3":
      headingClass = "text-3xl font-extrabold sm:text-4xl"
      break
    default:
      headingClass = "text-4xl font-black sm:text-6xl"
  }

  return (
    <Element {...restProps} className={twJoin(`text-gray-900 dark:text-white text-shadow-lg drop-shadow-md tracking-tight`, className, headingClass)}>
      {children}
    </Element>
  )
}

export default Heading
