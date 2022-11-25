import {
    taskRemoved,
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

export default {
    received,
    requested
};
