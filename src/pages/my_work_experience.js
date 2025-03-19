"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const workExperience = [
  {
    company: 'Arbisoft Ltd.',
    role: 'Full Stack Developer Intern',
    duration: 'Jul 2024 - Sep 2024',
    description:
      'Developed user-friendly web interfaces using React.js, ensuring responsive design and accessibility. Collaborated with cross-functional teams to deliver projects ahead of deadlines.',
    skills: ['React.js', 'Python', 'Django', 'DRF', 'SQLite'],
  },
  {
    company: 'Data Pilot x Data Camp',
    role: 'Data Engineering Bootcamp',
    duration: 'January 2025 - April 2025',
    description:
      'Participated in a 4-month bootcamp to learn data engineering concepts, tools, and technologies. Developed ETL pipelines, data models, and data warehousing solutions.',
    skills: ['Python', 'SQL', 'ETL Tools', 'Data Modeling', 'Data Warehousing'],
  },
  {
    company: 'Mindstorm Studios',
    role: 'Game Development Intern',
    duration: 'Jun 2024 - Aug 2024',
    description:
      'This experience has been incredible, and Ive gained valuable skills in game design, development, and the intricacies of creating engaging 2D games.',
    skills: ['Unity', 'C#', 'Game Design', 'Level Design'],
  },
];

const Work = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-auto bg-black text-green-500 font-mono p-8 pb-20 relative overflow-hidden">
      <div className="mb-8">
        <Link href="/" passHref>
          <button className="text-lg hover:text-green-300">Home</button>
        </Link>
      </div>
      <h1 className="text-5xl font-bold mt-2 mb-6 tracking-widest neon-text text-center crt-effect">
        WORK EXPERIENCE
      </h1>

      {/* Particle effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_rgba(0,255,0,0.1),_transparent)] animate-pulse"></div>
      </div>

      {isClient && (
        <motion.div
          className="space-y-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {workExperience.map((work, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-4 rounded-lg shadow-md hover:scale-104 hover:shadow-neon-green transform transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{work.company}</h2>
              <h3 className="text-xl mb-1">{work.role}</h3>
              <p className="text-sm text-gray-400 mb-4">{work.duration}</p>
              <p className="mb-4">{work.description}</p>
              <div className="flex flex-wrap gap-2">
                {work.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-green-700 text-black rounded-full shadow-neon-green">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Work;
