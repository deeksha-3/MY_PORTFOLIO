import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Terminal } from 'lucide-react';

export default function Hero() {
  const roles = [
    'AI & ML Enthusiast',
    'Full Stack Learner',
    'Aspiring Software Engineer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullRole = roles[currentRoleIndex];

      if (!isDeleting) {
        // Typing
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        setTypingSpeed(75); // speed up typing slightly

        if (currentText === fullRole) {
          // Pause at end of word
          setIsDeleting(true);
          setTypingSpeed(1500); // Wait 1.5s before starting to delete
        }
      } else {
        // Deleting
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        setTypingSpeed(40); // speed up deleting

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300); // Pause before starting next word
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">

      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* Left text column */}
        <div className="md:col-span-7 flex flex-col items-start space-y-6 text-left order-2 md:order-1">

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 font-medium tracking-wide shadow-sm glass light:bg-white/60 light:border-slate-200 light:text-slate-600"
          >
            <MapPin className="w-3.5 h-3.5 text-cyan-400 light:text-purple-600" />
            <span>Prayagraj, Uttar Pradesh, India</span>
          </motion.div>

          {/* Title and Intro */}
          <div className="space-y-3">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm md:text-base font-semibold tracking-wider uppercase text-cyan-400 light:text-purple-600 font-mono"
            >
              Hi there, I am
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-100 tracking-tight leading-none light:text-slate-950"
            >
              Deeksha Mishra
            </motion.h1>

            {/* Typing Effect Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl font-mono font-bold flex items-center h-8 text-slate-300 light:text-slate-700"
            >
              <Terminal className="w-5 h-5 text-cyan-400 mr-2 light:text-purple-600" />
              <span className="text-gradient-cyan-purple">{currentText}</span>
              <span className="w-2.5 h-5 bg-cyan-400 ml-1 animate-pulse light:bg-purple-600" />
            </motion.div>
          </div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl font-light leading-relaxed light:text-slate-600"
          >
            Fourth-year Computer Science student specializing in Artificial Intelligence and Machine Learning.
            Passionate about building intelligent systems, solving real-world problems, and exploring emerging technologies.
          </motion.p>



          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-medium text-sm flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>


            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-xl bg-transparent text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors cursor-pointer flex items-center justify-center sm:hidden md:flex light:text-slate-600 light:hover:text-slate-900"
            >
              <span>Contact Me</span>
            </button>
          </motion.div>
        </div>

        {/* Right graphic column */}
        <div className="md:col-span-5 flex items-center justify-center order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:max-w-[360px] aspect-square rounded-full flex items-center justify-center"
          >
            {/* Tech glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 animate-spin-slow pointer-events-none" />

            {/* Outer dotted border ring */}
            <div className="absolute -inset-4 rounded-full border border-dashed border-slate-800/60 animate-pulse pointer-events-none light:border-slate-200" />

            {/* Glowing background circles */}
            <motion.div
              className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 opacity-10 blur-xl pointer-events-none"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            {/* AI/ML Hologram SVG */}
            <div className="relative w-full h-full rounded-full border border-slate-900/60 bg-slate-950/60 backdrop-blur-md flex items-center justify-center shadow-2xl glass overflow-hidden light:bg-slate-50/60 light:border-slate-200">
              <svg
                viewBox="0 0 200 200"
                className="w-[80%] h-[80%] text-cyan-400 light:text-purple-600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Neural net nodes */}
                <circle cx="100" cy="40" r="4" className="fill-cyan-400/80 light:fill-purple-600/80 animate-ping" style={{ animationDuration: '3s' }} />
                <circle cx="100" cy="40" r="3" className="fill-cyan-400 light:fill-purple-600" />

                <circle cx="50" cy="90" r="3" className="fill-cyan-400 light:fill-purple-600" />
                <circle cx="150" cy="90" r="3" className="fill-purple-400 light:fill-indigo-600" />
                <circle cx="70" cy="150" r="3" className="fill-cyan-400 light:fill-purple-600" />
                <circle cx="130" cy="150" r="3" className="fill-purple-400 light:fill-indigo-600" />

                {/* Connections */}
                <line x1="100" y1="40" x2="50" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-50" />
                <line x1="100" y1="40" x2="150" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="opacity-50" />
                <line x1="50" y1="90" x2="70" y2="150" stroke="currentColor" strokeWidth="1" className="opacity-30" />
                <line x1="150" y1="90" x2="130" y2="150" stroke="currentColor" strokeWidth="1" className="opacity-30" />
                <line x1="70" y1="150" x2="130" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" className="opacity-40" />
                <line x1="50" y1="90" x2="130" y2="150" stroke="currentColor" strokeWidth="0.8" className="opacity-20" />
                <line x1="150" y1="90" x2="70" y2="150" stroke="currentColor" strokeWidth="0.8" className="opacity-20" />

                {/* Central brain/AI grid icon */}
                <g transform="translate(75, 65)">
                  <path
                    d="M25 5C13.95 5 5 13.95 5 25C5 36.05 13.95 45 25 45C36.05 45 45 36.05 45 25C45 13.95 36.05 5 25 5ZM25 9C33.84 9 41 16.16 41 25C41 33.84 33.84 41 25 41C16.16 41 9 33.84 9 25C9 16.16 16.16 9 25 9Z"
                    fill="currentColor"
                    className="opacity-40"
                  />
                  <path
                    d="M25 12C17.82 12 12 17.82 12 25C12 32.18 17.82 38 25 38C32.18 38 38 32.18 38 25C38 17.82 32.18 12 25 12ZM25 16C29.97 16 34 20.03 34 25C34 29.97 29.97 34 25 34C20.03 34 16 29.97 16 25C16 20.03 20.03 16 25 16Z"
                    fill="currentColor"
                    className="opacity-60"
                  />
                  <circle cx="25" cy="25" r="5" fill="currentColor" className="opacity-90 animate-pulse" />
                </g>

                {/* Cyber ring */}
                <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 15" className="opacity-40 animate-spin-slow" />
              </svg>

              {/* Floating tech metrics */}
              <div className="absolute bottom-6 left-6 font-mono text-[9px] text-cyan-400/40 select-none light:text-purple-600/40">
                LOC: 25.43 N, 81.84 E
              </div>
              <div className="absolute top-6 right-6 font-mono text-[9px] text-purple-400/40 select-none light:text-indigo-600/40">
                SYS_STATUS: ACTIVE
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
