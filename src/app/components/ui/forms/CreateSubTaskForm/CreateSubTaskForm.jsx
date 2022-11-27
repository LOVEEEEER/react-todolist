import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import {
    createSubTask,
    getSubTaskOfTaskLength
} from "../../../../store/reducers/subTasksReducer";
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
            deadLine: "",
            priority: ""
        },
        validatorConfig
    );
    const isValid = Object.keys(errors).length === 0;

    const subTasksOfTaskLength = useSelector(getSubTaskOfTaskLength());

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            const newSubTask = {
                taskId,
                created_at: Date.now(),
                title: data.title,
                id: `${Date.now() + Math.ceil(Math.random())}`,
                description: data.description,
                priority: data.priority,
                status: "queue",
                index: subTasksOfTaskLength + 1
            };

            dispatch(createSubTask(newSubTask));
            toggleContent("info");
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

CreateSubTaskForm.propTypes = {
    taskId: PropTypes.string.isRequired,
    toggleContent: PropTypes.func.isRequired
};

export default CreateSubTaskForm;
