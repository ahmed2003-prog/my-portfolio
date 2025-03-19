"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const certifications = [
  {
    title: 'Data Engineering Bootcamp',
    issuer: 'DataCamp x DataPilot',
    date: 'January 2025',
  },
  {
    title: 'Arbisoft ltd Recommendation Letter',
    issuer: 'Arbisoft Ltd',
    date: 'September 2024',
  },
  {
    title: 'Mindstorm Studios Internship Completion Certificate',
    issuer: 'Mindstorm Studios',
    date: 'August 2024',
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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-green-500 font-mono">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingDots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1.5 bg-green-500 opacity-50 animate-float"
            style={{ top: dot.top, left: dot.left, animationDuration: dot.duration }}
          />
        ))}
      </div>

      <h1 className="text-5xl font-bold mb-12 tracking-widest glitch-text z-10">CERTIFICATIONS</h1>

      <div className="space-y-8 z-10">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{cert.title}</h2>
            <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
            <p className="text-sm text-gray-400">{cert.date}</p>
          </div>
        ))}
      </div>

      <Link href="/" className="mt-12 text-lg hover:text-green-300 underline z-10">Back to Home</Link>

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

      .neon-text {
        text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #00f;
      }

      .glitch-text {
        animation: flicker 1.5s infinite alternate;
      }

      .retro-glow {
        box-shadow: 0 0 15px #00ffff;
      }

      .shadow-neon {
        box-shadow: 0 0 15px #00ff00;
      }
    `}</style>

    </div>
  );
}