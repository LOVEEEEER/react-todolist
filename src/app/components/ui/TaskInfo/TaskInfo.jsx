import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/task-info.module.scss";
import { displayDate, inWorkingDate } from "../../../utils/dateService";
import editIcon from "../../../assets/svg/edit.svg";
import Button from "../../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { getSubTasksByTaskId } from "../../../store/reducers/subTasksReducer";
import SubTasksList from "../SubTasksList";
import { removeTask } from "../../../store/reducers/tasksReducer";
import Comments from "../Comments";

const TaskInfo = ({ task, toggleContent, setActiveModal }) => {
    const dispatch = useDispatch();
    const subTasks = useSelector(getSubTasksByTaskId(task.id));
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

    const handleRemoveTask = () => {
        dispatch(removeTask(task.id));
        setActiveModal(false);
    };

    return (
        <div className={styles.task__window}>
            <div className={styles.task__window_head_block}>
                <div className={styles.task__window_head_first}>
                    <h2 className={styles.task__window_title}>{task.title}</h2>
                    <img
                        className={styles.task__window_edit}
                        src={editIcon}
                        alt="edit"
                        onClick={() => toggleContent("edit")}
                    />
                </div>
                <Button color="danger" onClick={handleRemoveTask}>
                    Удалить
                </Button>
            </div>
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
                    В работе: {inWorkingDate(Date.now() - task.created_at)}
                </li>
                <li className={styles.task__window_item}>
                    Приоритет: {getTaskPriority(task.priority)}
                </li>
                <li className={styles.task__window_item}>
                    Статус: {task.status}
                </li>
            </ul>
            <div className={styles.task__window_sub_head}>
                <h3 className={styles.task__window_sub_task_title}>
                    Подзадачи
                </h3>
                <Button onClick={() => toggleContent("create")}>Создать</Button>
            </div>
            {subTasks.length > 0 ? (
                <SubTasksList subTasks={subTasks} />
            ) : (
                "Список подзадач пуст"
            )}
            <div className={styles.task__window_comments}>
                <h3
                    className={`${styles.task__window_sub_task_title} ${styles.task__comment_title}`}
                >
                    Комментарии
                </h3>
                <Comments taskId={task.id} />
            </div>
        </div>
    );
};

TaskInfo.propTypes = {
    task: PropTypes.object.isRequired,
    toggleContent: PropTypes.func.isRequired,
    setActiveModal: PropTypes.func.isRequired
};

export default TaskInfo;
