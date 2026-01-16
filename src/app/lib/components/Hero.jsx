"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import TextType from '../../../components/TextType';
import Hero3D from './Hero3D';
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
                <div className="hero-blob absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
                <div className="hero-blob absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" />
                <div className="hero-blob absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen" />

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
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 filter drop-shadow-[0_0_10px_rgba(192,132,252,0.3)]">Rimon islam</span>
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
                            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:scale-105 active:scale-95 duration-300 rounded-full font-bold text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] border border-purple-400/20 relative overflow-hidden group">
                                <span className="relative z-10">Hire Me</span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-12 group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                            </button>
                            <a href="https://drive.google.com/file/d/188JmJQhNTj-kGoTjHyop4Y4yvFcAlyGU/view?usp=sharing" target="_blank"
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

                {/* Right Side: User Image */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative group pl-0 lg:pl-10">
                    {/* Glowing Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 blur-[80px] rounded-full scale-90 group-hover:scale-100 transition-transform duration-700"></div>

                    {/* Image Container with premium border */}
                    <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full p-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_40px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_70px_rgba(168,85,247,0.5)] transition-all duration-500">
                        {/* Inner Ring */}
                        <div className="w-full h-full rounded-full overflow-hidden relative border-[6px] border-purple-500/20 group-hover:border-purple-500/50 transition-colors duration-500">
                            <Image
                                src={rimonImage}
                                alt="Rimon Islam"
                                fill
                                className="object-cover scale-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                                priority
                            />
                            {/* Overlay Gradient for better blending */}
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent opacity-50"></div>
                        </div>

                        {/* Floating Tech Badge */}
                        <div className="absolute bottom-12 left-0 lg:-left-4 bg-[#0a0213]/90 backdrop-blur-xl border border-purple-500/30 px-5 py-2.5 rounded-2xl flex items-center gap-3 shadow-2xl animate-bounce-slow">
                            <div className="relative">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75"></div>
                            </div>
                            <span className="text-sm text-gray-200 font-medium tracking-wide">Open to Work</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
