import React, { useEffect, useState } from "react";
import Navbar from "../Components/Common/Navbar/Navbar";
import TabsComponent from "../Components/Dashboard/TabsComponent";
import { coinsMarket } from "../Network/ApiCalls";
import Loader from "../Components/Loader/Loader";
import Search from "../Components/Dashboard/Search/Search";

const DashboardPage= ()=>{

    const [coinsData, setCoinsData]= useState([]);
    const [loading, setIsLoading]= useState(true);

    const [search, setSearch]= useState("");

    function onSearching(e){

        setSearch(e.target.value);
    }

    const filteredCoins= coinsData.filter((coin)=>
        coin.name.toLowerCase().includes(search)
    )

    useEffect(()=>{

        // setIsLoading(true);

        (
            async()=>{

                const response = await coinsMarket();    
                // console.log(response);
                if(response.success){
                    setIsLoading(false);
                    setCoinsData(response.data);
                }
                
            }
        )()

    },[]);

    return(
        <div>
            <Navbar />

            <Search search={search} onSearching={onSearching} />
            
            {
                loading? 
                <Loader />
                :
                <TabsComponent coins={filteredCoins} />
            }
        </div>
    )
}

export default DashboardPage