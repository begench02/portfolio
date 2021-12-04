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
            date: '2017-2019',
            title: 'Mathematics - Gujurly nesil',
            text: 'Studied math for 2 years. Covered all school knowledges'
        },
        {
            date: '2018 - 2020',
            title: 'English - Gujurly nesil',
            text: 'Learned english from beginner to advanced level'
        },
        {
            date: '2018-2019',
            title: 'Programming - SoloLearn',
            text: 'Learned base and syntax of programming'
        },
        {
            date: '2020 - ',
            title: 'Computer Science - TSU',
            text: 'Learned Web protocols, encryption, pascal, с, с++'
        },
    ];

    return (
        <div>
            <h2 className={styles.title}>EXPERIENCE & EDUCATION</h2>
            <div className={styles.content_block}>
                {educationBlocksContent.map((educationBlockContent: EducationBlockContentType, index: number) => (
                    <EducationBlockCreate date={educationBlockContent.date} key={index} title={educationBlockContent.title} text={educationBlockContent.text} />
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