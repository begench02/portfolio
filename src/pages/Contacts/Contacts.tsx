// Components
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { LinkedIn } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
// Styles
import styles from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div>
            <h1 className={styles.title}>GET IN <span className='text_orange'>TOUCH</span></h1>
            <div>
                <h5>DON'T BE SHY!</h5>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div>
                    <MapIcon />
                    <div>
                        <h5>ADDRESS POINT</h5>
                        <p>123 Stree New York City , United States Of America 750065.</p>
                    </div>
                </div>
                <div>
                    <EmailIcon />
                    <div>
                        <h5>ADDRESS POINT</h5>
                        <p>123 Stree New York City , United States Of America 750065.</p>
                    </div>
                </div>
                <div>
                    <LocalPhoneIcon />
                    <div>
                        <h5>ADDRESS POINT</h5>
                        <p>123 Stree New York City , United States Of America 750065.</p>
                    </div>
                </div>
                <div>
                    <TelegramIcon />
                    <LinkedIn />
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};