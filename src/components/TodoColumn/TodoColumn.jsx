import React from 'react';
import AddButton from "./AddButton/AddButton";
import styles from "./TodoColumn.module.scss";

const TodoColumn = ({ status, children }) => {
    return (
        <div className={ styles.todoColumn }>
            <div className={ styles.todoColumnHeader }>
                <h3>
                    { status }
                </h3>
                <div className={ }></div>
                <AddButton status={ status }/>
            </div>
            <div className={ styles.todoColumnContent }>
                { children }
            </div>
        </div>
    );
}

export default TodoColumn;
