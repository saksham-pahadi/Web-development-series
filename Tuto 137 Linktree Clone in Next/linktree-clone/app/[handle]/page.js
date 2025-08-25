
import Link from "next/link";

import clientPromise from "@/lib/mongodb";

export default async function handler({ params }) {

    const p = await params;
    
    const handle = p.handle;



    const client = await clientPromise;
    const db = client.db("linktree-clone")
    const collection = db.collection("links")
    const item = await collection.findOne({ handle: handle })

    if (!item) {
        return (
            <div className={` bg-purple-500 text-white min-h-screen flex items-center justify-center`}>
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">User Not Found</h1>
                    <p className="mb-4">The handle you are looking for does not exist.</p>
                    <Link href="/" className="bg-white text-purple-500 px-4 py-2 rounded-lg font-semibold">Go Back Home</Link>
                </div>
            </div>
        )
    }

    


    return (
        <div className={` bg-purple-500 text-white `}>
            <div className="min-h-screen  mx-auto w-4/5  md:w-4/5 lg:w-3/5 sm:w-full  flex flex-col items-center justify-start">
                <div className=" lg:w-1/2 w-full sm:w-1/2 my-5 flex items-center justify-between">
                    <span>
                        <Link href={"/"}>

                            <img className="h-10 rounded-full" src="linktree.png" alt="" />
                        </Link>
                    </span>
                </div>
                <div className={`photo  border-4 border-purple-700 rounded-full`}>

                    <img className="h-50 w-50 rounded-full" src={item.picture} alt="" />
                </div>
                <span className="font-bold text-xl cursor-default">@{item.handle}</span>
                <p className="w-full font-serif sm:w-1/2 text-center cursor-default">{item.bio}</p>
                {item.links.map((li, index) => {
                    return (<Link className={`mt-2 bg-purple-800 font-semibold rounded-xl w-full sm:w-1/2 text-center py-2 hover:bg-purple-700 transition-all duration-150`} key={index} href={li.link}> {li.linktext}</Link>)

                })}
            </div>
        </div>
    )
}
