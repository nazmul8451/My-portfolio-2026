"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import TextType from '../../../components/TextType';
import Hero3D from './Hero3D';
import LightRays from '@/components/LightRays';
import gsap from 'gsap';
import rimonImage from '../../../assets/rimon.png';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const buttonsRef = useRef(null);
    const socialRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(textRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
        )
            .fromTo(buttonsRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.5 },
                "-=0.5"
            )
            .fromTo(socialRef.current.children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
                "-=0.3"
            );


        gsap.to(".hero-blob", {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 1
        });

    }, []);

    return (
        <div id="home" className='w-full relative overflow-hidden min-h-screen flex items-center'>

            {/* --- LIVING BACKGROUND --- */}
            <div className="absolute inset-0 -z-20 pointer-events-none w-full h-full">
                <LightRays
                    raysOrigin="top-right"
                    raysColor="#a855f7"
                    raysSpeed={1.0}
                    lightSpread={1.5}
                    rayLength={1.6}
                    pulsating={true}
                    fadeDistance={1.2}
                    followMouse={true}
                    mouseInfluence={0.08}
                    distortion={0.25}
                    className="absolute inset-0 w-full h-full opacity-35"
                />
                <div className="hero-blob absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen opacity-40 will-change-transform"></div>
                <div className="hero-blob absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow will-change-transform" />
                <div className="hero-blob absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen will-change-transform" />

                {/* Seamless transition mask */}
                <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#0a0213] to-transparent"></div>
            </div>

            <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 pt-[100px] pb-12 grid lg:grid-cols-2 gap-20 lg:gap-32 items-center relative z-10">

                {/* Left Side: Text Content */}
                <div className="text-center lg:text-start order-2 lg:order-1 flex flex-col justify-center">
                    <div ref={textRef} className="text-white flex flex-col gap-6 lg:pr-10">

                        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-900/10 backdrop-blur-sm w-fit mx-auto lg:mx-0 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                            <span className="text-purple-300 text-sm font-medium tracking-wide">Available for Work</span>
                        </div>

                        <h1 className="text-4xl lg:text-7xl font-bold leading-tight font-[family-name:var(--font-preahvihear)]">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 filter drop-shadow-[0_0_10px_rgba(192,132,252,0.3)]">Nazmul Islam Rimon</span>
                        </h1>

                        <div className="text-2xl lg:text-4xl text-gray-200 font-semibold h-[40px] lg:h-[60px]">
                            <TextType
                                text={["Flutter Developer", "Mobile Expert", "Problem Solver", "UI/UX Enthusiast",]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                className='text-purple-300'
                                cursorCharacter="|"
                            />
                        </div>

                        <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-[family-name:var(--font-geist-sans)]">
                            Crafting high-performance <span className="text-white font-medium">cross-platform mobile apps</span> with clean code and pixel-perfect design. Let's turn your ideas into reality.
                        </p>

                        {/* Buttons */}
                        <div ref={buttonsRef} className='flex sm:justify-start justify-center items-center mt-6 gap-4'>
                            <a href="https://www.fiverr.com/rimonislam371/do-website-and-mobile-app-development-ios-app-development-as-flutter-developer?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=ae17ca95ed344471a42f31afbeff1c18&context=recommendation&pckg_id=1&pos=1&context_alg=recently_viewed&seller_online=true&imp_id=47004e4c-e398-4ba2-9fa3-77e650715786" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:scale-105 active:scale-95 duration-300 rounded-full font-bold text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] border border-purple-400/20 relative overflow-hidden group">
                                <span className="relative z-10">Hire Me</span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-12 group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            </a>
                            <a href="https://drive.google.com/file/d/1tSDtNTtiAnwEgDxgW8qF3zcd5MqueDav/view?usp=sharing" target="_blank"
                                className="px-8 py-3 border border-gray-700 hover:border-purple-500 hover:text-purple-400 duration-300 rounded-full font-medium text-gray-300 transition-colors bg-white/5 backdrop-blur-sm relative overflow-hidden group">
                                <span className="relative z-10">Download CV</span>
                                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div ref={socialRef} className="flex items-center justify-center lg:justify-start gap-6 mt-8">
                            {[
                                { link: "https://www.facebook.com/rimon.islam.232860", icon: FaFacebookF },
                                { link: "https://github.com/nazmul8451", icon: FaGithub },
                                { link: "https://linkedin.com/", icon: FaLinkedinIn }
                            ].map((social, index) => (
                                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-purple-600 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-purple-900/20 overflow-hidden relative">
                                    <social.icon className="text-xl text-gray-400 group-hover:text-white relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: 3D Interactive Canvas */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative group w-full h-[500px] lg:h-[650px] items-center">
                    {/* Glowing Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-cyan-500/10 blur-[80px] rounded-full scale-90 group-hover:scale-100 transition-transform duration-700 pointer-events-none"></div>

                    {/* Three.js 3D Hero System */}
                    <Hero3D />
                </div>

            </div>
        </div>
    );
};

export default Hero;
