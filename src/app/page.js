"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Navbar from "./lib/components/Navbar";
import Hero from "./lib/components/Hero";
import About from "./lib/components/About";
import Skill from "./lib/components/Skill";
import Projects from "./lib/components/Projects";
import Contact from "./lib/components/Contact";
import Footer from "./lib/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {

    sectionsRef.current.forEach((section) => {
      if (!section) return;

      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div className="bg-[#0a0213] text-white min-h-screen">
      <div className=" sticky top-0 z-100" ref={(el) => (sectionsRef.current[0] = el)}>
        <Navbar />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)} id="home">
        <Hero />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)} className="mb-[40px]" id="about">
        <About />
      </div>
      <div ref={(el) => (sectionsRef.current[3] = el)} className="mt-20 sm:mt-20" id="skill">
        <Skill />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)} id="project">
        <Projects />
      </div>
      <div ref={(el) => (sectionsRef.current[5] = el)} id="contact">
        <Contact />
      </div>
      <div ref={(el) => (sectionsRef.current[6] = el)}>
        <Footer />
      </div>
    </div>
  );
}
