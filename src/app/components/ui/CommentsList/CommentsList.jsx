import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getCommentsByTask } from "../../../store/reducers/commentsReducer";
import styles from "./styles/comments-list.module.scss";
import CommentCard from "../cards/CommentCard";

const CommentsList = ({ taskId, ...rest }) => {
    const comments = useSelector(getCommentsByTask(taskId));

    return (
        <ul className={styles.comments__list}>
            {comments.map((comment) => {
                return (
                    <li key={comment.id} className={styles.comments__item}>
                        <CommentCard comment={comment} {...rest} />
                    </li>
                );
            })}
        </ul>
    );
};

CommentsList.propTypes = {
    taskId: PropTypes.string.isRequired
};

export default CommentsList;
