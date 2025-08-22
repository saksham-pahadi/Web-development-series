import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 m-5 ">
        <div className="font-bold text-3xl sm:text-5xl flex items-center gap-2">Get me a chai <span className="flex items-center"><img className="h-9 sm:h-12" src="tea.gif" alt="" /></span></div>
        <p className="text-center text-wrap">
          A crowdfunding platform for creators. Get funded by your fans and followers.
        </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start now</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>
      </div>



      




      <div className="bg-white h-[2px] opacity-10"></div>




      <div className="mx-auto flex flex-col gap-5 m-5">
        <h2 className="text-2xl font-bold text-center">Learn more about us</h2>
        <div className="flex flex-col sm:flex-row gap-5 justify-around">
          <div className=" flex justify-center items-center flex-col item space-y-2  text-center text-wrap sm:w-1/3">
            <lord-icon
              src="https://cdn.lordicon.com/xvmmqwjv.json"
              trigger="hover"
              stroke="light"
              style={{ height: 70, width: 70 }}>
            </lord-icon>
            <p className="font-bold">Large Community</p>
            <p className="font-bold">Discuss about upcoming projects with supporters</p>
          </div>
          <div className=" flex justify-center items-center flex-col item space-y-2 text-center text-wrap sm:w-1/3">
            <lord-icon
              src="https://cdn.lordicon.com/kkdnopsh.json"
              trigger="hover"
              style={{ height: 70, width: 70 }}>
            </lord-icon>
            <p className="font-bold">Fans want to help</p>
            <p className="font-bold">Your fans are available to help you</p>
          </div>
          <div className=" flex justify-center items-center flex-col item space-y-2 text-center text-wrap sm:w-1/3">
            <lord-icon
              src="https://cdn.lordicon.com/xjkryxnf.json"
              trigger="hover"
              stroke="light"
              style={{ height: 70, width: 70 }}>
            </lord-icon>
            <p className="font-bold">Create Network</p>
            <p className="font-bold">Collab with Qnuque Ideas</p>
          </div>

        </div>
      </div>

      <div className="bg-white h-[3px] opacity-10"></div>







      <section className="text-gray-200 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded-2xl" alt="hero" src="Network.jpg" />
          </div>
        </div>
      </section>

    </>
  );
}
