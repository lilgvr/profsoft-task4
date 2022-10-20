import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Todo.module.scss";

export const Todo = () => {
    const { todos } = useSelector(state => state.todos);
    const [currentTodo, setCurrentTodo] = useState();
    const { id } = useParams();

    useEffect(() => {
        setCurrentTodo(todos?.find(todo => todo.id === +id));
    }, [id, todos]);

    return (
        <div className={ styles.todo }>
            <div className={ styles.todoHeader }>
                <h3>Todo { id }</h3>
            </div>
            {
                currentTodo &&
                <div className={ styles.todoContent }>

                </div>
            }
        </div>
    )
}
