"use client"
import Image from "next/image";

export default function Home() {
  console.log("The id is:",process.env.NEXT_PUBLIC_ID)
  console.log("The Secret is:",process.env.NEXT_PUBLIC_SECRET)
  return (
    <div>
      Hey this is home 
      The id is {process.env.NEXT_PUBLIC_ID} and secret is {process.env.NEXT_PUBLIC_SECRET} and name is {process.env.NEXT_PUBLIC_NAME}
    </div>
  );
}
