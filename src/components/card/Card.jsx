import './Card.css'

const Card = ({balance,setBalance}) =>{
    return(
        <div className='card'>
            <h2>CoinMarket</h2>
            <h2>Ilya Popov</h2>
            <div className='card__balance'>
                <button onClick={(prev)=>setBalance(balance+1000)}>Add money</button>
                <h3>{balance}RUB</h3>
            </div>
        </div>
    )

}

export default Card;