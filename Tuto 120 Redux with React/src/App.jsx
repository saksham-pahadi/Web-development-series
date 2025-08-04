import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply,devide } from "./redux/counter/counter"



function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar counter={count} />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is :{count}
        <button onClick={() => dispatch(increment())}>+</button>
        <br />
        <button onClick={() => dispatch(multiply())}>x</button>
        <button onClick={() => dispatch(devide())}>%</button>
      </div>

    </>
  )
}

export default App
