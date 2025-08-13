import { stringify } from 'postcss'
import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const hideIcon = useRef()
    const passwordInput = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    const getPasswords = async () => {
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json()
        if (passwords) {
            console.log(passwords)
            setpasswordArray(passwords)
        }

    }


    useEffect(() => {
        getPasswords()

    }, [])


    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        toast('📋Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }


    const showPassword = () => {
        let Url = hideIcon.current.src
        let SRC = Url.split("/icon/")[1];
        if (SRC === "unhide.svg") {
            hideIcon.current.src = `${Url.split("unhide")[0]}hide.svg`
            passwordInput.current.type = "password";
        }
        else {
            hideIcon.current.src = `${Url.split("hide")[0]}unhide.svg`
            passwordInput.current.type = "text";

        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }


    const savePassword = async () => {

        // await fetch("http://localhost:3000/", {
        //     method: "DELETE", headers: { "content-type": "application/json" },
        //     body: JSON.stringify({ id: form.id })
        // })
        console.log(form)
        let uuid = uuidv4()

        if (form.site == "" || form.username == "" || form.password == "") {
            alert("Feilds are blank")
        }
        else {

            setpasswordArray([...passwordArray, { ...form, id: uuid }])
            await fetch("http://localhost:3000/", {
                method: "POST", headers: { "content-type": "application/json" },
                body: JSON.stringify({ ...form, id: uuid })
            })

            setform({ site: "", username: "", password: "" ,id:""})
            toast('📥Saved Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }



    }
    const deletePassword = async (id,edit="flase") => {
        console.log("deleting password with id:", id)
        console.log(edit)
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        // localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        await fetch("http://localhost:3000/", {
            method: "DELETE", headers: { "content-type": "application/json" },
            body: JSON.stringify({ id })
        })

        if(edit=="flase"){

            toast('🗑️Deleted Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }


    }
    const editPassword = (id) => {
        if (form.site !== "" || form.username !== "" || form.password !== "") {
            alert("Save this first")
        }
        else {

            console.log("editing password with id:", id)
            setform(passwordArray.filter(item => item.id === id)[0])
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            deletePassword(id,"true")
        }

    }


    return (

        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="text-center min-h-[77vh]">
                <h1 className='text-4xl font-bold'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='text-lg font-bold'>Your Own Password Manager</p>
                <div className="flex flex-col p-4 gap-1 ">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='w-full bg-white rounded-sm border-2 border-green-500 text-black px-1 outline-none h-10' type="text" name='site' id='site' />
                    <div className="flex w-full gap-1  justify-between">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='w-498/1000 bg-white rounded-sm border-2 border-green-500 text-black px-1 outline-none  h-10 ' type="text" name='username' id='username' />
                        <div className="relative flex items-center w-498/1000 bg-white rounded-sm border-2 border-green-500 px-1 h-10">

                            <input value={form.password} onChange={handleChange} ref={passwordInput} placeholder='Enter Password' className='text-black w-full outline-none ' type="password" name='password' id='password' />
                            <span className='absolute right-2 text-black cursor-pointer' onClick={showPassword}><img ref={hideIcon} src="/icon/hide.svg" alt="" /></span>
                        </div>

                    </div>
                    <button onClick={savePassword} className='flex items-center justify-center m-2 mx-auto p-2 gap-1 rounded-sm bg-green-500 hover:bg-green-600 cursor-pointer '>
                        <p >Save</p>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover"
                            colors="primary:#ffffff">

                        </lord-icon>
                    </button>


                </div>

                <div className="passwords ">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='text-xl py-4 w-full bg-green-200 text-black'>No Password to show</div>}
                    {passwordArray.length != 0 && <div className=" rounded-xl w-9/10 m-auto">
                        <div className='flex justify-around bg-green-700 w-10/10  m-auto rounded-t-xl overflow-hidden'>
                            <div className='w-3/10 border-r text-center p-3 px-1 border-white'>Site</div>
                            <div className='w-3/10 border-x text-center p-3 px-1 border-white'>Username</div>
                            <div className='w-3/10 border-l text-center p-3 px-1 border-white'>Password</div>
                            <div className='w-1/10 border-l text-center p-3 px-1 border-white'>Actions</div>
                        </div>
                        <div className='bg-green-200 rounded-b-xl text-black w-10/10 m-auto overflow-hidden'>
                            {passwordArray.map((item, index) => {
                                return <div key={index} className='flex justify-around w-10/10 border border-white '>
                                    <div className='flex justify-between items-center  p-2 py-3 border-x border-white text-center w-3/10 '>
                                        <a className='overflow-x-scroll no-scrollbar' href={"https://" + item.site} target='_blank'>{item.site}</a>

                                        <div className='cursor-pointer ' title="copy" onClick={() => { copyText(item.site) }}>

                                            <lord-icon
                                                src="https://cdn.lordicon.com/hmpomorl.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </div>

                                    </div>
                                    <div className='flex justify-between items-center p-2 py-3 border-x border-white text-center w-3/10'>
                                        <div className="overflow-x-scroll no-scrollbar">

                                            {item.username}
                                        </div>
                                        <div className='cursor-pointer' title="copy" onClick={() => { copyText(item.username) }}>

                                            <lord-icon
                                                src="https://cdn.lordicon.com/hmpomorl.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </div>
                                    </div>
                                    <div className='flex border-x justify-between items-center p-2 py-3  border-white text-left w-3/10'>
                                        {/* <p className='overflow-x-scroll no-scrollbar'>{item.password} </p> */}
                                        
                                            <input className='outline-none overflow-x-scroll no-scrollbar w-8/10' id={item.id} type="password" value={item.password} readOnly />

                                        <div className='flex gap-1 items-center'>
<span className=' right-2 text-black cursor-pointer' ><img onClick={(e) => {
                                                let Url = e.target.src
                                                console.log(e.target.type)
                                                let SRC = Url.split("/icon/")[1];
                                                let input=document.getElementById(item.id)
                                                if (SRC === "unhide.svg" || input.type=="text") {
                                                    e.target.src = `${Url.split("unhide")[0]}hide.svg`
                                                    // passwordInput.current.type = "password";
                                                    input.type="password"
                                                }
                                                else {
                                                    e.target.src = `${Url.split("hide")[0]}unhide.svg`
                                                    input.type="text"
                                                    // passwordInput.current.type = "text";

                                                }
                                            }} src="/icon/hide.svg" alt="" /></span> 

                                        <div className='cursor-pointer' title="copy" onClick={() => { copyText(item.password) }}>

                                            <lord-icon
                                                src="https://cdn.lordicon.com/hmpomorl.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </div>
                                                    </div>

                                    </div>
                                    <div className='flex border-x items-center border-white py-3 text-left w-1/10'>
                                        <div className='flex items-center w-full justify-around overflow-x-scroll no-scrollbar'>

                                            <div className='cursor-pointer' title="Edit" onClick={() => { editPassword(item.id) }}>

                                                <lord-icon
                                                    src="https://cdn.lordicon.com/exymduqj.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                            <div className='cursor-pointer' title="delete" onClick={() => { deletePassword(item.id) }}>

                                                <lord-icon
                                                    src="https://cdn.lordicon.com/oqeixref.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            })}


                        </div>
                    </div>}
                </div>
            </div >

        </>
    )
}

export default Manager
