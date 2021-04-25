import React from 'react'
import { FiHome } from 'react-icons/fi';
import { FaBlogger } from "react-icons/fa";
import {FcAbout } from "react-icons/fc";
import {RiHospitalFill } from "react-icons/ri";
import { BsMoon } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

const Navbar = () => {
    const [isDark, setIsDark] = React.useState(false)
    return (
        <>
            <style jsx global>{`
                body {
                    background: ${isDark ? "darkslategray" : "antiquewhite"};
                }
            `}
            </style>
            <div style={{ width: "100%", display: "flex", flexDirection: "row", padding: "1%", backgroundColor: "rgb(246,246,247)" }}>
                <div style={{ fontFamily: "monospace", fontWeight: "600", marginTop: "15px", fontSize: "14px", textAlign: "left" }}>
                    COVID19<br />
                    <span style={{ color: "grey" }}>INDIA</span>
                </div>
                <h3 style={{ display: "flex", fontSize: "22px", cursor: "pointer", alignItems: "center", gap: "20px" }}><FiHome size="24px" /> Home</h3>
                <h3 style={{ display: "flex", fontSize: "22px", cursor: "pointer", alignItems: "center", gap: "20px" }}><FaBlogger size="24px" /> Blog</h3>
                <h3 style={{ display: "flex", fontSize: "22px", cursor: "pointer", alignItems: "center", gap: "20px" }}><FcAbout size="24px" /> About</h3>
                <h3 style={{ display: "flex", fontSize: "22px", cursor: "pointer", alignItems: "center", gap: "20px" }}><RiHospitalFill size="24px" /> Hospitals</h3>
                <button onClick={() => setIsDark(!isDark)}>{ !isDark ? <BsMoon/> : <BiMoon/>}</button>
            </div>
        </>
    )
}

export { Navbar };