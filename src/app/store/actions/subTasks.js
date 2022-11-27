import {
    subTaskCreated,
    subTaskRemoved,
    subTasksReceived,
    subTasksRequested,
    subTasksRequestFailed
} from "../actionTypes/subTasksTypes";

export const requested = (payload) => {
    return {
        type: subTasksRequested,
        payload
    };
};

export const received = (payload) => {
    return {
        type: subTasksReceived,
        payload
    };
};

export const removed = (payload) => {
    return {
        type: subTaskRemoved,
        payload
    };
};

export const requestFailed = (payload) => {
    return {
        type: subTasksRequestFailed,
        payload
    };
};

export const created = (payload) => {
    return {
        type: subTaskCreated,
        payload
    };
};
