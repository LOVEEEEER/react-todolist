import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { createTask } from "../../../../store/reducers/tasksReducer";
import Button from "../../../common/Button";
import TextField from "../../../common/form/TextField";
import styles from "./styles/create-task-form.module.scss";
import { validatorConfig } from "./validatorConfig";

const CreateTaskForm = () => {
    const dispatch = useDispatch();
    const { projectId } = useParams();
    const { data, handleChange, errors, validateBySubmit } = useForm(
        {
            title: "",
            description: "",
            deadline: ""
        },
        validatorConfig
    );

    const handleDateChange = (e) => {
        const {
            nativeEvent: { data: lastOne },
            target: { name, value }
        } = e;
        if (!Number.isNaN(Number(lastOne)) && value.length < 11) {
            const fakeTarget = {
                target: {
                    name: name,
                    value:
                        (value.length === 2 || value.length === 5) &&
                        value.length > data[name].length
                            ? `${value}.`
                            : value
                }
            };
            handleChange(fakeTarget);
        }
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        validateBySubmit();
        if (isValid) {
            const newTask = {
                projectId: projectId,
                created_at: Date.now(),
                title: data.title,
                id: `${Date.now() + Math.ceil(Math.random())}`,
                description: data.description
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
                    style={{ marginBottom: "15px" }}
                    onChange={handleChange}
                    error={errors.title}
                />
                <TextField
                    label="Описание задачи"
                    name="description"
                    value={data.description}
                    style={{ marginBottom: "15px" }}
                    onChange={handleChange}
                    error={errors.description}
                />
                <TextField
                    label="Дедлайн"
                    name="deadline"
                    value={data.deadline}
                    onChange={handleDateChange}
                    style={{ marginBottom: "15px" }}
                    error={errors.deadline}
                    placeholder="XX.MM.YYYY"
                />
                <Button style={{ width: "100%" }}>Submit</Button>
            </div>
        </form>
    );
};

export default CreateTaskForm;
