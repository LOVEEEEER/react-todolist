import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { thunk } from "./middleware/thunk";
import projectsReducer from "./reducers/projectsReducer";
import tasksReducer from "./reducers/tasksReducer";

const middleWareEnchancer = applyMiddleware(thunk);

const rootReducer = combineReducers({
    tasks: tasksReducer,
    projects: projectsReducer
});

export function configureStore() {
    return createStore(
        rootReducer,
        compose(
            middleWareEnchancer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}
