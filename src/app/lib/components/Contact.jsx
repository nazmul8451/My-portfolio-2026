"use client";
import React from "react";
import borderImge from '../../../assets/border.png'
import Image from "next/image";
const Contact = () => {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-2">


            <div className=" relative w-[330px] sm:w-[500px] mx-auto">

                <div className="flex justify-center  ">

                    <h1 className="text-2xl sm:text-4xl mb-1  text-center text-white font-semibold">CONTACT ME</h1>

                </div>
                <div className="absolute -top-5">
                    <Image src={borderImge} width={500} height={0} alt="border-image"></Image>
                </div>
            </div>
            <div className="flex items-center justify-center mt-9">

                <div className="max-w-[1500px] w-full grid grid-cols-1 md:grid-cols-2 gap-10">


                    <div className="bg-white/10 backdrop-blur-lg border border-purple-500 rounded-2xl p-8 flex flex-col gap-6 shadow-lg">
                        <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg border border-purple-500 bg-transparent text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg border border-purple-500 bg-transparent text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full p-3 rounded-lg border border-purple-500 bg-transparent text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                        ></textarea>

                        <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-all">
                            Send Message
                        </button>
                    </div>

                    <div className="flex flex-col justify-center text-white">



                        <div className="space-y-4">
                            <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-[800px]">
                                Hey there! I’m a passionate <span className="text-white font-semibold">Flutter App Developer</span>
                                who loves creating elegant, fast, and user-friendly mobile applications. I focus on crafting smooth UI,
                                clean animations, and efficient logic to deliver seamless user experiences across Android and iOS.
                            </p>

                            <p className="text-gray-300 text-sm md:text-base max-w-[800px]">
                                With hands-on experience in <span className="text-white">Flutter, Dart, Firebase, REST APIs, and State Management (GetX, Provider, Bloc)</span>,
                                I thrive on turning ideas into powerful apps that solve real-world problems. I’m always exploring new Flutter
                                features and tools to build modern, scalable, and high-performing mobile solutions.
                            </p>

                            <div className="text-gray-300 text-sm md:text-base space-y-1">
                                <p>
                                    <span className="text-white">Email:</span> rimon1234567@gmail.com
                                </p>
                                <p>
                                    <span className="text-white">Location:</span> Dhaka, Bangladesh
                                </p>
                            </div>

                            <p className="text-gray-400 text-sm md:text-base italic">
                                “Let’s build creative, beautiful, and high-performance Flutter apps — where design meets performance.”
                            </p>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;
