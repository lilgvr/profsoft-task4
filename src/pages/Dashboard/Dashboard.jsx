import { useCallback, useMemo } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";
import { TodoColumn } from "../../components/TodoColumn";
import { TodoItem } from "../../components/TodoItem";
import { TODO_STATUS_TYPES as statuses } from "../../utils/constants";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
    let { todos } = useSelector(state => state.todos);

    const prepareTodos = useCallback(status => todos?.filter(
            todo => todo.status === status,
        ).map(
            todo =>
                <TodoItem
                    key={ todo.id }
                    id={ todo.id }
                    title={ todo.title }
                    status={ todo.status }
                />,
        ),
        [todos],
    );

    const columns = useMemo(
        () => Object.values(statuses).map(status =>
            <TodoColumn status={ status } key={ status }>
                { prepareTodos(status) }
            </TodoColumn>,
        ),
        [prepareTodos],
    )

    return (
        <div className={ styles.dashboard }>
            <DndProvider backend={ HTML5Backend }>
                { columns }
            </DndProvider>
        </div>
    )
}
