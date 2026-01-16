"use client"
import { Geist, Geist_Mono, Preahvihear } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/context/ContextProvider";
import CustomCursor from "./lib/components/CustomCursor";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-preahvihear",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});





export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${preahvihear.variable}`}>
      <body className="antialiased font-sans bg-[#0a0213] text-gray-100 selection:bg-purple-500/30 selection:text-purple-200">
        <ContextProvider>
          <CustomCursor />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
