import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/button.module.scss";

const Button = ({ children, ...rest }) => {
    return (
        <button className={styles.button} {...rest}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};

export default Button;
