// Components
import PropTypes from 'prop-types';
import DownloadIcon from '@mui/icons-material/Download';
import { CircularProgress, Typography } from '@mui/material';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Box, height } from '@mui/system';
// Styles
import styles from './AboutPage.module.css';
import { Education } from './Education/Education';


export const AboutPage = () => {
    return (
        <div className={styles.main_block}>
            <div className={styles.title_block}>
                <h1> ABOUT <span style={{color: 'var(--color-orange)'}}> ME </span> </h1>
                <div className={styles.info_block}>
                    <div className={styles.my_info_block}>
                    <h2>PERSONAL INFOS</h2>

                        <div className={styles.personal_info_block}>
                            <div>
                                <p> <span className={styles.gray_text}> First Name: </span> Begench</p>
                                <p> <span className={styles.gray_text}> Age: </span> 19 Years</p>
                                <p> <span className={styles.gray_text}> Freelance: </span> Available</p>
                                <p> <span className={styles.gray_text}> Phone: </span> +99362618814</p>
                                <p> <span className={styles.gray_text}> First Name: </span> Begench</p>
                            </div>
                            <div>
                                <p> <span className={styles.gray_text}> Last Name: </span> Geldyev</p>
                                <p> <span className={styles.gray_text}> Nationality: </span> Turkmenistan</p>
                                <p> <span className={styles.gray_text}> Address: </span> Ashgabat</p>
                                <p> <span className={styles.gray_text}> Email: </span> begenchgeldyev@gmail.com</p>
                                <p> <span className={styles.gray_text}> Languages: </span> Turkmen, Russian, English</p>
                            </div>
                            <button className={styles.download_cv_button}> Download CV <DownloadIcon /> </button>
                        </div>
                    </div>
                    <div className={styles.experience_block}>
                        <div>
                            <h2> 12<sup>+</sup> </h2>
                            <p>-YEARS OF EXPERIENCE</p>
                        </div>
                        <div>
                            <h2> 97<sup>+</sup> </h2>
                            <p>-COMPLETED PROJECTS</p>
                        </div>
                        <div>
                            <h2> 81<sup>+</sup> </h2>
                            <p>-HAPPY CUSTOMERS</p>
                        </div>
                        <div>
                            <h2> 53<sup>+</sup> </h2>
                            <p>-AWARDS WON</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 style={{textAlign: 'center', fontSize: '40px', fontWeight: 'bold'}}> My Skills </h2>
            <div className={styles.skills_progress_block}>
                <div>
                    <CircularProgressbar value={70} styles={buildStyles({
                        rotation: 1.25,
                        pathColor: `orange`
                    })} text={`${50}%`} />
                    <h3>HTML</h3>
                </div>
                <div>
                    <CircularProgressbar value={70} styles={buildStyles({
                    rotation: 1.25,
                    pathColor: `orange`
                    })} text={`${50}%`} />
                    <h3>CSS</h3>
                </div>

                <div>
                    <CircularProgressbar value={70} styles={buildStyles({
                        rotation: 1.25,
                        pathColor: `orange`
                    })} text={`${50}%`} />
                    <h3>JavaScript</h3>
                </div>
                <div>
                    <CircularProgressbar value={70} styles={buildStyles({
                        rotation: 1.25,
                        pathColor: `orange`
                    })} text={`${50}%`} />
                    <h3>JavaScript</h3>
                </div>

                <div>
                    <CircularProgressbar value={70} styles={buildStyles({
                        rotation: 1.25,
                        pathColor: `orange`
                    })} text={`${50}%`} />
                    <h3>JavaScript</h3>
                </div>

                <div>
                    <CircularProgressbar value={70} styles={buildStyles({
                        rotation: 1.25,
                        pathColor: `orange`
                    })} text={`${50}%`} />
                    <h3>JavaScript</h3>
                </div>

                <div>
                    <CircularProgressbar value={70} styles={buildStyles({
                        rotation: 1.25,
                        pathColor: `orange`
                    })} text={`${50}%`} />
                    <h3>React</h3>
                </div>
                <div>
                    <CircularProgressbar value={70} styles={buildStyles({
                        rotation: 1.25,
                        textColor: '#fff',
                        pathColor: `orange`
                    })} text={`${50}%`} />
                    <h3>JavaD</h3>
                </div>
            </div>
            <Education />
        </div>
    );
};