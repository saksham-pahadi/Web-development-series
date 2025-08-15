"use client"
import React from 'react'

import { redirect } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

const Dashboard = () => {
  const { data: session } = useSession()
  if (!session) {
      redirect('/login')
    }
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
