"use client";
import React, { useEffect, useRef } from "react";
import light from '../../../assets/shutterstock_2478458207-removebg-preview.png'
import {
    FaPython,
    FaGithub,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaJava,
    FaNode,
} from "react-icons/fa";
import { SiDart, SiFlutter, SiCplusplus, SiMongodb } from "react-icons/si";
import Image from "next/image";
import bakcroundColour from '../../../assets/Ellipse 6.png'
import borderImge from '../../../assets/border.png'
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Skill = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);

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
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
        );

    }, []);

    const icons = [
        <SiDart key="dart" />,
        <FaPython key="python" />,
        <SiFlutter key="flutter" />,
        <FaGithub key="github" />,
        <SiCplusplus key="cpp" />,
        <FaHtml5 key="html" />,
        <FaCss3Alt key="css" />,
        <FaJava key="java" />,
    ];

    return (
        <div ref={sectionRef} className="relative overflow-hidden flex flex-col items-center justify-center max-w-[1400px] mx-auto  text-white py-20">

            <div ref={titleRef} className=" relative w-[500px]">

                <div className="flex justify-center  ">

                    <h1 className="text-2xl sm:text-4xl mb-1  text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">MY SKILLS</h1>

                </div>
                <div className="absolute -top-5 opacity-60">
                    <Image src={borderImge} width={500} height={0} alt="border-image"></Image>
                </div>
            </div>



            <div className="relative  mt-5 sm:mt-4 w-[250px] h-[300px] mb-10 ">
                <div
                    className="absolute inset-0 backdrop-blur-3xl  "
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(150, 0, 255, 0.8), rgba(255,255,255,0.1))",
                        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                        boxShadow: "0 0 40px 15px rgba(255,255,255,0.5)",
                        borderBottom: "none",
                        filter: "blur(1px)",
                    }}
                ></div>
            </div>


            <div className="space-y-6 z-10">

                <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover={true}
                    direction="left"
                    loop={0}
                >
                    <div className="flex gap-6 px-6">
                        {icons.map((icon, i) => (
                            <button
                                key={i}
                                className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center 
          rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 
          hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-md shadow-white/20"
                            >
                                <span className="text-2xl sm:text-3xl text-white/90">{icon}</span>
                            </button>
                        ))}
                    </div>
                </Marquee>


                <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover={true}
                    direction="right"
                    loop={0}
                >
                    <div className="flex gap-6 px-6">
                        {icons.map((icon, i) => (
                            <button
                                key={i}
                                className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] flex items-center justify-center 
          rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 
          hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-md shadow-white/20"
                            >
                                <span className="text-2xl sm:text-3xl text-white/90">{icon}</span>
                            </button>
                        ))}
                    </div>
                </Marquee>
            </div>


            <div className="absolute  bottom-0 -z-10 opacity-50">
                <Image src={light} width={400} height={400} alt="light image"></Image>
            </div>
            <div className="absolute  bottom-0 -z-20">
                <Image src={bakcroundColour} width={400} height={400} alt="light image"></Image>
            </div>
        </div>
    );
};

export default Skill;
