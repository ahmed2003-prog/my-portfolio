"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const certifications = [
  {
    title: "Data Engineering Bootcamp",
    issuer: "DataCamp x DataPilot",
    date: "January 2025",
  },
  {
    title: "Arbisoft Ltd Recommendation Letter",
    issuer: "Arbisoft Ltd",
    date: "September 2024",
  },
  {
    title: "Mindstorm Studios Internship Completion Certificate",
    issuer: "Mindstorm Studios",
    date: "August 2024",
  },
];

export default function Certifications() {
  const [floatingDots, setFloatingDots] = useState([]);

  useEffect(() => {
    const dots = Array.from({ length: 80 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 3 + 3}s`,
    }));
    setFloatingDots(dots);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-green-500 font-mono px-4 sm:px-8">
      {/* Floating dots background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingDots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1.5 bg-green-500 opacity-50 animate-float"
            style={{ top: dot.top, left: dot.left, animationDuration: dot.duration }}
          />
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 tracking-widest glitch-text z-10 text-center">
        CERTIFICATIONS
      </h1>

      {/* Certification Cards */}
      <div className="space-y-6 sm:space-y-8 z-10 w-full max-w-lg sm:max-w-2xl">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{cert.title}</h2>
            <p className="text-xs sm:text-sm text-gray-400 mb-1">{cert.issuer}</p>
            <p className="text-xs sm:text-sm text-gray-400">{cert.date}</p>
          </div>
        ))}
      </div>

      {/* Back to Home Link */}
      <Link href="/" className="mt-8 sm:mt-12 text-lg hover:text-green-300 underline z-10">
        Back to Home
      </Link>

      {/* Animations and Styles */}
      <style jsx>{`
        @keyframes flicker {
          0% {
            opacity: 1;
            text-shadow: 2px 2px 0 #ff00ff, -2px -2px 0 #00ffff;
          }
          25% {
            opacity: 0.8;
            text-shadow: 3px 3px 4px #ff00ff, -3px -3px 4px #00ffff;
          }
          50% {
            opacity: 0.5;
            text-shadow: 2px 2px 6px #ff00ff, -2px -2px 6px #00ffff;
          }
          75% {
            opacity: 0.8;
            text-shadow: 3px 3px 4px #ff00ff, -3px -3px 4px #00ffff;
          }
          100% {
            opacity: 1;
            text-shadow: 2px 2px 0 #ff00ff, -2px -2px 0 #00ffff;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .glitch-text {
          animation: flicker 1.5s infinite alternate;
        }
      `}</style>
    </div>
  );
}
