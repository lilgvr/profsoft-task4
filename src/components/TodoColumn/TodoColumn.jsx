import React, { useEffect, useRef, useState } from 'react';
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks";
import { BUTTON_TYPES, DND_TYPES } from "../../utils/constants";
import { Button } from "../Button";
import styles from "./TodoColumn.module.scss";

export const TodoColumn = ({ status, children }) => {
    const { todos } = useSelector(state => state.todos);
    const [isAdding, setIsAdding] = useState(false);
    const inputCtr = useRef(null);
    const inputRef = useRef(null);
    const { addTodo } = useActions();

    const [, drop] = useDrop(() => ({
        accept: DND_TYPES.TODO,
        drop: () => ({
            name: status,
        }),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }))

    useEffect(() => {
        if (isAdding) inputRef.current.focus();
    }, [isAdding]);

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

    return (
        <div
            className={ styles.todoColumn }
            ref={ drop }
        >
            <div className={ styles.todoColumnHeader }>
                <h3>
                    { status }
                </h3>

                <Button
                    imageName="plus"
                    onClick={ handleAddButtonClick }
                    type={ BUTTON_TYPES.DEFAULT }
                    title="Add todo"
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
            <div className={ `${ styles.todoColumnContent } ${ isAdding ? styles.todoColumnContentAdding : '' }` }>
                { children }
            </div>
        </div>
    );
}
