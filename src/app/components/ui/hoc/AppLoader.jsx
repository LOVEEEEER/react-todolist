import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loadProjects } from "../../../store/reducers/projectsReducer";
import { loadTasks } from "../../../store/reducers/tasksReducer";
import { loadSubTasks } from "../../../store/reducers/subTasksReducer";
import { loadComments } from "../../../store/reducers/commentsReducer";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProjects());
        dispatch(loadTasks());
        dispatch(loadSubTasks());
        dispatch(loadComments());
    }, []);
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};

export default AppLoader;
