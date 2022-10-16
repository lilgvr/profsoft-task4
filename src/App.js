import { useGetTodosQuery } from "./store/todos/todos.api";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Todo } from "./pages/Todo";
import { useActions } from "./hooks";
import { useEffect } from "react";


export const App = () => {
    const { data: todos } = useGetTodosQuery()
    const { setTodos } = useActions()

    useEffect(() => {
        setTodos(todos)
    }, [todos])

    return (
        <>
            <Routes>
                <Route path="/" element={ <Dashboard/> }/>
                <Route path="/todo/:id" element={ <Todo/> }/>
            </Routes>
        </>
    );
}
