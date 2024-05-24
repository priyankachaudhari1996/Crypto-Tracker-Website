import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import { IconButton } from '@mui/material';



export default function AnchorTemporaryDrawer() {
  
    const [open, setOpen]= useState(false);
  return (
    <div>
      
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon/></IconButton>
          <Drawer
            anchor="right"
            open={open}
            onClose={()=>setOpen(false)}
          >
            <div className={"drawer-links"}>
                <NavLink className={"link"} to={"/"} >Home</NavLink>
                <NavLink className={"link"} to={"/compare"} >Compare</NavLink>
                <NavLink className={"link"} to={"/watch-list"} >WatchList</NavLink>
                <NavLink className={"link"} to={"/dashboard"} ><Button text={"Dashboard"} /></NavLink>
            </div>
          </Drawer>
        
    </div>
  );
}