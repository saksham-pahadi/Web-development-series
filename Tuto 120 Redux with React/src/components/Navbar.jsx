import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply,devide, incrementByAmount } from '../redux/counter/counter'

const Navbar = () => {
   const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
         <button onClick={() => dispatch(decrement())}>-</button>
      I am a Navbar and couter at {count}
         <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  )
}

export default Navbar
