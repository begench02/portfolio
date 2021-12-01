// Components
import { ImageBlock } from './ImageBlock/ImageBlock';
import { TextBlock } from './TextBlock/TextBlock';
// Styles
import styles from './HomePage.module.css';

export const HomePage = () => {
    return (
        <div className={styles.main_block}>
            <ImageBlock />
            <TextBlock />
        </div>
    );
}