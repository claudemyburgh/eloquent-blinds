import React, { FC } from "react"
import { ChildrenProps } from "@/types"
import { twMerge } from "tailwind-merge"

const GradientBorder: FC<ChildrenProps & { className?: string }> = ({ children, className, ...restProps }) => {
  return (
    <div
      aria-hidden={true}
      className={twMerge(`relative p-[3px] rounded-lg shadow-2xl shadow-primary-500/50 bg-gradient-to-br from-primary-500 to-secondary-400`, className)}
      {...restProps}
    >
      <div aria-hidden={true} className="absolute w-1/2 top-0 h-[2px] left-0 bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
      {children}
    </div>
  )
}

export default GradientBorder
