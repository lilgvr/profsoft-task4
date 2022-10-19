import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import TodoColumn from "../../components/TodoColumn/TodoColumn";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { TODO_STATUS_TYPES as statuses } from "../../utils/constants";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
    const { todos } = useSelector(state => state.todos);

    const prepareTodos = useCallback((status) => {
        todos?.filter(todo => todo.status === status).map(todo =>
            <TodoItem
                key={ todo.id }
                id={ todo.id }
                title={ todo.title }
            />)
    }, [todos]);

    const columns = useMemo(() => Object.values(statuses).map(status =>
        <TodoColumn status={ status } key={ status }>
            { prepareTodos(status) }
        </TodoColumn>,
    ), [prepareTodos])

    return (
        <div className={ styles.dashboard }>
            { columns }
        </div>
    )
}
