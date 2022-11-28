import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getTaskById } from "../../../store/reducers/tasksReducer";
import TaskInfo from "../TaskInfo";
import EditTaskForm from "../forms/EditTaskForm";
import CreateSubTaskForm from "../forms/CreateSubTaskForm";
import CreateFilesForm from "../forms/CreateFilesForm";

const TaskWindow = ({ id, ...rest }) => {
    const task = useSelector(getTaskById(id));
    const [content, setContent] = useState("info");
    const toggleContent = (contentName) => {
        setContent(contentName);
    };
    const getContent = () => {
        switch (content) {
            case "info":
                return (
                    <TaskInfo
                        task={task}
                        toggleContent={toggleContent}
                        {...rest}
                    />
                );
            case "create":
                return (
                    <CreateSubTaskForm
                        taskId={task.id}
                        toggleContent={toggleContent}
                    />
                );
            case "edit":
                return (
                    <EditTaskForm task={task} toggleContent={toggleContent} />
                );
            case "files":
                return (
                    <CreateFilesForm
                        taskId={task.id}
                        toggleContent={toggleContent}
                    />
                );

            default:
                break;
        }
    };

    if (task) {
        return <>{getContent()}</>;
    }
};

TaskWindow.propTypes = {
    id: PropTypes.string
};

export default TaskWindow;
