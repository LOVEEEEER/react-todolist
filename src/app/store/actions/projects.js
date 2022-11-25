import {
    projectsReceived,
    projectsRequested
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

export default {
    requested,
    received
};
