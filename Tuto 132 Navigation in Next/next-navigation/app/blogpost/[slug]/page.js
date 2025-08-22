"use client"
import React from 'react'
import { useEffect } from 'react'
import { useParams,useRouter } from 'next/navigation'

const blogpost = () => {
    const params = useParams()
    const router = useRouter()
    useEffect(() => {
      setTimeout(() => {
        router.push("/about")
      }, 2000);
    
      
    }, [])
    

  return (
    <div>
      blogpost
      <div>slug:{params.slug}</div>
<button onClick={()=>{ router.push("/dashboard")}}>Dashboard</button>


    </div>
  )
}

export default blogpost
