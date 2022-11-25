import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    getIsLoading,
    getProjects
} from "../../../store/reducers/projectsReducer";
import Button from "../../common/Button";
import styles from "./styles/projects-list-page.module.scss";

const ProjectsListPage = () => {
    const projects = useSelector(getProjects());
    const projectsLoading = useSelector(getIsLoading());

    if (projectsLoading) {
        return "loading...";
    }
    return (
        <main className={styles.projects__page}>
            <ul className={styles.projects__list}>
                {projects.map((project) => (
                    <li className={styles.projects__item} key={project.id}>
                        <Link
                            to={`/projects/${project.id}`}
                            className={styles.projects__name}
                        >
                            {project.name}
                        </Link>
                        <Button>Delete</Button>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default ProjectsListPage;
