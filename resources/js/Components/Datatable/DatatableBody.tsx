import React, { FC } from "react";
import { UsePageDatatableProps } from "@/types/datatable";
import { DatatableAction, useDatatable } from "@/Components/Datatable";
import { usePage } from "@inertiajs/react";
import { Checkbox } from "@/Components/Form";

interface Row {
    id: number;
    name: string;
}

const DatatableBody: FC = () => {
    const {
        data: { columns, meta },
    } = usePage<UsePageDatatableProps<any>>().props;

    const { filteredData, handleSelected, selected } = useDatatable();

    return (
        <tbody className={`divide-y divide-gray-900`}>
            {filteredData &&
                filteredData.map((row: any, index: number) => (
                    <tr key={`row-${index}`} className={`even:bg-gray-900/50`}>
                        {meta.allow.deletions && (
                            <td className={`p-3.5 w-5`}>
                                <Checkbox
                                    id={row.id}
                                    onChange={handleSelected}
                                    value={row.id}
                                    checked={selected.includes(row.id)}
                                />
                            </td>
                        )}

                        {columns.displayable.map((column: string) => (
                            <td
                                key={`${column}-${index}`}
                                className={`max-w-[200px] px-3.5 py-4 text-sm text-gray-500`}
                            >
                                <div className="line-clamp-2">
                                    {row[column]}
                                </div>
                            </td>
                        ))}
                        <th
                            className={`w-[70px] text-right px-3.5 py-4 text-sm `}
                        >
                            <DatatableAction
                                id={row["id"]}
                                deletion={meta.allow.deletions}
                            />
                        </th>
                    </tr>
                ))}
        </tbody>
    );
};

export default DatatableBody;
