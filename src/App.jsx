import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { useActions } from "./hooks";
import { Dashboard } from "./pages/Dashboard";
import { Todo } from "./pages/Todo";
import { useGetTodosQuery } from "./store/todos/todos.api";
import styles from "./assets/styles/App.module.scss";


export const App = () => {
    const { data: todos } = useGetTodosQuery()
    const { setTodos } = useActions()

    useEffect(() => {
        setTodos(todos)
    }, [setTodos, todos])

    return (
        <div className={ styles.container }>
            <Header/>
            <Routes>
                <Route path="/" element={ <Dashboard/> }/>
                <Route path="/todo/:id" element={ <Todo/> }/>
            </Routes>
        </div>
    );
}
