import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getTaskById } from "../../../store/reducers/tasksReducer";
import styles from "./styles/task-window.module.scss";
import { displayDate } from "../../../utils/dateService";

const TaskWindow = ({ id }) => {
    const task = useSelector(getTaskById(id));
    const getTaskPriority = (priority) => {
        switch (priority) {
            case "low":
                return "Низкий";
            case "medium":
                return "Средний";
            case "high":
                return "Высокий";
            default:
                return priority;
        }
    };
    if (task) {
        return (
            <div className={styles.task__window}>
                <h2 className={styles.task__window_title}>{task.title}</h2>
                <ul className={styles.task__window_list}>
                    <li className={styles.task__window_item}>
                        Описание: {task.description}
                    </li>
                    <li className={styles.task__window_item}>
                        Дата создания: {displayDate(task.created_at)}
                    </li>
                    <li className={styles.task__window_item}>
                        Дедлайн: {displayDate(task.deadline)}
                    </li>
                    <li className={styles.task__window_item}>
                        Приоритет: {getTaskPriority(task.priority)}
                    </li>
                    <li className={styles.task__window_item}>
                        Статус: working
                    </li>
                </ul>
            </div>
        );
    }
};

TaskWindow.propTypes = {
    id: PropTypes.string
};

export default TaskWindow;
