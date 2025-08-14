import React from 'react'

const Username = async({params}) => {
    let user=await params
  return (
    <div>
        <h1>Hey,{user.username}</h1>
      this is profile
    </div>
  )
}

export default Username
