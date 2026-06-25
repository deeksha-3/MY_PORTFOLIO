import { motion } from 'framer-motion';
import { BookOpen, Award, Target, Briefcase, Calendar, GraduationCap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Briefcase, label: 'Internships Completed', value: '3+' },
    { icon: BookOpen, label: 'Projects Built', value: '3+' },
    { icon: Award, label: 'Certifications Obtained', value: '3+' },
    { icon: Calendar, label: 'Academic Session', value: '2023–2027' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden border-t border-slate-900/40 light:border-slate-200/40">

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
            About <span className="text-gradient-cyan-purple">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Academic Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 light:text-purple-600 light:bg-purple-500/10 light:border-purple-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="font-display font-bold text-lg text-slate-100 light:text-slate-900">Education Profile</h4>
                <p className="text-xs text-slate-400 font-mono">CSE (AI & ML) Specialization</p>
              </div>
            </div>

            <div className="space-y-4 text-left border-t border-slate-900/60 pt-6 light:border-slate-200">
              <div>
                <span className="text-xs text-slate-500 font-mono block uppercase">Degree</span>
                <span className="font-medium text-slate-200 light:text-slate-800">Bachelor of Technology (B.Tech)</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block uppercase">Department</span>
                <span className="font-medium text-slate-200 light:text-slate-800">Computer Science & Engineering</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block uppercase">Institution</span>
                <span className="font-medium text-slate-200 light:text-slate-800">United College of Engineering and Research, Prayagraj</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block uppercase">Timeline</span>
                <span className="font-medium text-slate-200 light:text-slate-800">2023 – 2027 (Ongoing)</span>
              </div>
            </div>

            {/* Micro-stat bar */}
            <div className="grid grid-cols-2 gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-900/60 light:bg-slate-100/50 light:border-slate-200">
              <div className="text-center">
                <span className="text-2xl font-bold text-cyan-400 light:text-purple-600">4th</span>
                <span className="text-[10px] text-slate-400 block font-mono">Current Year</span>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Narrative & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-8 text-left"
          >

            {/* Career Objective & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400 light:text-purple-600 font-mono text-sm font-semibold">
                <Target className="w-4 h-4" />
                <span>Career Objective</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100 light:text-slate-900 leading-tight">
                Building Intelligent Solutions at the Intersection of AI & Full-Stack Development
              </h3>
              <p className="text-slate-400 leading-relaxed font-light light:text-slate-600">
                As a Fourth-year Computer Science Engineering student specializing in AI and ML, my goal is to design, develop, and evaluate machine learning models that address real-world challenges. I combine my mathematical foundation in data science with hands-on full-stack development methodologies to build end-to-end intelligent systems.
              </p>
              <p className="text-slate-400 leading-relaxed font-light light:text-slate-600">
                Through multiple industry-level internship experiences at **IBM**, **Infosys Springboard**, and **SoftgrowTech**, I have worked on generative AI pipelines, prompt engineering, NLP models, and machine learning algorithm deployments. I thrive in collaborative environments and am dedicated to continuous learning.
              </p>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/30 border border-slate-900/80 hover:border-cyan-500/20 shadow-sm glass flex flex-col items-center text-center transition-all light:bg-white/40 light:border-slate-200 light:hover:border-purple-500/20"
                  >
                    <div className="w-8 h-8 rounded-xl bg-slate-950/80 border border-slate-900/60 flex items-center justify-center text-cyan-400 mb-2 light:bg-slate-100 light:border-slate-200 light:text-purple-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-slate-100 light:text-slate-900 leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono tracking-tight leading-tight uppercase max-w-[80px]">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
