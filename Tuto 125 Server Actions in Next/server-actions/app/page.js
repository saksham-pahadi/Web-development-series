"use client"
import {submitAction} from "@/actions/form"
import { useRef } from "react";

export default function Home() {

  let form = useRef()
  
  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={form} action={(e)=>{submitAction(e)}} className="flex flex-col gap-5 items-center">
        <div className="flex gap-5 items-center">
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black px-2 rounded-sm bg-white" type="text" />
        </div>
        <div className="flex gap-5 items-center">
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black px-2 rounded-sm bg-white" type="text" />
        </div>
        <div>
        <button className="bg-slate-500 p-2 rounded-xl">Submit</button>
        </div>
      </form>
    </div>
  );
}
