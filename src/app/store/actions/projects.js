import {
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

export default {
    requested,
    received
};
