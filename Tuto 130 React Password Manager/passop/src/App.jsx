import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Manager from './component/Manager'
import Footer from './component/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
    <Manager/>
    <Footer/>
    </>
  )
}

export default App
