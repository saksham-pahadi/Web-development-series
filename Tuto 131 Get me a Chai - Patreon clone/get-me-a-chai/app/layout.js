import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me a chai - Fund your projects with chai.",
  description: "This website is a crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
      >

        <SessionWrapper>


          <Navbar />
          <div className="min-h-[83vh]">

            {children}
          </div>
          <Footer />
          <script src="https://cdn.lordicon.com/lordicon.js"></script>
        </SessionWrapper>
      </body>
    </html>
  );
}
