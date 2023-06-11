import React, { FC } from "react";
import { ChildrenProps } from "@/types";

const MasonryCard: FC<ChildrenProps> = ({ children, ...restProps }) => {
    return (
        <div {...restProps} className={`masonry-item ${restProps.className}`}>
            {children}
        </div>
    );
};

export default MasonryCard;
