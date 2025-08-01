import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const [Cardsdata, setCardsdata] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCardsdata(data)


   console.log(data)
   
   
  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <>
      <Navbar/>
      <div className="cards">
       {Cardsdata.map((card)=>{

        return <div key={card.id} className='card'>
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By:UserId {card.id}</span>
        </div>

       })}

      </div>
    </>
  )
}

export default App
