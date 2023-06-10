import React, { PropsWithChildren } from "react";
import Navbar from "@/FrontEnd/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/FrontEnd/Footer/Footer";

export default function AppLayout({ children }: PropsWithChildren) {
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
