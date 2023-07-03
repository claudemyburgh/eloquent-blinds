import React, { FC } from "react";

interface LiveProps {
    live: string;
    size?: "xs" | "md" | "lg";
}

const LiveLabel: FC<LiveProps> = ({ live, size = "md" }) => {
    const sizeSet = {
        xs: "text-xs",
        md: "text-md",
        lg: "text-lg",
    };

    return (
        <div>
            {live ? (
                <div
                    className={`bg-green-100 inline-flex space-x-1 items-center justify-center text-green-800  font-medium  px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 ${sizeSet[size]}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span>Live</span>
                </div>
            ) : (
                <div className="bg-red-100 inline-flex space-x-1 items-center justify-center text-red-800 text-xs font-medium  px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3"
                    >
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                    <span>Not Live</span>
                </div>
            )}
        </div>
    );
};

export default LiveLabel;
