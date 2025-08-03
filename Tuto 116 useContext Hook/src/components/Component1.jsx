import React,{ useContext } from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
    const value = useContext(counterContext)
  return (
    <div>
        Component 1 
      {value.count}
    </div>
  )
}

export default Component1
