"use client";
import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import logo from '../../../assets/Letter-R-Logo-Template-Design-icon-Graphics-9132151-1-1-580x387-removebg-preview.png'
import Image from "next/image";
import { context } from "@/context/ContextProvider";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const ans = useContext(context)
    console.log(ans)

    return (
        <div className="bg-[#1A0B2E]/70 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
            <nav className=" max-w-[1400px]  mx-auto px-4 sm:px-6  py-4 flex items-center justify-between">

                <div className="text-2xl font-bold tracking-wide">
                    <a href="#home">
                        <Image src={logo} width={60} height={50} className="w-[60px] sm:w-[50px] object-contain" alt="logo"></Image>
                    </a>
                </div>

                <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-300">
                    <a href="#skill" className="hover:text-purple-400 duration-300 cursor-pointer transition-colors">Skill</a>
                    <a href="#project" className="hover:text-purple-400 duration-300 cursor-pointer transition-colors">Project</a>
                    <a href="#about" className="hover:text-purple-400 duration-300 cursor-pointer transition-colors">About</a>
                    <a href="#contact" className="hover:text-purple-400 duration-300 cursor-pointer transition-colors">Contact</a>
                    <a href="https://drive.google.com/file/d/188JmJQhNTj-kGoTjHyop4Y4yvFcAlyGU/view?usp=sharing" target="_blank">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-5 py-2 rounded-full shadow-lg shadow-purple-500/20 transform hover:scale-105 duration-300 transition-all">
                            <FiDownload /> Download Resume
                        </button></a>
                </ul>


                <div
                    className="md:hidden text-2xl cursor-pointer text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <FaTimes /> : <FaBars />}
                </div>


                {open && (
                    <div className="absolute top-[72px] left-0 w-full bg-[#1A0B2E]/95 backdrop-blur-xl flex flex-col items-center gap-8 py-10 md:hidden shadow-2xl border-b border-white/10 animate-in slide-in-from-top-5 duration-300">
                        <a href="#skill" onClick={() => setOpen(false)} className="text-xl hover:text-purple-400 duration-200 cursor-pointer">Skill</a>
                        <a href="#project" onClick={() => setOpen(false)} className="text-xl hover:text-purple-400 duration-200 cursor-pointer">Project</a>
                        <a href="#about" onClick={() => setOpen(false)} className="text-xl hover:text-purple-400 duration-200 cursor-pointer">About</a>
                        <a href="#contact" onClick={() => setOpen(false)} className="text-xl hover:text-purple-400 duration-200 cursor-pointer">Contact</a>
                        <button className="flex items-center gap-2 bg-purple-600 px-6 py-2 rounded-full font-bold shadow-lg">
                            <FiDownload /> Download
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
