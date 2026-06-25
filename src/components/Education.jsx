import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden border-t border-slate-900/40 light:border-slate-200/40">
      
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
            Academic <span className="text-gradient-cyan-purple">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Education Card Timeline */}
        <div className="relative border-l-2 border-slate-900/80 ml-4 md:ml-8 pl-8 sm:pl-10 text-left light:border-slate-200">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Cap Icon */}
            <div className="absolute -left-[53px] sm:-left-[57px] top-1.5 w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/10 light:bg-white light:border-slate-300 light:text-purple-600">
              <GraduationCap className="w-5 h-5" />
            </div>

            {/* Content Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100 group-hover:text-cyan-400 light:text-slate-900 light:group-hover:text-purple-600 transition-colors">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <p className="text-sm font-semibold font-mono text-cyan-400/80 light:text-purple-600/80">
                    Computer Science & Engineering (Specializing in AI & ML)
                  </p>
                </div>

                <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-950/60 border border-slate-900/60 text-xs text-slate-400 font-mono self-start sm:self-center light:bg-slate-100 light:border-slate-200 light:text-slate-600">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2023 – 2027</span>
                </div>
              </div>

              {/* Institution Details */}
              <div className="space-y-4 text-slate-400 font-light text-sm sm:text-base light:text-slate-600">
                <div className="flex items-center space-x-2 text-slate-300 light:text-slate-800">
                  <Award className="w-5 h-5 text-cyan-400 light:text-purple-600 flex-shrink-0" />
                  <span className="font-semibold">United College of Engineering and Research, Prayagraj</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4.5 h-4.5 text-slate-500 flex-shrink-0" />
                  <span>Affiliated with APJ Abdul Kalam Technical University (AKTU)</span>
                </div>

                <div className="pt-4 border-t border-slate-900/40 space-y-2 light:border-slate-200">
                  <p className="leading-relaxed">
                    Undergoing rigorous training in advanced computer science principles, software engineering methodologies, and computational mathematics. The curriculum specializes deeply in artificial intelligence architectures, deep neural network systems, and statistical modeling.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Neural Networks', 'Machine Learning', 'Data Structures', 'Python & C++', 'Database Management', 'Design Analysis'].map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950/40 border border-slate-900 text-slate-400 light:bg-slate-100 light:border-slate-200 light:text-slate-600"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
