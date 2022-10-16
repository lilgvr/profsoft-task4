import { useMemo } from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "../../components/TodoItem/TodoItem";

export const Dashboard = () => {
    const { todos } = useSelector(state => state.todos)

    const todosList = useMemo(() => {
        return todos?.map(todo =>
            <TodoItem
                key={ todo.id }
                id={ todo.id }
                title={ todo.title }
            />,
        );
    }, [todos])

    return (
        <div>
            { todosList }
        </div>
    )
}
