import { useState } from "react";
import { paginate } from "../utils/paginate";

const usePaginate = (items, pageSize = 4) => {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const itemsCrop = paginate(items, currentPage, pageSize);
    return { currentPage, handlePageChange, itemsCrop, pageSize };
};

export default usePaginate;
