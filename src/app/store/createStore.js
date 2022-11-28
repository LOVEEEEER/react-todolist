import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { thunk } from "./middleware/thunk";
import commentsReducer from "./reducers/commentsReducer";
import filesReducer from "./reducers/filesReducer";
import projectsReducer from "./reducers/projectsReducer";
import subTasksReducer from "./reducers/subTasksReducer";
import tasksReducer from "./reducers/tasksReducer";

const middleWareEnchancer = applyMiddleware(thunk);

const rootReducer = combineReducers({
    tasks: tasksReducer,
    subTasks: subTasksReducer,
    projects: projectsReducer,
    comments: commentsReducer,
    files: filesReducer
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
