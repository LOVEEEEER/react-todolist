import { useEffect, useState } from "react";
import { validator } from "../utils/validator";

export const useForm = (initialState, config, initialDeadLine) => {
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [deadLine, setDeadLine] = useState(initialDeadLine);

    useEffect(() => {
        if (config) {
            validate();
        }
    }, [data]);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const handleDateChange = (e) => {
        const {
            nativeEvent: { data: lastOne, inputType },
            target: { name, value }
        } = e;
        if (inputType === "deleteContentBackward") {
            handleChange({
                target: {
                    name: e.target.name,
                    value: e.target.value
                }
            });
            setDeadLine(e.target.value);
            return;
        }
        if (!Number.isNaN(Number(lastOne)) && value.length < 11) {
            const deadlineVal =
                value.length === 2 || value.length === 5 ? `${value}.` : value;
            const dateSlice = deadlineVal.slice(0, 2);
            const monthSlice = deadlineVal.slice(3, 5);
            if (dateSlice <= 31 && monthSlice <= 12) {
                setDeadLine(deadlineVal);
            }
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
    const validate = () => {
        const errors = validator(data, config);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return {
        handleChange,
        handleDateChange,
        validate,
        data,
        deadLine,
        errors
    };
};
