import React, { useEffect, useState } from "react";
import Navbar from "../Components/Common/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { coinDataById } from "../Network/ApiCalls";
import Loader from "../Components/Loader/Loader";
import Coin from "../Components/CoinDetails/Coin/Coin";


const CoinDetailsPage = () => {

    const { coinId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coinData, setCoinData] = useState("");


    useEffect(() => {



        (
            async () => {

                const response = await coinDataById(coinId);
                if (response.success) {

                    setCoinData(response.data)
                    console.log(coinData);
                    setIsLoading(false);
                }


            }
        )()

    }, [])

    return (

        <div>
            <Navbar />
            {
                isLoading
                    ?
                    <Loader />
                    :

                    <Coin coinData={coinData} />
            }




        </div>
    )
}


export default CoinDetailsPage