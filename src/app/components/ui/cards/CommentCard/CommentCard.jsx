import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/comment-card.module.scss";
import { displayDate } from "../../../../utils/dateService";
import { useSelector } from "react-redux";
import { getCommentById } from "../../../../store/reducers/commentsReducer";

const CommentCard = ({ comment, onToggleAnswer }) => {
    const answerAuthorComment = useSelector(getCommentById(comment.answerOn));
    return (
        <div
            className={styles.comments__card}
            style={{
                backgroundColor: comment.answerOn ? "#fdf6d4" : "#FFFFFF"
            }}
        >
            <div className={styles.comments__card_head}>
                <div className={styles.comments__author_info}>
                    <img
                        className={styles.comments__author_image}
                        src={comment.image}
                        alt="author"
                    />
                    <div className={styles.comments__authors_block}>
                        <div>
                            <span className={styles.comments__author}>
                                {comment.author}
                            </span>
                            <span
                                className={styles.comments__answer}
                                onClick={() => onToggleAnswer(comment.id)}
                            >
                                Ответить
                            </span>
                        </div>
                        {answerAuthorComment && (
                            <p className={styles.comments__answer_ques}>
                                Ответ на мнение от: {answerAuthorComment.author}
                            </p>
                        )}
                    </div>
                </div>
                <span className={styles.comments__created}>
                    {displayDate(comment.created_at)}
                </span>
            </div>
            <p className={styles.comments__text}>{comment.text}</p>
        </div>
    );
};

CommentCard.propTypes = {
    comment: PropTypes.object.isRequired,
    onToggleAnswer: PropTypes.func.isRequired
};

export default CommentCard;
