import React, { useRef, useState } from 'react';
import { useSelector } from "react-redux";
import { useActions } from "../../hooks";
import { AddButton } from "./AddButton";
import styles from "./TodoColumn.module.scss";

const TodoColumn = ({ status, children }) => {
    const { todos } = useSelector(state => state.todos);
    const [isAdding, setIsAdding] = useState(false);
    const inputCtr = useRef(null);
    const inputRef = useRef(null);
    const { addTodo } = useActions();

    const handleAddButtonClick = () => {
        setIsAdding(!isAdding);
    }

    const handleSubmitClick = () => {
        if (!inputRef.current.value) return;

        const payload = {
            id: todos.length + 1,
            title: inputRef.current.value.trim(),
            status,
        }

        inputRef.current.value = '';

        addTodo(payload);
    }

    return (
        <div className={ styles.todoColumn }>
            <div className={ styles.todoColumnHeader }>
                <h3>
                    { status }
                </h3>

                <AddButton onClick={ handleAddButtonClick }/>
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

export default TodoColumn;
