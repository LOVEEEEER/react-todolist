import commentsService from "../../services/comments.service";
import {
    created,
    received,
    requested,
    requestFailed
} from "../actions/comments";
import {
    commentCreated,
    commentsReceived,
    commentsRequested,
    commentsRequestFailed
} from "../actionTypes/commentsTypes";

const initialState = {
    entities: [],
    isLoading: true,
    error: null
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case commentsRequested:
            return { ...state, isLoading: true };
        case commentsRequestFailed:
            return { ...state, error: action.payload };
        case commentsReceived:
            return { ...state, entities: action.payload };
        case commentCreated: {
            const newArray = [...state.entities];
            newArray.push(action.payload);
            return { ...state, entities: newArray };
        }
        default:
            return state;
    }
};

export const loadComments = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await commentsService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const createCommentForTask = (data) => async (dispatch) => {
    try {
        await commentsService.createForTask(data.id, data);
        dispatch(created(data));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getCommentById = (commentId) => (state) => {
    return state.comments.entities.find((comment) => comment.id === commentId);
};

export const getCommentsByTask = (taskId) => (state) => {
    return state.comments.entities.filter(
        (comment) => comment.taskId === taskId
    );
};

export default commentsReducer;
