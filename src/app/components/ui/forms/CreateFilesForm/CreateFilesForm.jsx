import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import { createFile } from "../../../../store/reducers/filesReducer";
import Button from "../../../common/Button";
import TextField from "../../../common/form/TextField";
import { validatorConfig } from "./validatorConfig";
import backArrowIcon from "../../../../assets/svg/back-arrow.svg";
import styles from "./styles/attached-files.module.scss";

const CreateFilesForm = ({ taskId, toggleContent }) => {
    const dispatch = useDispatch();
    const { data, handleChange, errors } = useForm(
        { name: "", link: "" },
        validatorConfig
    );
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            const newLink = {
                id: `${Date.now() + Math.ceil(Math.random())}`,
                name: data.name,
                link: data.link,
                taskId: taskId
            };
            dispatch(createFile(newLink));
        }
    };
    return (
        <form onSubmit={handleSubmit}>
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
                name="name"
                value={data.name}
                onChange={handleChange}
                label="Назване"
                placeholder="макет"
                error={errors.name}
            />
            <TextField
                name="link"
                value={data.link}
                onChange={handleChange}
                label="Ссылка"
                placeholder="https://ссылка.com"
                error={errors.link}
            />
            <Button>Сохранить</Button>
        </form>
    );
};

CreateFilesForm.propTypes = {
    taskId: PropTypes.string.isRequired,
    toggleContent: PropTypes.func.isRequired
};

export default CreateFilesForm;
