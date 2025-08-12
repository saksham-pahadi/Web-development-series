import React from 'react'

const Navbar = () => {
  return (
    <>

      <nav className='flex items-center justify-between  p-4 backdrop-blur-xs sticky top-0'>
        <div className="logo font-bold text-xl">
          <span className='text-green-500'>&lt;</span>
            Pass
          <span className='text-green-500'>OP/&gt;</span>
        </div>
      <ul>
        <li className='flex gap-2 mx-2 '>
<a href="/">Home</a>
<a href="#">About</a>
<a href="#">Contact</a>
        </li>
      </ul>
    <div>

      <a target='_blank' href="https://github.com/saksham-pahadi/Web-development-series/tree/main/Tuto%20130%20React%20Password%20Manager/passop">

      <img className='invert p-1 rounded-2xl hover:bg-green-500 hover:invert-0' src="icon/github.svg" alt="" />
      </a>
    </div>
    </nav>
    
    </>
  )
}

export default Navbar
