import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState('');
  const fullText = '> System.initialize("Deeksha Mishra");';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative flex flex-col items-center max-w-md px-6">
        {/* Glowing AI Core Animation */}
        <div className="relative w-24 h-24 mb-8">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-40 blur-lg"
            animate={{ 
              scale: [1, 1.25, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "linear" 
            }}
          />
          <motion.div
            className="absolute inset-2 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
          </motion.div>
        </div>

        {/* Typing text terminal */}
        <div className="font-mono text-cyan-400 text-sm md:text-base h-6 flex items-center justify-start min-w-[300px]">
          <span>{text}</span>
          <span className="w-2 h-4 bg-cyan-400 ml-1 animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}
