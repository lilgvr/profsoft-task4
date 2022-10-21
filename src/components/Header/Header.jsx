import React from "react";
import { BUTTON_TYPES } from "../../utils/constants";
import { Button } from "../Button";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={ styles.header }>
            <Button
                imageName="home"
                type={ BUTTON_TYPES.LINK }
            />
            <h1>Kanban</h1>
            &nbsp;
        </header>
    );
}
