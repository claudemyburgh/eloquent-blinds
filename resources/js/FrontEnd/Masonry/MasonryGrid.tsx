import React, { FC, MutableRefObject, useEffect, useRef } from "react"
import Masonry, { Options } from "masonry-layout"
import { ChildrenProps } from "@/types"
import { twMerge } from "tailwind-merge"

interface InterfaceOptions extends Options {
  options?: Options
}

const MasonryGrid: FC<ChildrenProps & InterfaceOptions> = ({ children, className, options, ...resProps }) => {
  const gridRef: MutableRefObject<any> = useRef()

  useEffect(() => {
    const masonry = new Masonry(gridRef.current, {
      itemSelector: ".masonry-item",
      resize: true,
      // fitWidth: false,
      // gutter: 20,
      // stagger: 10,
      ...options,
    })
  }, [])

  return (
    <div ref={gridRef} {...resProps} className={twMerge(`overflow-x-hidden isolate -mx-2 lg:-mx-6`, className)}>
      {children}
    </div>
  )
}

export default MasonryGrid
