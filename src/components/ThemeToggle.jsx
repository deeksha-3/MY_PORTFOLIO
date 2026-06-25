import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors focus:outline-none glass cursor-pointer shadow-sm relative overflow-hidden flex items-center justify-center light:bg-white/40 light:border-slate-200 light:text-slate-600 light:hover:text-purple-600 light:hover:border-purple-500/30"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle Theme"
    >
      <div className="w-5 h-5 relative flex items-center justify-center">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.3 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Sun className="w-5 h-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.3 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Moon className="w-5 h-5 text-indigo-600" />
          </motion.div>
        )}
      </div>
    </motion.button>
  );
}
