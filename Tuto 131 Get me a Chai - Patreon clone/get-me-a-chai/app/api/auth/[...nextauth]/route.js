import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from 'mongoose'
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDb'
import bcrypt from "bcrypt";

export const authoptions = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log(credentials)
                await connectDB()
                const user = await User.findOne({email:credentials.email});
                if (!user){ 
                    // throw new Error("User not found");
                    console.log("User not found")
                }

                // const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
                if (credentials.password!=user.password){ 
                    // throw new Error("Invalid password");
                    console.log("Invalid password")
                } 

                return { id: user.id, email: user.email};
            }
        }),
        // OAuth authentication providers...
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET
        // }),

        // // Passwordless / email sign in
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github") {
                await connectDB()
                const currentUser = await User.findOne({ email: email })
                console.log(!currentUser)
                if (!currentUser) {
                    const newUser = await User.create({
                        email: user.email,
                        profilepic:user.image,
                        username: user.email.split("@")[0],
                        name: user.name,
                        role: "user",
                        password:"none"
                    })

                }
                return true
            }
            if (account.provider === "credentials") {
                console.log(credentials)
                await connectDB()
                const currentUser = await User.findOne({ email: credentials.email })
                console.log(currentUser)
                // if (!currentUser) {
                //     const newUser = await User.create({
                //         email,
                //         password: hashedPassword,
                //         username: email.split("@")[0],
                //         role: "user"
                //     })

                // }
                return true
            }
        },
        async session({ session, user, token }) {
            const dbUser = await User.findOne({ email: session.user.email })
            session.user.name = dbUser.name
            console.log(dbUser)
            return session
        },
    }


})

export { authoptions as GET, authoptions as POST }
