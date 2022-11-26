import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { createTask } from "../../../../store/reducers/tasksReducer";
import Button from "../../../common/Button";
import SelectField from "../../../common/form/SelectField";
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
            deadline: "",
            priority: ""
        },
        validatorConfig
    );

    const [deadline, setDeadline] = useState("");

    const handleDateChange = (e) => {
        const {
            nativeEvent: { data: lastOne },
            target: { name, value }
        } = e;
        if (!Number.isNaN(Number(lastOne)) && value.length < 11) {
            const deadlineVal =
                value.length === 2 || value.length === 5 ? `${value}.` : value;
            setDeadline(deadlineVal);
            const timeStamp = new Date(
                deadlineVal.slice(6, 11),
                Number(deadlineVal.slice(3, 5)) - 1,
                deadlineVal.slice(0, 2)
            ).getTime();
            const fakeEvent = {
                target: {
                    name: name,
                    value: timeStamp
                }
            };
            handleChange(fakeEvent);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateBySubmit();
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            const newTask = {
                projectId: projectId,
                created_at: Date.now(),
                title: data.title,
                id: `${Date.now() + Math.ceil(Math.random())}`,
                description: data.description,
                deadline: data.deadline,
                priority: data.priority
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
                    name="deadline"
                    value={deadline}
                    onChange={handleDateChange}
                    error={errors.deadline}
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
                />
                <Button style={{ width: "100%" }}>Submit</Button>
            </div>
        </form>
    );
};

export default CreateTaskForm;
