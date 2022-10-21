import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks";
import { DND_TYPES } from "../../utils/constants";
import { Button } from "../Button";
import styles from "./TodoItem.module.scss";

export const TodoItem = ({ id, title, status }) => {
    const { removeTodo, dragTodo } = useActions();

    const [{ isDragging }, drag] = useDrag(() => ({
        type: DND_TYPES.TODO,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (dropResult.name === status) return;

            if (dropResult) dragTodo({
                id, title, status: dropResult.name,
            })
        },
    }));

    const handleClick = () => {
        removeTodo(id);
    }

    return (
        <div
            className={ isDragging ? styles.todoItemDraggable : styles.todoItem }
            ref={ drag }
        >
            <Link
                to={ `todo/${ id }` }
                title={ `Todo ${ id }` }
            >
                { title }
            </Link>

            <Button
                imageName="remove"
                onClick={ handleClick }
                type="DEFAULT"
                style={ {
                    width: '30px', height: '30px', margin: '20px 0',
                } }
            />
        </div>
    )
}
