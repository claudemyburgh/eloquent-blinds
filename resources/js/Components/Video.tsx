import React, { FC } from "react"
import { twMerge } from "tailwind-merge"

interface VideoProps {
  src: string
  className?: string
}

const Video: FC<VideoProps> = ({ src, className, ...restProps }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      {...restProps}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className={twMerge("aspect-video bg-gray-100 dark:bg-gray-950 rounded-lg shadow-lg shadow-primary-500/40", className)}
    ></iframe>
  )
}

export default Video
