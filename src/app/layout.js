"use client"
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono, Preahvihear } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/context/ContextProvider";
import CustomCursor from "./lib/components/CustomCursor";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

// ScrollManager to clean up GSAP ScrollTriggers and update Lenis on route changes
const ScrollManager = () => {
  const pathname = usePathname();
  const lenis = useLenis();
  const lastPathname = useRef(pathname);

  // Handle route change cleanup and resets
  useEffect(() => {
    if (lastPathname.current !== pathname) {
      lastPathname.current = pathname;

      // Kill all existing ScrollTriggers to prevent layout locks
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // Reset and wake up Lenis on route change
      if (lenis) {
        lenis.start();
        lenis.scrollTo(0, { immediate: true });
        lenis.resize();
      }

      // Refresh ScrollTriggers after the DOM updates
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [pathname, lenis]);

  // Handle initial page load and resize check
  useEffect(() => {
    if (lenis) {
      lenis.start();
      lenis.resize();
    }
  }, [lenis]);

  return null;
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${preahvihear.variable}`}>
      <body className="antialiased font-sans bg-[#0a0213] text-gray-100 selection:bg-purple-500/30 selection:text-purple-200">
        <ReactLenis root>
          <ScrollManager />
          <ContextProvider>
            <CustomCursor />
            {children}
          </ContextProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
