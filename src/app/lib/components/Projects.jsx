"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import borderImge from '../../../assets/border.png'
import project1 from '../../../assets/Cover.png'
import project2 from '../../../assets/Mobile UI Kit_ Ecommerce (Community) (Copy).png'
import project3 from '../../../assets/Blue Gradient Linktree Background.png'
import project4 from '../../../assets/Figue.io - Typing Animation in Chat.png'
import project5 from '../../../assets/second shot v2.png';
import project6 from '../../../assets/sqlite_project.png';
import project7 from '../../../assets/Dark Blossom.png';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Projects = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: -30 },
            { opacity: 1, y: 0, duration: 0.8 }
        )
            .fromTo(gridRef.current.children,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
                "-=0.4"
            );

    }, []);

    const projects = [
        {
            title: "Event Discovery App",
            desc: "Gathering is a feature-rich event discovery and social engagement app designed to help users find, explore, and interact with events happening around them. In this project, I focused on implementing key frontend features including trending and nearby event discovery, category-based filtering, interactive map views with real-time event locations, and a save/bookmark system. I also contributed to building real-time in-app chat, allowing users to connect and communicate seamlessly. The app emphasizes user-friendly UI/UX and dynamic interaction, making event exploration engaging and intuitive.",
            img: project7,
            github: "https://github.com/nazmul8451/Event-Discovery-App.git",
            live: "#",
            details: "#",
        },
        {
            title: "Online Grocarys App",
            desc: "The Fruit Ordering App is a beautifully designed and responsive mobile application built using Flutter, Dart, and Provider for state management. This project focuses on creating a smooth, modern, and user-friendly interface that allows users to browse, view, and order fresh fruits online.",
            img: project2,
            github: "https://github.com/nazmul8451/Online-Grocary-App",
            live: "#",
            details: "#",
        },
        {
            title: "Fruits Ordering  App",
            desc: "The Fruit Ordering App is a beautifully designed and responsive mobile application built using Flutter, Dart, and Provider for state management. This project focuses on creating a smooth, modern, and user-friendly interface that allows users to browse, view, and order fresh fruits online.",
            img: project2,
            github: "https://github.com/nazmul8451/Fruits_order_app",
            live: "#",
            details: "#",
        },
        {
            title: "Task Manager",
            desc: "A simple yet powerful Flutter Task Manager App that helps users manage their daily tasks efficiently.Built with Flutter, powered by GetX for state management, and integrated with a REST API for real-time data handling.",
            img: project3,
            github: "https://github.com/nazmul8451/Task-Manager",
            live: "#",
            details: "#",
        },

        {
            title: "Ai Chat Bot",
            desc: "A simple yet powerful Flutter Task Manager App that helps users manage their daily tasks efficiently.Built with Flutter, powered by GetX for state management, and integrated with a REST API for real-time data handling.",
            img: project4,
            github: "https://github.com/nazmul8451/Task-Manager",
            live: "#",
            details: "#",
        },
        {
            title: "Meditation App",
            desc: "A simple yet powerful Flutter Task Manager App that helps users manage their daily tasks efficiently.Built with Flutter, powered by GetX for state management, and integrated with a REST API for real-time data handling.",
            img: project5,
            github: "https://github.com/nazmul8451/Meditation-app.git",
            live: "#",
            details: "#",
        },
        {
            title: "SQLite CRUD App",
            desc: "A simple yet powerful Flutter Task Manager App that helps users manage their daily tasks efficiently.Built with Flutter, powered by GetX for state management, and integrated with a REST API for real-time data handling.",
            img: project6,
            github: "https://github.com/nazmul8451/SQLite-CRUD-APP.git",
            live: "#",
            details: "#",
        },
    ];

    return (
        <div ref={sectionRef} className="max-w-[1400px] mx-auto mt-[50px] sm:mt-[150px] sm:mb-10 px-4">

            <div ref={titleRef} className=" relative w-[350px] sm:w-[500px] mx-auto mb-12">
                <div className="flex justify-center  ">
                    <h1 className="text-3xl sm:text-5xl mb-1 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">MY PROJECTS</h1>
                </div>
                <div className="absolute -top-5 opacity-60">
                    <Image src={borderImge} width={500} height={0} alt="border-image"></Image>
                </div>
            </div>

            <div ref={gridRef} className="py-8 px-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/10 group bg-gradient-to-b from-white/10 to-transparent"
                    >
                        {/* Image Section */}
                        <div className="overflow-hidden h-60 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0213] to-transparent z-10 opacity-60"></div>
                            <Image
                                src={p.img ? p.img : project1}
                                alt={p.title}
                                width={500}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col items-center justify-center text-center relative z-20 -mt-10">
                            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{p.title}</h2>
                            <p className="text-gray-400 mb-6 text-sm line-clamp-3 leading-relaxed">{p.desc}</p>

                            <div className="flex gap-4 w-full justify-center">
                                <a
                                    href={p.live}
                                    className="px-6 py-2.5 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition shadow-lg shadow-purple-600/20 text-sm"
                                >
                                    View
                                </a>
                                <a
                                    href={p.github}
                                    className="px-6 py-2.5 rounded-full backdrop-blur-md bg-white/5 text-white border border-white/20 font-semibold hover:bg-white/10 transition text-sm"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
