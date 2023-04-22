import React, { FC } from "react";

const DatatableHead: FC = () => {
    return (
        <thead className={`bg-gray-900/75`}>
            <tr>
                <th
                    className={`p-3.5 text-left text-sm font-semibold text-gray-100 uppercase hidden md:flex`}
                    scope="col"
                >
                    <span className={`pointer-events-none`}>ID</span>
                </th>
                <th
                    className={`p-3.5 text-left text-sm font-semibold text-gray-100 uppercase`}
                    scope="col"
                >
                    <span className={`pointer-events-none`}>Read</span>
                </th>

                <th
                    className={`p-3.5 text-left text-sm font-semibold text-gray-100 uppercase`}
                    scope="col"
                >
                    <span className={`pointer-events-none`}>Name</span>
                </th>
                <th
                    className={`p-3.5 text-left text-sm font-semibold text-gray-100 uppercase`}
                    scope="col"
                >
                    <span className={`pointer-events-none`}>Email</span>
                </th>
                <th
                    className={`p-3.5 text-left text-sm font-semibold text-gray-100 uppercase`}
                    scope="col"
                >
                    <span className={`pointer-events-none`}>Phone</span>
                </th>
                <th
                    className={`p-3.5 text-left text-sm font-semibold text-gray-100 uppercase`}
                    scope="col"
                    colSpan={3}
                >
                    <span className={`pointer-events-none`}>Subject</span>
                </th>

                <th className={`w-[70px] text-right p-3.5`}>
                    <span className="sr-only">Edit or delete</span>
                </th>
            </tr>
        </thead>
    );
};

export default DatatableHead;
