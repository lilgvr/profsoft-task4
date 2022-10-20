import React from 'react';
import { Link } from "react-router-dom";
import styles from "./HomeButton.module.scss";

export const HomeButton = () => {
    return (
        <div className={ styles.homeButton }>
            <Link to="/"/>
        </div>
    );
}
