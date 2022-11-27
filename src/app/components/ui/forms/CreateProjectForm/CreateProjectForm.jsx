import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useForm } from "../../../../hooks/useForm";
import { createProject } from "../../../../store/reducers/projectsReducer";
import Button from "../../../common/Button";
import TextField from "../../../common/form/TextField";
import { validatorConfig } from "./validatorConfig";

const CreateProjectForm = ({ onClose }) => {
    const dispatch = useDispatch();
    const { data, handleChange, errors } = useForm(
        {
            name: ""
        },
        validatorConfig
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            created_at: Date.now(),
            id: `${Date.now() + Math.ceil(Math.random())}`,
            name: data.name
        };
        dispatch(createProject(newProject));
        onClose();
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Название проекта"
                name="name"
                onChange={handleChange}
                value={data.name}
                error={errors.name}
            />
            <Button>Создать</Button>
        </form>
    );
};

CreateProjectForm.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default CreateProjectForm;
