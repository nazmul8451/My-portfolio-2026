"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from '../../../assets/Cover.png'
import project2 from '../../../assets/Mobile UI Kit_ Ecommerce (Community) (Copy).png'
import project3 from '../../../assets/Blue Gradient Linktree Background.png'
import project4 from '../../../assets/Figue.io - Typing Animation in Chat.png'
import project5 from '../../../assets/second shot v2.png';
import project6 from '../../../assets/sqlite_project.png';
import project7 from '../../../assets/Dark Blossom.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                }
            });

            tl.fromTo(titleRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )
                .fromTo(".project-card",
                    { opacity: 0, y: 100, scale: 0.9 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)" },
                    "-=0.5"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            title: "Event Discovery App",
            category: "Mobile App",
            desc: "A feature-rich event discovery app with real-time maps, category filtering, and social engagement tools.",
            img: project7,
            tech: ["Flutter", "Dart", "Google Maps", "Firebase"],
            github: "https://github.com/nazmul8451/Event-Discovery-App.git",
            live: "#",
        },
        {
            title: "Online Grocery App",
            category: "E-Commerce",
            desc: "A modern grocery delivery app featuring a smooth browsing experience, cart management, and order tracking.",
            img: project2,
            tech: ["Flutter", "Provider", "Rest API"],
            github: "https://github.com/nazmul8451/Online-Grocary-App",
            live: "#",
        },
        {
            title: "Task Manager Pro",
            category: "Productivity",
            desc: "Efficient task management solution with GetX state management for real-time updates and seamless UX.",
            img: project3,
            tech: ["Flutter", "GetX", "Rest API"],
            github: "https://github.com/nazmul8451/Task-Manager",
            live: "#",
        },
        {
            title: "AI Chat Bot",
            category: "Artificial Intelligence",
            desc: "Smart conversational AI interface with typing animations and real-time response handling.",
            img: project4,
            tech: ["Flutter", "OpenAI API", "Animation"],
            github: "https://github.com/nazmul8451/Task-Manager", // Placeholder link from original
            live: "#",
        },
        {
            title: "Meditation App",
            category: "Health & Wellness",
            desc: "Calming meditation app with audio playback, minimalist UI, and progress tracking features.",
            img: project5,
            tech: ["Flutter", "Audio Player", "Riverpod"],
            github: "https://github.com/nazmul8451/Meditation-app.git",
            live: "#",
        },
        {
            title: "SQLite CRUD App",
            category: "Database Tool",
            desc: "Robust local database management app demonstrating CRUD operations with offline retention.",
            img: project6,
            tech: ["Flutter", "SQLite", "Local Storage"],
            github: "https://github.com/nazmul8451/SQLite-CRUD-APP.git",
            live: "#",
        },
    ];

    return (
        <div ref={sectionRef} id="project" className="w-full relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Header Section */}
                <div ref={titleRef} className="text-center mb-16 lg:mb-24">
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-4">
                        Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Showcase</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Exploring the intersection of design, code, and cosmic creativity through <span className="text-purple-300 font-medium">modern digital experiences</span>.
                    </p>
                </div>

                {/* Grid Section */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map((p, i) => (
                        <div key={i} className="project-card group relative rounded-[30px] bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col h-full">

                            {/* Image Container with Overlay */}
                            <div className="relative h-[250px] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent z-10 opacity-80" />
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
                            <div className="p-6 flex flex-col flex-grow relative z-20">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                                    {p.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {p.desc}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {p.tech.map((tech, t) => (
                                        <span key={t} className="px-3 py-1 rounded-md bg-white/5 text-[10px] uppercase tracking-wider text-gray-300 border border-white/5 group-hover:border-purple-500/30 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex items-center justify-between gap-4 mt-auto">
                                    <a href={p.live} className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 rounded-xl text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all active:scale-95">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                    <a href={p.github} className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
                                        <FaGithub className="text-lg" /> Source
                                    </a>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Projects;
