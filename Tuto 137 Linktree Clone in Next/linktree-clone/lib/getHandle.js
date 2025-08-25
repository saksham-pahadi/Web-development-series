
import clientPromise from "@/lib/mongodb";
export default async function getHandle({ handle }) {
    const client = await clientPromise;
    const db = client.db("linktree-clone")
    const collection = db.collection("links")
    const item = await collection.findOne({ handle: handle })

    return item;
}