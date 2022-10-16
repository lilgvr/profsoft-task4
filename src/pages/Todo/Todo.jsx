import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Todo = () => {
    const { id } = useParams()
    const { todos } = useSelector(state => state.todos)
    const [todo, setTodo] = useState()

    useEffect(() => {
        if (todos && todos.length) {
            const todo = todos.find(todo => todo.id === +id)
            setTodo(todo)
        }
    }, [id, todos])

    return (
        <div>

        </div>
    )
}
