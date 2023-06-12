import React, { FC } from "react"
import { ChildrenProps } from "@/types"
import UpCount from "@/Components/UpCount"
import { colorStyles, StyleProps } from "@/lib/colors"

interface CardProps extends StyleProps {
  name: string
  count: number
}

const Card: FC<CardProps & ChildrenProps> = ({ name, count, children, styles = "default" }) => {
  return (
    <div className={`rounded-lg p-4 md:p-6 text-white flex space-x-4 hover:scale-105 transition ${colorStyles[styles]}`}>
      <div>{children}</div>
      <div>
        <h2 className="text-xl font-black capitalize">{name}</h2>
        <p className={`text-2xl font-semibold`}>
          <UpCount count={count} />
        </p>
      </div>
    </div>
  )
}

export default Card
