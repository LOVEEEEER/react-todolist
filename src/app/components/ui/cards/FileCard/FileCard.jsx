import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/file-card.module.scss";

const FileCard = ({ file }) => {
    return (
        <div className={styles.file__card}>
            <p>{file.name}</p>
            <a
                href={file.link}
                target="_blank"
                rel="noreferrer"
                className={styles.file__link}
            >
                Ссылка
            </a>
        </div>
    );
};

FileCard.propTypes = {
    file: PropTypes.object
};

export default FileCard;
