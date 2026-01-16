"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        const mouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, [cursorX, cursorY]);

    useEffect(() => {
        const handleMouseEnter = () => setCursorVariant("text");
        const handleMouseLeave = () => setCursorVariant("default");

        const updateListeners = () => {
            const elements = document.querySelectorAll("a, button, h1, h2, span, p, input, textarea, .hover-trigger");
            elements.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
            return elements;
        }

        const elements = updateListeners();

        // MutationObserver to handle dynamic content (optional but good for SPAs)
        const observer = new MutationObserver(updateListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            observer.disconnect();
        };
    }, []);

    const variants = {
        default: {
            height: 32,
            width: 32,
            backgroundColor: "rgba(147, 51, 234, 0.3)",
            border: "1px solid rgba(168, 85, 247, 0.5)",
            x: -16,
            y: -16,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        text: {
            height: 80,
            width: 80,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            mixBlendMode: "difference",
            x: -40,
            y: -40,
            transition: {
                type: "spring",
                mass: 0.6
            }
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden lg:block"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            variants={variants}
            animate={cursorVariant}
        />
    );
};

export default CustomCursor;
