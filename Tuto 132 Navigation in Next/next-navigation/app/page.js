"use client"
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams()


  return (<>
    <div>Hey, this is our page</div>
    <div>Name is {searchParams.get('name')} and Address is {searchParams.get('add')}</div>


  </>
  );
}
