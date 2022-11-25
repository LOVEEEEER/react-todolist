import {
    taskCreated,
    taskRemoved,
    taskRequestFailed,
    tasksReceived,
    tasksRequested
} from "../actionTypes/tasksTypes";

export const received = (payload) => {
    return {
        type: tasksReceived,
        payload
    };
};

export const requested = (payload) => {
    return {
        type: tasksRequested,
        payload
    };
};

export const removed = (payload) => {
    return {
        type: taskRemoved,
        payload
    };
};

export const requestFailed = (payload) => {
    return {
        type: taskRequestFailed,
        payload
    };
};

export const created = (payload) => {
    return {
        type: taskCreated,
        payload
    };
};

export default {
    received,
    requested,
    created
};
