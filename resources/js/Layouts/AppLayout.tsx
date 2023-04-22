import React, { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
    return (
        <div className="wrapper">
            <div className="w-full text-white">{children}</div>
        </div>
    );
}
