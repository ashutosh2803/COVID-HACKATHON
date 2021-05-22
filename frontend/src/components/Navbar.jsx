import React from 'react'
import { FiHome } from 'react-icons/fi';
import { FaHospital,FaYoutube} from "react-icons/fa";
import {FcAbout } from "react-icons/fc";
import {RiChatNewFill } from "react-icons/ri";
import { BsMoon } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import { MdLocalHospital } from "react-icons/md";
import { IoMdHome } from "react-icons/io"
import { IconContext } from "react-icons"
import styles from "../Styles/Navbar.module.css"
import {Link} from "react-scroll"
const Navbar = () => {
    const [isDark, setIsDark] = React.useState(false)
    
        const style ={
            fontSize:"10px"
        }

        const handleClick = () => {

        }

    return (
        <>
            <style jsx global>{`
                body {
                    background: ${isDark ? "darkslategray" : "antiquewhite"};
                }
            `}
            </style>
            <div className={styles.navContainer}>
                
                <div className={styles.navContainer__logo} style={{ fontFamily: "monospace",cursor:"pointer", fontWeight: "600", fontSize: "20px",}}>
                    COVID19<br />
                    <span style={{ color: "grey" }}>INDIA</span>
                </div>

                <div className={styles.navContainer__tabs}>         
                        <Link className={styles.link} to="home" activeClass="active" smooth={true}><span >
                                <IoMdHome  className="icons" size="23px"/><h3 >Home</h3></span>
                        </Link>       
                        <Link className={styles.link} to="hospital" activeClass="active" smooth={true}><span >
                                <FaHospital className="icons"  size="23px" /> <h3> Hospitals</h3>
                        </span>
                        </Link>
                        <Link className={styles.link} to="doctor" activeClass="active" smooth={true}> <span >
                             <MdLocalHospital className="icons" size="23px" /> <h3>Doctors</h3>
                        </span>
                        </Link>
                        
                        <Link className={styles.link} to="videos" activeClass="active" smooth={true}> <span >
                            <FaYoutube className="icons"  size="23px" /> <h3> Videos</h3>
                        </span>
                        </Link>
                        
                
                </div>
                <div className={styles.navContainer__themeBtn}>
                    <button onClick={() => setIsDark(!isDark)}>{ !isDark ? <BsMoon/> : <BiMoon/>}</button>
                </div>
            </div>
        </>
    )
}

export { Navbar };