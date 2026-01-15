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

    }, []);

    return (
        <div className='max-w-[1400px] mx-auto mt-[40px] mb-[40px] px-4 sm:px-6 relative overflow-visible'>
            {/* Background Gradient Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 min-h-[600px]">

                {/* Left Side: Text Content */}
                <div className="flex-1 text-center lg:text-start z-10">
                    <div ref={textRef} className="text-white flex flex-col gap-4 lg:gap-6">

                        <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 w-fit mx-auto lg:mx-0">
                            <span className="text-purple-300 text-sm font-medium tracking-wide">Available for Work</span>
                        </div>

                        <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Rimon</span>
                        </h1>

                        <div className="text-2xl lg:text-4xl text-gray-200 font-semibold h-[40px] lg:h-[60px]">
                            <TextType
                                text={["Flutter Developer", "Mobile Expert", "UI/UX Enthusiast"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                className='text-purple-400'
                                cursorCharacter="|"
                            />
                        </div>

                        <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Crafting high-performance <span className="text-white font-medium">cross-platform mobile apps</span> with clean code and pixel-perfect design. Let's turn your ideas into reality.
                        </p>

                        {/* Buttons */}
                        <div ref={buttonsRef} className='flex sm:justify-start justify-center items-center mt-6 gap-4'>
                            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 active:scale-95 duration-300 rounded-full font-bold text-white shadow-lg shadow-purple-500/25">
                                Hire Me
                            </button>
                            <a href="https://drive.google.com/file/d/188JmJQhNTj-kGoTjHyop4Y4yvFcAlyGU/view?usp=sharing" target="_blank"
                                className="px-8 py-3 border border-gray-700 hover:border-purple-500 hover:text-purple-400 duration-300 rounded-full font-medium text-gray-300 transition-colors">
                                Download CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div ref={socialRef} className="flex items-center justify-center lg:justify-start gap-6 mt-8">
                            <a href="https://www.facebook.com/rimon.islam.232860" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-purple-600 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 group">
                                <FaFacebookF className="text-xl text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="https://github.com/nazmul8451" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-purple-600 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 group">
                                <FaGithub className="text-xl text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-purple-600 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 group">
                                <FaLinkedinIn className="text-xl text-gray-400 group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: 3D Element */}
                <div className="flex-1 w-full flex justify-center lg:justify-end">
                    <Hero3D />
                </div>

            </div>
        </div>
    );
};

export default Hero;
