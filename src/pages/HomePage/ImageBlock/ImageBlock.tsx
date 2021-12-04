// Images
import AuthorImage from '../../../images/author.jpg';
// Styles
import styles from './ImageBlock.module.css';

export const ImageBlock = () => {
    return (
        <div className={styles.main_block}>
            <div className={styles.orange_block}></div>
            <img src={AuthorImage} alt='Author' className={styles.image}/>
        </div>
    );
};