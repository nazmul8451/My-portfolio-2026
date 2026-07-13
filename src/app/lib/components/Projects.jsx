"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from '../../../assets/Cover.png'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projects } from "@/app/lib/data/projects";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const [showToast, setShowToast] = useState(false);

    const handleLiveClick = (e, live) => {
        if (live === "#") {
            e.preventDefault();
            setShowToast(true);
            setTimeout(() => setShowToast(false), 5000); // 5 seconds duration
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: -50 },
                {
                    opacity: 1, y: 0, duration: 1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            gsap.fromTo(".project-card",
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} id="project" className="w-full relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Section */}
                <div ref={titleRef} className="text-center mb-12">
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
                        Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Showcase</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Exploring the intersection of design, code, and cosmic creativity through <span className="text-purple-300 font-medium">modern digital experiences</span>.
                    </p>
                </div>

                {/* Swiper Slider */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <div key={i} className="project-card group relative rounded-[30px] bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col h-full min-h-[500px]">

                            {/* Image Container with Overlay */}
                            <div className="relative h-[280px] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent z-10 opacity-60" />
                                <Image
                                    src={p.img || project1}
                                    alt={p.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-purple-300">
                                    {p.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow relative z-20">
                                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                                    {p.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {p.desc}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {p.tech.map((tech, t) => (
                                        <span key={t} className="px-3 py-1 rounded-md bg-white/5 text-[11px] uppercase tracking-wider text-gray-300 border border-white/5 group-hover:border-purple-500/30 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col gap-3 mt-auto">
                                    <Link
                                        href={`/projects/${p.slug}`}
                                        className="w-full flex items-center justify-center gap-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 px-4 py-2.5 rounded-xl text-purple-300 hover:text-white font-semibold text-sm transition-all duration-300 text-center"
                                    >
                                        View Details
                                    </Link>
                                    <div className="flex items-center justify-between gap-4">
                                        <a
                                            href={p.live}
                                            onClick={(e) => handleLiveClick(e, p.live)}
                                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2.5 rounded-xl text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all active:scale-95 text-center"
                                        >
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                        <a 
                                            href={p.github} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 text-center"
                                        >
                                            <FaGithub className="text-lg" /> Source
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* Toast Notification */}
                <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 z-[100] transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                    <div className="bg-[#030014]/90 backdrop-blur-xl border border-purple-500/30 px-6 py-4 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.3)] flex items-center gap-5 min-w-[320px]">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500 blur-lg opacity-40 animate-pulse"></div>
                            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center border border-white/20 shadow-inner">
                                <FaExternalLinkAlt className="text-white text-xl" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-white font-bold text-base tracking-tight">Deployment in Progress</h4>
                            <p className="text-gray-400 text-xs mt-0.5 font-medium">Coming soon to App Store & Play Store!</p>
                        </div>
                        <button
                            onClick={() => setShowToast(false)}
                            className="ml-auto text-gray-500 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
