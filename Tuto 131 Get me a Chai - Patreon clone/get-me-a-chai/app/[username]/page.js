"use client"
import React from 'react'
import { redirect } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

const Username = ({ Username }) => {
  // let user= params
  const { data: session } = useSession()
  
  if (!session) {
    redirect('/login')
  }
  else{

  
  return (
    <div>
      <h1>Hey,{Username}</h1>
      this is profile
    </div>
  )
}
}

export default Username
