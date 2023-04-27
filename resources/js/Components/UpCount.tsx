import React, { FC, useEffect, useRef } from "react";

import { ChildrenProps } from "@/types";

interface Props {
    count: number;
}

const UpCount: FC<Props & ChildrenProps> = ({ count }) => {
    const refElement = useRef<any>();

    async function CountInit() {
        const CountUp = await import("countup.js");
        const up = new CountUp.CountUp(
            refElement.current as HTMLElement,
            count,
            {
                enableScrollSpy: false,
                scrollSpyOnce: false,
                startVal: 0,
                // duration: 50,
            }
        );
        if (!up.error) {
            up.start();
        }
    }

    useEffect(() => {
        CountInit();
    }, []);

    return <span ref={refElement}>0</span>;
};

export default UpCount;
