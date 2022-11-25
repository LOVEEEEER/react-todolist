import { useEffect, useState } from "react";
import { validator } from "../utils/validator";

export const useForm = (initialState, config) => {
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (config) {
            validate();
        }
    }, [data]);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validate = () => {
        const errors = validator(data, config);
        const errorsUser = {};
        Object.keys(data).forEach((item) => {
            if (errors[item] && data[item].toString().length > 0) {
                errorsUser[item] = errors[item];
            }
        });
        setErrors(errorsUser);
        return Object.keys(errors).length === 0;
    };
    const validateBySubmit = () => {
        const errors = validator(data, config);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            setData(initialState);
        }
        return Object.keys(errors).length === 0;
    };
    return {
        handleChange,
        validate,
        data,
        validateBySubmit,
        errors
    };
};
