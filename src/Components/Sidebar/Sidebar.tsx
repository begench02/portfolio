// Components
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Styles
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    return (
        <div className={styles.main_block}>
            <LightbulbIcon />
            <div className={styles.sections_block}>
                <div>
                    <div><HomeIcon /></div>
                    <div><WorkIcon /></div>
                    <div><EmailIcon /></div>
                    <div><ForumIcon /></div>
                    <div><AccountCircleIcon /></div>
                    </div>
            </div>
        </div>
    );
};