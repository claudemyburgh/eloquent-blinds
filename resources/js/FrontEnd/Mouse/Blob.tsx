import React, { MutableRefObject, useRef } from "react";
import { useEventListener } from "usehooks-ts";

const Blob = () => {
    const blobRef: MutableRefObject<any> = useRef();

    const move = (event: MouseEvent) => {
        const { clientX, clientY } = event;

        blobRef.current.animate(
            {
                left: `${clientX}px`,
                top: `${clientY}px`,
            },
            {
                duration: 300,
                fill: "forwards",
            }
        );
    };

    useEventListener("pointermove", move);

    return (
        <>
            <div
                className="fixed h-full inset-0 w-full backdrop-blur-3xl z-0 hidden md:block"
                aria-hidden={true}
            ></div>
            <div
                ref={blobRef}
                className={`bg-gradient-to-r from-green-500/10 to-secondary-400/10 hidden md:block`}
                id={`blob`}
                aria-hidden={true}
            ></div>
        </>
    );
};

export default Blob;
