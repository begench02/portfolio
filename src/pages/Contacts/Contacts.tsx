// Components
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { LinkedIn } from '@mui/icons-material';
import TelegramIcon from '@mui/icons-material/Telegram';
import emailjs from 'emailjs-com';
// Styles
import styles from './Contacts.module.css';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


export const Contacts = () => {
    // Local state
    const { register, handleSubmit } = useForm();


    // Functions
    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_cqpxh8s', 'template_q6io8sf', e.target, 'user_BmgP4HAouWdVszlh5e2rM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };
    return (
        <div className={styles.main_block}>
            <h1 className={styles.title}>GET IN <span className='text_orange'>TOUCH</span></h1>
            <div className={styles.content_block}>
                <div className={styles.first_section}>
                    <h5 className={styles.content_title}>DON'T BE SHY!</h5>
                    <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className={styles.location_block}>
                        <LocationOnIcon />
                        <div>
                            <h5>ADDRESS POINT</h5>
                            <p>Ashgabat. Turkmenistan</p>
                        </div>
                    </div>
                    <div className={styles.email_block}>
                        <EmailIcon />
                        <div>
                            <h5>MAIL ME</h5>
                            <p>begenchgeldyev@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.phone_block}>
                        <LocalPhoneIcon />
                        <div>
                            <h5>CALL ME</h5>
                            <p>+99362618814</p>
                        </div>
                    </div>
                    <div className={styles.social_links_icons_block}>
                        <div onClick={() => window.location.href = 'https://t.me/begenchGeldyev'}>
                            <TelegramIcon />
                        </div>
                        {/* <div>
                            <LinkedIn />
                        </div> */}
                    </div>

                </div>
                <form onSubmit={sendEmail} className={styles.second_section}>
                    <TextField className={styles.name_field} {...register('name', {required: true})} label='Your name' InputLabelProps={{style : {color : '#707070'} }}/>
                    <TextField className={styles.email_field} {...register('email', {required: true})} label='Your email' InputLabelProps={{style : {color : '#707070'} }}/>
                    <TextField className={styles.subject_field} {...register('subject', {required: true})} label='Your subject' InputLabelProps={{style : {color : '#707070'} }}/>
                    <textarea placeholder='Your message' {...register('message', {required: true})} rows={4} cols={50} className={styles.message_field}/>
                    <button className={styles.send_message}>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
};