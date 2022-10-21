import React from "react";
import { useActions } from "../../hooks";
import { BUTTON_TYPES, LOCAL_STORAGE_KEY as storageKey } from "../../utils/constants";
import { Button } from "../Button";
import styles from "./Header.module.scss";

export const Header = ({ initialTodos }) => {
    const { setTodos } = useActions();

    const handleReloadClick = () => {
        localStorage.removeItem(storageKey);
        setTodos(initialTodos);
    }

    return (
        <header className={ styles.header }>
            <Button
                imageName="home"
                type={ BUTTON_TYPES.LINK }
            />
            <h1>Kanban</h1>
            <Button
                imageName="reload"
                type={ BUTTON_TYPES.DEFAULT }
                onClick={ handleReloadClick }
            />
        </header>
    );
}
