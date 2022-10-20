import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { useActions } from "../../hooks";
import { Button } from "../Button";
import styles from "./TodoColumn.module.scss";

export const TodoColumn = ({ status, children }) => {
    const { todos } = useSelector(state => state.todos);
    const [isAdding, setIsAdding] = useState(false);
    const inputCtr = useRef(null);
    const inputRef = useRef(null);
    const { addTodo } = useActions();

    const handleAddButtonClick = () => {
        setIsAdding(!isAdding);
        inputRef.current.value = '';
    }

    const handleSubmitClick = () => {
        if (!inputRef.current.value) return;

        const payload = {
            id: todos.length + 1,
            title: inputRef.current.value.trim(),
            status,
        }

        inputRef.current.value = '';
        inputRef.current.focus();
        addTodo(payload);
    }

    useEffect(() => {
        if (isAdding) inputRef.current.focus();
    }, [isAdding]);

    return (
        <div className={ styles.todoColumn }>
            <div className={ styles.todoColumnHeader }>
                <h3>
                    { status }
                </h3>

                <Button
                    imageName="plus"
                    onClick={ handleAddButtonClick }
                    type="DEFAULT"
                >
                    <div></div>
                </Button>
            </div>
            <div
                className={ isAdding ? styles.todoColumnInput : styles.todoColumnInputHidden }
                ref={ inputCtr }
            >
                <div>
                    <label htmlFor="">
                        Title
                    </label>

                    <input
                        type="text"
                        ref={ inputRef }
                    />
                </div>

                <button onClick={ handleSubmitClick }>
                    Add
                </button>
            </div>
            <div className={ styles.todoColumnContent }>
                { children }
            </div>
        </div>
    );
}
