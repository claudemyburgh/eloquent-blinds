import { useRecoilState } from "recoil";
import $map from "lodash/map";
import {
    DatatableFilteredData,
    DatatableLimit,
    DatatableOrderColumn,
    DatatableQuickSearch,
    DatatableSelected,
} from "@/lib/datatable-recoil";

export default function useDatatable() {
    const [order, setOrder] = useRecoilState(DatatableOrderColumn);

    const [quickSearch, setQuickSearch] = useRecoilState(DatatableQuickSearch);

    const [limit, setLimit] = useRecoilState(DatatableLimit);

    const [filteredData, setFilteredData] = useRecoilState(
        DatatableFilteredData
    );

    const [selected, setSelected] = useRecoilState(DatatableSelected);

    const handleColumnOrder = (column: any) => {
        setOrder({
            ...order,
            key: column,
            order:
                order.order === "asc" && order.key === column ? "desc" : "asc",
        });
    };

    const handleSelected = (e: any): void => {
        if (e.target.checked) {
            setSelected([...selected, parseInt(e.target.value)]);
        } else {
            setSelected(selected.filter((item: any) => item != e.target.value));
        }
    };

    const handleToggleSelectedAll = (item: any, data: any): void => {
        if (item.target.checked) {
            setSelected([...selected, ...$map(data, "id")]);
        } else {
            setSelected([]);
        }
    };

    return {
        order,
        setOrder,
        filteredData,
        setFilteredData,
        quickSearch,
        setQuickSearch,
        handleColumnOrder,
        limit,
        setLimit,
        selected,
        setSelected,
        handleSelected,
        handleToggleSelectedAll,
    };
}
