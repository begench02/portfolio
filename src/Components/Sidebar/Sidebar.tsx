import { NavLink } from 'react-router-dom';
// Components
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ForumIcon from '@mui/icons-material/Forum';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Styles
import styles from './Sidebar.module.css';

export const Sidebar = () => {
    
    return (
        <div className={styles.main_block}>
            <div className={styles.lightbulb_block}> <LightbulbIcon /> </div>
            <div className={styles.sections_block}>
                <div className={styles.navbar}>
                    <NavLink className={(navData) => navData.isActive ? styles.active_route : ''} to='/home'> <div> <HomeIcon /> </div> </NavLink>
                    <NavLink className={(navData) => navData.isActive ? styles.active_route : ''} to='/about'> <div> <PersonIcon /> </div> </NavLink>
                    <NavLink className={(navData) => navData.isActive ? styles.active_route : ''} to='/portfolio'> <div> <BusinessCenterIcon /> </div> </NavLink>
                    <NavLink className={(navData) => navData.isActive ? styles.active_route : ''} to='/contacts'> <div> <ForumIcon /> </div> </NavLink>
                    </div>
                </div>
        </div>
    );
};

// 