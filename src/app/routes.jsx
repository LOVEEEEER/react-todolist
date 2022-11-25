import React from "react";
import { Navigate } from "react-router-dom";
import ProjectPage from "./components/pages/ProjectPage";
import ProjectsListPage from "./components/pages/ProjectsListPage";
import Projects from "./layouts/Projects";

const routes = [
    {
        path: "projects",
        element: <Projects />,
        children: [
            { path: "", element: <ProjectsListPage /> },
            { path: ":projectId", element: <ProjectPage /> }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/projects" />
    }
];

export default routes;
