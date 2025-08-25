"use client"
import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

const searchParams = useSearchParams();




    const [link, setlink] = useState("")
    const [linktext, setlinktext] = useState("")
    const [links, setlinks] = useState([])
    const [handle, sethandle] = useState(searchParams.get('handle') || "")
    const [bio, setbio] = useState("")
    const [picture, setpicture] = useState("")
    const [colors, setColors] = useState(["rose", "emerald","slate","zinc", "cyan", "lime", "purple", "orange"]);


    









    
    const addLink = () => {
        if (linktext.length <= 0) {
            toast.info("Please give the name for the link")
            return

        }
        else if (link.length <= 0) {
            toast.info("Please add the link url")
            return

        }
        setlinks([...links, { link: link, linktext: linktext }])
        setlink("")
        setlinktext("")
    }

    const submitlinks = async () => {
        console.log(picture)

        if (handle.length == 0) {
            toast.info("Please provide a handle like Username or Email ")
            return

        }
        else if (bio.length == 0) {
            toast.info("Tell us about yourself in bio")
            return

        }
        else if (links.length == 0) {
            toast.info("Please add at least one link")
            return

        }
        else if (picture.length == 0) {
            toast.info("Please set the profile picture")
            return
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        const raw = JSON.stringify({
            "links": links,
            "handle": handle.toLowerCase(),
            "picture": picture,
            "bio": bio
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if (!result.success) {
            toast.error(result.message)
            return
        }
        else {

            toast.success(result.message)
            sethandle("")
            setpicture("")
            setlinks([])
            setbio("")
        }


    }
    return (<>
        <ToastContainer
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />

        <div className='min-h-screen bg-white flex flex-col sm:flex-row justify-around'>


            <div className='mt-30 md:mt-35 lg:mt-38 sm:w-1/2 flex flex-col justify-center items-center bg-white text-black'>
                <h2 className='font-bold text-4xl'>Creat your Linktree</h2>
                <div className='flex flex-col gap-3 mt-5 w-3/4'>
                    <h2 className='font-semibold text-xl'>Step 1: Claim Your Handle</h2>
                    <label htmlFor="handle" className="relative">
                        <input
                            value={handle}
                            disabled={linktext.length > 0 || link.length > 0 ? true : false}
                            onChange={(e) => { sethandle(e.target.value) }}
                            type="text"
                            id="handle"
                            placeholder=""
                            className="peer p-2 text-lg  mt-2 w-full rounded-lg border-2 border-gray-300   dark:border-gray-600 dark:bg-white dark:text-gray-900 "
                        />

                        <span className="absolute rounded px-1 inset-y-2 start-3 -translate-y-3 bg-white text-lg font-medium text-black transition-transform h-6 peer-placeholder-shown:translate-y-3 peer-focus:-translate-y-3 dark:bg-white dark:text-black" >
                            Handle
                        </span>
                    </label>
                    <label htmlFor="bio" className="relative">
                        <input
                            value={bio}
                            
                            onChange={(e) => { setbio(e.target.value) }}
                            type="text"
                            id="bio"
                            placeholder=""
                            className="peer p-2 text-lg  mt-2 w-full rounded-lg border-2 border-gray-300   dark:border-gray-600 dark:bg-white dark:text-gray-900 "
                        />

                        <span className="absolute rounded px-1 inset-y-2 start-3 -translate-y-3 bg-white text-lg font-medium text-black transition-transform h-6 peer-placeholder-shown:translate-y-3 peer-focus:-translate-y-3 dark:bg-white dark:text-black" >
                            Set Bio
                        </span>
                    </label>





                </div>
                <div className='flex flex-col gap-3 mt-5 w-3/4'>
                    <h2 className='font-semibold text-xl'>Step 2: Add Links</h2>

                    <label htmlFor="linktext" className="relative">
                        <input
                            value={linktext}
                            onClick={() => { if (handle.length == 0) { toast("Please fill the handle field first") } }}
                            onChange={(e) => { setlinktext(e.target.value) }}
                            type="text"
                            id="linktext"
                            placeholder=""
                            className="peer p-2 text-lg  mt-2 w-full rounded-lg border-2 border-gray-300   dark:border-gray-600 dark:bg-white dark:text-gray-900 "
                        />

                        <span className="absolute rounded px-1 inset-y-2 start-3 -translate-y-3 bg-white text-lg font-medium text-black transition-transform h-6 peer-placeholder-shown:translate-y-3 peer-focus:-translate-y-3 dark:bg-white dark:text-black" >
                            Link Text
                        </span>
                    </label>


                    <label htmlFor="linkurl" className="relative">
                        <input
                            value={link}
                            onChange={(e) => { setlink(e.target.value) }}
                            onClick={() => { if (handle.length == 0) { toast("Please fill the handle field first") } }}
                            type="text"
                            id="linkurl"
                            placeholder=""
                            className="peer p-2 text-lg  mt-2 w-full rounded-lg border-2 border-gray-300   dark:border-gray-600 dark:bg-white dark:text-gray-900 "
                        />

                        <span className="absolute rounded px-1 inset-y-2 start-3 -translate-y-3 bg-white text-lg font-medium text-black transition-transform h-6 peer-placeholder-shown:translate-y-3 peer-focus:-translate-y-3 dark:bg-white dark:text-black" >
                            Link Url
                        </span>
                    </label>

                    <button

                        onClick={() => { addLink() }} className='bg-blue-700 text-white p-2 rounded-xl mt-2'>Add link</button>
                    {links && links.map((item, index) => {
                        console.log(colors[index])
                        return (<Link key={index} target='_blank' href={item.link} className={`text-white bg-${colors[index]}-400 p-2 rounded-xl font-semibold`}>{item.linktext} </Link>)

                    })}

                </div>
                <div className='flex flex-col gap-3 mt-5 w-3/4'>
                    <h2 className='font-semibold text-xl'>Step 3: Add Picture</h2>
                    {/* <label htmlFor="picture" className="relative">
                        <input
                            onChange={(e) => { setpicture(e.target.files[0]) }}
                            type="file"
                            id="picture"
                            placeholder=""
                            className="peer hidden p-2 text-lg  mt-2 w-full rounded-lg border-2 border-gray-300   dark:border-gray-600 dark:bg-white dark:text-gray-900 "
                        />

                        <span className="absolute p-2 text-lg  mt-2 w-full rounded-lg border-2 border-gray-300   dark:border-gray-600 dark:bg-white dark:text-gray-900" >
                            Picture
                        </span>
                    </label> */}
                    <label htmlFor="picture" className="relative">
                        <input
                            value={picture}
                            onChange={(e) => { setpicture(e.target.value) }}
                            onClick={() => { if (handle.length == 0) { toast("Please fill the handle field first") } }}
                            type="text"
                            id="picture"
                            placeholder=""
                            className="peer p-2 text-lg  mt-2 w-full rounded-lg border-2 border-gray-300   dark:border-gray-600 dark:bg-white dark:text-gray-900 "
                        />

                        <span className="absolute rounded px-1 inset-y-2 start-3 -translate-y-3 bg-white text-lg font-medium text-black transition-transform h-6 peer-placeholder-shown:translate-y-3 peer-focus:-translate-y-3 dark:bg-white dark:text-black" >
                            Profile Url
                        </span>
                    </label>


                    <button onClick={() => { submitlinks() }} className='bg-blue-700 text-white p-2 rounded-xl mt-1'>Create Your linktree</button>





                </div>
            </div>
            <div className='hidden sm:flex bg-blue-800 sm:w-1/2 '>
                <img src="banner.jpg" alt="Promotional Banner" className="h-screen w-full object-cover"></img>
            </div>

        </div>
    </>)
}

export default Generate
