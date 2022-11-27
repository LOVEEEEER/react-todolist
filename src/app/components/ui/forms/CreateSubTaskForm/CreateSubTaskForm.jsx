import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import { createSubTask } from "../../../../store/reducers/subTasksReducer";
import Button from "../../../common/Button";
import SelectField from "../../../common/form/SelectField";
import TextField from "../../../common/form/TextField";
import styles from "./styles/create-sub-task-form.module.scss";
import backArrowIcon from "../../../../assets/svg/back-arrow.svg";
import { validatorConfig } from "./validatorConfig";

const CreateSubTaskForm = ({ taskId, toggleContent }) => {
    const dispatch = useDispatch();
    const { data, handleChange, errors } = useForm(
        {
            title: "",
            description: "",
            deadline: "",
            priority: ""
        },
        validatorConfig
    );
    const [deadline, setDeadline] = useState("");
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            const newSubTask = {
                taskId,
                created_at: Date.now(),
                title: data.title,
                id: `${Date.now() + Math.ceil(Math.random())}`,
                description: data.description,
                deadline: data.deadline,
                priority: data.priority,
                status: "queue"
            };
            dispatch(createSubTask(newSubTask));
            toggleContent("info");
        }
    };

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

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.create_sub_task_form}>
                <div
                    className={styles.back_arrow_wrap}
                    onClick={() => toggleContent("info")}
                >
                    <img
                        className={styles.back_arrow}
                        src={backArrowIcon}
                        alt="back"
                    />
                    <span className={styles.back_arrow_text}>Назад</span>
                </div>
                <h3 className={styles.create_sub_task_title}>
                    Создание подзадачи
                </h3>
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
                <Button disabled={!isValid} style={{ width: "100%" }}>
                    Submit
                </Button>
            </div>
        </form>
    );
};

CreateSubTaskForm.propTypes = {
    taskId: PropTypes.string.isRequired,
    toggleContent: PropTypes.func.isRequired
};

export default CreateSubTaskForm;
