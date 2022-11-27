import {
    commentsReceived,
    commentsRequested,
    commentsRequestFailed,
    commentCreated
} from "../actionTypes/commentsTypes";

export const requested = (payload) => {
    return {
        type: commentsRequested,
        payload
    };
};

export const requestFailed = (payload) => {
    return {
        type: commentsRequestFailed,
        payload
    };
};

export const received = (payload) => {
    return {
        type: commentsReceived,
        payload
    };
};

export const created = (payload) => {
    return {
        type: commentCreated,
        payload
    };
};

export default {
    requested,
    received,
    requestFailed
};
