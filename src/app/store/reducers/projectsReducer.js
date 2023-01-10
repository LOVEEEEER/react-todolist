import projectsService from "../../services/projects.service";
import {
    created,
    received,
    removed,
    requested,
    requestFailed
} from "../actions/projects";
import {
    projectCreated,
    projectRemoved,
    projectsReceived,
    projectsRequested,
    projectsRequestFailed
} from "../actionTypes/projectsTypes";

const intitialState = {
    entities: [],
    isLoading: true,
    error: null
};

const projectsReducer = (state = intitialState, action) => {
    switch (action.type) {
        case projectsRequested:
            return { ...state, isLoading: true };
        case projectsReceived:
            return {
                ...state,
                isLoading: false,
                entities: action.payload
            };
        case projectsRequestFailed:
            return { ...state, error: action.payload };
        case projectCreated: {
            const newArray = [...state.entities];
            newArray.push(action.payload);
            return { ...state, entities: newArray };
        }
        case projectRemoved: {
            const newArray = [...state.entities].filter(
                (project) => project.id !== action.payload
            );
            return { ...state, entities: newArray };
        }
        default:
            return state;
    }
};

export const loadProjects = () => async (dispatch) => {
    dispatch(requested());
    try {
        const data = await projectsService.fetchAll();
        if (data) {
            dispatch(received(data.content));
        } else {
            dispatch(received([]));
        }
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const createProject = (data) => async (dispatch) => {
    try {
        await projectsService.create(data.id, data);
        dispatch(created(data));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const removeProject = (id) => async (dispatch) => {
    try {
        await projectsService.remove(id);
        dispatch(removed(id));
    } catch (error) {
        dispatch(requestFailed(error.message));
    }
};

export const getProjectById = (id) => (state) => {
    return state.projects.entities.find((project) => project.id === id);
};

export const getProjects = () => (state) => state.projects.entities;

export const getIsLoading = () => (state) => state.projects.isLoading;

export default projectsReducer;
