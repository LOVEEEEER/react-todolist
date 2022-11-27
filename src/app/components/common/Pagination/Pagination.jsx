import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/pagination.module.scss";
import Button from "../Button";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <ul className={styles.pagination__list}>
            {pages.map((page) => (
                <li className={styles.pagination__item} key={page}>
                    <Button
                        className={`${styles.pagination__button} ${
                            page === currentPage ? styles.active : ""
                        }`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </Button>
                </li>
            ))}
        </ul>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
