import React from "react";
import PropTypes from "prop-types";
import Button from "../../common/Button";
import { displayDate } from "../../../utils/dateService";
import styles from "./styles/task.card.module.scss";

const TaskCard = ({ task, onToggleTask, onDragStart, onDragEnd }) => {
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleDragLeave = (e) => {};

    return (
        <div
            draggable={true}
            className={styles.project__task_card}
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDragStart={(e) => onDragStart(e, task)}
            onDragEnd={(e) => onDragEnd(e)}
        >
            <div className={styles.project__task_text_block}>
                <h3 className={styles.project__task_title}>{task.title}</h3>
                <p className={styles.project__task_created_at}>
                    Дата создания: {displayDate(task.created_at)}
                </p>
                <p className={styles.project__task_description}>
                    Дедлайн: {displayDate(task.deadline)}
                </p>
                <p className={styles.project__task_description}>
                    Описание: {task.description}
                </p>
            </div>
            <Button onClick={() => onToggleTask(task.id)}>Подробнее</Button>
        </div>
    );
};

TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
    onToggleTask: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDragEnd: PropTypes.func.isRequired
};

export default TaskCard;
