"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [text, settext] = useState("")
  const colors=["rose", "emerald","slate","zinc", "cyan", "lime", "purple", "orange"];

     let color = colors[Math.floor(Math.random()*colors.length)]
     
  const createTree = () => {
    router.push(`/${text}`);

  }

  return (
    <main>


      <section className="min-h-[105vh] flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:w-[50vw] items-center mt-40 mx-20 md:mx-10">
          <p className="text-7xl text-[#d2e823] text-center md:text-start font-extrabold">Everything you are. In one, simple link in bio.</p>
          <p className="text-xl text-center md:text-start font-semibold mt-5">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex mt-10 gap-3 ">
            <input value={text} onChange={(e) => { settext(e.target.value) }} className="bg-white p-2 rounded-lg text-gray-800 font-medium" type="text" placeholder="Enter your handle" />
            <button onClick={() => { createTree() }} className="bg-pink-200 text-black text-md font-semibold p-3 rounded-full">Claim your Linktree</button>
          </div>
        </div>
        <div className="relative h-[80vh] w-[40vw] my-10 md:mt-40">
          <img className="h-[70vh] shadow-lg shadow-pink-500/50 hover:h-[71vh] transition-h duration-300 ease-in-out" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d34fd61cafc69082e6a1_67afdf4120d4f92fc24662af_Border-16.png" alt="" />
          <img className="h-[50vh] absolute bottom-7 shadow-lg shadow-orange-500/50 rounded-2xl right-60 hover:h-[51vh] transition-h duration-300 ease-in-out" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d34d3aee8ea3b2875ae4_67afed859b0ad6a3fb3ef173_Border-25.png" alt="" />
          <img className="h-[30vh] absolute rounded-lg shadow-lg shadow-neutral-800 hover:h-[31vh] transition-h duration-300 ease-in-out  bottom-13 left-55   md:left-[-10%]" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d35097c8da0d4d992def_67afd53ff67a8cad366e1951_Border-12.png" alt="" />
        </div>
      </section>



      <section className="min-h-[105vh] bg-pink-200 flex flex-col md:flex-row items-center justify-center">
        <div className="relative h-[80vh] w-[40vw] my-10 md:mt-40">
          <img className="h-[70vh] rounded-2xl lg:ml-45 shadow-lg shadow-pink-500/50 hover:h-[71vh] transition-all duration-300 ease-in-out" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d34fd61cafc69082e6a1_67afdf4120d4f92fc24662af_Border-16.png" alt="" />
          <img className="h-[50vh] absolute bottom-7 shadow-lg  shadow-orange-500/50 rounded-2xl lg:right-20 right-60 hover:h-[51vh] transition-h duration-300 ease-in-out" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d34d3aee8ea3b2875ae4_67afed859b0ad6a3fb3ef173_Border-25.png" alt="" />
          <img className="h-[30vh] absolute rounded-lg shadow-lg shadow-neutral-800 hover:h-[31vh] transition-h duration-300 ease-in-out  bottom-13 lg:left-25 left-55   md:left-[-10%]" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d35097c8da0d4d992def_67afd53ff67a8cad366e1951_Border-12.png" alt="" />
        </div>
        <div className="flex flex-col md:w-[50vw] items-center mb-20 mx-20 md:mx-10">
          <p className="text-7xl text-[#502274] text-center md:text-start font-extrabold">Create and customize your Linktree in minutes</p>
          <p className="text-xl text-black text-center md:text-start  mt-5">
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.
          </p>
          <div className="flex mt-10 gap-3 ">

            <button className="bg-[#502274] text-white text-md font-semibold p-3 rounded-full">Get start for free</button>
          </div>
        </div>

      </section>


      <section className="min-h-[105vh] bg-red-900 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:w-[50vw] items-center mt-40 mx-20 md:mx-10">
          <p className="text-7xl text-[#d2e823] text-center md:text-start font-extrabold">Everything you are. In one, simple link in bio.</p>
          <p className="text-xl text-center md:text-start font-semibold mt-5">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex mt-10 gap-3 ">
            <input className="bg-white p-2 rounded-lg text-gray-800 font-medium" type="text" placeholder="linktr.ee/" />
            <button className="bg-pink-200 text-black text-md font-semibold p-3 rounded-full">Claim your Linktree</button>
          </div>
        </div>
        <div className="relative h-[80vh] w-[40vw] my-10 md:mt-40">
          <img className="h-[70vh] shadow-lg shadow-pink-500/50 hover:h-[71vh] transition-h duration-300 ease-in-out" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d34fd61cafc69082e6a1_67afdf4120d4f92fc24662af_Border-16.png" alt="" />
          <img className="h-[50vh] absolute bottom-7 shadow-lg shadow-orange-500/50 rounded-2xl right-60 hover:h-[51vh] transition-h duration-300 ease-in-out" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d34d3aee8ea3b2875ae4_67afed859b0ad6a3fb3ef173_Border-25.png" alt="" />
          <img className="h-[30vh] absolute rounded-lg shadow-lg shadow-neutral-800 hover:h-[31vh] transition-h duration-300 ease-in-out  bottom-13 left-55   md:left-[-10%]" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d35097c8da0d4d992def_67afd53ff67a8cad366e1951_Border-12.png" alt="" />
        </div>
      </section>



      <section className="min-h-[105vh] bg-amber-100 flex flex-col md:flex-row items-center justify-center">
        <div className="relative h-[80vh] w-[40vw] my-10 md:mt-40">
          <img className="h-[70vh] rounded-2xl lg:ml-45 shadow-lg shadow-pink-500/50 hover:h-[71vh] transition-all duration-300 ease-in-out" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d34fd61cafc69082e6a1_67afdf4120d4f92fc24662af_Border-16.png" alt="" />
          <img className="h-[50vh] absolute bottom-7 shadow-lg  shadow-orange-500/50 rounded-2xl lg:right-20 right-60 hover:h-[51vh] transition-h duration-300 ease-in-out" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d34d3aee8ea3b2875ae4_67afed859b0ad6a3fb3ef173_Border-25.png" alt="" />
          <img className="h-[30vh] absolute rounded-lg shadow-lg shadow-neutral-800 hover:h-[31vh] transition-h duration-300 ease-in-out  bottom-13 lg:left-25 left-55   md:left-[-10%]" src="https://cdn.prod.website-files.com/6667e16e76bdd11f17dcf374/6813d35097c8da0d4d992def_67afd53ff67a8cad366e1951_Border-12.png" alt="" />
        </div>
        <div className="flex flex-col md:w-[50vw] items-center mb-20 mx-20 md:mx-10">
          <p className="text-7xl text-[#502274] text-center md:text-start font-extrabold">Create and customize your Linktree in minutes</p>
          <p className="text-xl text-black text-center md:text-start  mt-5">
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.
          </p>
          <div className="flex mt-10 gap-3 ">

            <button className="bg-[#502274] text-white text-md font-semibold p-3 rounded-full">Get start for free</button>
          </div>
        </div>

      </section>





    </main>
  );
}
