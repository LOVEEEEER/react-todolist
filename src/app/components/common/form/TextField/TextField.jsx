import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/text-field.module.scss";

const TextField = ({ type, name, onChange, value, label, error, ...rest }) => {
    return (
        <div className={styles.text_field_block}>
            <label className={styles.text_label} htmlFor={name}>
                {label}
            </label>
            <br />
            <input
                className={styles.text_field}
                id={name}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                {...rest}
            />
            {error && <p className={styles.text_error}>{error}</p>}
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string
};

export default TextField;
