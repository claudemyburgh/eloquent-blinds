import React, { FC } from "react";
import { ChildrenProps } from "@/types";

type Props = {
    header: string;
    p?: string;
};

const PanelHeader: FC<Props & ChildrenProps> = ({ className, header, p }) => {
    return (
        <header>
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {header}
            </h2>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{p}</p>
        </header>
    );
};

export default PanelHeader;
