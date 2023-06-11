import React, { PropsWithChildren } from "react";
import Navbar from "@/FrontEnd/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/FrontEnd/Footer/Footer";

export default function AppLayout({ children }: PropsWithChildren) {
    const handleMouseMovement = (e: MouseEvent) => {
        const { currentTarget: target } = e;
        const rect = (target as HTMLElement).getBoundingClientRect();
        let y = e.clientY - rect.top;
        let x = e.clientX - rect.left;
        (target as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (target as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    };

    setTimeout(() => {
        for (const card of document.querySelectorAll(".card")) {
            (card as HTMLElement).onmousemove = handleMouseMovement;
        }
    }, 1000);

    return (
        <div className="min-h-screen relative z-50">
            <Toaster
                position={`top-right`}
                toastOptions={{
                    duration: 2200,
                }}
            />

            <Navbar />
            <div className="w-full text-white">{children}</div>

            <Footer />
        </div>
    );
}
