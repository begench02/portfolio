//@ts-ignore
import { ImageBlock } from './ImageBlock/ImageBlock';
//@ts-ignore
import styles from './MainPage.module.css';
import { TextBlock } from './TextBlock/TextBlock';

export const MainPage = () => {
    return (
        <div className={styles.main_block}>
            <ImageBlock />
            <TextBlock />
        </div>
    );
}