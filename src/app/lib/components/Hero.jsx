"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import TextType from '../../../components/TextType';
import Hero3D from './Hero3D';
import gsap from 'gsap';

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
        <div className='w-full mx-auto mt-[40px] px-6 lg:px-24 relative overflow-visible'>

            {/* --- LIVING BACKGROUND --- */}
            <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden h-[120%] -top-[10%]">
                <div className="hero-blob absolute -top-[300px] -left-[300px] w-[900px] h-[900px] bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-black rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
                <div className="hero-blob absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" />
                <div className="hero-blob absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen" />

                {/* Seamless transition mask */}
                <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0a0213] via-[#0a0213]/80 to-transparent"></div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-0 lg:gap-10 min-h-[600px] relative z-10 pb-20">

                {/* Left Side: Text Content */}
                <div className="flex-1 text-center lg:text-start z-10 mt-10 lg:mt-0">
                    <div ref={textRef} className="text-white flex flex-col gap-4 lg:gap-6">

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

                {/* Right Side: 3D Element */}
                <div className="flex-1 w-full lg:min-w-[500px] flex justify-center lg:justify-end -mt-10 lg:mt-0 relative">
                    {/* 3D Brain - Top Layer */}
                    <div className="relative z-20 w-full hover:scale-105 transition-transform duration-700 ease-out cursor-none">
                        <Hero3D />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
