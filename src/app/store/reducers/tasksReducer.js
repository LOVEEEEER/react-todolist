import { received, requested } from "../actions/tasks";
import { tasksRequested, tasksReceived } from "../actionTypes/tasksTypes";
import { fetchTasks } from "../../api/tasks";

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

export const getTasks = () => (state) => state.tasks.entities;
export const getIsLoading = () => (state) => state.tasks.isLoading;

export default tasksReducer;
