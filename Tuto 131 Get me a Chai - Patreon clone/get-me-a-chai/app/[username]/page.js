"use client"
import React,{useState} from 'react'
import { redirect } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import CheckoutButton from '@/components/CheckoutButton'
import Paymentpage from '@/components/Paymentpage'

const Username = ({ Username }) => {
  // let user= params
  const { data: session } = useSession()
  const [edit, setedit] = useState(false)



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



        <aside className="aside rounded-lg w-full lg:w-1/4 bg-slate-900 p-5 flex flex-col
        items-center  md:items-start">

          <div>

            <img className='h-50 w-50' src={`${session.user.image}`} alt="" />
            <div className=' bg-slate-600  w-7 h-7 rounded-lg flex items-center justify-center relative bottom-10 left-40'>

              <input type="file" name="" id="dropzone-file" className="hidden bg-amber-500" />
              <label htmlFor="dropzone-file" className=''>
                <img className=' ' src="pencil.svg" alt="" />

              </label>
            </div>
          </div>
          <h3 className='text-xl font-bold'>{session.user.name}</h3><h3>@username</h3>
          <p className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vel blanditiis deserunt magni? Esse, laboriosam corporis. Officiis quia ratione nisi.</p>
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
                  style={{ "width": 33 }}>
                </lord-icon>
                <span>Subhanm donated <span className='font-bold'>$30</span>  with message "I support you bro. Lots of ❤️"</span>
              </li>
              <li className='flex items-center my-4 gap-2'>
                <lord-icon
                  src="https://cdn.lordicon.com/hhljfoaj.json"
                  trigger="hover"
                  stroke="light"
                  state="hover-looking-around"
                  style={{ "width": 33 }}>
                </lord-icon>
                <span>Krishna donated <span className='font-bold'>$28</span>  with message "I support you bro. Lots of ❤️"</span>
              </li>
              <li className='flex items-center my-4 gap-2'>
                <lord-icon
                  src="https://cdn.lordicon.com/hhljfoaj.json"
                  trigger="hover"
                  stroke="light"
                  state="hover-looking-around"
                  style={{ "width": 33 }}>
                </lord-icon>
                <span>Rahul donated <span className='font-bold'>$43</span>  with message "I support you bro. Lots of ❤️"</span>
              </li>
            </ul>
          </div>
          <Paymentpage username={Username}/>
        </main>
      </div>
    )
  }
}

export default Username
