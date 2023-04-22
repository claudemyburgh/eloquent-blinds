import React from "react";
import { useRecoilState } from "recoil";
import {
    DatatableFilteredData,
    DatatableOrderColumn,
} from "@/lib/datatable-recoil";

const useMessageTable = () => {
    const [order, setOrder] = useRecoilState(DatatableOrderColumn);

    const [filteredData, setFilteredData] = useRecoilState(
        DatatableFilteredData
    );

    const handleColumnOrder = (e: any) => {
        setOrder({
            ...order,
            key: e.target.dataset.table ?? "id",
            order:
                (order.order === "asc" &&
                    order.key === e.target.dataset.table) ??
                order.key === "id"
                    ? "desc"
                    : "asc",
        });
    };

    return {
        order,
        setOrder,
        handleColumnOrder,
        filteredData,
        setFilteredData,
    };
};

export default useMessageTable;
