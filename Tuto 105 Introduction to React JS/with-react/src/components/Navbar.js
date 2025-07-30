import React from 'react'

const Navbar = ({logoText}) => {
  return (
    <div>
      <div className='logo'>{logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}
 
export default Navbar
