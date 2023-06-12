import React, { FC, useEffect, useRef } from "react"
import { Chart } from "chart.js/auto"
import { Panel } from "@/Components/Panel"
import { ChartConfiguration } from "chart.js" // interface Props {
const ChartLine: FC<ChartConfiguration & { className?: string }> = ({ type = "line", data, options, className }) => {
  const canvasRef = useRef<any>()
  Chart.defaults.color = "rgba(255,255,255,0.75)"
  Chart.defaults.borderColor = "rgba(255,255,255, 0)"

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current.getContext("2d")

    // const grad = canvas.createLinearGradient(0, 0, 0, 800);
    // grad.addColorStop(0, "lime");
    // grad.addColorStop(0.5, "green");
    // grad.addColorStop(1, "yellow");

    const chart = new Chart(canvas as HTMLCanvasElement, {
      type,
      data,
      options,
    })
    return () => {
      chart.destroy()
    }
  }, [type, data])

  return (
    <Panel className={className}>
      <Panel.Header heading={`Messages`} paragraph={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, magni?`}></Panel.Header>
      <canvas width={600} height={300} className={`aspect-video min-w-full mt-4`} ref={canvasRef}></canvas>
    </Panel>
  )
}

export default ChartLine
