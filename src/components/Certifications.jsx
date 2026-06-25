import { motion } from 'framer-motion';
import { Award, ShieldCheck, Milestone } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Generative AI Internship',
      issuer: 'IBM',
      type: 'Internship Credential',
      color: 'from-cyan-500/10 to-blue-500/5',
      borderColor: 'group-hover:border-cyan-500/30',
      iconColor: 'text-cyan-400'
    },
    {
      title: 'Artificial Intelligence Certificate',
      issuer: 'Infosys Springboard',
      type: 'Internship Credential',
      color: 'from-blue-500/10 to-indigo-500/5',
      borderColor: 'group-hover:border-blue-500/30',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Machine Learning Internship',
      issuer: 'SoftgrowTech',
      type: 'Internship Credential',
      color: 'from-indigo-500/10 to-purple-500/5',
      borderColor: 'group-hover:border-indigo-500/30',
      iconColor: 'text-indigo-400'
    },
    {
      title: 'Power BI Workshop',
      issuer: 'Technical Academy',
      type: 'Professional Workshop',
      color: 'from-purple-500/10 to-pink-500/5',
      borderColor: 'group-hover:border-purple-500/30',
      iconColor: 'text-purple-400'
    },
    {
      title: 'Full Stack Development Workshop',
      issuer: 'Developer Community',
      type: 'Professional Workshop',
      color: 'from-emerald-500/10 to-cyan-500/5',
      borderColor: 'group-hover:border-emerald-500/30',
      iconColor: 'text-emerald-400'
    },
    {
      title: 'NLP Workshop',
      issuer: 'AI Research Group',
      type: 'Specialized Training',
      color: 'from-pink-500/10 to-red-500/5',
      borderColor: 'group-hover:border-pink-500/30',
      iconColor: 'text-pink-400'
    },
    {
      title: 'Mobile App Development Workshop',
      issuer: 'Tech Innovation Cell',
      type: 'Specialized Training',
      color: 'from-cyan-500/10 to-purple-500/5',
      borderColor: 'group-hover:border-cyan-500/30',
      iconColor: 'text-cyan-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden border-t border-slate-900/40 light:border-slate-200/40">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

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
            Licenses & <span className="text-gradient-cyan-purple">Certifications</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certifications.map((cert, idx) => {
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`group glass-panel rounded-3xl p-6 text-left relative overflow-hidden flex flex-col justify-between h-full border border-slate-900 transition-all duration-300 ${cert.borderColor}`}
              >
                {/* Visual Glow Accent */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${cert.color} blur-xl group-hover:scale-150 transition-transform duration-500`} />

                <div className="space-y-4">
                  {/* Verified Credential Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-950/60 border border-slate-900 text-[9px] font-mono font-bold text-emerald-400/90 uppercase tracking-wider light:bg-slate-100 light:border-slate-200/60 light:text-emerald-600/90">
                      <ShieldCheck className="w-3 h-3 text-emerald-400 light:text-emerald-600" />
                      <span>Verified</span>
                    </div>
                    
                    <div className={`w-8 h-8 rounded-lg bg-slate-950/80 border border-slate-900/60 flex items-center justify-center ${cert.iconColor} light:bg-slate-100 light:border-slate-200`}>
                      <Award className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Certification details */}
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-base text-slate-100 group-hover:text-cyan-400 light:text-slate-900 light:group-hover:text-purple-600 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold font-mono text-cyan-400/70 light:text-purple-600/70">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Footer Type */}
                <div className="flex items-center space-x-1.5 pt-4 mt-6 border-t border-slate-900/40 text-[10px] text-slate-500 font-mono light:border-slate-200/80 uppercase tracking-wider">
                  <Milestone className="w-3.5 h-3.5" />
                  <span>{cert.type}</span>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
