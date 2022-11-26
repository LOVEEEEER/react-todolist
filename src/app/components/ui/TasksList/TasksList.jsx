import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles/tasks-list.module.scss";
// import { useDispatch } from "react-redux";
import Modal from "../../common/Modal";
import TaskWindow from "../TaskWindow/TaskWindow";
import TaskCard from "../TaskCard/TaskCard";
// import { removeTask } from "../../../store/reducers/tasksReducer";

const TasksList = ({ tasks, ...rest }) => {
    const [modalActive, setModalActive] = useState(false);
    const [activeTask, setActiveTask] = useState(null);
    // const dispatch = useDispatch();
    // const handleRemoveTask = (id) => {
    //     console.log(id);
    //     dispatch(removeTask(id));
    // };
    const handleToggleTask = (id) => {
        setActiveTask(id);
        setModalActive(true);
    };
    return (
        <>
            <ul className={styles.project__tasks_list}>
                {tasks.map((task) => (
                    // <li key={task.id} className={styles.project__task_item}>
                    <TaskCard
                        key={task.id}
                        task={task}
                        onToggleTask={handleToggleTask}
                        {...rest}
                    />
                    // </li>
                ))}
                <Modal active={modalActive} setActive={setModalActive}>
                    <TaskWindow id={activeTask} />
                </Modal>
            </ul>
        </>
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
