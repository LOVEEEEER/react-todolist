import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/modal.module.scss";

const Modal = ({ active, setActive, children }) => {
    return (
        <div
            className={`${styles.modal} ${active ? styles.active : ""}`}
            onClick={() => setActive(false)}
        >
            <div
                className={`${styles.modal__content} ${
                    active ? styles.active : ""
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};

export default Modal;
