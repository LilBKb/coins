import { useEffect, useState } from 'react';
import './Main.css'
import Card from '../card/Card';
import CoinsList from '../CoinsLIst/CoinsList';
import Search from '../Search/Seacrh';


const Main=({balance,setBalance,coins,setCoins})=>{

    return(
        <main>
        <Card balance={balance} setBalance={setBalance}/>
        <Search coins={coins} setCoins={setCoins}/>
        {coins.length>0 ? <CoinsList coins={coins}/>:<div>Loading...</div>}
        </main>
    )
}

export default Main;