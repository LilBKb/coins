import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/pages/Main'
import { apiCoins } from './components/helpers/apiCoins'


function App() {
  const [balance, setBalance] = useState(60000)
  const [coins,setCoins]=useState([])


  useEffect(()=>{
    const fetchData=async()=>{
      const data = await apiCoins()
      setCoins(data.coins)
    }
    fetchData();
  },[])


  return (
    <>
    <Header/>
    <Main balance={balance} setBalance={setBalance} coins={coins} setCoins={setCoins}/>
    </>
  )
}

export default App
