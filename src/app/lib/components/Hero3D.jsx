"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Sparkles, Line } from "@react-three/drei";
import { FaPython, FaJava, FaMapMarkedAlt, FaBolt, FaLayerGroup } from "react-icons/fa";
import { SiDart, SiFlutter, SiSocketdotio } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import rimonImage from '../../../assets/rimon.png';

// --------------------------------------------------------
// 1. Skill Config
// --------------------------------------------------------
const skills = [
    { name: "Flutter", icon: SiFlutter, color: "#02569B", layer: 1, speed: 0.15 },
    { name: "Dart", icon: SiDart, color: "#0175C2", layer: 1, speed: 0.12 },
    { name: "Firebase", icon: IoLogoFirebase, color: "#FF9100", layer: 1, speed: 0.18 },
    { name: "Java", icon: FaJava, color: "#E76F00", layer: 2, speed: 0.1 },
    { name: "Python", icon: FaPython, color: "#3776AB", layer: 2, speed: 0.08 },
    { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff", layer: 2, speed: 0.14 },
    { name: "Maps", icon: FaMapMarkedAlt, color: "#4285F4", layer: 3, speed: 0.07 },
    { name: "GetX", icon: FaBolt, color: "#FF5722", layer: 3, speed: 0.11 },
    { name: "Provider", icon: FaLayerGroup, color: "#7F57F1", layer: 3, speed: 0.13 },
];

const CentralPhoto = () => {
    return (
        <group>
            <Html center>
                <div className="relative flex items-center justify-center pointer-events-none select-none">
                    {/* Glowing Pulse Ring */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-2xl w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] animate-pulse"></div>

                    {/* Photo Container */}
                    <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border border-purple-500/30 bg-gradient-to-b from-purple-950/20 via-indigo-950/20 to-transparent shadow-[0_0_40px_rgba(168,85,247,0.25)] z-10 flex items-center justify-center">
                        <img
                            src={rimonImage.src}
                            alt="Rimon Islam"
                            className="w-full h-full object-cover object-top scale-115 transform hover:scale-120 transition-transform duration-700"
                        />
                    </div>
                </div>
            </Html>
        </group>
    );
};

// --------------------------------------------------------
// 2. Orbiting Node Component
// --------------------------------------------------------
const SkillNode = ({ skill, radius, angle, index }) => {
    const groupRef = useRef();
    const lineRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Initial positioning on X-Y plane (always in the background)
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = -1.0;

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * 0.08; // Synchronized speed to maintain relative angles
        // Orbit on the screen-parallel X-Y plane, keeping the face completely clear
        const currentX = Math.cos(angle + t) * radius;
        const currentY = Math.sin(angle + t) * radius;
        // Move back and forth in depth (Z coordinate) while remaining behind the profile card
        const currentZ = -1.0 + Math.sin(angle + t) * 0.4;

        if (groupRef.current && !hovered) {
            groupRef.current.position.x = currentX;
            groupRef.current.position.y = currentY;
            groupRef.current.position.z = currentZ;
        }

        if (lineRef.current && groupRef.current) {
            const pos = groupRef.current.position;
            const positions = lineRef.current.geometry.attributes.position.array;
            positions[3] = -pos.x;
            positions[4] = -pos.y;
            positions[5] = -pos.z;
            lineRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <group ref={groupRef} position={[x, y, z]}>
            {/* Draw connection line from this node back to center */}
            <line ref={lineRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[new Float32Array([0, 0, 0, 0, 0, 0]), 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color={skill.color}
                    transparent
                    opacity={hovered ? 0.6 : 0.12}
                    linewidth={1}
                />
            </line>

            <Html transform center position={[0, 0, 0]} distanceFactor={6.0} style={{ pointerEvents: 'none' }}>
                <div
                    className={`
                         group relative flex items-center justify-center 
                         w-14 h-14 rounded-full 
                         bg-[#0a0213]/80 backdrop-blur-md 
                         border transition-all duration-300 ease-out cursor-pointer
                         ${hovered ? 'scale-125 z-50' : 'opacity-90'}
                    `}
                    style={{ 
                        pointerEvents: 'auto',
                        borderColor: hovered ? skill.color : `${skill.color}35`,
                        boxShadow: hovered ? `0 0 25px ${skill.color}60` : `0 0 10px ${skill.color}15`
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <skill.icon 
                        className="text-2xl transition-all duration-300" 
                        style={{ color: skill.color }} 
                    />

                    {/* Tooltip */}
                    <div className={`
                        absolute top-full mt-3 px-2.5 py-1 
                        bg-black/90 backdrop-blur-sm border rounded-lg 
                        text-[10px] sm:text-xs font-semibold text-white whitespace-nowrap 
                        transition-all duration-300 shadow-xl
                        ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
                    `}
                    style={{ borderColor: `${skill.color}50` }}>
                        {skill.name}
                    </div>
                </div>
            </Html>
        </group>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-full min-h-[450px] sm:min-h-[550px] lg:min-h-[600px] relative z-10 fade-in select-none">
            <Canvas camera={{ position: [0, 0, 12.5], fov: 45 }} className="w-full h-full">
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} color="#a855f7" />
                <pointLight position={[-3, -3, 3]} intensity={1.5} color="#22d3ee" />

                {/* Sparkling Background Particles */}
                <Sparkles count={60} scale={7.5} size={2} speed={0.3} color="#a855f7" />

                {/* Center Image Component */}
                <CentralPhoto />

                {/* Orbiting Skill Nodes */}
                {skills.map((skill, index) => {
                    const radius = 3.5 + Math.floor(index / 3) * 0.7;
                    const angle = (index * (2 * Math.PI)) / skills.length; // Distribute evenly over 360 degrees
                    return (
                        <SkillNode
                            key={skill.name}
                            skill={skill}
                            radius={radius}
                            angle={angle}
                            index={index}
                        />
                    );
                })}

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.3}
                    maxPolarAngle={Math.PI / 1.7}
                    minPolarAngle={Math.PI / 2.3}
                    enableDamping
                    dampingFactor={0.05}
                />
            </Canvas>
        </div>
    );
};

export default Hero3D;
