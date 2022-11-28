import {
    fileCreated,
    filesReceived,
    filesRequested,
    filesRequestFailed
} from "../actionTypes/filesTypes";

export const requested = (payload) => {
    return {
        type: filesRequested,
        payload
    };
};

export const requestFailed = (payload) => {
    return {
        type: filesRequestFailed,
        payload
    };
};

export const received = (payload) => {
    return {
        type: filesReceived,
        payload
    };
};

export const created = (payload) => {
    return {
        type: fileCreated,
        payload
    };
};

export default {
    requested,
    requestFailed,
    received
};
