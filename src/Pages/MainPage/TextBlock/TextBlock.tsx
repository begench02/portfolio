import styles from './TextBlock.module.css';

export const TextBlock = () => {
    return (
        <div className={styles.main_block}>
            <h1 className={styles.title}>
                <span className={styles.name_text}>- I'M BEGENCH GELDYEV</span> <br />
                FRONTENT DEVELOPER
            </h1>
            <p>I'm a Tunisian based web designer front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me</p>
        </div>
    );
};