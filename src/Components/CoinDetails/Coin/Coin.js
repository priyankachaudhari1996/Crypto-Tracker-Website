import React, { useEffect, useState } from "react";
import { TrendingDownOutlined, TrendingUpOutlined } from "@mui/icons-material";
import "./coin.css"



const Coin = ({ coinData }) => {

    
            

    return (
        <div className="coin-details-container">
            <div className="coin-detail-div" >
                <div className="cd-img-name-container">
                    <div className="cd-img-div" ><img src={coinData.image.large} alt={coinData.name} /></div>
                    <div>
                        <strong>{coinData.symbol}</strong>
                        <p>{coinData.name}</p>
                    </div>
                </div>

                <div>
                    {
                        coinData.market_data.price_change_percentage_24h > 0 ?
                            <div className="cd-percent-trend-div">
                                <p className="cd-coin-percentage cd-green-percentage" >{coinData.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                                <p className="cd-trending cd-green-trending">
                                    <TrendingUpOutlined />
                                </p>
                            </div>
                            :
                            <div className="cd-percent-trend-div">
                                <p className="cd-coin-percentage cd-red-percentage" >{coinData.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                                <p className="cd-trending cd-red-trending">
                                    <TrendingDownOutlined />
                                </p>
                            </div>
                    }
                </div>

                <div>
                    {
                        coinData.market_data.price_change_percentage_24h > 0 ?
                            <h3 className="cd-coin-rate cd-green-rate">${coinData.market_data.current_price.usd.toLocaleString()}</h3>
                            :
                            <h3 className="cd-coin-rate cd-red-rate">${coinData.market_data.current_price.usd.toLocaleString()}</h3>
                    }
                </div>

                <div className="cd-total-div">
                    <p>${coinData.market_data.total_volume.usd.toLocaleString()}</p>
                    <p>${coinData.market_data.market_cap.usd.toLocaleString()}</p>
                </div>

            </div>

            

            <div className="desc-container">
                <h2>{coinData.name}</h2>
                <p className="cd-desc" dangerouslySetInnerHTML={{ __html: coinData.description.en }} />
            </div>
        </div>
    )


}

export default Coin