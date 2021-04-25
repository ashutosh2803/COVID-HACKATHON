import React from "react"
import Footer from "../src/components/Footer"
// import {FiHome } from "react-icons/fi"
// import {FaBlogger} from "react-icons/fa"
// import {FcAbout} from "react-icons/fc"
// import {RiHospitalFill} from "react-icons/ri"
import { HomePage } from "../src/components/HomePage"


const IndexPage = () => {
    return (
        <>
            <style jsx global>
                    {`
                        body {
                            margin:0;
                            padding:0;
                        }
                    `}
            </style>
            <HomePage/>
            <Footer/>
        </>
)}
export default IndexPage