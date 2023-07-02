import React, { FC } from "react"
import GradientBorder from "@/Components/GradientBorder"
import Image from "@/FrontEnd/Image/Image"
import { convertedImage } from "@/lib/helpers"
import { Link } from "@inertiajs/react"
import { MediaProps } from "@/types/Media"

interface ItemProp {
  item: {
    title: string
    media: MediaProps[]
  }
  url: string
}

const CategoryCard: FC<ItemProp> = ({ item, url, ...restProps }) => {
  return (
    <GradientBorder {...restProps}>
      <Link href={url} className={`relative bg-white group dark:bg-gray-900 rounded-lg flex flex-col`}>
        <div className={`overflow-hidden border-b-2 border-primary-500/10`}>
          <Image
            className={`rounded-lg group-hover:scale-105 transition duration-300 block w-full aspect-square rounded-b-none shadow-md shadow-primary-500/50`}
            src={convertedImage(item.media[0]?.original_url, "medium")}
            alt={item.title}
          />
        </div>
        <div className={`p-4 inline-block text-gray-700 font-semibold dark:text-white`}>{item.title}</div>
      </Link>
    </GradientBorder>
  )
}

export default CategoryCard
