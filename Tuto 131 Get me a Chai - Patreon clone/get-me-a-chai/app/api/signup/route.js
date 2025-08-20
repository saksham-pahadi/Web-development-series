import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectDB from "@/db/connectDb";
import User from "@/models/User";
import mongoose from "mongoose";

// ⚠️ In-memory DB (replace with real DB)
let users = [
    { id: 1, email: "admin@example.com", password: "$2b$10$...", role: "admin" },
    { id: 2, email: "user@example.com", password: "$2b$10$...", role: "user" }
];

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;
        console.log(email)
        console.log(password)

        if (!email || !password) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        await connectDB()
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
             console.log(existingUser)
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // const hashedPassword = await bcrypt.hash(password, 10);
        console.log(password)
        const newUser = await User.create({
            email,
            password: password,
            username: email.split("@")[0],
            role: "user"
        })


        // await User.create(newUser);
console.log("User created successfully")
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
    finally {
        await mongoose.disconnect()
    }
}
