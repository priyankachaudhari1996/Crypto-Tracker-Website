import React from "react";
import "./grid.css"

import TrendingUpOutlined from "@mui/icons-material/TrendingUpOutlined";
import StarBorderOutlined from "@mui/icons-material/StarBorderOutlined";
import { useNavigate } from "react-router-dom";

const Grid= ({coin})=>{

    const navigate= useNavigate();
    return(
        <div onClick={()=>navigate(`/coin/${coin.id}`)} className={`coin-card ${coin.price_change_percentage_24h>0? "green-card":"red-card"}`}>


            {/* ***************** Row 1 **************** */}
            <div className="coin-card-r1">
                <div className="coin-img-sym-div">
                    <div className="coin-img">
                        <img src={coin.image} />
                    </div>
                    <div>
                        <strong className="coin-sym">{coin.symbol}</strong>
                        <p className="coin-name">{coin.name}</p>
                    </div>
                </div>
                <div className={`star ${coin.price_change_percentage_24h>0? "green-star":"red-star"}`}><StarBorderOutlined /></div>
            </div>

            {/* ***************** Row 2 **************** */}

            {
                coin.price_change_percentage_24h>0?
                <div className="coin-card-r2 ">
                    <p className="coin-percentage green-percentage" >{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <p className="trending green-trending">
                        <TrendingUpOutlined />
                    </p>
                </div>
                :
                <div className="coin-card-r2 ">
                    <p className="coin-percentage red-percentage" >{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <p className="trending red-trending">
                        <TrendingUpOutlined />
                    </p>
                </div>
            }

            {
                coin.price_change_percentage_24h>0?
                <h3 className="coin-rate green-rate">${coin.current_price.toLocaleString()}</h3>
                :
                <h3 className="coin-rate red-rate">${coin.current_price.toLocaleString()}</h3>
            }

            <div className="total-div">
                <p>Total Volume: {coin.total_volume.toLocaleString()}</p>
                <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
            </div>

        </div>
    )
}

export default Grid