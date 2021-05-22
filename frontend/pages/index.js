import React from "react"
import Footer from "../src/components/Footer"
// import {FiHome } from "react-icons/fi"
// import {FaBlogger} from "react-icons/fa"
// import {FcAbout} from "react-icons/fc"
// import {RiHospitalFill} from "react-icons/ri"
import { HomePage } from "../src/components/HomePage"
import Head from "next/head"

const IndexPage = () => {
    return (
        <>
            <Head>
                <title>Cause We Care!</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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