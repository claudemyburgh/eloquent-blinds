import React, { FC } from "react"
import GradientBorder from "@/Components/GradientBorder"
import Image from "@/FrontEnd/Image/Image"
import { convertedImage } from "@/lib/helpers"
import { Link } from "@inertiajs/react"
import { twMerge } from "tailwind-merge"
import { CategoryProps } from "@/types/categories"

interface ItemProp {
  item: CategoryProps
  className?: string
  url: string
}

const CategoryCard: FC<ItemProp> = ({ item, url, className, ...restProps }) => {
  return (
    <GradientBorder {...restProps} className={twMerge(className)}>
      <Link href={url} className={`relative bg-white group dark:bg-gray-900 rounded-lg flex flex-1 flex-col`}>
        <div className={`overflow-hidden rounded-t-lg border-b-2 border-primary-500/10`}>
          <Image
            className={`rounded-lg group-hover:scale-105 transition duration-300 block w-full aspect-square rounded-b-none shadow-md shadow-primary-500/50`}
            src={convertedImage(item.media[0]?.original_url, "medium")}
            alt={item.title}
          />
        </div>
        <div className={`p-4 text-xs sm:text-sm md:text-md text-gray-700 font-semibold dark:text-white flex justify-between`}>
          {item.title}

          <span>{item?.children?.length}</span>
        </div>
      </Link>
    </GradientBorder>
  )
}

export default CategoryCard
