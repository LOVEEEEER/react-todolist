import {
    projectCreated,
    projectRemoved,
    projectsReceived,
    projectsRequested,
    projectsRequestFailed
} from "../actionTypes/projectsTypes";

export const requested = () => {
    return {
        type: projectsRequested,
        payload: {}
    };
};

export const received = (payload) => {
    return {
        type: projectsReceived,
        payload
    };
};

export const requestFailed = (payload) => {
    return {
        type: projectsRequestFailed,
        payload
    };
};

export const created = (payload) => {
    return {
        type: projectCreated,
        payload
    };
};

export const removed = (payload) => {
    return {
        type: projectRemoved,
        payload
    };
};

export default {
    requested,
    received,
    created,
    requestFailed,
    removed
};
