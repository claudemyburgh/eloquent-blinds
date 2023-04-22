import React, { FC } from "react";
import { ChildrenProps } from "@/types";

const Datatable: FC<ChildrenProps> = ({ children }) => {
    return (
        <div className={`border border-gray-800 rounded bg-gray-800`}>
            <table className={`table w-full text-left overflow-hidden rounded`}>
                {children}
            </table>
        </div>
    );
};

export default Datatable;
