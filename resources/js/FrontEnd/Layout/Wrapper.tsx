import { ChildrenProps } from "@/types";

export default function Wrapper({ className, children }: ChildrenProps) {
    return <div className={`wrapper ${className}`}>{children}</div>;
}
