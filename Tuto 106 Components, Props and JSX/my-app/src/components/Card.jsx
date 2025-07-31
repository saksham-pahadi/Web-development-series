import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://marketplace.canva.com/EAGLrR2e2H8/1/0/1600w/canva-blue-modern-business-card-PSng3mW2xTM.jpg" alt="" srcset="" />
        <h1>Title of {props.title}</h1>
        <p>{props.description}</p>
      
    </div>
  )
}

export default Card
