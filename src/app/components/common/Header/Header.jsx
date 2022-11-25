import React from "react";
import Logo from "../Logo";
import styles from "./styles/header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
                <Logo />
                <ul className={styles.header__nav_list}></ul>
            </nav>
        </header>
    );
};

export default Header;
