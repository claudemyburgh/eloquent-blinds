import React, { FC } from "react";
import { ChildrenProps } from "@/types";

const MessageTable: FC<ChildrenProps> = ({ children }) => {
    return <div className={`py-12`}>{children}</div>;
};

export default MessageTable;
