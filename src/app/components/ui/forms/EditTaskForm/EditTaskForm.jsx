import React from "react";
import PropTypes from "prop-types";
import Button from "../../../common/Button";
import SelectField from "../../../common/form/SelectField";
import TextField from "../../../common/form/TextField";
import { useForm } from "../../../../hooks/useForm";
import styles from "./styles/edit-task-form.module.scss";
import backArrowIcon from "../../../../assets/svg/back-arrow.svg";
import { getFormFormatDateFromTimestamp } from "../../../../utils/dateService";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../store/reducers/tasksReducer";
import { validatorConfig } from "./validatorConfig";

const EditTaskForm = ({ task, toggleContent }) => {
    const dispatch = useDispatch();
    const { data, handleChange, errors, handleDateChange, deadLine } = useForm(
        {
            title: task.title,
            description: task.description,
            deadline: task.deadline,
            priority: task.priority
        },
        validatorConfig,
        getFormFormatDateFromTimestamp(task.deadline)
    );
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            const updatedTask = {
                ...task,
                ...data
            };
            dispatch(updateTask(updatedTask));
            toggleContent("info");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
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
                />
                <Button style={{ width: "100%" }}>Редактировать</Button>
            </div>
        </form>
    );
};

EditTaskForm.propTypes = {
    task: PropTypes.object.isRequired,
    toggleContent: PropTypes.func.isRequired
};

export default EditTaskForm;
