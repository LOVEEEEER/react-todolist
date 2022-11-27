import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    getIsLoading,
    getProjects,
    removeProject
} from "../../../store/reducers/projectsReducer";
import Button from "../../common/Button";
import Modal from "../../common/Modal";
import CreateProjectForm from "../../ui/forms/CreateProjectForm/CreateProjectForm";
import styles from "./styles/projects-list-page.module.scss";

const ProjectsListPage = () => {
    const [modalActive, setModalActive] = useState(false);
    const dispatch = useDispatch();
    const projects = useSelector(getProjects());
    const projectsLoading = useSelector(getIsLoading());

    if (projectsLoading) {
        return "loading...";
    }

    const handleRemoveProject = (id) => {
        dispatch(removeProject(id));
    };

    return (
        <main className={styles.projects__page}>
            <Button onClick={() => setModalActive(true)}>
                Добавить проект
            </Button>
            <ul className={styles.projects__list}>
                {projects.map((project) => (
                    <li className={styles.projects__item} key={project.id}>
                        <Link
                            to={`/projects/${project.id}`}
                            className={styles.projects__name}
                        >
                            {project.name}
                        </Link>
                        <Button onClick={() => handleRemoveProject(project.id)}>
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
            <Modal active={modalActive} setActive={setModalActive}>
                <CreateProjectForm onClose={() => setModalActive(false)} />
            </Modal>
        </main>
    );
};

export default ProjectsListPage;
