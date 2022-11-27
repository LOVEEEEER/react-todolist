import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/select-field.module.scss";

const SelectField = ({
    name,
    defaultOption,
    options,
    onChange,
    value,
    label,
    error
}) => {
    return (
        <div className={styles.select_block}>
            <label className={styles.select_label} htmlFor={name}>
                {label}
            </label>
            <br />
            <select
                className={styles.select}
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="" disabled className={styles.select_option}>
                    {defaultOption}
                </option>
                {options.map((option) => (
                    <option
                        value={option.value}
                        key={option.value}
                        className={styles.select_option}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className={styles.text_error}>{error}</p>}
        </div>
    );
};

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    defaultOption: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string
};

export default SelectField;
