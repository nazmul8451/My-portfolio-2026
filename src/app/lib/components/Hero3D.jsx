"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Sphere, Html, Sparkles, Line } from "@react-three/drei";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";

import { FaPython, FaJava, FaMapMarkedAlt, FaBolt, FaLayerGroup, FaNetworkWired, FaVideo } from "react-icons/fa";
import { SiDart, SiFlutter, SiFirebase, SiSocketdotio } from "react-icons/si";
import MyPhoto from '../../../assets/my_photo.jpg';

// --------------------------------------------------------
// 1. Brain Shader Material
// --------------------------------------------------------
const BrainMaterial = shaderMaterial(
    { uTime: 0, uColorStart: new THREE.Color("#2e0249"), uColorEnd: new THREE.Color("#a855f7") },
    // vertex shader
    `
    varying vec2 vUv;
    uniform float uTime;
    varying float vDisplacement;
    
    // Simplex noise function (simplified)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
        const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        
        i = mod289(i);
        vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        
        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        
        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        
        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
        
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        
        vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        
        vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
    }

    void main() {
        vUv = uv;
        vDisplacement = snoise(position + vec3(uTime * 0.2));
        vec3 newPosition = position + normal * (vDisplacement * 0.1);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
    `,
    // fragment shader
    `
    uniform vec3 uColorStart;
    uniform vec3 uColorEnd;
    varying float vDisplacement;

    void main() {
        float distortion = vDisplacement * 2.0 + 0.5;
        vec3 color = mix(uColorStart, uColorEnd, distortion);
        gl_FragColor = vec4(color, 1.0);
    }
    `
);

extend({ BrainMaterial });

// --------------------------------------------------------
// 2. Skill Config
// --------------------------------------------------------
const skills = [
    { name: "Flutter", icon: SiFlutter, color: "#02569B", layer: 1, speed: 0.2 },
    { name: "Dart", icon: SiDart, color: "#0175C2", layer: 1, speed: 0.18 },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", layer: 1, speed: 0.22 },
    { name: "Java", icon: FaJava, color: "#E76F00", layer: 2, speed: 0.15 },
    { name: "Python", icon: FaPython, color: "#3776AB", layer: 2, speed: 0.12 },
    { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff", layer: 2, speed: 0.19 },
    { name: "Maps", icon: FaMapMarkedAlt, color: "#4285F4", layer: 3, speed: 0.1 },
    { name: "GetX", icon: FaBolt, color: "#FF5722", layer: 3, speed: 0.14 }, // Using Bolt for GetX (performance/fast)
    { name: "Provider", icon: FaLayerGroup, color: "#7F57F1", layer: 3, speed: 0.17 },
];

const CentralPhoto = () => {
    return (
        <group>
            <Html center>
                <div className="relative flex items-center justify-center">
                    {/* Glowing Pulse Ring */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 blur-xl opacity-20 animate-pulse w-[450px] h-[450px]"></div>

                    {/* Photo Container */}
                    <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.4)] z-10 bg-black">
                        <img
                            src={MyPhoto.src}
                            alt="Rimon Islam"
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                </div>
            </Html>
        </group>
    );
};

// --------------------------------------------------------
// 3. Orbiting System
// --------------------------------------------------------

// Separate component to handle line update loop efficiently
const ConnectionLine = ({ start, endRef, color }) => {
    const lineRef = useRef();

    useFrame(() => {
        if (endRef.current && lineRef.current) {
            const endPos = endRef.current.position;
            lineRef.current.setPoints(start, endPos);

            // Random blinking effect
            if (Math.random() > 0.95) {
                lineRef.current.material.opacity = Math.random();
            }
        }
    });

    return (
        <Line
            ref={lineRef}
            points={[start.toArray(), [0, 0, 0]]} // Initial points, will be updated
            color={color}
            lineWidth={1}
            transparent
            opacity={0.3}
        />
    )
}

const SkillNode = ({ skill, radius, angle, index }) => {
    const groupRef = useRef();
    const iconRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Initial position
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    // Use stable random values based on index
    const y = ((index % 3) - 1) * 1.5; // Deterministic height variation

    useFrame(({ clock }) => {
        if (groupRef.current && !hovered) {
            // Orbit rotation
            const t = clock.getElapsedTime() * skill.speed;
            groupRef.current.position.x = Math.cos(angle + t) * radius;
            groupRef.current.position.z = Math.sin(angle + t) * radius;
            groupRef.current.position.y = y + Math.sin(t * 0.5) * 0.5; // Bobbing
        }
    });

    return (
        <>
            <group ref={groupRef} position={[x, y, z]}>
                <group ref={iconRef} /> {/* Invisible holder for connection target */}

                <Html transform position={[0, 0, 0]} distanceFactor={6} style={{ pointerEvents: 'none' }}>
                    <div
                        className={`
                             group relative flex items-center justify-center 
                             w-16 h-16 
                             bg-white/5 backdrop-blur-md 
                             border border-white/10 rounded-2xl 
                             shadow-lg shadow-purple-500/10
                             transition-all duration-300 ease-out
                             ${hovered ? 'scale-125 border-purple-500/50 bg-white/10 z-50 shadow-purple-500/40' : 'opacity-90'}
                        `}
                        style={{ pointerEvents: 'auto' }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <skill.icon className="text-3xl text-gray-200 group-hover:text-white transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" style={{ color: hovered ? skill.color : undefined }} />

                        {/* Tooltip */}
                        <div className={`
                            absolute top-full mt-2 px-3 py-1 
                            bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg 
                            text-xs font-semibold text-white whitespace-nowrap 
                            transition-all duration-300
                            ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
                        `}>
                            {skill.name}
                        </div>
                    </div>
                </Html>
            </group>
            {/* Connection Line - Fixed Prop Mismatch */}
            <ConnectionLine start={new THREE.Vector3(0, 0, 0)} endRef={groupRef} color={skill.color} />
        </>
    );
};

const Hero3D = () => {
    const brainRef = useRef();

    return (
        <div className="w-full h-[500px] lg:h-[700px] relative z-10 fade-in">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }} className="w-full h-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} color="#a855f7" />
                <pointLight position={[-2, -2, 2]} intensity={2} color="#00bcd4" />

                {/* Background Particles */}
                <Sparkles count={150} scale={10} size={2} speed={0.4} opacity={0.5} noise={0.2} color="#a855f7" />

                {/* Center Photo */}
                <CentralPhoto />

                {/* Orbiting Icons */}
                {skills.map((skill, i) => (
                    <SkillNode
                        key={i}
                        skill={skill}
                        index={i}
                        total={skills.length}
                        brainRef={brainRef}
                    />
                ))}

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 1.5}
                    minPolarAngle={Math.PI / 3}
                />
            </Canvas>
        </div>
    );
};

export default Hero3D;
