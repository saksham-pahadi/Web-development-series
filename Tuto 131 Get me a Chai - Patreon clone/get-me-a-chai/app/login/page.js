"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from 'next/navigation'

const Login = () => {
    const { data: session } = useSession()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [form, setform] = useState({ email: "", password: "" })
    const [error, setError] = useState("");
    const [already, setalready] = useState(true)



    const handleChange = (e) => {
        console.log(e.target)
        setform({ ...form, [e.target.name]: e.target.value })

    }



    const handleLogin = async (e) => {
        e.preventDefault();
        
        await signIn("credentials", {
            email:form.email.toLowerCase(),
            password:form.password,
            callbackUrl: "/dashboard"
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        const data = await res.json();
        console.log(data);

        if (res.ok) {
            setalready(true)
            // redirect(`/[${data.username}]`);
        } else {
            
            setError(data.error);
            console.log(error)
        }
    };

    if (session) {
        redirect('/')
    }
    else {


        return (<>
            <div className='flex items-center justify-center h-[80vh]'>


                {!session && <div className='flex justify-center items-center bg-transparent backdrop-blur-sm rounded-2xl md:w-1/2 md:m-auto'>
                    <div className='flex flex-col items-center m-5'>
                        <h1 className='font-bold text-3xl text-center m-5'>Login to get your fan support</h1>
                        <div className="flex justify-center items-center h-auto">

                            {already &&
                                <form onSubmit={handleLogin} className="p-6 bg-slate-600 rounded-xl shadow-md">
                                    <h1 className="text-xl font-bold mb-4">Login</h1>
                                    <input className="border p-2 mb-2 w-full" name='email' placeholder="Email"
                                        value={form.email} onChange={handleChange} />
                                    <input className="border p-2 mb-2 w-full" name='password' type="text" placeholder="Password"
                                        value={form.password} onChange={handleChange} />
                                    <button type='submit' className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
                                    <div className='flex gap-1 my-2 justify-end'>
                                        <p>Didn't have Account ?</p><button className='cursor-pointer' onClick={() => { setalready(!already) }}> Sign Up</button>
                                    </div>
                                </form>

                            }

                            {!already &&
                                <form onSubmit={handleSignup} className="p-6 bg-slate-600 rounded-xl shadow-md">
                                    <h1 className="text-xl font-bold mb-4">Sign Up</h1>
                                    <input className="border p-2 mb-2 w-full" name='email' placeholder="Email"
                                        value={form.email} onChange={handleChange} />
                                    <input className="border p-2 mb-2 w-full" name='password' type="text" placeholder="Password"
                                        value={form.password} onChange={handleChange} />
                                    <button type='submit' className="bg-blue-600 text-white px-4 py-2 rounded w-full">Sign Up</button>
                                    <div className='flex gap-1 my-2 justify-end'>
                                        <p>Already have Account ?</p><button className='cursor-pointer' onClick={() => { setalready(!already) }} > Login</button>
                                    </div>
                                </form>

                            }





                        </div>
                        <p className='p-5'>OR</p>
                        <div className="flex flex-col gap-2 p-5">



                            <button
                            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <img className="h-6 w-6 mr-2" src="google.svg" alt="" />
                            <span>Continue with Google</span>
                        </button>


                        


                            <button onClick={() => { signIn("github") }}
                                className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <img className="h-6 w-6 mr-2" src="github.svg" alt="" />

                                <span>Continue with Github</span>
                            </button>

                            {/* 
                        <button
                            className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="-1.5 0 20 20" version="1.1">
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="#000000">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path
                                                d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                                                id="apple-[#173]">

                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                            <span>Continue with Apple</span>
                        </button> */}


                        </div>

                    </div>
                </div>}


            </div>





        </>
        )
    }
}

export default Login
