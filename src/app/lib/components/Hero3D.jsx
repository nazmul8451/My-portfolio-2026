"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Sphere, Html, Sparkles, Line } from "@react-three/drei";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { FaPython, FaGithub, FaReact, FaMapMarkedAlt, FaNetworkWired, FaVideo } from "react-icons/fa";
import { SiDart, SiFlutter, SiFirebase } from "react-icons/si";

// --------------------------------------------------------
// 1. Brain Shader Material
// --------------------------------------------------------
const BrainMaterial = shaderMaterial(
    {
        uTime: 0,
        uColor: new THREE.Color("#2e0249"), // Deep purple base
        uGlowColor: new THREE.Color("#00bcd4"), // Cyan glow
    },
    // Vertex Shader
    `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying float vDisplacement;
    uniform float uTime;

    // Simplex noise function (simplified for brevity)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute( permute( permute( 
                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    void main() {
      vUv = uv;
      vNormal = normal;
      // High frequency noise for folds, verify amplitude
      float noiseVal = snoise(position * 3.0 + uTime * 0.2); 
      vDisplacement = noiseVal;
      
      // Move vertices along normal
      vec3 newPosition = position + normal * (noiseVal * 0.1);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
    // Fragment Shader
    `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying float vDisplacement;
    uniform vec3 uColor;
    uniform vec3 uGlowColor;
    uniform float uTime;

    void main() {
      // Basic rim lighting (Fresnel)
      vec3 viewDir = normalize(cameraPosition - vUv.xyx); // simplified approximation or pass viewPos
      // Actually for fresnel we need world normal and view dir. 
      // Let's use a simpler glow based on normal z in view space (which vNormal essentially is close to in local)
      // but let's just stick to a noise-based mix for now + simple edge glow.
      
      float intensity = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
      intensity = pow(intensity, 3.0); // sharp rim
      
      // Pulse the glow
      float pulse = (sin(uTime * 1.5) + 1.0) * 0.5;
      
      // Mix base color with glow based on displacement (peaks get more glow)
      vec3 finalColor = mix(uColor, uGlowColor, (vDisplacement * 0.5 + 0.5) * 0.5 + intensity * pulse);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ BrainMaterial });

// --------------------------------------------------------
// 2. Skill Config
// --------------------------------------------------------
const skills = [
    { name: "Flutter", icon: SiFlutter, color: "#02569B", layer: 1, speed: 0.5 },
    { name: "Dart", icon: SiDart, color: "#0175C2", layer: 1, speed: 0.5 },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", layer: 1, speed: 0.5 },
    { name: "Python", icon: FaPython, color: "#3776AB", layer: 2, speed: 0.3 },
    { name: "Git", icon: FaGithub, color: "#ffffff", layer: 2, speed: 0.3 },
    { name: "Maps", icon: FaMapMarkedAlt, color: "#34A853", layer: 2, speed: 0.3 },
    { name: "Socket.IO", icon: FaGithub, color: "#ffffff", layer: 3, speed: 0.2 },
    { name: "REST API", icon: FaNetworkWired, color: "#E0234E", layer: 3, speed: 0.2 },
    { name: "Agora", icon: FaVideo, color: "#099DFD", layer: 3, speed: 0.2 },
];

const BrainMesh = ({ brainRef }) => {
    const materialRef = useRef();



    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uTime = clock.getElapsedTime();
        }
        // Breathing scale
        if (brainRef.current) {
            const t = clock.getElapsedTime();
            const scale = 1 + Math.sin(t * 1.5) * 0.03;
            brainRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <Sphere ref={brainRef} args={[1.5, 128, 128]} position={[0, 0, 0]}>
            {/* @ts-ignore */}
            <brainMaterial ref={materialRef} transparent />
        </Sphere>
    );
};

// --------------------------------------------------------
// 3. Orbiting System
// --------------------------------------------------------
// --------------------------------------------------------
// 3. Orbiting System
// --------------------------------------------------------

// Separate component to handle line update loop efficiently
const ConnectionLine = ({ brainRef, targetRef, color }) => {
    const lineRef = useRef();

    useFrame(() => {
        if (brainRef.current && targetRef.current && lineRef.current) {
            const brainPos = brainRef.current.position;
            const targetPos = targetRef.current.position;
            lineRef.current.setPoints(brainPos, targetPos);

            // Random blinking effect
            if (Math.random() > 0.95) {
                lineRef.current.material.opacity = 0.8;
            } else {
                lineRef.current.material.opacity = THREE.MathUtils.lerp(lineRef.current.material.opacity, 0.1, 0.1);
            }
        }
    });

    return (
        <Line
            ref={lineRef}
            points={[[0, 0, 0], [0, 0, 0]]}
            color={color}
            lineWidth={1}
            transparent
            opacity={0.1}
            depthWrite={false}
        />
    )
}

const SkillNode = ({ skill, index, total, brainRef }) => {
    const groupRef = useRef();
    const iconRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Distribute on a ring based on index
    const radius = 2.8 + skill.layer * 0.8; // Different layers have different radii
    const angle = (index / total) * Math.PI * 2;

    // Initial position
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 2; // Random height variation

    useFrame(({ clock }) => {
        if (groupRef.current && !hovered) {
            // Orbit rotation
            const t = clock.getElapsedTime() * skill.speed;
            groupRef.current.position.x = Math.cos(angle + t) * radius;
            groupRef.current.position.z = Math.sin(angle + t) * radius;
            groupRef.current.position.y = y + Math.sin(t * 0.5) * 0.5; // Bobbing
            groupRef.current.lookAt(0, 0, 0); // Face center? No, face camera usually better for icons
        }
    });

    return (
        <>
            <group ref={groupRef} position={[x, y, z]}>
                <group ref={iconRef} /> {/* Invisible holder for connection target */}

                <Html transform position={[0, 0, 0]} distanceFactor={6} style={{ pointerEvents: 'none' }}>
                    {/* Note: Html generally handles pointer events, but we want the sphere to handle it if we used a mesh. 
                 Since we use Html div, we can use standard DOM events.
              */}
                </Html>

                {/* Actual Interactive HTML */}
                <Html position={[0, 0, 0]} center>
                    <div
                        className={`relative flex items-col items-center justify-center cursor-pointer transition-all duration-300 ${hovered ? 'scale-125 z-50' : 'scale-100 opacity-80'}`}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        {/* Tooltip */}
                        <div className={`absolute -top-8 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 transition-opacity duration-300 whitespace-nowrap ${hovered ? 'opacity-100' : ''}`}>
                            {skill.name}
                        </div>

                        {/* Icon Circle */}
                        <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#1a0b2e]/80 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 ${hovered ? 'border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.6)] bg-purple-900/40' : ''}`}>
                            <skill.Icon style={{ color: skill.color }} className="text-xl md:text-2xl" />
                        </div>
                    </div>
                </Html>
            </group>

            {/* Connection Line - Needs dynamic update */}
            <ConnectionLine brainRef={brainRef} targetRef={groupRef} color={skill.color} />
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

                {/* Center Brain */}
                <BrainMesh brainRef={brainRef} />

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
