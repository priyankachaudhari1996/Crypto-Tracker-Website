import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import AnchorTemporaryDrawer from "./Drawer";

const Navbar= ()=>{

    return(
        <div className="navbar-container">
            <h1 className="logo">CryptoTracker<span style={{color:"#3F00FF"}}>.</span></h1>

            <div className="links">
                <NavLink className={"link"} to={"/"} >Home</NavLink>
                <NavLink className={"link"} to={"/compare"} >Compare</NavLink>
                <NavLink className={"link"} to={"/watch-list"} >WatchList</NavLink>
                <NavLink className={"link"} to={"/dashboard"} ><Button text={"Dashboard"} /></NavLink>
            </div>
            <div className="mobile-drawer">
                <AnchorTemporaryDrawer/>
            </div>
        </div>
    )
}

export default Navbar