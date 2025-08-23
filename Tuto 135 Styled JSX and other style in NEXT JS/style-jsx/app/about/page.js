"use client"
import React from 'react'

const About = () => {
    return ( <div>

    
        <div className='container'>
            <h1>This is about me </h1>
            <p>Hey i am a good boy</p>

            <style jsx global>{`
        .container{
            background-color:red;
            color:green;
        }
        
        
        `}
            </style>
        </div>
        <div className='container'>
            <h1>This is about me again </h1>
            <p>Hey i am a good boy 2</p>

            
        </div>

    </div>)
}

export default About
