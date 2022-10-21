import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./assets/styles/App.module.scss";
import { Header } from "./components/Header";
import { useActions } from "./hooks";
import { Dashboard } from "./pages/Dashboard";
import { Todo } from "./pages/Todo";
import { useGetTodosQuery } from "./store/todos/todos.api";
import { LOCAL_STORAGE_KEY as storageKey } from "./utils/constants";


export const App = () => {
    let { data: todos, isLoading, error } = useGetTodosQuery();
    const { setTodos } = useActions();

    useEffect(() => {
        const storage = localStorage.getItem(storageKey);

        if (storage) {
            setTodos(JSON.parse(storage));
            return;
        }

        if (!isLoading && !error) {
            setTodos(todos);
        }

    }, [error, isLoading, setTodos, todos]);

    return (
        <div className={ styles.container }>
            <Header initialTodos={ todos }/>
            <Routes>
                <Route path="/" element={ <Dashboard/> }/>
                <Route path="/todo/:id" element={ <Todo/> }/>
            </Routes>
        </div>
    );
}
