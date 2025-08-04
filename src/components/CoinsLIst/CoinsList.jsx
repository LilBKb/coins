import './CoinsList.css'


const CoinsList = ({coins}) =>{
    return(
        <ul className='coinslist'>
            {coins.map(coin=>{
                return <li key={coin.uuid}>
                    <div className='coinslist__item'>
                        <img
                        className='coinslist__item__logo' 
                        src={coin.iconUrl} alt={coin.name}/>
                        <p style={{color:coin.color}}>{coin.name}/USD</p>
                        <div className='coinslist__item__price'>
                            <p style={{color:coin.color}}>
                                {(+coin.price).toFixed(2)} USD
                            </p>
                            <p style={{color:coin.color}}>
                                {+coin.btcPrice} BTC
                            </p>
                        </div>
                    </div>
                </li>
            })}
        </ul>

    )
}

export default CoinsList;