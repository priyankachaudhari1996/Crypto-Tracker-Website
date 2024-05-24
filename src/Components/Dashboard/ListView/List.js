import React from "react";
import "./list.css"
import { StarBorderOutlined, TrendingDownRounded, TrendingUpRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const List = ({coin})=>{

    const navigate= useNavigate();

    return(
        <tr className="list-tr" onClick={()=> navigate(`/coin/${coin.id}`) } >
            <td className="list-name-sym-div list-first-col">
                <div className="list-img-div">
                    <img src={coin.image} alt={coin.name} />
                </div>
                <div>
                    <strong className="list-sym">{coin.symbol}</strong>
                    <p>{coin.name} </p>
                </div>
            </td>
            
            <td className="list-percentage-td">
                {
                    coin.price_change_percentage_24h<0
                    ?
                    <div className="list-percentage-div list-red-percent">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    :
                    <div className="list-percentage-div list-green-percent">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>

                }
            </td>
            <td>
                {coin.price_change_percentage_24h<0
                ?
                <div className="list-cp-div ">
                    
                        <div className="list-trending list-red-trending ">
                            <TrendingDownRounded />
                        </div>
                        <h3 className="red-cp-h3" >${coin.current_price.toLocaleString()}</h3>
                    
                </div>
                :
                <div className="list-cp-div ">
                    
                        <div className="list-trending list-green-trending">
                            <TrendingUpRounded    />
                        </div>
                        <h3 className="green-cp-h3" >${coin.current_price.toLocaleString()}</h3>
                    
                </div>
                }
            </td>
            <td>{coin.total_volume.toLocaleString()}</td>
            <td>${coin.market_cap.toLocaleString()}</td>
            <td>
                {
                coin.price_change_percentage_24h<0
                ?
                    <div className="list-star-div" >
                        <div className="list-red-star"  >
                            <StarBorderOutlined />

                        </div>
                    </div>
                :
                    <div className="list-star-div" >
                        <div className="list-green-star" >
                            <StarBorderOutlined />

                        </div>
                    </div>
                }
            </td>
        </tr>
    )
}

export default List