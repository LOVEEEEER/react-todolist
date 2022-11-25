import projectsService from "../../services/projects.service";
import { received, requested, requestFailed } from "../actions/projects";
import {
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

        default:
            return state;
    }
};

export const loadProjects = () => async (dispatch) => {
    dispatch(requested());
    try {
        const { content } = await projectsService.fetchAll();
        dispatch(received(content));
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
