import React, { FC } from "react";
import { unSlug } from "@/lib/helpers";
import { usePage } from "@inertiajs/react";
import { UsePageDatatableProps } from "@/types/datatable";
import { ArrowIndicator, useDatatable } from "@/Components/Datatable";
import { Checkbox } from "@/Components/Form";

const DatatableHead: FC = () => {
    const { order, selected, handleToggleSelectedAll, handleColumnOrder } =
        useDatatable();

    const { data } = usePage<UsePageDatatableProps<any>>().props;

    return (
        <thead className={`bg-gray-900/75`}>
            <tr>
                {data.meta.allow.deletions && (
                    <th className={`p-3.5 w-5`}>
                        <Checkbox
                            checked={selected.length > 0}
                            onChange={(item) =>
                                handleToggleSelectedAll(item, data.records.data)
                            }
                        />
                    </th>
                )}

                {data.columns.displayable?.map((column) => (
                    <th
                        key={column}
                        className={`p-3.5 text-left text-sm font-semibold text-gray-100 uppercase ${
                            column === "id" && "w-[70px]"
                        }`}
                        scope="col"
                    >
                        <button
                            type={`button`}
                            className={`flex space-x-2 justify-between items-center uppercase`}
                            onClick={() => handleColumnOrder(column)}
                        >
                            <span>{unSlug(column)}</span>
                            {order.key === column && (
                                <ArrowIndicator order={order.order} />
                            )}
                        </button>
                    </th>
                ))}
                <th className={`w-[70px] text-right p-3.5`}>
                    <span className="sr-only">Edit or delete</span>
                </th>
            </tr>
        </thead>
    );
};

export default DatatableHead;
