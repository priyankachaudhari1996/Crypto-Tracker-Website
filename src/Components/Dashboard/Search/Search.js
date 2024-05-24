import React, { useState } from "react";

import "./search.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search= ({search, onSearching})=>{

    
    

    return(
        <div className="search-container">
            <SearchRoundedIcon />
            <input type="text" placeholder="Search"  value={search} 
                onChange={(e)=>onSearching(e)}
             />
        </div>
    )
}

export default Search