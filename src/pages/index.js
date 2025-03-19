"use client";
import '../../public/lib/fontawsome';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const FontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon), { ssr: false });

export default function Index() {
  const [text, setText] = useState('');
  const fullText = "Welcome to Ahmed Nadeem's Portfolio";
  const speed = 100;
  const [floatingDots, setFloatingDots] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
      }
    }, speed);

    const dots = Array.from({ length: 100 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 3 + 3}s`,
      translateX: `${Math.random() * 20 - 10}px`,
      translateY: `${Math.random() * 20 - 10}px`,
    }));
    setFloatingDots(dots);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-green-500 font-mono px-4">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingDots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1.5 bg-green-500 opacity-50 animate-float"
            style={{
              top: dot.top,
              left: dot.left,
              animationDuration: dot.duration,
              transform: `translate(${dot.translateX}, ${dot.translateY})`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-10 flex flex-wrap gap-4 md:gap-8 justify-center z-10">
        {[
          { href: "https://www.linkedin.com/in/ahmed-nadeem-579897282/", icon: ['fab', 'linkedin'] },
          { href: "https://github.com/ahmed2003-prog?tab=repositories", icon: ['fab', 'github'] },
          { href: "https://www.upwork.com/freelancers/~014f6bf201362dd321?mp_source=share", icon: ['fab', 'upwork'] },
          { href: "https://wa.me/923336162633", icon: ['fab', 'whatsapp'] },
        ].map(({ href, icon }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} className="text-3xl md:text-5xl hover:text-green-300" />
          </a>
        ))}
      </div>

      <div className="border-4 border-green-500 p-6 md:p-8 rounded-lg shadow-lg max-w-2xl w-full text-center relative z-10">
        <div className="text-md md:text-2xl mb-6">
          {text}
          <span className="animate-blink">|</span>
        </div>

        <a
          href="/cv/Ahmed.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 text-md md:text-lg underline hover:text-green-300 block"
        >
          Download Profile
        </a>

        <h1 className="text-3xl md:text-5xl font-bold mb-8">AHMED NADEEM</h1>

        <div className="flex flex-wrap gap-8 justify-center mb-8">
          <Link href="/my_projects" className="link-style">My Projects</Link>
          <Link href="/my_work_experience" className="link-style">Work Experience</Link>
          <Link href="/my_certs_and_licenses" className="link-style">Certifications</Link>
        </div>

        <div className="text-center text-sm md:text-base">
          <p>Email: <a href="mailto:ahmedprog2003@gmail.com" className="underline hover:text-green-300">Ahmed Nadeem</a></p>
          <p>Contact: <a href="tel:+923336162633" className="underline hover:text-green-300">Phone Number</a></p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
