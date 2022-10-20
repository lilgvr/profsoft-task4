import React from 'react';
import { useActions } from "../../../hooks";
import styles from "./RemoveButton.module.scss";

export const RemoveButton = ({ id }) => {
    const { removeTodo } = useActions();

    const handleClick = () => {
        console.log(id)
        removeTodo(id);
    }

    return (
        <div
            className={ styles.removeButton }
            onClick={ handleClick }
        >
            <div></div>
        </div>
    );
}
