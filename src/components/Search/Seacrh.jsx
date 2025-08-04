import { useEffect, useState } from 'react';
import './Search.css'


const Search = ({coins,setCoins}) =>{

    const [value,setValue]=useState('')

    useEffect(()=>{
        const filteredCoins=coins.filter(coin=>{
            return coin.name.toLowerCase().includes(value.toLowerCase())
        })
        setCoins(filteredCoins)
    },[value])

    return(
        <div className='search__form'>
            <input className='input' value={value} onChange={(e)=>setValue(e.target.value)} type='text' placeholder='bitcoin' />
        </div>
    )
}

export default Search;