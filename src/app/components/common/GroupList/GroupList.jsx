import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/group-list.module.scss";

const GroupList = ({ items, onChangeColumn, onDragDrop }) => {
    const handleDragOver = (e) => {
        e.preventDefault();
        e.target.style.boxShadow = "0 4px 3px gray";
    };
    const handleDragLeave = (e) => {
        console.log(e, "leave");
        e.preventDefault();
        e.target.style.boxShadow = "none";
    };
    const handleDragDrop = (e, value) => {
        e.target.style.boxShadow = "none";
        onDragDrop(value);
    };
    return (
        <ul className={styles.group_list}>
            {items.map((item) => (
                <li
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDragDrop(e, item.value)}
                    className={styles.group_item}
                    key={item.id}
                    onClick={() => onChangeColumn(item.value)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

GroupList.propTypes = {
    items: PropTypes.array.isRequired,
    onChangeColumn: PropTypes.func.isRequired,
    onDragDrop: PropTypes.func.isRequired
};

export default GroupList;
