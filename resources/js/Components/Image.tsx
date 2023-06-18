import React, { FC } from "react"
import { twMerge } from "tailwind-merge"
import { convertedImage } from "@/lib/helpers"

interface ImageProps {
  src: string
  loading?: "eager" | "lazy"
  alt: string
  className?: string
  width: number
  height: number
  type?: "tiny" | "thumb" | "small" | "medium" | "large" | "tail" | "screen"
  // [style?: string]: string
}

const Image: FC<ImageProps> = ({ src, loading = "lazy", alt, className, type = "medium", height, width }) => {
  return (
    <div className={twMerge("relative isolate overflow-hidden", className)}>
      <img height={height} width={width} className={twMerge("inset-0  w-full h-full object-fill")} loading={loading} src={convertedImage(src, type)} alt={alt} />
      <img
        height={height}
        width={width}
        aria-hidden={true}
        className={twMerge("absolute inset-0 w-full object-fit  -z-10 blur-md")}
        loading={"eager"}
        src={convertedImage(src, "tiny")}
        alt={alt}
      />
    </div>
  )
}

export default Image
