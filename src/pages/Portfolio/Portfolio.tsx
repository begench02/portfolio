// Components
import portfolioImage from 'images/project.jpg'; 
// Styles
import styles from './Portfolio.module.css';

export const Portfolio = () => {
    return (
        <div className={styles.main_block}>
            <h1>MY <span className='text_orange'>PORTFOLIO</span></h1>
            <div className={styles.content_block}>
                <div> <img className={styles.image} src={portfolioImage}/> </div>
                <div> <img className={styles.image} src={portfolioImage}/> </div>
                <div> <img className={styles.image} src={portfolioImage}/> </div>
                <div> <img className={styles.image} src={portfolioImage}/> </div>
                <div> <img className={styles.image} src={portfolioImage}/> </div>
                <div> <img className={styles.image} src={portfolioImage}/> </div>
            </div>
        </div>
    );
};