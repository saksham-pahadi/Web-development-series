"use client"
import Link from 'next/link'
import React from 'react'

import { useState } from 'react'
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();
    const showNavbar = ["/", "/generate"].includes(pathname);
    const [open, setopen] = useState(false)
    return (<>
        {showNavbar && <div className='fixed top-0 left-0 w-full z-50'>


            <nav className="bg-white border-1  text-black rounded-full m-10 lg:mx-15">
                <div className="max-w-full flex flex-wrap items-center justify-between mx-auto lg:h-25 py-4 px-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" className="h-4 lg:h-7 ml-3" alt="Flowbite Logo" />
                    </Link>


                    <div className={`items-center absolute md:static  left-0 justify-between ${open ? "top-25" : "bottom-40"} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
                            <li>
                                <Link href="#" onClick={() => { setopen(!open) }} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-300 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Products</Link>
                            </li>
                            <li>
                                <Link href="/generate" onClick={() => { setopen(!open) }} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-300 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Templates</Link>
                            </li>
                            <li>
                                <Link href="#" onClick={() => { setopen(!open) }} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-300 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</Link>
                            </li>
                            <li>
                                <Link href="#" onClick={() => { setopen(!open) }} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-300 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Learn</Link>
                            </li>
                            <li>
                                <Link href="#" onClick={() => { setopen(!open) }} className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-300 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
                            </li>
                        </ul>
                    </div>




                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
                        <button type="button" className="text-black bg-blue-700 hover:bg-blue-800 font-bold rounded-lg text-sm  px-4 py-2 text-center dark:bg-gray-200 dark:hover:bg-gray-300 lg:h-15 lg:px-5 lg:text-lg ">Log in</button>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-bold   rounded-full text-sm px-4 py-2 text-center dark:bg-gray-800 dark:hover:bg-gray-700 lg:h-15 lg:text-lg  ">Sign up free</button>

                        <button onClick={() => { setopen(!open) }} data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden    dark:text-black-400 " aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>


                </div>
            </nav>



        </div>}
    </>)
}

export default Navbar
