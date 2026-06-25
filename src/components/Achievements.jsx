import { motion } from 'framer-motion';
import { Award, Briefcase, Code, Compass, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'Industry Internships',
      metric: '3',
      subtitle: 'Completed Industry Placements',
      description: 'Acquired hands-on experience in Generative AI, machine learning algorithm design, and data evaluation at IBM, Infosys Springboard, and SoftgrowTech.',
      icon: Briefcase,
      color: 'text-cyan-400',
      bgGlow: 'from-cyan-500/10 to-transparent'
    },
    {
      title: 'Intelligent AI Projects',
      metric: '5+',
      subtitle: 'Built & Deployed Models',
      description: 'Designed and evaluated natural language processing, diet recommendation systems, fake news classifiers, and real-time socket communication tools.',
      icon: Code,
      color: 'text-purple-400',
      bgGlow: 'from-purple-500/10 to-transparent'
    },
    {
      title: 'Continuous Learning',
      metric: '7+',
      subtitle: 'Certifications & Workshops',
      description: 'Actively participating in specialized training across Power BI, Mobile App Development, Natural Language Processing, and Full Stack Engineering.',
      icon: Star,
      color: 'text-blue-400',
      bgGlow: 'from-blue-500/10 to-transparent'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section id="achievements" className="py-20 relative overflow-hidden border-t border-slate-900/40 light:border-slate-200/40">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

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
            Major <span className="text-gradient-cyan-purple">Milestones</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {achievements.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col text-left relative overflow-hidden group h-full justify-between"
              >
                {/* Radial Glow */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${ach.bgGlow} blur-xl group-hover:scale-150 transition-transform duration-500`} />

                <div className="space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-slate-950/80 border border-slate-900/60 flex items-center justify-center ${ach.color} light:bg-slate-100 light:border-slate-200`}>
                      <Icon className="w-5 h-5 animate-pulse" style={{ animationDuration: '4s' }} />
                    </div>
                    
                    <div className="flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-950/60 border border-slate-900 text-[9px] font-mono font-bold text-cyan-400/80 uppercase tracking-wider light:bg-slate-100 light:border-slate-200 light:text-purple-600/80">
                      <Compass className="w-3 h-3" />
                      <span>Validated</span>
                    </div>
                  </div>

                  {/* Big Metric Display */}
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-slate-100 font-display light:text-slate-900">
                      {ach.metric}
                    </span>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {ach.subtitle}
                    </span>
                  </div>

                  {/* Narrative details */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-slate-100 group-hover:text-cyan-400 light:text-slate-900 light:group-hover:text-purple-600 transition-colors">
                      {ach.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-light leading-relaxed light:text-slate-600">
                      {ach.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
