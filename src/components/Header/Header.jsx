import React from "react";
import { Button } from "../Button";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={ styles.header }>
            <Button
                imageName="home"
                type="LINK"
            />
            <h1>Kanban</h1>
            &nbsp;
        </header>
    );
}
