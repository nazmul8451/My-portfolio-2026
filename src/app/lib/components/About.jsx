"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import centerRadient from "../../../assets/Gradient.png";
import BorderImage from '../../../assets/border.png'
import { MdOutlinePushPin } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

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
            .fromTo(cardsRef.current.children,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2 },
                "-=0.4"
            );

    }, []);

    return (
        <div ref={sectionRef} className=" relative  max-w-[1400px]   mx-auto px-4 sm:px-6 mb-20">

            <div className=" z-10 mb-12">
                <div ref={titleRef} className="relative ">
                    <div className="flex justify-center ">
                        <h2 className="text-3xl sm:text-5xl font-bold absolute text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            ABOUT ME
                        </h2>
                    </div>
                    <div className=" w-[350px] sm:w-[500px]  h-[70px] sm:h-[100px] mx-auto opacity-50">
                        <Image src={BorderImage} width={500} height={0} className="" alt="borderimage"></Image>
                    </div>
                </div>
            </div>

            <div ref={cardsRef} className="flex sm:flex-row flex-col justify-between gap-6 lg:gap-10">

                <div className="text-white flex-1 bg-gradient-to-br from-purple-900/40 to-black/40 border border-purple-500/20
                        backdrop-blur-xl rounded-2xl p-6 flex justify-center items-center shadow-lg hover:shadow-purple-500/20 active:scale-95 duration-500 group relative">
                    <h1 className="text-center z-0 leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                        Hey there! I'm a <span className="text-purple-400 font-semibold">Flutter Cross-Platform Developer</span> passionate about crafting beautiful, efficient, and user-friendly apps.
                        I love turning creative ideas into seamless digital experiences.
                    </h1>
                    <MdOutlinePushPin size={24} className="text-purple-400 absolute top-4 right-4 rotate-45" />
                </div>

                <div className="flex-1 bg-white/5 border border-white/10
                        backdrop-blur-xl rounded-2xl flex justify-center items-center shadow-lg hover:bg-white/10 active:scale-95 duration-500 group relative">
                    <p className="text-gray-300 group-hover:text-white text-base md:text-lg leading-relaxed p-6 text-center transition-colors">
                        I love turning creative ideas into seamless digital experiences.
                        Solving challenges and optimising performance drive me to craft apps that feel intuitive and delightful.
                        Let’s build something amazing together!
                    </p>
                    <MdOutlinePushPin size={24} className="text-pink-400 absolute top-4 right-4 rotate-45" />
                </div>

                <div className="text-white flex-1 bg-gradient-to-bl from-purple-900/40 to-black/40 border border-purple-500/20
                        backdrop-blur-xl rounded-2xl p-6 flex justify-center items-center shadow-lg hover:shadow-purple-500/20 active:scale-95 duration-500 group relative">
                    <h1 className="text-center leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                        My goal is to build apps that feel <span className="text-purple-400 font-semibold">smooth, intuitive</span>, and truly enjoyable to use.
                        From concept to launch, I focus on perfection and seamless user experiences.
                    </h1>
                    <MdOutlinePushPin size={24} className="text-purple-400 absolute top-4 right-4 rotate-45" />
                </div>
            </div>

        </div>
    );
};

export default About;
