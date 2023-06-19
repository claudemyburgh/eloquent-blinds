import React, { FC, useEffect, useRef } from "react"

import { ChildrenProps } from "@/types"
import { CountUpOptions } from "countup.js"

interface Props {
  count: number
  options?: CountUpOptions
}

const UpCount: FC<Props & ChildrenProps> = ({ count, options }) => {
  const refElement = useRef<any>()

  async function CountInit() {
    const CountUp = await import("countup.js")
    const up = new CountUp.CountUp(refElement.current as HTMLElement, count, {
      enableScrollSpy: false,
      scrollSpyOnce: false,
      startVal: 0,
      ...options,
    })
    if (!up.error) {
      up.start()
    }
  }

  useEffect(() => {
    CountInit()
  }, [])

  return <span ref={refElement}>0</span>
}

export default UpCount
