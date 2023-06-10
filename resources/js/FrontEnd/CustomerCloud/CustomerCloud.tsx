import React from "react";
import CB from "@/../img/customers/CB.svg";
import DBC from "@/../img/customers/DBC.svg";

const CustomerCloud = () => {
    return (
        <div className={`-mx-4 md:-mx-6 lg:-mx-8 xl:-mx-12 flex flex-wrap`}>
            <div className={`grid-item w-full md:w-1/3 lg:w-1/4 p-4 `}>
                <div
                    className={`p-4 md:p-6 flex items-center justify-center rounded-lg dark:bg-gray-900 bg-gray-200 text-gray-500 border border-gray-300 dark:border-gray-800`}
                >
                    <img className={`h-16`} src={CB} alt="" />
                </div>
            </div>
            <div className={`grid-item w-full md:w-1/3 lg:w-1/4 p-4 `}>
                <div
                    className={`p-4 md:p-6 flex items-center justify-center rounded-lg dark:bg-gray-900 bg-gray-200 text-gray-500 border border-gray-300 dark:border-gray-800`}
                >
                    <img className={`h-16`} src={DBC} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CustomerCloud;
