"use client"
import React from 'react'
import { useState } from "react";

const Counter = () => {
    const [count, setcount] = useState(0)
  return (
    <div>
      <p className="p-4 text-white">

        Counter at {count}
      </p>
      <button className="border min-w-10 rounded-sm p-2 cursor-pointer" onClick={() => setcount(count + 1)}>Add</button>
    </div>
  )
}

export default Counter
