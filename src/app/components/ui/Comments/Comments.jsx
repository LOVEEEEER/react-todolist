import React, { useState } from "react";
import CommentsList from "../CommentsList";
import CreateCommentForm from "../forms/CreateCommentForm/CreateCommentForm";

const Comments = ({ ...rest }) => {
    const [answerOn, setAnswerOn] = useState();
    const handleAnswerOn = (commentId) => {
        setAnswerOn(commentId);
    };
    return (
        <>
            <CreateCommentForm answerOn={answerOn} {...rest} />
            <CommentsList onToggleAnswer={handleAnswerOn} {...rest} />
        </>
    );
};

export default Comments;
