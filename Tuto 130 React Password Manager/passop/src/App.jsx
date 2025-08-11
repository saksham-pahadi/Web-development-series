import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Manager from './component/Manager'

function App() {
  

  return (
    <>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#212121] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    <Navbar/>
    <Manager/>
    </>
  )
}

export default App
