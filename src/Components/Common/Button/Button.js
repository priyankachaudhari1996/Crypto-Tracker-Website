import React from "react";
import "./button.css"


const Button=({text, outlined})=>{

    return(
        <button className={`${outlined?"outlined-btn":"btn"}`} >{text}</button>
    )
}

export default Button