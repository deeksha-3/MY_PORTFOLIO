import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Generative AI Intern',
      company: 'IBM',
      duration: 'July 2025 – August 2025',
      skills: ['Generative AI', 'Prompt Engineering', 'Python', 'AI Integration'],
      bullets: [
        'Worked on designing and implementing Generative AI pipelines and application integrations.',
        'Conducted research and implementation of Prompt Engineering methodologies to optimize model outputs.',
        'Built and deployed end-to-end intelligent workflows using Python.'
      ]
    },
    {
      role: 'Artificial Intelligence Intern',
      company: 'Infosys Springboard 6.0',
      duration: 'November 2025 – January 2026',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Data Pipelines', 'Python'],
      bullets: [
        'Developed and successfully tested various AI mini-projects to solve complex analytical problems.',
        'Implemented and fine-tuned core Machine Learning algorithms for classification and regression tasks.',
        'Explored neural network architectures and supervised learning algorithms.'
      ]
    },
    {
      role: 'Machine Learning Intern',
      company: 'SoftgrowTech',
      duration: 'March 2026 – April 2026',
      skills: ['Machine Learning', 'Data Preprocessing', 'Model Evaluation', 'Scikit-learn'],
      bullets: [
        'Developed, optimized, and evaluated machine learning predictive models.',
        'Conducted data preprocessing, feature engineering, and hyperparameter tuning to improve accuracy.',
        'Utilized evaluation metrics to diagnose and resolve overfitting and model drift.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden border-t border-slate-900/40 light:border-slate-200/40">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-100 light:text-slate-950"
          >
            Professional <span className="text-gradient-cyan-purple">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-900/80 ml-4 md:ml-8 pl-8 sm:pl-10 space-y-12 light:border-slate-200">
          
          {experiences.map((exp, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative text-left"
              >
                
                {/* Timeline node icon */}
                <div className="absolute -left-[53px] sm:-left-[57px] top-1.5 w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/10 light:bg-white light:border-slate-300 light:text-purple-600">
                  <Briefcase className="w-4 h-4 animate-pulse" style={{ animationDuration: '3s' }} />
                </div>

                {/* Experience Card */}
                <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden group">
                  {/* Glowing card border hover helper */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-100 group-hover:text-cyan-400 light:text-slate-900 light:group-hover:text-purple-600 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-semibold font-mono text-cyan-400/80 light:text-purple-600/80">
                        {exp.company}
                      </span>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-950/60 border border-slate-900/60 text-xs text-slate-400 font-mono self-start sm:self-center light:bg-slate-100 light:border-slate-200 light:text-slate-600">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Bullets List */}
                  <ul className="space-y-2.5 mb-6 text-sm text-slate-400 font-light light:text-slate-600">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400/70 mt-0.5 flex-shrink-0 light:text-purple-600/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-900/40 light:border-slate-200/55">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950/40 border border-slate-900 text-slate-400 light:bg-slate-100 light:border-slate-200 light:text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
