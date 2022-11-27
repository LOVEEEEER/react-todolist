import React, { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./styles/sub-task-card.module.scss";
import { displayDate } from "../../../../utils/dateService";
import Button from "../../../common/Button";
import { useDispatch } from "react-redux";
import { removeSubTask } from "../../../../store/reducers/subTasksReducer";

const SubTaskCard = ({ subTask }) => {
    const subTaskElement = useRef();
    const dispatch = useDispatch();
    const successSubTask = () => {
        subTaskElement.current.style.backgroundColor = "rgb(177, 235, 177)";
        dispatch(removeSubTask(subTask.id));
    };

    return (
        <div className={styles.task__window_sub_task_card} ref={subTaskElement}>
            <div>
                <div className={styles.task__window_sub_task_head}>
                    <h3 className={styles.task__window_sub_task_title}>
                        {subTask.title}
                    </h3>
                    <span className={styles.task__window_sub_task_created}>
                        {displayDate(subTask.created_at)}
                    </span>
                </div>
                <span className={styles.task__window_sub_description}>
                    {subTask.description}
                </span>
            </div>
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
    );
};

SubTaskCard.propTypes = {
    subTask: PropTypes.object.isRequired
};

export default SubTaskCard;
