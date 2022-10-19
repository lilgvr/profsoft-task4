import React from 'react';
import { useActions } from "../../../hooks";
import styles from "./AddButton.module.scss";

const AddButton = ({ status }) => {
    const { addTodo } = useActions();

    const handleClick = () => {

    }

    return (
        <div
            className={ styles.addButton }
            onClick={ handleClick }
        >
            <div></div>
        </div>
    );
}

export default AddButton;
