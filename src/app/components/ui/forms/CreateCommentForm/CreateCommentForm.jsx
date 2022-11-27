import React, { useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "../../../common/form/TextField";
import { useForm } from "../../../../hooks/useForm";
import TextAreaField from "../../../common/form/TextAreaField/TextAreaField";
import { useDispatch, useSelector } from "react-redux";
import {
    createCommentForTask,
    getCommentById
} from "../../../../store/reducers/commentsReducer";
import Button from "../../../common/Button";

const CreateCommentForm = ({ taskId, answerOn }) => {
    const dispatch = useDispatch();
    const answerComment = useSelector(getCommentById(answerOn));
    const { data, handleChange } = useForm({
        author: "",
        text: ""
    });
    useEffect(() => {
        if (answerComment) {
            const fakeEvent = {
                target: {
                    name: "text",
                    value: answerComment.author + ", "
                }
            };
            handleChange(fakeEvent);
        }
    }, [answerComment]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const comment = {
            text: data.text,
            author: data.author,
            taskId,
            id: `${Date.now() + Math.ceil(Math.random())}`,
            answerOn: answerComment?.id || null,
            image: `https://avatars.dicebear.com/api/avataaars/${(
                Math.random() + 15
            )
                .toString(36)
                .substring(7)}.svg`,
            created_at: Date.now()
        };
        dispatch(createCommentForTask(comment));
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Имя"
                name="author"
                value={data.author}
                placeholder="Иван Иванов"
                onChange={handleChange}
            />
            <TextAreaField
                label="Комментарий"
                name="text"
                value={data.text}
                placeholder="Я считаю..."
                onChange={handleChange}
            />
            <Button>Отправить</Button>
        </form>
    );
};

CreateCommentForm.propTypes = {
    answerOn: PropTypes.string,
    taskId: PropTypes.string.isRequired
};

export default CreateCommentForm;
