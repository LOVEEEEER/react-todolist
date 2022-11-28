import React from "react";
import PropTypes from "prop-types";
import FileCard from "../cards/FileCard";
import styles from "./styles/files-list.module.scss";

const FilesList = ({ files }) => {
    return (
        <ul className={styles.files__list}>
            {files.map((file) => (
                <FileCard key={file.id} file={file} />
            ))}
        </ul>
    );
};

FilesList.propTypes = {
    files: PropTypes.array.isRequired
};

export default FilesList;
