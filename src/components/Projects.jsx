import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Brain, Layers, MessageSquare, Calculator, FileText } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Resume Analysis using Machine Learning',
      category: 'aiml',
      description: 'An NLP-based intelligent resume screening and candidate evaluation system that parses resumes, extracts key skills, and scores candidates against job descriptions.',
      technologies: ['Python', 'NLP', 'Scikit-learn', 'NLTK'],
      github: 'https://github.com/deeksha-3',
      demo: '#',
      icon: FileText,
      svgColor: 'text-cyan-400',
      svgBg: 'from-cyan-500/10 to-blue-500/5',
      drawSvg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="15" width="50" height="70" rx="4" stroke="currentColor" strokeWidth="2" />
          <line x1="35" y1="30" x2="65" y2="30" stroke="currentColor" strokeWidth="2" />
          <line x1="35" y1="42" x2="65" y2="42" stroke="currentColor" strokeWidth="2" />
          <line x1="35" y1="54" x2="55" y2="54" stroke="currentColor" strokeWidth="2" />
          <circle cx="65" cy="65" r="12" stroke="currentColor" strokeWidth="2" fill="#020617" />
          <path d="M65 60V70M60 65H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'AI-ML Personalized Diet Plan Generator',
      category: 'aiml',
      description: 'An intelligent wellness platform that provides personalized health and nutritional recommendations by mining dietary data and applying machine learning algorithms.',
      technologies: ['Python', 'Machine Learning', 'Data Mining', 'Pandas'],
      github: 'https://github.com/deeksha-3',
      demo: '#',
      icon: Brain,
      svgColor: 'text-purple-400',
      svgBg: 'from-purple-500/10 to-indigo-500/5',
      drawSvg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85C69.33 85 85 69.33 85 50" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M50 25C63.8 25 75 36.2 75 50C75 63.8 63.8 75 50 75C36.2 75 25 63.8 25 50C25 36.2 36.2 25 50 25Z" stroke="currentColor" strokeWidth="2" />
          <path d="M35 50H65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M50 35V65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Fake News Generator & Detector',
      category: 'aiml',
      description: 'An NLP-based classification model that detects deceptive news articles. It analyzes semantic patterns, grammar, and source credibility to categorize articles as true or fake.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Scikit-learn'],
      github: 'https://github.com/deeksha-3',
      demo: '#',
      icon: Layers,
      svgColor: 'text-blue-400',
      svgBg: 'from-blue-500/10 to-cyan-500/5',
      drawSvg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="6" stroke="currentColor" strokeWidth="2" />
          <line x1="30" y1="35" x2="70" y2="35" stroke="currentColor" strokeWidth="2" />
          <line x1="30" y1="47" x2="70" y2="47" stroke="currentColor" strokeWidth="2" />
          <line x1="30" y1="59" x2="55" y2="59" stroke="currentColor" strokeWidth="2" />
          <circle cx="65" cy="65" r="10" stroke="currentColor" strokeWidth="2" fill="#020617" className="animate-pulse" />
          <path d="M61 65L64 68L70 62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Real-Time Chat Application',
      category: 'app',
      description: 'A full-stack, real-time messaging application featuring instant message delivery, multi-user chatrooms, active typing indicators, and clean, responsive UI layouts.',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'CSS3'],
      github: 'https://github.com/deeksha-3',
      demo: '#',
      icon: MessageSquare,
      svgColor: 'text-pink-400',
      svgBg: 'from-pink-500/10 to-purple-500/5',
      drawSvg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 65V35C25 29.48 29.48 25 35 25H65C70.52 25 75 29.48 75 35V55C75 60.52 70.52 65 65 65H45L30 75V65H25Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="40" cy="45" r="2.5" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0s' }} />
          <circle cx="50" cy="45" r="2.5" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
          <circle cx="60" cy="45" r="2.5" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0.4s' }} />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Basic Calculator using Python',
      category: 'app',
      description: 'A mathematical calculator built in Python offering operations with a clean graphical user interface, expression parsing, and error management.',
      technologies: ['Python', 'Tkinter', 'GUI', 'Math Logic'],
      github: 'https://github.com/deeksha-3',
      demo: '#',
      icon: Calculator,
      svgColor: 'text-emerald-400',
      svgBg: 'from-emerald-500/10 to-cyan-500/5',
      drawSvg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="20" width="50" height="60" rx="5" stroke="currentColor" strokeWidth="2" />
          <rect x="33" y="28" width="34" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="38" cy="53" r="3" fill="currentColor" />
          <circle cx="50" cy="53" r="3" fill="currentColor" />
          <circle cx="62" cy="53" r="3" fill="currentColor" />
          <circle cx="38" cy="67" r="3" fill="currentColor" />
          <circle cx="50" cy="67" r="3" fill="currentColor" />
          <circle cx="62" cy="67" r="3" fill="currentColor" />
        </svg>
      )
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden border-t border-slate-900/40 light:border-slate-200/40">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-100 light:text-slate-950"
          >
            Featured <span className="text-gradient-cyan-purple">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center space-x-3 mb-12 font-mono text-xs sm:text-sm">
          {[
            { id: 'all', label: 'ALL_PROJECTS' },
            { id: 'aiml', label: 'AI_ML_MODELS' },
            { id: 'app', label: 'APPLICATIONS' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-lg border transition-all duration-200 cursor-pointer focus:outline-none ${
                filter === btn.id
                  ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-400/50 text-cyan-400 light:border-purple-600/50 light:text-purple-600 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.05)]'
                  : 'border-slate-900/60 text-slate-400 hover:text-slate-200 hover:border-slate-800 light:border-slate-200 light:text-slate-600 light:hover:text-slate-900 light:hover:border-slate-300'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const Icon = proj.icon;
              return (
                <motion.div
                  layout
                  key={proj.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="glass-panel rounded-3xl overflow-hidden flex flex-col text-left group h-full relative"
                >
                  
                  {/* Decorative background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Project SVG Graphic header */}
                  <div className={`h-40 bg-gradient-to-br ${proj.svgBg} border-b border-slate-900/40 flex items-center justify-center relative overflow-hidden light:border-slate-200`}>
                    {/* Floating grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px]" />
                    
                    <div className={`relative transition-transform duration-500 group-hover:scale-110 ${proj.svgColor}`}>
                      {proj.drawSvg}
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Label */}
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-cyan-400 font-bold tracking-wider uppercase mb-2 light:text-purple-600">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{proj.category === 'aiml' ? 'AI & Machine Learning' : 'Development App'}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-cyan-400 light:text-slate-900 light:group-hover:text-purple-600 transition-colors leading-tight mb-3">
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 font-light leading-relaxed mb-6 flex-grow light:text-slate-600">
                      {proj.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/50 border border-slate-900 text-slate-400 light:bg-slate-100 light:border-slate-200 light:text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links Row */}
                    <div className="flex items-center space-x-3 pt-4 border-t border-slate-900/40 light:border-slate-200">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-300 font-medium text-xs flex items-center justify-center space-x-1.5 shadow-sm glass transition-all light:bg-white/60 light:border-slate-200 light:text-slate-700 light:hover:border-purple-500/30 light:hover:text-purple-600 cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={proj.demo}
                        className="flex-1 px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 hover:text-cyan-400 text-slate-300 font-medium text-xs flex items-center justify-center space-x-1.5 shadow-sm glass transition-all light:bg-white/60 light:border-slate-200 light:text-slate-700 light:hover:border-purple-500/30 light:hover:text-purple-600 cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
