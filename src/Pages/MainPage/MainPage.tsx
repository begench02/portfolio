//@ts-ignore
import { ImageBlock } from './ImageBlock/ImageBlock';
//@ts-ignore
import styles from './MainPage.module.css';

export const MainPage = () => {
    return (
        <div className={styles.main_block}>
            <ImageBlock />
        </div>
    );
}