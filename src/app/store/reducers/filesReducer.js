import filesService from "../../services/files.service";
import { created, received, requested, requestFailed } from "../actions/files";
import {
    fileCreated,
    filesReceived,
    filesRequested,
    filesRequestFailed
} from "../actionTypes/filesTypes";

const intitialState = {
    entities: [],
    isLoading: true,
    error: null
};

const filesReducer = (state = intitialState, action) => {
    switch (action.type) {
        case filesRequested:
            return { ...state, isLoading: true };
        case filesRequestFailed:
            return { ...state, error: action.payload };
        case filesReceived:
            return { ...state, entities: action.payload };
        case fileCreated: {
            const newArray = [...state.entities];
            newArray.push(action.payload);
            return { ...state, entities: newArray };
        }
        default:
            return state;
    }
};

export const loadFiles = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await filesService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const createFile = (data) => async (dispatch) => {
    try {
        await filesService.create(data.id, data);
        dispatch(created(data));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getFilesByTask = (taskId) => (state) => {
    return state.files.entities.filter((file) => file.taskId === taskId);
};

export default filesReducer;
