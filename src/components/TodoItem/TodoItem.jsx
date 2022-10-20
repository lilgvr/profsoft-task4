import { Link } from "react-router-dom";
import { RemoveButton } from "./RemoveButton";
import styles from "./TodoItem.module.scss";

export const TodoItem = ({ id, title }) => {
    return (
        <div
            className={ styles.todoItem }
            title={ `Todo ${ id }` }
        >
            <Link to={ `todo/${ id }` }>
                { title }
            </Link>
            <RemoveButton id={ id }/>
        </div>
    )
}
