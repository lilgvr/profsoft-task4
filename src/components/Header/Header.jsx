import HomeButton from "./HomeButton/HomeButton";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={ styles.header }>
            <HomeButton/>
            <h1>Kanban</h1>
            &nbsp;
        </header>
    );
}
