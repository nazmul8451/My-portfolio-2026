"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import BorderImage from '../../../assets/border.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        title: "Jr. Flutter Developer",
        company: "SparkTech Agency",
        location: "Onsite/Remote",
        date: "Feb 2026 - Present",
        desc: "Developing high-quality cross-platform mobile apps with clean, responsive UI/UX designs. Integrating robust features like REST APIs, real-time Socket communication, and Firebase backend services. Managing the full app lifecycle from development to app store deployment while ensuring optimal performance.",
        icon: <FaCode />,
        skills: ["Flutter", "Dart", "GetX", "Provider", "Firebase", "REST API", "Socket"]
    },
    {
        title: "Trainee Flutter Developer",
        company: "SparkTech Agency",
        location: "Onsite/Remote",
        date: "Nov 2025 - Jan 2026",
        desc: "Gained hands-on experience in mobile application development using Flutter and Dart. Collaborated with the team to build responsive UI components and integrate fundamental app features. Learned best practices for code structure, version control, and debugging.",
        icon: <FaBriefcase />,
        skills: ["Flutter", "Dart", "UI/UX Design", "Git", "Debugging"]
    }
];

const Experience = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const timelineRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: -30 },
                {
                    opacity: 1, y: 0, duration: 0.8,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Timeline Line Animation
            gsap.fromTo(lineRef.current,
                { height: 0 },
                {
                    height: "100%",
                    duration: 2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 70%",
                        end: "bottom 70%",
                        scrub: 1,
                    }
                }
            );

            // Cards Animation
            const cards = timelineRef.current.querySelectorAll(".exp-card");
            cards.forEach((card, index) => {
                const direction = index % 2 === 0 ? -50 : 50;
                gsap.fromTo(card,
                    { opacity: 0, x: direction },
                    {
                        opacity: 1, x: 0, duration: 1,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} id="experience" className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-20 overflow-hidden">
            
            {/* Section Header */}
            <div className="z-10 mb-16">
                <div ref={titleRef} className="relative">
                    <div className="flex justify-center">
                        <h2 className="text-3xl sm:text-5xl font-bold absolute text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase tracking-wider">
                            My Journey
                        </h2>
                    </div>
                    <div className="w-[350px] sm:w-[500px] h-[70px] sm:h-[100px] mx-auto opacity-50">
                        <Image src={BorderImage} width={500} height={0} className="object-contain" alt="borderimage" />
                    </div>
                </div>
            </div>

            {/* Timeline Container */}
            <div ref={timelineRef} className="relative mt-10">
                {/* Central Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10 rounded-full hidden md:block">
                    <div ref={lineRef} className="w-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                </div>

                {/* Experience Cards */}
                <div className="space-y-12 md:space-y-0">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`exp-card relative flex items-center justify-between w-full md:mb-20 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                            
                            {/* Empty space for alternating layout on desktop */}
                            <div className="hidden md:block w-[45%]" />

                            {/* Timeline Point */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0213] border-4 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                <span className="text-purple-400 text-xl">{exp.icon}</span>
                            </div>

                            {/* Experience Content Card */}
                            <div className="w-full md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] group relative overflow-hidden">
                                
                                {/* Background Glow */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 blur-[80px] group-hover:bg-purple-600/20 transition-colors duration-500" />
                                
                                <div className="flex flex-col gap-2 relative z-10">
                                    <div className="flex items-center justify-between flex-wrap gap-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                            {exp.title}
                                        </h3>
                                        <span className="px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
                                            {exp.date}
                                        </span>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                        <span className="text-pink-400 font-semibold">{exp.company}</span>
                                        <span>•</span>
                                        <span>{exp.location}</span>
                                    </div>

                                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                        {exp.desc}
                                    </p>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, sIndex) => (
                                            <span key={sIndex} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 group-hover:border-purple-500/30 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Mobile Icon (Only visible on small screens) */}
                                <div className="absolute top-6 right-6 md:hidden text-purple-500/30 text-4xl">
                                    {exp.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Aesthetic Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600/5 blur-[120px] -z-10 pointer-events-none" />
        </div>
    );
};

export default Experience;
