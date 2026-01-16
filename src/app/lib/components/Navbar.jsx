"use client";
import React, { useContext, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import logo from '../../../assets/Letter-R-Logo-Template-Design-icon-Graphics-9132151-1-1-580x387-removebg-preview.png'
import Image from "next/image";
import { context } from "@/context/ContextProvider";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const ans = useContext(context)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-[#0a0213]/80 backdrop-blur-md border-b border-purple-500/10 shadow-lg" : "bg-transparent border-b border-transparent"}`}>
            <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

                <div className="text-2xl font-bold tracking-wide">
                    <a href="#home">
                        <Image src={logo} width={80} height={70} className="w-[60px] sm:w-[70px] object-contain hover:scale-105 transition-transform duration-300" alt="logo"></Image>
                    </a>
                </div>

                <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-300">
                    {["Skill", "Project", "About", "Contact"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 duration-300 cursor-pointer transition-colors relative group">
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    <a href="https://drive.google.com/file/d/188JmJQhNTj-kGoTjHyop4Y4yvFcAlyGU/view?usp=sharing" target="_blank">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.3)] transform hover:scale-105 duration-300 transition-all border border-purple-400/20">
                            <FiDownload /> Resume
                        </button>
                    </a>
                </ul>


                <div
                    className="md:hidden text-2xl cursor-pointer text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </div>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[80px] left-0 w-full bg-[#1A0B2E]/95 backdrop-blur-xl flex flex-col items-center gap-8 py-10 md:hidden shadow-2xl border-b border-white/10"
                        >
                            {["Skill", "Project", "About", "Contact"].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-xl font-medium text-gray-200 hover:text-purple-400 duration-200 cursor-pointer">
                                    {item}
                                </a>
                            ))}
                            <button className="flex items-center gap-2 bg-purple-600 px-8 py-3 rounded-full font-bold shadow-lg text-white">
                                <FiDownload /> Download Resume
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

export default Navbar;
