import React, { FC, useEffect, useState } from "react";
import { HandThumbUpIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";

const Banner: FC<{ message: string; time?: number }> = ({
    message,
    time = 3000,
}) => {
    const [isShowing, setIsShowing] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsShowing(false);
        }, time);

        return () => {
            clearTimeout(timer);
        };
    }, [isShowing]);

    return (
        <Transition
            show={isShowing}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="p-2 rounded-lg bg-emerald-600 shadow-lg sm:p-3 mb-4">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-emerald-800">
                            <HandThumbUpIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                            />
                        </span>
                        <p className="ml-3 font-medium text-white truncate">
                            {message}
                        </p>
                    </div>

                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                        <button
                            type="button"
                            onClick={() => setIsShowing(false)}
                            className="-mr-1 flex p-2 rounded-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export default Banner;
