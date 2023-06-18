import React, { FC } from "react"
import { ChildrenProps } from "@/types"
import { twMerge } from "tailwind-merge"

interface LoopProps {
  duration: number
  reverse: boolean
}

const InfiniteLoopSlider: FC<ChildrenProps & LoopProps> = ({ children, duration, reverse = false, className }) => {
  return (
    <div className={`relative isolate wrapper`}>
      <div className="absolute w-32 left-0 inset-y-0 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
      <div className="absolute w-32 right-0 inset-y-0 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
      <div
        className={twMerge(" overflow-hidden flex-shrink-0 ", className)}
        style={{
          // @ts-expect-error
          "--direction": reverse ? "reverse" : "normal",
          "--duration": `${duration}ms`,
        }}
      >
        <div className="flex animate-loop space-x-8" style={{ width: "fit-content" }}>
          {children}
          {children}
          {children}
          {children}
          {children}
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}

export default InfiniteLoopSlider
