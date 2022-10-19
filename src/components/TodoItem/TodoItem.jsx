import styles from "./TodoItem.module.scss";

export const TodoItem = ({ id, title }) => {
    return (
        <div
            className={ styles.todoItem }
            title={ `Todo ${ id }` }
        >
            <p>
                { title }
            </p>
        </div>
    )
}
