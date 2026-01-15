"use client";
import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0213] to-[#1a0b2e] text-white px-4">
            <div className="max-w-[1500px] w-full text-center rounded-lg p-10 bg-black/50 backdrop-blur-lg shadow-lg">
                <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">Oops! Page Not Found</h2>
                <p className="text-gray-300 mb-8">
                    The page you are looking for doesn’t exist or has been moved.
                </p>
                <Link href="/">
                    <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-colors">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
