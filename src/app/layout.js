import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer"

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rohan's Portfolio",
  description: "Modern Portfolio App",
};

export default function RootLayout({ children }) {
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
