import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../../store/reducers/projectsReducer";
import {
    getTasksByProjectId,
    updateTask
    // updateTask
} from "../../../store/reducers/tasksReducer";
import { displayDate } from "../../../utils/dateService";
import Button from "../../common/Button";
import TextField from "../../common/form/TextField";
import GroupList from "../../common/GroupList";
import Modal from "../../common/Modal/Modal";
import CreateTaskForm from "../../ui/forms/CreateTaskForm";
import TasksList from "../../ui/TasksList";
import styles from "./styles/project-page.module.scss";

const ProjectPage = () => {
    const [modalActive, setModalActive] = useState(false);
    const [currentColumn, setCurrentColumn] = useState("queue");
    const [currentTask, setCurrentTask] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();
    const { projectId } = useParams();
    const project = useSelector(getProjectById(projectId));
    const tasks = useSelector(getTasksByProjectId(projectId));

    const handleChangeColumn = (column) => {
        setCurrentColumn(column);
    };

    const handleDragStart = (e, task) => {
        setCurrentTask(task);
    };

    const handleDragEnd = (e) => {
        setCurrentTask(null);
    };

    const handleSearchQuery = (value) => {
        setSearchQuery(value);
    };

    const handleDragDrop = (status) => {
        const updatedTask = {
            ...currentTask,
            status: status
        };
        dispatch(updateTask(updatedTask));
    };

    if (project && tasks) {
        const filteredTasks = tasks.filter(
            (task) => task.status === currentColumn
        );
        const searchedQueryItems =
            searchQuery.length === 0
                ? filteredTasks
                : Number(searchQuery)
                ? tasks.filter((task) =>
                      task.index.toString().includes(searchQuery)
                  )
                : tasks.filter((task) => task.title.includes(searchQuery));
        return (
            <main className={styles.project__page}>
                <div className={styles.project__head}>
                    <div className={styles.project_head_text}>
                        <p>Название проекта: {project.name}</p>
                        <p>Проект создан: {displayDate(project.created_at)}</p>
                    </div>
                    <Button onClick={() => setModalActive(true)}>
                        Создать таск
                    </Button>
                </div>
                <div className={styles.project__columns}>
                    <GroupList
                        currentColumn={currentColumn}
                        items={[
                            { name: "Queue", id: 1, value: "queue" },
                            {
                                name: "Development",
                                id: 2,
                                value: "development"
                            },
                            { name: "Done", id: 3, value: "done" }
                        ]}
                        onChangeColumn={handleChangeColumn}
                        onDragDrop={handleDragDrop}
                    />
                </div>
                <TextField
                    value={searchQuery}
                    onChange={({ target: { value } }) =>
                        handleSearchQuery(value)
                    }
                />
                <ul className={styles.project__tasks_list}>
                    {tasks.length > 0 ? (
                        <TasksList
                            tasks={searchedQueryItems}
                            onDragStart={handleDragStart}
                            onDragEnd={handleDragEnd}
                        />
                    ) : (
                        "Список тасков пуст"
                    )}
                </ul>
                <Modal active={modalActive} setActive={setModalActive}>
                    <CreateTaskForm projectId={projectId} />
                </Modal>
            </main>
        );
    }
    return "loading...";
};

export default ProjectPage;
