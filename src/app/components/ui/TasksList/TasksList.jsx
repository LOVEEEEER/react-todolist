import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/tasks-list.module.scss";
import { displayDate } from "../../../utils/dateService";
import Button from "../../common/Button";
import { useDispatch } from "react-redux";
import { removeTask } from "../../../store/reducers/tasksReducer";

const TasksList = ({ tasks }) => {
    const dispatch = useDispatch();
    const handleRemoveTask = (id) => {
        console.log(id);
        dispatch(removeTask(id));
    };
    return (
        <ul className={styles.project__tasks_list}>
            {tasks.map((task) => (
                <li key={task.id} className={styles.project__task_item}>
                    <div className={styles.project__task_card}>
                        <div className={styles.project__task_text_block}>
                            <h3 className={styles.project__task_title}>
                                {task.title}
                            </h3>
                            <p className={styles.project__task_created_at}>
                                Дата создания: {displayDate(task.created_at)}
                            </p>
                            <p className={styles.project__task_description}>
                                Описание: {task.description}
                            </p>
                        </div>
                        <Button onClick={() => handleRemoveTask(task.id)}>
                            Delete
                        </Button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            projectId: PropTypes.string,
            id: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            created_at: PropTypes.number
        })
    )
};

export default TasksList;
