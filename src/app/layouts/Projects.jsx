import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/common/Container";
import Header from "../components/common/Header";

const Projects = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

export default Projects;
