import React from "react";
import PropTypes from "prop-types";
import Button from "../../../common/Button";
import { displayDate } from "../../../../utils/dateService";
import styles from "./styles/task.card.module.scss";

const TaskCard = ({ task, onToggleTask, onDragStart, onDragEnd }) => {
    const getPriorityColor = (color) => {
        switch (color) {
            case "low":
                return "rgb(232, 236, 169)";
            case "medium":
                return "rgb(240, 206, 95)";
            case "high":
                return "rgb(240, 153, 95)";
            default:
                break;
        }
    };
    return (
        <div
            draggable={true}
            className={styles.project__task_card}
            onDragStart={(e) => onDragStart(e, task)}
            onDragEnd={(e) => onDragEnd(e)}
            style={{ backgroundColor: getPriorityColor(task.priority) }}
        >
            <div className={styles.project__task_text_block}>
                <h3 className={styles.project__task_title}>
                    {task.index}. {task.title}
                </h3>
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
