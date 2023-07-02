import React, { FC } from "react"

interface ImageProps {
  src: string
  alt: string
  className?: string
  width?: number | 0
  height?: number | 0
}

const Image: FC<ImageProps> = ({ src, alt, height, width, ...restProps }) => {
  return (
    <>
      <img src={src} alt={alt} {...restProps} loading={`lazy`} width={width} height={height} />
    </>
  )
}

export default Image
