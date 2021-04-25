import React from 'react'
import YouTube from 'react-youtube';
import styles from "../Styles/Homepage.module.css";
import { BsMoon } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

const HomePage = () => {
    const [isDark, setIsDark] = React.useState(false)
    return (
        <>
            <style jsx global>{`
                body {
                    background: ${isDark ? "darkslategray" : "antiquewhite"};
                }
            `}</style>
            <button onClick={() => setIsDark(!isDark)}>{ !isDark ? <BsMoon/> : <BiMoon/>}</button>
            <div className={styles.openingWrapper}>
                <div className={styles.openingText}>
                    <h1>Cause</h1>
                    <h1>We Care</h1>
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
            <div className={styles.youtubeWrapper}>
                <h1>Youtube Recommendations on COVID-19</h1>
                <div>
                    <div className={styles.youtube}><YouTube videoId="1APwq1df6Mw"/></div>
                    <div className={styles.youtube}><YouTube videoId="U8r3oTVMtQ0" /></div>
                    <div className={styles.youtube}><YouTube videoId="ZqaPZ3ST1AY" /></div>
                    <div className={styles.youtube}><YouTube videoId="LeK65pc0wrQ"/></div>
                </div>
            </div>
        </>
    )
}

export { HomePage };
