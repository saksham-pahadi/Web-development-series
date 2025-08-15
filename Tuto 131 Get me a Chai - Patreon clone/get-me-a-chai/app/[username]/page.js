"use client"
import React from 'react'
import { redirect } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"

const Username = ({ Username }) => {
  // let user= params
  const { data: session } = useSession()

  function blockInvalidChar(e) {
    if (['e', 'E'].includes(e.key)) {
      e.preventDefault(); // Prevents the 'e' or 'E' from being entered
    }
  }

  if (!session) {
    redirect('/login')
  }
  else {


    return (
      <div className='flex justify-center gap-2 m-2 flex-wrap'>



        <aside className="aside rounded-lg w-full lg:w-1/4 bg-slate-900 p-5">
          <h1>Hey,{session.user.name}</h1>
        </aside>




        <main className='main rounded-lg w-full lg:w-2/3 bg-slate-900 flex p-5 gap-5 flex-wrap justify-evenly'>

          <div className="supporters ">
            {/* list all supporters as leaderboard */}
            <h1 className='text-xl font-bold mb-3'>Supporters</h1>
            <ul>
              <li className='flex items-center my-4 gap-2'>
                <lord-icon
                  src="https://cdn.lordicon.com/hhljfoaj.json"
                  trigger="hover"
                  stroke="light"
                  state="hover-looking-around"
                  style={{ "width": 33}}>
                </lord-icon>
                <span>Subhanm donated <span className='font-bold'>$30</span>  with message "I support you bro. Lots of ❤️"</span>
              </li>
              <li className='flex items-center my-4 gap-2'>
                <lord-icon
                  src="https://cdn.lordicon.com/hhljfoaj.json"
                  trigger="hover"
                  stroke="light"
                  state="hover-looking-around"
                  style={{ "width": 33}}>
                </lord-icon>
                <span>Krishna donated <span className='font-bold'>$28</span>  with message "I support you bro. Lots of ❤️"</span>
              </li>
              <li className='flex items-center my-4 gap-2'>
                <lord-icon
                  src="https://cdn.lordicon.com/hhljfoaj.json"
                  trigger="hover"
                  stroke="light"
                  state="hover-looking-around"
                  style={{ "width": 33}}>
                </lord-icon>
                <span>Rahul donated <span className='font-bold'>$43</span>  with message "I support you bro. Lots of ❤️"</span>
              </li>
            </ul>
          </div>
          <div className="makepayment">
            <h1 className='text-2xl font-bold mb-3'>Support {session.user.name.split(" ")[0]}</h1>

            <input type='number' className='w-full p-3 rounded-lg bg-slate-800 remove-arrow' placeholder='Enter Amount' onKeyDown={(evt) => (evt.key === '.' || evt.key === '-' || evt.key === '+' || evt.key === 'e' || evt.key === 'E') && evt.preventDefault()} />


            {/* or choose from these Amount */}
            <div className="flex gap-2 mt-2">
              <button className='bg-slate-800 p-3 rounded-lg'>Donate $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Donate $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Donate $30</button>
            </div>
            <textarea className='bg-slate-800 my-2 rounded-lg border-2 border-slate-800 w-full p-2' name="" id="" placeholder='Enter Message'></textarea>
            <button type="button" className="w-4/5 mx-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:shadow-lg hover:shadow-blue-500/50 hover:dark:shadow-lg hover:dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-100 ease-out ">Pay</button>
          </div>
        </main>
      </div>
    )
  }
}

export default Username
