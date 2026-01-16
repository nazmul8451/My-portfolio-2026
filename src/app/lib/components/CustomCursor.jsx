"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => setCursorVariant("text");
        const handleMouseLeave = () => setCursorVariant("default");

        const elements = document.querySelectorAll("a, button, h1, h2, span, p, input, textarea");

        elements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []); // Re-run if route changes? Ideally use a mutation observer or simpler global event delegation if complex.

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: "rgba(147, 51, 234, 0.3)", // Purple-500 equivalent
            border: "1px solid rgba(168, 85, 247, 0.5)",
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        text: {
            x: mousePosition.x - 48,
            y: mousePosition.y - 48,
            height: 96,
            width: 96,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            mixBlendMode: "difference",
            transition: {
                type: "spring",
                mass: 0.6
            }
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden lg:block"
            variants={variants}
            animate={cursorVariant}
        />
    );
};

export default CustomCursor;
