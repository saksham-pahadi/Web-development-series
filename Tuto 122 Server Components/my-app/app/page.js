// "use client"
// import { useState, useEffect } from "react";
import fs from "fs/promises"
import Navbar from "@/component/Navbar"
import Counter from "@/component/Counter"
export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("Hey Saksham..")
  let a = fs.readFile(".gitignore")
  a.then(e => { console.log(e.toString()) })
  return (

    <div className="text-center flex flex-col items-center m-10">
      <Navbar />
      <Counter />
    </div>
  );
}
