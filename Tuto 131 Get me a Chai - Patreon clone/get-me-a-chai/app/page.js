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
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start now</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>
      </div>



      <div className="bg-white h-[2px] opacity-10"></div>

      





      <div className="mx-auto flex flex-col gap-5 m-5">
        <h2 className="text-2xl font-bold text-center">Your fans can buy you a chai</h2>
        <div className="flex flex-col sm:flex-row gap-5 justify-around">
          <div className=" flex justify-center items-center flex-col item space-y-2  text-center text-wrap sm:w-1/3">
            <lord-icon
              src="https://cdn.lordicon.com/xvmmqwjv.json"
              trigger="hover"
              stroke="light"
              style={{ height: 70, width: 70 }}>
            </lord-icon>
            <p className="font-bold">Fans want to help</p>
            <p className="font-bold">Your fans are available to help you</p>
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
            <p className="font-bold">Fans want to help</p>
            <p className="font-bold">Your fans are available to help you</p>
          </div>

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
            <p className="font-bold">Fans want to help</p>
            <p className="font-bold">Your fans are available to help you</p>
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
            <p className="font-bold">Fans want to help</p>
            <p className="font-bold">Your fans are available to help you</p>
          </div>

        </div>
      </div>
     
    </>
  );
}
