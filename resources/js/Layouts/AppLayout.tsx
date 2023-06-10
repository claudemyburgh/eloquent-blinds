import React, { PropsWithChildren } from "react";
import Navbar from "@/FrontEnd/Navbar/Navbar";

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="w-full text-white">{children}</div>
        </div>
    );
}
