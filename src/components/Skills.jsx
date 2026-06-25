import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  BrainCircuit, 
  Database, 
  Wrench, 
  Binary, 
  Layers 
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: BrainCircuit,
      color: 'from-cyan-500 to-blue-500',
      shadowColor: 'rgba(6, 182, 212, 0.25)',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 75 },
        { name: 'Large Language Models (LLMs)', level: 80 },
        { name: 'Natural Language Processing (NLP)', level: 80 },
        { name: 'Prompt Engineering', level: 90 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'from-blue-500 to-indigo-500',
      shadowColor: 'rgba(59, 130, 246, 0.25)',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 75 }
      ]
    },
    {
      title: 'Data Science Libraries',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      shadowColor: 'rgba(99, 102, 241, 0.25)',
      skills: [
        { name: 'NumPy', level: 85 },
        { name: 'Pandas', level: 85 },
        { name: 'Scikit-learn', level: 80 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: Layout,
      color: 'from-purple-500 to-pink-500',
      shadowColor: 'rgba(168, 85, 247, 0.25)',
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 }
      ]
    },
    {
      title: 'Core Subjects',
      icon: Binary,
      color: 'from-cyan-500 to-purple-500',
      shadowColor: 'rgba(6, 182, 212, 0.25)',
      skills: [
        { name: 'Data Structures & Algorithms', level: 80 },
        { name: 'OOPs', level: 85 },
        { name: 'Problem Solving', level: 85 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'from-emerald-500 to-cyan-500',
      shadowColor: 'rgba(16, 185, 129, 0.25)',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 90 },
        { name: 'VS Code', level: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden border-t border-slate-900/40 light:border-slate-200/40">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-100 light:text-slate-950"
          >
            Technical <span className="text-gradient-cyan-purple">Expertise</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: `0 10px 30px ${category.shadowColor}` }}
                className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col text-left relative overflow-hidden group"
              >
                {/* Visual Accent Corner Ribbon */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${category.color} opacity-5 blur-2xl group-hover:opacity-15 transition-opacity duration-300`} />

                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-cyan-400 light:text-slate-900 light:group-hover:text-purple-600 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4 flex-grow">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-300 light:text-slate-700">
                          {skill.name}
                        </span>
                        <span className="font-mono text-slate-500 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Custom progress bar */}
                      <div className="w-full h-1.5 rounded-full bg-slate-950/60 overflow-hidden border border-slate-900/40 light:bg-slate-200 light:border-slate-300/30">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
