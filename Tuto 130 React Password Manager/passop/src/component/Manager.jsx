import { stringify } from 'postcss'
import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Manager = () => {
    const hideIcon = useRef()
    const passwordInput = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("password")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])




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


    const savePassword = () => {
        console.log(form)
        if(form.site==""||form.username==""||form.password==""){
            alert("Feilds are blank")
        }
        else{

            setpasswordArray([...passwordArray, form])
            localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
            console.log([...passwordArray, form])
        }

    }


    return (

        <>
            <div className="text-center">
                <h1 className='text-4xl font-bold'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='text-lg font-bold'>Your Own Password Manager</p>
                <div className="flex flex-col p-4 gap-1 ">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='w-full bg-white rounded-sm border-2 border-green-500 text-black px-1 outline-none' type="text" name='site' id='site' />
                    <div className="flex justify-between flex-wrap">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='w-498/1000 bg-white rounded-sm border-2 border-green-500 text-black px-1 outline-none ' type="text" name='username' id='username' />
                        <div className="relative flex w-498/1000 bg-white rounded-sm border-2 border-green-500 px-1">

                            <input value={form.password} onChange={handleChange} ref={passwordInput} placeholder='Enter Password' className='text-black w-full outline-none' type="password" name='password' id='password' />
                            <span className='absolute right-2 text-black cursor-pointer' onClick={showPassword}><img ref={hideIcon} src="/icon/hide.svg" alt="" /></span>
                        </div>

                    </div>
                    <button onClick={savePassword} className='flex items-center justify-center m-2 mx-auto p-2 gap-1 rounded-sm bg-green-500 hover:bg-green-600 cursor-pointer '>
                        <p >Add Password</p>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover"
                            colors="primary:#ffffff">
                                
                        </lord-icon>
                    </button>


                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length===0 && <div className='text-xl py-4 w-full bg-green-200 text-black'>No Password to show</div>}
                    {passwordArray.length!=0 &&<table className="table-auto w-9/10 rounded-xl overflow-hidden m-auto">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-200 text-black'>
                            {passwordArray.map((item,index)=>{
                                return <tr key={index}>
                                <td className='py-2 border border-white text-center w-32'><a href={"https://"+item.site} target='_blank'>{item.site}</a></td>
                                <td className='py-2 border border-white text-center w-32'>{item.username}</td>
                                <td className='py-2 border border-white text-center w-32'>{item.password}</td>
                            </tr>
                            })}
                            
                           
                        </tbody>
                    </table>}
                </div>
            </div >

        </>
    )
}

export default Manager
