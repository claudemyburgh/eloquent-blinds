import React, { FC, useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { Panel } from "@/Components/Panel";
import { ChartConfiguration } from "chart.js"; // interface Props {

const ChartLine: FC<ChartConfiguration & { className?: string }> = ({
    type = "line",
    data,
    options,
    className,
}) => {
    const canvasRef = useRef<any>();
    // Chart.defaults.color = "#fff";
    // Chart.defaults.borderColor = "rgba(255,255,255, 0.15)";

    useEffect(() => {
        if (!canvasRef.current) return;

        const chart = new Chart(canvasRef.current as HTMLCanvasElement, {
            type,
            data,
            options,
        });
        return () => {
            chart.destroy();
        };
    }, [type, data]);

    return (
        <Panel className={className}>
            <canvas
                width={600}
                height={300}
                className={`aspect-video min-w-full`}
                ref={canvasRef}
            ></canvas>
        </Panel>
    );
};

export default ChartLine;
