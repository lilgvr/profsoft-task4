import { Link } from "react-router-dom";
import styles from './TodoItem.module.scss'

export const TodoItem = ({ id, title }) => {
    return (
        <div>
            <p className={ styles.title }>
                { title }
            </p>
            <Link to={ `todo/${ id }` }>
                go to todo
            </Link>
        </div>
    )
}
