import React, { FC, MutableRefObject, useEffect, useRef } from "react"
import Masonry, { Options } from "masonry-layout"
import { ChildrenProps } from "@/types"

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
    <div ref={gridRef} {...resProps} className={`overflow-x-hidden isolate ${className}`}>
      {children}
    </div>
  )
}

export default MasonryGrid
