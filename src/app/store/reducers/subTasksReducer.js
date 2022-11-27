import subTasksService from "../../services/subTasks.service";
import {
    created,
    received,
    removed,
    requested,
    requestFailed
} from "../actions/subTasks";
import {
    subTaskCreated,
    subTaskRemoved,
    subTasksReceived,
    subTasksRequested,
    subTasksRequestFailed
} from "../actionTypes/subTasksTypes";

const intitialState = {
    entities: [],
    isLoading: true,
    error: null
};

const subTasksReducer = (state = intitialState, action) => {
    switch (action.type) {
        case subTasksRequested:
            return { ...state, isLoading: true };
        case subTasksReceived:
            return { ...state, entities: action.payload, isLoading: false };
        case subTasksRequestFailed:
            return { ...state, error: action.payload };
        case subTaskRemoved: {
            const newArray = state.entities.filter(
                (subTask) => subTask.id !== action.payload
            );
            return {
                ...state,
                entities: newArray
            };
        }
        case subTaskCreated: {
            const newArray = [...state.entities];
            newArray.push(action.payload);
            return { ...state, entities: newArray };
        }
        default:
            return state;
    }
};

export const loadSubTasks = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await subTasksService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const removeSubTask = (id) => async (dispatch) => {
    try {
        await subTasksService.remove(id);
        dispatch(removed(id));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const createSubTask = (data) => async (dispatch) => {
    try {
        await subTasksService.create(data.id, data);
        dispatch(created(data));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getSubTasksByTaskId = (taskId) => (state) => {
    console.log(state, taskId);
    return state.subTasks.entities.filter(
        (subTask) => subTask.taskId === taskId
    );
};

export default subTasksReducer;
