import React, { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./styles/sub-task-card.module.scss";
import { displayDate } from "../../../../utils/dateService";
import Button from "../../../common/Button";
import { useDispatch } from "react-redux";
import { removeSubTask } from "../../../../store/reducers/subTasksReducer";

const SubTaskCard = ({ subTask, serialNumber }) => {
    const subTaskElement = useRef();
    const dispatch = useDispatch();
    const successSubTask = () => {
        subTaskElement.current.style.backgroundColor = "rgb(177, 235, 177)";
        dispatch(removeSubTask(subTask.id));
    };
    return (
        <div
            className={styles.task__window_sub_tasks_card}
            ref={subTaskElement}
        >
            <div className={styles.task__window_sub_main_info}>
                <div className={styles.task__window_sub_head_text}>
                    <p className={styles.task__window_sub_tasks_title}>
                        {serialNumber}. {subTask.title}
                    </p>
                    <span className={styles.task__window_sub_task_created}>
                        Создана: {displayDate(subTask.created_at)}
                    </span>
                </div>
                <p className={styles.task__window_sub_tasks_description}>
                    {subTask.description}
                </p>
            </div>

            <div className={styles.task__window_sub_second_block}>
                <Button
                    onClick={successSubTask}
                    style={{
                        marginBottom: "7px"
                    }}
                    color="success"
                >
                    Done
                </Button>
            </div>
        </div>
    );
};

SubTaskCard.propTypes = {
    subTask: PropTypes.object.isRequired,
    serialNumber: PropTypes.number.isRequired
};

export default SubTaskCard;
