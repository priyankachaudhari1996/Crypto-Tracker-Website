import React from "react";
import Navbar from "../Components/Common/Navbar/Navbar";
import MainComponent from "../Components/Landing/MainComponent";
import Loader from "../Components/Loader/Loader";


const HomePage= ()=>{

    return(
        <div>
            <Navbar />
            <MainComponent />
           
        </div>
    )
}

export default HomePage