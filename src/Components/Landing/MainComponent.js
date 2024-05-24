import Button from "../Common/Button/Button";
import React from "react";
import "./maincomponent.css"
import phone from "../../assets/phone.svg"
import gradient from "../../assets/gradient.svg"
import {motion} from "framer-motion"
import { Link } from "react-router-dom";




const MainComponent = () => {

    return (
        <>
        <div className="main-component-container">
            <div className="left-side-container">
                <motion.h1
                    className="track-crypto"
                    initial={{opacity:0, y:-50}}
                    animate={{opacity:1, y:0}}
                    transition= {{duration:1}}

                >Track Crypto</motion.h1>
                <motion.h1 className="real-time"
                     initial={{opacity:0, y:50}}
                     animate={{opacity:1, y:0}}
                     transition= {{duration:1}}
                >Real Time.</motion.h1>
                <p>Track crypto through a public api in real time. Visit the dashboard to do so!</p>

                <div className="btns">
                    <Link to={"/dashboard"}><Button text={"Dashboard"}  /></Link>
                    <Button text={"Share"} outlined={true} />
                </div>
            </div>
            <div className="right-side-container" >
                <motion.img 
                    initial={{y:-5}}
                    animate={{y:10}}
                    transition= {{
                        type:"smooth",
                        repeatType: "mirror",
                        duration:2,
                        repeat:Infinity

                    }}
                    className="phone" 
                    src={phone} alt="phone" />
                <img className="gradient" src={gradient} alt="gradient" />
            </div>
        </div>
        </>
    )
}

export default MainComponent