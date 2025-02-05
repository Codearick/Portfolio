"use client"
import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer"
import Head from "next/head";

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  <Head>
    <meta name="Profile" content="width=device-width, initial-scale=1" />
    <title>Home profile</title>
  </Head>

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
      >

        <NavBar />


          {children}


        <Footer />


      </body>
    </html >
  );
}
