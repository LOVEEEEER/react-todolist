import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProjectById } from "../../../store/reducers/projectsReducer";
import { getTasksByProjectId } from "../../../store/reducers/tasksReducer";
import { displayDate } from "../../../utils/dateService";
import Button from "../../common/Button";
import styles from "./styles/project-page.module.scss";

const ProjectPage = () => {
    const { projectId } = useParams();
    const project = useSelector(getProjectById(projectId));
    const tasks = useSelector(getTasksByProjectId(projectId));
    if (project && tasks) {
        return (
            <main className={styles.project__page}>
                <div className={styles.project__head}>
                    <div className={styles.project_head_text}>
                        <p>Название проекта: {project.name}</p>
                        <p>Проект создан: {displayDate(project.created_at)}</p>
                    </div>
                    <Button>Создать таск</Button>
                </div>

                <ul className={styles.project__tasks_list}>
                    {tasks.length > 0
                        ? tasks.map((task) => (
                              <li
                                  key={task.id}
                                  className={styles.project__task_item}
                              >
                                  <div className={styles.project__task_card}>
                                      <div
                                          className={
                                              styles.project__task_text_block
                                          }
                                      >
                                          <h3
                                              className={
                                                  styles.project__task_title
                                              }
                                          >
                                              {task.name}
                                          </h3>
                                          <p
                                              className={
                                                  styles.project__task_created_at
                                              }
                                          >
                                              Дата создания:{" "}
                                              {displayDate(task.created_at)}
                                          </p>
                                          <p
                                              className={
                                                  styles.project__task_description
                                              }
                                          >
                                              Описание: {task.description}
                                          </p>
                                      </div>
                                      <Button>Delete</Button>
                                  </div>
                              </li>
                          ))
                        : "Список тасков пуст"}
                </ul>
            </main>
        );
    }
    return "loading...";
};

export default ProjectPage;
