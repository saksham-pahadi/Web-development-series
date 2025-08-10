"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
       <br/>
      <p className="text-center p-2 font-bold">Signed in as {session.user.email}</p>
      <button className="text-center w-30 m-auto" onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
  <div className=" flex flex-col m-4 items-center">

    <p className="text-center p-2 font-bold">Not signed in</p>
    <button className="p-2 bg-slate-500 rounded-lg m-2" onClick={() => signIn("github")}>Sign in using Github</button>
    <button className="p-2 bg-slate-500 rounded-lg m-2" onClick={() => signIn("google")}>Sign in using Google</button> 
  </div>
  </>
}