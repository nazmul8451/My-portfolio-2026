"use client";
import React, { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects } from "@/app/lib/data/projects";
import Navbar from "@/app/lib/components/Navbar";
import Footer from "@/app/lib/components/Footer";

export default function ProjectDetails({ params }) {
    const { slug } = use(params);
    const [showToast, setShowToast] = useState(false);

    const project = projects.find((p) => p.slug === slug);

    const handleLiveClick = (e, live) => {
        if (live === "#") {
            e.preventDefault();
            setShowToast(true);
            setTimeout(() => setShowToast(false), 5000);
        }
    };

   if (!project) {
        return (
            <div className="bg-[#0a0213] text-white min-h-screen flex flex-col justify-between">
                <Navbar />
                <div className="max-w-md mx-auto text-center py-20 px-6">
                    <h2 className="text-4xl font-extrabold text-purple-400 mb-4">Project Not Found</h2>
                    <p className="text-gray-400 mb-8">The project you are looking for does not exist or has been moved.</p>
                    <Link href="/#project" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                        <FaArrowLeft /> Back to Showcase
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }
 
    return (
        <div className="bg-[#0a0213] text-white min-h-screen flex flex-col justify-between">
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow max-w-[1200px] w-full mx-auto px-6 py-24 sm:py-32 relative z-10">
                {/* Back button */}
                <Link
                    href="/#project"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-all mb-10 group"
                >
                    <span className="transform group-hover:-translate-x-1.5 transition-transform duration-300">
                        <FaArrowLeft />
                    </span>
                    Back to Projects
                </Link>

                {/* Details Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Image & Main Description */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Cover Image */}
                        <div className="relative h-[300px] sm:h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] group">
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0213] via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Title & Category Badge */}
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-wider">
                                {project.category}
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-cyan-400">
                                {project.title}
                            </h1>
                        </div>

                        {/* Detailed Overview */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
                                About the Project
                            </h2>
                            <p className="text-gray-300 text-base leading-relaxed">
                                {project.longDesc}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
                                Key Features
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project.features.map((feat, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                                        <span className="text-purple-400 mt-1 font-bold">✦</span>
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Tech Stack & CTA Sidebar */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
                        {/* Action Buttons Box */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 shadow-[0_0_30px_rgba(168,85,247,0.05)]">
                            <h3 className="text-xl font-bold text-white mb-2">Project Links</h3>
                            <div className="flex flex-col gap-4">
                                <a
                                    href={project.live}
                                    onClick={(e) => handleLiveClick(e, project.live)}
                                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-5 py-4 rounded-2xl text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all active:scale-95 text-center"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 px-5 py-4 rounded-2xl text-white font-semibold text-sm transition-all active:scale-95 text-center"
                                >
                                    <FaGithub className="text-lg" /> Source Code
                                </a>
                                <Link
                                    href="/#project"
                                    className="w-full flex items-center justify-center gap-2.5 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 px-5 py-4 rounded-2xl text-purple-300 hover:text-white font-semibold text-sm transition-all duration-300 active:scale-95 text-center"
                                >
                                    <FaArrowLeft className="text-sm" /> Back to Projects
                                </Link>
                            </div>
                        </div>

                        {/* Tech Stack Box */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 hover:border-purple-500/40 hover:bg-purple-950/20 transition-all duration-300 uppercase tracking-wider"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Toast Notification */}
            <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 z-[100] transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
                <div className="bg-[#030014]/90 backdrop-blur-xl border border-purple-500/30 px-6 py-4 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.3)] flex items-center gap-5 min-w-[320px]">
                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-500 blur-lg opacity-40 animate-pulse"></div>
                        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center border border-white/20 shadow-inner">
                            <FaExternalLinkAlt className="text-white text-xl" />
                        </div>
                    </div>
                    <div className="flex flex-col text-left">
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

            <Footer />
        </div>
    );
}
