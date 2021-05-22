import React from 'react'
import ReactPlayer from 'react-player';
import styles from "../Styles/Homepage.module.css";
import { useRouter } from 'next/router';
import { Navbar } from './Navbar';

const HomePage = () => {
    const router = useRouter();
    return (
        <>
            <Navbar />
            <div id="home" className={styles.openingWrapper}>
                <div className={styles.openingText}>
                    <h1>Cause<br/>
                        We Care!</h1>
                    <p>The entire human race there are people dying. If <br />  you care enough for the living Make it a better <br /> place for you and for me.</p>
                </div>
                <img className={styles.openingImg} src="https://image.freepik.com/free-vector/cartoon-globe-wearing-mask-concept-quarantine-home-prevent-coronavirus_68708-1161.jpg" alt="background_img" />
            </div>
            <div className={styles.awarenessWrapper}>
                <img className={styles.awarenessImg} src="https://image.freepik.com/free-vector/symptoms-novel-coronavirus-infographic-white-background-masked-woman-symptoms_277904-5214.jpg" alt="awareness_img" />
                <div className={styles.awarenessBoxes}>
                    <div>
                        <p>Social movement</p>
                        <p>Social Movement by building community awareness to help the people around them.</p>
                    </div>
                    <div>
                        <p>Our Helping Hands</p>
                        <p>Many need our helping hand, let's together we work together to handle this disaster.</p>
                    </div>
                </div>
            </div>
            <div id="hospital" className={styles.mapsWrapper}>
                <div className={styles.mapsDetails}>
                    <h1>Look for Details of Hospitals with Maps</h1>
                    <p>This feature enables users to see hospitals in their area,<br /> also get information regarding <br />Public/Private Ward, Oxygen/Vaccine Availability</p>
                    <button onClick={() => router.push('http://localhost:3002/hospitalNearby')}>Open Maps</button>
                </div>
                <img className={styles.mapsImg} src="https://beyereye.com/wp-content/uploads/2017/08/google-map-background-1900x1170.png" alt="maps_background" />
            </div>
            <div id="doctor" className={styles.videoWrapper}>
                <img className={styles.videoImg} src="videoCall.png" alt="video_background" />
                <div className={styles.videoDetails}>
                    <h1>Take Advice from Doctor's Online</h1>
                    <p>This feature enables users to connect with doctors,<br /> and get remote checkup, <br/> medical prescriptions and suggestions to improve immunity.</p>
                    <button onClick={() => router.push('http://localhost:3002/conference')}>Call Now</button>
                </div>
            </div>
            <div id="videos" className={styles.youtubeWrapper}>
                <h1>Youtube Recommendations on COVID-19</h1>
                <div>
                <div className={styles.youtube}><ReactPlayer url="https://www.youtube.com/watch?v=lD01ItAGvzQ"/></div>
                    <div className={styles.youtube}><ReactPlayer url="https://www.youtube.com/watch?v=U8r3oTVMtQ0" /></div>
                    <div className={styles.youtube}><ReactPlayer url="https://www.youtube.com/watch?v=ZqaPZ3ST1AY" /></div>
                    <div className={styles.youtube}><ReactPlayer url="https://www.youtube.com/watch?v=LeK65pc0wrQ" /></div>

                </div>
            </div>
        </>
    )
}

export { HomePage };
