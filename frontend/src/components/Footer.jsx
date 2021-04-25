import React from 'react'
import styles from "../Styles/footer.module.css"
import {FiInstagram} from "react-icons/fi"
import {FaPhoneAlt} from "react-icons/fa"
import {AiFillTwitterSquare,AiOutlineMail,AiFillYoutube,AiFillLinkedin,AiFillFacebook,} from "react-icons/ai"
import Email from './Email'

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <h3 style={{color:"blueviolet"}}>COVID19 INDIA</h3>
            <p style={{color:"grey",}}>We stand with everyone fighting on the frontlines</p>
            <div>
                <span style={{fontSize:"22px",fontWeight:"600"}}>Contact Us</span>
                <div style={{display:"flex",gap:"10px",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>
                    <span><FaPhoneAlt size="16px"/> +91-11-23934046  </span>
                    <span><AiOutlineMail size="16px"/>  ncov2020@cv.com</span>
                </div>
            </div>
            <div>
                <h3>ASK QUESTIONS</h3> 
                <Email/>
            </div>

            <div>
                <p style={{fontSize:"20px",fontWeight:"600"}}>Follow us</p>
                <div className={styles.iconWrapper}>
                    <AiFillFacebook size="35px"/>
                    <AiFillTwitterSquare size="35px"/>
                    <AiFillYoutube size="35px"/>
                    <AiFillLinkedin size="35px"/>
                    <FiInstagram size="35px"/>
                </div>
            </div>
        </div>
    )
}

export default Footer
