// Components
import WorkIcon from '@mui/icons-material/Work';
// Styles
import styles from './Education.module.css';

const EducationBlockCreate = (props: any) => {
    return (
        <div className={styles.education_block}>
            <div className={styles.icon_block}>
                <WorkIcon style={{color: '#fff'}}/>
            </div>
            <div>
                <div className={styles.title_block}>
                    <p>{props.date}</p>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
};

export const Education = () => {
    const educationBlocksContent: EducationBlockContentType[] = [
        {
            date: '2018-PRESENT',
            title: 'WEB DEVELOPER - ENVATO',
            text: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
        },
        {
            date: '2013 - 2018',
            title: 'UI/UX DESIGNER - THEMEFOREST',
            text: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
        },
        {
            date: '2005-2013',
            title: 'CONSULTANT - VIDEOHIVE',
            text: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
        },
        {
            date: '2015',
            title: 'ENGENEERING DEGREE - OXFORD UNIVERSITY',
            text: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
        },
    ];

    return (
        <div>
            <h2 className={styles.title}>EXPERIENCE & EDUCATION</h2>
            <div className={styles.content_block}>
                {educationBlocksContent.map((educationBlockContent: EducationBlockContentType) => (
                    <EducationBlockCreate date={educationBlockContent.date} title={educationBlockContent.title} text={educationBlockContent.text} />
                ))}
            </div>
        </div>
    );
}

type EducationBlockContentType = {
    date: string;
    title: string;
    text: string;
}