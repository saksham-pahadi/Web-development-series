import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:"100",
});

export const metadata = {
  title: "Bitlinks - Your trusted URL Shortener",
  description: "Bitlinks helps you shorten your Urls easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}antialiased bg-purple-50`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
