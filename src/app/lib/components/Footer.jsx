"use client";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "./../../../assets/Letter-R-Logo-Template-Design-icon-Graphics-9132151-1-1-580x387-removebg-preview.png";

const Footer = () => {
    return (
        <div className="mt-[50px]">
            <footer className="bg-[#1A0B2E] text-gray-300 py-10 px-6 sm:px-1">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-6 gap-8 items-start">

               
                    <div className="sm:col-span-1 flex flex-col items-start">
                        <Image src={logo} width={100} height={15} alt="logo" />
                        <p className="text-sm text-gray-400 mt-2">
                            Building beautiful, high-performance Flutter mobile apps.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-3">About</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Flutter App Developer</li>
                            <li>Passionate about UI/UX</li>
                            <li>Cross-Platform Expertise</li>
                            <li>Continuous Learner</li>
                        </ul>
                    </div>

               
                    <div>
                        <h3 className="text-white font-semibold mb-3">Projects</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Flutter E-Commerce App</li>
                            <li>Chat & Messaging App</li>
                            <li>Task Management App</li>
                            <li>Portfolio App</li>
                        </ul>
                    </div>

               
                    <div>
                        <h3 className="text-white font-semibold mb-3">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Flutter App Development</li>
                            <li>UI/UX Design in Flutter</li>
                            <li>Firebase Integration</li>
                            <li>App Deployment & Maintenance</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-3">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>rimon1234567@gmail.com</li>
                            <li>Hire for Projects</li>
                            <li>Collaborate on Open Source</li>
                            <li>Let’s Build Together</li>
                        </ul>
                    </div>

           
                    <div className="sm:col-span-1 flex sm:justify-end items-center gap-5 mt-4 sm:mt-0">
                        <a
                            href="https://github.com/nazmul8451"
                            className="text-gray-400 hover:text-white text-xl transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white text-xl transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/rimon.islam.232860"
                            className="text-gray-400 hover:text-white text-xl transition"
                        >
                            <FaFacebook />
                        </a>
                       
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-5 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} rimon.dev — All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
