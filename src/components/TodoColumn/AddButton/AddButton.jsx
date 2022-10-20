import React from 'react';
import styles from "./AddButton.module.scss";

export const AddButton = ({ onClick }) => {
    return (
        <div
            className={ styles.addButton }
            onClick={ onClick }
        >
            <div></div>
        </div>
    );
}
