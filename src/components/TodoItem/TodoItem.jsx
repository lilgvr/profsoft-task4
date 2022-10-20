import { Link } from "react-router-dom";
import { useActions } from "../../hooks";
import { Button } from "../Button";
import styles from "./TodoItem.module.scss";

export const TodoItem = ({ id, title }) => {
    const { removeTodo } = useActions();

    const handleClick = () => {
        removeTodo(id);
    }

    return (
        <div
            className={ styles.todoItem }
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
