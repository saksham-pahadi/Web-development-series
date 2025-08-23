"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)
    const [copy, setcopy] = useState(false)
    const [Result, setresult] = useState("")

    const copyurl = () => {
        navigator.clipboard.writeText(generated)
    }

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result.success)
                if (result.success) {
                    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                    seturl("")
                    setshorturl("")
                }
                else {
                    setresult(result.message)

                }

            })
            .catch((error) => console.error(error));

    }

    return (
        <div className='w-full'>
            <h1 className='text-center text-purple-800 font-bold text-4xl m-2'>Generate your short URLs</h1>
            <div className=' flex flex-col gap-2 py-5 w-1/2 mx-auto items-center'>
                <input className='border-2 rounded-lg w-full md:w-1/2 p-2 border-purple-500' type="text" placeholder='Enter your URL' value={url} onChange={e => { seturl(e.target.value) }} />
                <input className='border-2 rounded-lg w-full md:w-1/2 p-2  border-purple-500' type="text" placeholder='Enter your preferred short URL text' value={shorturl} onChange={e => { setshorturl(e.target.value) }} />
                <button onClick={() => { generate(),setcopy(false) }} className='bg-purple-800 p-2 rounded-lg text-white'>Generate</button>

                {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link>
                </code>
                    <button className={`${copy?"bg-green-600":"bg-purple-800"} text-white p-2 rounded-lg`} onClick={() => { copyurl(), setcopy(!copy) }}>{copy ? "Copied" : "Copy"}</button>
                </>}
                {!generated && <> <p className='text-center text-red-500 font-semibold'>{Result}</p> 
                </>}


            </div>
        </div>
    )
}

export default Shorten
