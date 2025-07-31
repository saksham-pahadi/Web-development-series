import React, { useEffect } from 'react'
import './Navbar.css'

const Navbar = ({ color }) => {

    useEffect(() => {
        alert('Color was changed');

    }, [color])

// Example of cleanup function
  useEffect(() => {
    alert('Welcome to the Navbar component!');
    return () => {
      alert('Cleaning up Navbar component!');
    }


  }, [])

    return (
        <>
            <div className='navbar'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Explore</li>
                </ul>
            </div>
            <div>
                I am a Navbar of {color} color hehe...
            </div>
        </>
    )
}

export default Navbar
