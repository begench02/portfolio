import styles from './TextBlock.module.css';

export const TextBlock = () => {
    return (
        <div className={styles.main_block}>
            <div className={styles.wrapper}>
                <div className={styles.typing_demo}>
                    <h1 className={styles.title}>
                    <span className={styles.name_text}>- I'M BEGENCH GELDYEV</span> <br />
                    </h1>
                </div>
            </div>
            <h2 className={styles.title}>FRONTENT DEVELOPER</h2>
            <p style={{paddingRight: '100px'}}>I'm a Turkmenistan based front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me</p>
        </div>
    );
};


