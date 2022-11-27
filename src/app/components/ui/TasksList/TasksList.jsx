import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles/tasks-list.module.scss";
import Modal from "../../common/Modal";
import TaskWindow from "../TaskWindow/TaskWindow";
import TaskCard from "../cards/TaskCard";
import { getSortedItemsByCreatedAt } from "../../../utils/getSortedItemsByCreatedAt";

const TasksList = ({ tasks, ...rest }) => {
    const [modalActive, setModalActive] = useState(false);
    const [activeTask, setActiveTask] = useState(null);
    const handleToggleTask = (id) => {
        setActiveTask(id);
        setModalActive(true);
    };
    const sortedItems = getSortedItemsByCreatedAt(tasks);
    return (
        <>
            <ul className={styles.project__tasks_list}>
                {sortedItems.map((task, index) => (
                    <li key={task.id} className={styles.project__task_item}>
                        <TaskCard
                            key={task.id}
                            task={task}
                            onToggleTask={handleToggleTask}
                            serialNumber={index + 1}
                            {...rest}
                        />
                    </li>
                ))}
                <Modal active={modalActive} setActive={setModalActive}>
                    <TaskWindow
                        id={activeTask}
                        setActiveModal={setModalActive}
                    />
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
