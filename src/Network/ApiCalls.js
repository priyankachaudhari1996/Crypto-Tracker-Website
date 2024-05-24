


export const coinsMarket= async()=>{

    try{
        const response= await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        const responsData= await response.json();
        // console.log(responsData);
        return {success:true, data: responsData}
    }
    catch(err){
        // console.log(err);
        return {success:false}
    }
}

export const coinDataById= async(coinId)=>{

    try{

        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        console.log(response);
        const responseData= await response.json();
        console.log(responseData);
        return {success:true, data:responseData}

        
    }
    catch(err){
        console.log(err);
        return {success:false};
    }
}

// export const coinPrices= async(coinId,days)=>{

//     try{

//         const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=daily`);
//         console.log(response);
//         const responseData= await response.json();
//         return{
//             success:true,
//             data:responseData
//         }
//     }
//     catch(err){
//         console.log(err);
//     }
// }

