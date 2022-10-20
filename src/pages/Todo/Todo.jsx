import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { useActions } from "../../hooks";
import { TODO_STATUS_TYPES as statuses } from "../../utils/constants";
import styles from "./Todo.module.scss";

export const Todo = () => {
    const { todos } = useSelector(state => state.todos);
    const [currentTodo, setCurrentTodo] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);
    const selectRef = useRef(null);
    const navigate = useNavigate();
    const { removeTodo, updateTodo } = useActions();
    const { id } = useParams();

    const findCurrentTodo = useCallback(() => {
        console.log(todos)
        setCurrentTodo(todos?.find(todo => todo.id === +id));
    }, [id, todos])

    useEffect(() => {
        findCurrentTodo();

        if (isEditing) {
            inputRef.current?.focus();
            inputRef.current.value = currentTodo?.title;
            selectRef.current.value = currentTodo?.status;
        }
    }, [currentTodo, findCurrentTodo, isEditing]);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    }

    const handleRemoveClick = () => {
        removeTodo(id);
        navigate("/");
    }

    const handleSubmitClick = () => {
        if (!inputRef.current.value) return;

        const payload = {
            id: +id,
            status: selectRef.current.value,
            title: inputRef.current.value,
        }

        updateTodo(payload);

        setIsEditing(false);
    }

    return (
        <div className={ styles.todo }>
            <div className={ styles.todoHeader }>
                <h3>
                    Todo { id }
                </h3>

                <div>
                    <Button
                        imageName="edit"
                        type="DEFAULT"
                        onClick={ handleEditClick }
                    />
                    <Button
                        imageName="remove"
                        type="DEFAULT"
                        onClick={ handleRemoveClick }
                    />
                </div>

            </div>

            {
                currentTodo &&
                <div className={ styles.todoContent }>
                    <p>
                        Id: { id }
                    </p>

                    <p>
                        Status:&nbsp;
                        {
                            isEditing ? (
                                <select ref={ selectRef }>
                                    {
                                        Object.values(statuses).map(status =>
                                            <option value={ status } key={ status }>
                                                { status }
                                            </option>,
                                        )
                                    }
                                </select>
                            ) : currentTodo?.status
                        }
                    </p>

                    <div>
                        <p>Title:&nbsp;</p>
                        {
                            isEditing ? (
                                <div>
                                    <input type="text" ref={ inputRef }/>
                                    <button onClick={ handleSubmitClick }>
                                        Save
                                    </button>
                                </div>
                            ) : <p>{ currentTodo?.title }</p>
                        }
                    </div>
                </div>
            }
        </div>
    )
}
