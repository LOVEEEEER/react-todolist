import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles/sub-tasks-list.module.scss";
import SubTaskCard from "../cards/SubTaskCard";
import { getSortedItemsByCreatedAt } from "../../../utils/getSortedItemsByCreatedAt";

const SubTasksList = ({ subTasks }) => {
    const [viewAll, setViewAll] = useState(false);
    const handleViewAll = () => {
        setViewAll((prevState) => !prevState);
    };
    const sortedItems = getSortedItemsByCreatedAt(subTasks);
    const subTasksCrop = sortedItems.slice(0, viewAll ? subTasks.length : 3);
    return (
        <>
            <ul className={styles.task__window_sub_tasks_list}>
                {subTasksCrop.map((subTask, index) => (
                    <li
                        key={subTask.id}
                        className={styles.task__window_sub_tasks_item}
                    >
                        <SubTaskCard
                            subTask={subTask}
                            serialNumber={index + 1}
                        />
                    </li>
                ))}
            </ul>
            {subTasks.length > 3 && (
                <p
                    className={styles.task__window_sub_tasks_view}
                    onClick={handleViewAll}
                >
                    {!viewAll ? "Показать все" : "Скрыть"}
                </p>
            )}
        </>
    );
};

SubTasksList.propTypes = {
    subTasks: PropTypes.array.isRequired
};

export default SubTasksList;
