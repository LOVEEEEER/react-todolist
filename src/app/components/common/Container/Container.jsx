import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/container.module.scss";

const Container = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};

export default Container;
