import {
    received,
    removed,
    requested,
    requestFailed,
    created,
    updated
} from "../actions/tasks";
import {
    tasksRequested,
    tasksReceived,
    taskRemoved,
    taskRequestFailed,
    taskCreated,
    taskUpdated
} from "../actionTypes/tasksTypes";
import tasksService from "../../services/tasks.service";

const initialState = {
    entities: [],
    isLoading: true
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case tasksRequested:
            return { ...state, isLoading: true };
        case tasksReceived:
            return { ...state, entities: action.payload, isLoading: false };
        case taskRemoved: {
            const newArray = state.entities.filter(
                (task) => task.id !== action.payload
            );
            return { ...state, entities: newArray };
        }
        case taskRequestFailed:
            return { ...state, error: action.payload };
        case taskCreated: {
            const newArray = [...state.entities];
            newArray.push(action.payload);
            return { ...state, entities: newArray };
        }
        case taskUpdated: {
            const newArray = [...state.entities];
            const elementIndex = newArray.findIndex(
                (task) => task.id === action.payload.id
            );
            newArray[elementIndex] = action.payload;
            return { ...state, entities: newArray };
        }
        default:
            return state;
    }
};

export const loadTasks = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await tasksService.fetchAll();
        dispatch(received(content));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getTasksByProjectId = (projectId) => (state) => {
    return state.tasks.entities.filter((task) => task.projectId === projectId);
};

export const removeTask = (id) => async (dispatch) => {
    try {
        await tasksService.delete(id);
        dispatch(removed(id));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const updateTask = (data) => async (dispatch) => {
    try {
        await tasksService.update(data.id, data);
        dispatch(updated(data));
    } catch (error) {
        console.log(error.message);
    }
};

export const getTaskById = (id) => (state) => {
    return state.tasks.entities.find((task) => task.id === id);
};

export const createTask = (task) => async (dispatch) => {
    try {
        await tasksService.create(task.id, task);
        dispatch(created(task));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getTasksOfProjectLength = (projectId) => (state) => {
    const projectTasks = state.tasks.entities.filter(
        (task) => task.projectId === projectId
    );
    return projectTasks.length;
};

export const getTasks = () => (state) => state.tasks.entities;
export const getIsLoading = () => (state) => state.tasks.isLoading;

export default tasksReducer;
