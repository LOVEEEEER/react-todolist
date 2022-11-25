import React from "react";
import styles from "./styles/logo.module.scss";
import reactIcon from "../../../assets/svg/react.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.logo} onClick={() => navigate("/projects")}>
            <img src={reactIcon} alt="logo" className={styles.logo_image} />
            <h2 className={styles.logo_text_block}>
                <span className={styles.logo_text_additional}>React </span>
                TodoList
            </h2>
        </div>
    );
};

export default Logo;
