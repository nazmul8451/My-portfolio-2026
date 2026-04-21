"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "./../../../assets/Letter-R-Logo-Template-Design-icon-Graphics-9132151-1-1-580x387-removebg-preview.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".footer-col",
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={footerRef} className="mt-[50px]">
            <footer className="bg-[#1A0B2E] text-gray-300 py-10 px-6 sm:px-1">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-6 gap-8 items-start">

               
                    <div className="footer-col sm:col-span-1 flex flex-col items-start">
                        <Image src={logo} width={100} height={15} alt="logo" />
                        <p className="text-sm text-gray-400 mt-2">
                            Building beautiful, high-performance Flutter mobile apps.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h3 className="text-white font-semibold mb-3">About</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Flutter App Developer</li>
                            <li>Passionate about UI/UX</li>
                            <li>Cross-Platform Expertise</li>
                            <li>Continuous Learner</li>
                        </ul>
                    </div>

               
                    <div className="footer-col">
                        <h3 className="text-white font-semibold mb-3">Projects</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Flutter E-Commerce App</li>
                            <li>Chat & Messaging App</li>
                            <li>Task Management App</li>
                            <li>Portfolio App</li>
                        </ul>
                    </div>

               
                    <div className="footer-col">
                        <h3 className="text-white font-semibold mb-3">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Flutter App Development</li>
                            <li>UI/UX Design in Flutter</li>
                            <li>Firebase Integration</li>
                            <li>App Deployment & Maintenance</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="text-white font-semibold mb-3">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>rimon1234567@gmail.com</li>
                            <li>
                                <a href="https://www.fiverr.com/rimonislam371/do-website-and-mobile-app-development-ios-app-development-as-flutter-developer?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=ae17ca95ed344471a42f31afbeff1c18&context=recommendation&pckg_id=1&pos=1&context_alg=recently_viewed&seller_online=true&imp_id=47004e4c-e398-4ba2-9fa3-77e650715786" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                                    Hire for Projects
                                </a>
                            </li>
                            <li>Collaborate on Open Source</li>
                            <li>Let’s Build Together</li>
                        </ul>
                    </div>

           
                    <div className="footer-col sm:col-span-1 flex sm:justify-end items-center gap-5 mt-4 sm:mt-0">
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
