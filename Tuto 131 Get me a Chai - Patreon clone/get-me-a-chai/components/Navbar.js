"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)

  return (
    <nav className='bg-gray-900 text-white flex justify-between  px-4 items-center h-16 sticky top-0 z-5'>

      {session && <>


        <div className="hamburger sm:hidden">



          <button id="dropdownInformationButton" onClick={() => { setshowdropdown(!showdropdown) }}
             data-dropdown-toggle="dropdownInformation" className="flex items-center p-3 rounded-sm text-center bg-gray-800" type="button">  Welcome
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div id="dropdownInformation" onClick={() => { setshowdropdown(!showdropdown) }}  className={`z-10 absolute ${showdropdown ? " " : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600  `}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">

              <div className="font-medium truncate flex justify-between"> {session.user.name} </div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
              <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                <button >Dashboard</button>
              </Link>
              <Link href={"/profile"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                <button >Profile</button>
              </Link>
              <Link href={"/"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                <button >Home</button>
              </Link>
              <Link href={"/about"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                <button >About</button>
              </Link>
              <Link href={"/project"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                <button >Project</button>
              </Link>
            </ul>
            <div className="py-2 block px-4 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-b-lg ">
              <button onClick={() => { signOut() }} className="">Sign out</button>
            </div>
          </div>


        </div>
      </>}


      {!session && <>


        <div className="hamburger sm:hidden">



          <button id="dropdownInformationButton" onClick={() => { setshowdropdown(!showdropdown) }} data-dropdown-toggle="dropdownInformation" className="flex items-center p-3 rounded-sm text-center bg-blue-800" type="button">  Welcome
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div id="dropdownInformation" onClick={() => { setshowdropdown(!showdropdown) }}  className={`z-10 absolute ${showdropdown ? " " : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600  `}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div className='font-bold'>Get me a Chai</div>

            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
              <Link href={"/login"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">

                <button >Login</button>
              </Link>
              <Link href={"/"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                <button >Home</button>
              </Link>
              <Link href={"/about"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                <button >About</button>
              </Link>
              <Link href={"/projects"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 ">
                <button >Project</button>
              </Link>

            </ul>

          </div>


        </div>
      </>}





      <Link href={"/"} className="logo flex items-center">
        <span className="flex gap-1 items-center"><img className="h-9 sm:h-8" src="tea.gif" alt="" /></span>
        <h2 className='font-bold text-lg'>
          GetMeAChai
        </h2>
      </Link>

      <ul className='hidden sm:flex justify-around items-center gap-4 w-2/5'>
        <Link className='font-bold hover:shadow-lg hover:shadow-blue-500/50 hover:dark:shadow-lg hover:dark:shadow-blue-800/80 hover:bg-blue-500 p-2 px-3 rounded-lg transition-all delay-5 duration-300 ease-in-out' href={"/"}>Home</Link>
        <Link className='font-bold hover:shadow-lg hover:shadow-blue-500/50 hover:dark:shadow-lg hover:dark:shadow-blue-800/80 hover:bg-blue-500 p-2 px-3 rounded-lg transition-all delay-5 duration-300 ease-in-out' href={"/about"}>About</Link>
        <Link className='font-bold hover:shadow-lg hover:shadow-blue-500/50 hover:dark:shadow-lg hover:dark:shadow-blue-800/80 hover:bg-blue-500 p-2 px-3 rounded-lg transition-all delay-5 duration-300 ease-in-out' href={"/projects"}>Projects</Link>
      </ul>



      {session && <>
        <div className='flex gap-1'>

          <Link href={"/dashboard"} className='hidden sm:flex'>
            <button className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2'>Dashboard</button>
          </Link>

          <Link href={`/${session.user.name}`}>

            {session.user.image ? <img className='h-10' srcSet={session.user.image} alt="profile.jpg" />: <div className='h-10 w-10 pb-1 bg-slate-600 flex items-center justify-center rounded-full text-3xl'>{session.user.name.split("")[0].toUpperCase()}</div> }
          </Link>
        </div>
      </>}




      {!session && <>


        <div className='hidden sm:flex'>
          <Link href={"/login"}>
            <button className=' text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2'>Login</button>
          </Link>

        </div>
      </>}

    </nav>
  )
}

export default Navbar
