import React, {FC, useState} from "react"
import {ChildrenProps} from "@/types"
import {twMerge} from "tailwind-merge"
// group-hover:[animation-play-state:running] [animation-play-state:paused]
const Marquee: FC<
  ChildrenProps & {
    speed: number
    direction?: "normal" | "reverse" | "alternate" | "alternate-reverse" | "unset"
  }
> = ({ children, speed, direction = "normal", className }) => {
  const [moveSpeed, setMoveSpeed] = useState<number>(speed)
  const [moveDirection, setMoveDirection] = useState<string>(direction)

  function mouseEnter(): void {
    setMoveDirection(moveDirection === "normal" ? "reverse" : "normal")
    setMoveSpeed(moveSpeed * 3)
  }

  function mouseLeave(): void {
    setMoveDirection(moveDirection === "normal" ? "reverse" : "normal")
    setMoveSpeed(speed)
  }

  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={twMerge(`flex cursor-pointer -mx-4 py-1  group bg-gradient-to-r from-primary-700 to-cyan-200`, className)}
      style={{
        // @ts-expect-error
        "--speed": `${moveSpeed}ms`,
        "--direction": moveDirection.toString(),
        width: "fit-content",
      }}
    >
      <div className="bg-gray-900 py-8">
        <div className="flex animate-loop  ">
          {children}
          {children}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Marquee
