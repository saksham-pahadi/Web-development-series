import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid md:grid-cols-2 h-[80vh] md:h-[50vh]">


        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl text-center font-bold">
            The best URL Shortener in the Market
          </p>
          <p className="text-center px-5">
            We are the most straightforword URL Shortener in the World. Most of the url shorteners will track you to give your details for login. We understand your needs and hence we have created this URL shortener.
          </p>
          <div className="flex gap-2">

          
          <Link href={"/shorten"}>

            <button type="button" className="md:mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Try now</button>
          </Link>

          <Link href={"/github"}>

            <button type="button" className="md:mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Github</button>
          </Link>
          </div>
        </div>


        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} fill={true}></Image>

        </div>

      </section>
    </main>
  );
}
