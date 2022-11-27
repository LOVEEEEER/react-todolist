import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import {
    createTask,
    getTasksOfProjectLength
} from "../../../../store/reducers/tasksReducer";
import Button from "../../../common/Button";
import SelectField from "../../../common/form/SelectField";
import TextField from "../../../common/form/TextField";
import styles from "./styles/create-task-form.module.scss";
import { validatorConfig } from "./validatorConfig";

const CreateTaskForm = () => {
    const dispatch = useDispatch();
    const { projectId } = useParams();
    const { data, handleChange, handleDateChange, errors, deadLine } = useForm(
        {
            title: "",
            description: "",
            deadLine: "",
            priority: ""
        },
        validatorConfig,
        ""
    );
    const projectTasksLength = useSelector(getTasksOfProjectLength(projectId));

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            const newTask = {
                projectId: projectId,
                created_at: Date.now(),
                title: data.title,
                id: `${Date.now() + Math.ceil(Math.random())}`,
                description: data.description,
                deadline: data.deadLine,
                priority: data.priority,
                status: "queue",
                index: projectTasksLength + 1
            };
            dispatch(createTask(newTask));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.create_task_form}>
                <TextField
                    label="Название задачи"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    error={errors.title}
                />
                <TextField
                    label="Описание задачи"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    error={errors.description}
                />
                <TextField
                    label="Дедлайн"
                    name="deadLine"
                    value={deadLine}
                    onChange={handleDateChange}
                    error={errors.deadLine}
                    placeholder="XX.MM.YYYY"
                />
                <SelectField
                    name="priority"
                    options={[
                        {
                            label: "Низкий",
                            value: "low"
                        },
                        {
                            label: "Средний",
                            value: "medium"
                        },
                        {
                            label: "Высокий",
                            value: "high"
                        }
                    ]}
                    value={data.priority}
                    onChange={handleChange}
                    label="Приоритет"
                    error={errors.priority}
                />
                <Button disabled={!isValid} style={{ width: "100%" }}>
                    Submit
                </Button>
            </div>
        </form>
    );
};

export default CreateTaskForm;
