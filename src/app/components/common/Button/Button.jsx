import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/button.module.scss";

const Button = ({ children, color, ...rest }) => {
    const getButtonColor = () => {
        switch (color) {
            case "success":
                return "rgb(123, 220, 123)";
            case "danger":
                return "rgb(248, 80, 80)";
            default:
                return "#3b37fe";
        }
    };
    return (
        <button
            className={styles.button}
            {...rest}
            style={{ backgroundColor: getButtonColor() }}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: ""
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired,
    color: PropTypes.string.isRequired
};

export default Button;
