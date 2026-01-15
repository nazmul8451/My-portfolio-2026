"use client"
import { Geist, Geist_Mono, Preahvihear } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/context/ContextProvider";

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
    <html lang="en" data-arp="" className={`${preahvihear.variable}`}>

      <body className="antialiased font-sans">
        <div className="bg-[#0a0213] min-h-screen font-[var(--font-preahvihear)]">
          <ContextProvider>
            {children}
          </ContextProvider>
        </div>
      </body>
    </html>
  );
}
