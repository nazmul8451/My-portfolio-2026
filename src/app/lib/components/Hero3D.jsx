"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
    const sphereRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        if (sphereRef.current) {
            sphereRef.current.rotation.x = t * 0.2;
            sphereRef.current.rotation.y = t * 0.3;
            sphereRef.current.position.y = Math.sin(t) * 0.2; // Floating effect
        }
    });

    return (
        <Sphere visible args={[1, 100, 200]} scale={2.4} ref={sphereRef}>
            <MeshDistortMaterial
                color="#8b5cf6" // Purple-500
                attach="material"
                distort={0.5} // Amount of distortion
                speed={2} // Speed of distortion
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-[400px] lg:h-[600px] relative z-10">
            <Canvas className="w-full h-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[3, 2, 1]} intensity={1.5} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
