import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200 flex items-center justify-between  p-5'>
        <div className="logo font-bold text-xl">
            PassOP
        </div>
      <ul>
        <li className='flex gap-2 mx-2 '>
<a href="/">Home</a>
<a href="#">About</a>
<a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
