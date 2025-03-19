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
      <Head >
        <title className="mt-">Projects | My Portfolio</title>
        <meta name="description" content="A showcase of my projects." />
      </Head>

      <h1 className="text-5xl font-bold mt-6 mb-12 tracking-widest neon-text text-center crt-effect">
        MY PROJECTS
      </h1>

      <div className="relative w-full max-w-2xl border-4 border-neon-green p-6 rounded-2xl shadow-neon">
        <div className="bg-black p-4 rounded-b-lg mt-4 text-center">
          <h3 className="text-3xl font-bold mb-4 glitch-text">{projects[currentIndex]?.title}</h3>
          <p className="mb-6">{projects[currentIndex]?.description}</p>
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            {projects[currentIndex]?.skills?.map((skill, i) => (
              <span key={i} className="px-4 py-1 bg-neon-green text-black rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
          <a
            href={projects[currentIndex]?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-pink underline hover:text-neon-green transition-all"
          >
            View Project
          </a>
          <div className="mt-4 text-sm text-gray-400">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-12">
        <button onClick={handlePrev} className="text-lg px-8 py-3 border-2 border-neon-green rounded-lg hover:bg-neon-green hover:text-black transition-all">
          Previous
        </button>
        <Link href="/">
          <button className="text-lg px-8 py-3 border-2 border-neon-pink rounded-lg hover:bg-neon-pink hover:text-black transition-all">
            Home
          </button>
        </Link>
        <button onClick={handleNext} className="text-lg px-8 py-3 border-2 border-neon-green rounded-lg hover:bg-neon-green hover:text-black transition-all">
          Next
        </button>
      </div>
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
      @keyframes flicker_title {
        0% { opacity: 0.8; }
        5% { opacity: 0.6; }
        10% { opacity: 1; }
        15% { opacity: 0.9; }
        20% { opacity: 0.7; }
        100% { opacity: 1; }
      }

      @keyframes scanline {
        0% { top: -100%; }
        100% { top: 100%; }
      }

      .crt-effect {
        position: relative;
        animation: flicker_title 0.2s infinite alternate;
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

      .retro-glow {
        box-shadow: 0 0 15px #00ffff;
      }

      .shadow-neon {
        box-shadow: 0 0 15px #00ff00;
      }
    `}</style>

    </motion.div>
  );
}