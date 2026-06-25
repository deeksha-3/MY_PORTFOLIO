import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 relative overflow-hidden border-t border-slate-900 bg-slate-950/40 backdrop-blur-sm light:border-slate-200 light:bg-slate-100/40">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Credits */}
        <div className="text-center md:text-left space-y-1">
          <span className="font-display font-bold text-base tracking-wider text-slate-100 light:text-slate-900">
            DEEKSHA MISHRA
          </span>
          <p className="text-xs text-slate-500 font-mono">
            Copyright © 2026. All rights reserved.
          </p>
        </div>

        {/* Center Side: Tech Stack Attribution */}
        <div className="text-center text-xs text-slate-400 font-light font-mono light:text-slate-600">
          Built with <span className="text-cyan-400 font-semibold light:text-purple-600">React.js</span> & <span className="text-purple-400 font-semibold light:text-indigo-600">Tailwind CSS</span>
        </div>

        {/* Right Side: Socials & Back to Top */}
        <div className="flex items-center space-x-6">
          
          {/* Socials */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/deeksha-3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all light:bg-white/50 light:border-slate-200 light:text-slate-600 light:hover:text-purple-600 light:hover:border-purple-500/30 cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/deeksha-mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all light:bg-white/50 light:border-slate-200 light:text-slate-600 light:hover:text-purple-600 light:hover:border-purple-500/30 cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:mishradiksha25103@gmail.com"
              className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all light:bg-white/50 light:border-slate-200 light:text-slate-600 light:hover:text-purple-600 light:hover:border-purple-500/30 cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 glass transition-all light:bg-white/60 light:border-slate-200 light:text-slate-600 light:hover:text-purple-600 light:hover:border-purple-500/30 cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}
