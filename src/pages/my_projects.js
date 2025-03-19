"use client"
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import projects from '../../data/projects';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-neon-green flex flex-col items-center justify-center font-mono px-4 pb-20"
    >
      <Head>
        <title>Projects | My Portfolio</title>
        <meta name="description" content="A showcase of my projects." />
      </Head>

      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-6 mb-6 sm:mb-12 tracking-widest neon-text text-center crt-effect">
        MY PROJECTS
      </h1>

      <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-6 border-4 border-neon-green p-6 rounded-2xl shadow-neon">
        <div className="bg-black p-4 rounded-b-lg mt-4 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 glitch-text">
            {projects[currentIndex]?.title}
          </h3>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base">{projects[currentIndex]?.description}</p>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 justify-center">
            {projects[currentIndex]?.skills?.map((skill, i) => (
              <span key={i} className="px-3 py-1 sm:px-4 sm:py-1 bg-neon-green text-black rounded-full text-xs sm:text-sm">
                {skill}
              </span>
            ))}
          </div>
          <a
            href={projects[currentIndex]?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-pink underline hover:text-neon-green transition-all text-sm sm:text-base"
          >
            View Project
          </a>
          <div className="mt-4 text-xs sm:text-sm text-gray-400">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-8 sm:mt-12 w-full max-w-md mx-auto">
        <button
          onClick={handlePrev}
          className="text-sm sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 border-2 border-neon-green rounded-lg hover:bg-neon-green hover:text-black transition-all"
        >
          Previous
        </button>
        <Link href="/" className="w-full sm:w-auto">
          <button className="text-sm sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 border-2 border-neon-pink rounded-lg hover:bg-neon-pink hover:text-black transition-all">
            Home
          </button>
        </Link>
        <button
          onClick={handleNext}
          className="text-sm sm:text-lg w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 border-2 border-neon-green rounded-lg hover:bg-neon-green hover:text-black transition-all"
        >
          Next
        </button>
      </div>

      {/* CSS for CRT Effect & Responsiveness */}
      <style jsx>{`
        @keyframes flicker {
          0% {
            opacity: 1;
            text-shadow: 2px 2px 0 #ff00ff, -2px -2px 0 #00ffff;
          }
          50% {
            opacity: 0.6;
            text-shadow: 3px 3px 6px #ff00ff, -3px -3px 6px #00ffff;
          }
          100% {
            opacity: 1;
            text-shadow: 2px 2px 0 #ff00ff, -2px -2px 0 #00ffff;
          }
        }

        @keyframes scanline {
          0% { top: -100%; }
          100% { top: 100%; }
        }

        .crt-effect {
          position: relative;
          animation: flicker 0.2s infinite alternate;
        }

        .crt-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            rgba(255, 255, 255, 0.02) 0px,
            rgba(255, 255, 255, 0.02) 1px,
            transparent 2px,
            transparent 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        .crt-effect::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
          animation: scanline 6s linear infinite;
          pointer-events: none;
          z-index: 2;
        }

        .neon-text {
          text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #00f;
        }

        .glitch-text {
          animation: flicker 1.5s infinite alternate;
        }

        .shadow-neon {
          box-shadow: 0 0 15px #00ff00;
        }
      `}</style>
    </motion.div>
  );
}
