import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/text-area-field.module.scss";

const TextAreaField = ({ name, onChange, value, label, error, ...rest }) => {
    return (
        <div className={styles.text_field_block}>
            <label className={styles.text_label} htmlFor={name}>
                {label}
            </label>
            <br />
            <textarea
                className={styles.text_field}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                {...rest}
            />
            {error && <p className={styles.text_error}>{error}</p>}
        </div>
    );
};

TextAreaField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string
};

export default TextAreaField;
