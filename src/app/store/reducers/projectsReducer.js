import { fetchProjects } from "../../api/projects";
import { received, requested } from "../actions/projects";
import {
    projectsReceived,
    projectsRequested
} from "../actionTypes/projectsTypes";

const intitialState = {
    entities: [],
    isLoading: true
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
        default:
            return state;
    }
};

export const loadProjects = () => async (dispatch) => {
    dispatch(requested());
    const projects = await fetchProjects();
    dispatch(received(projects));
};

export const getProjectById = (id) => (state) => {
    return state.projects.entities.find((project) => project.id === id);
};

export const getProjects = () => (state) => state.projects.entities;

export const getIsLoading = () => (state) => state.projects.isLoading;

export default projectsReducer;
