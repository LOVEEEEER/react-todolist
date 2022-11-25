import { received, removed, requested } from "../actions/tasks";
import {
    tasksRequested,
    tasksReceived,
    taskRemoved
} from "../actionTypes/tasksTypes";
import { fetchTasks, remove } from "../../api/tasks";

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
        case taskRemoved:
            const newArray = state.entities.filter(
                (task) => task.id !== action.payload
            );
            return { ...state, entities: newArray };

        default:
            return state;
    }
};

export const loadTasks = () => async (dispatch) => {
    dispatch(requested());
    const tasks = await fetchTasks();
    dispatch(received(tasks));
};

export const getTasksByProjectId = (projectId) => (state) => {
    return state.tasks.entities.filter((task) => task.projectId === projectId);
};

export const removeTask = (id) => async (dispatch) => {
    await remove();
    dispatch(removed(id));
};

export const getTasks = () => (state) => state.tasks.entities;
export const getIsLoading = () => (state) => state.tasks.isLoading;

export default tasksReducer;
