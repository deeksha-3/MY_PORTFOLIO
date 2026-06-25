import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Send, AlertCircle, CheckCircle, Terminal } from 'lucide-react';


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mishradiksha25103@gmail.com',
      href: 'mailto:mishradiksha25103@gmail.com',
      color: 'text-cyan-400',
      shadowColor: 'rgba(6, 182, 212, 0.15)'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/deeksha-mishra',
      href: 'https://linkedin.com/in/deeksha-mishra',
      color: 'text-blue-400',
      shadowColor: 'rgba(59, 130, 246, 0.15)'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/deeksha-3',
      href: 'https://github.com/deeksha-3',
      color: 'text-purple-400',
      shadowColor: 'rgba(168, 85, 247, 0.15)'
    }
  ];

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    else if (formData.name.trim().length < 2) tempErrors.name = 'Name must be at least 2 characters.';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) tempErrors.email = 'Email is required.';
    else if (!emailRegex.test(formData.email.trim())) tempErrors.email = 'Please enter a valid email address.';

    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required.';

    if (!formData.message.trim()) tempErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 10) tempErrors.message = 'Message must be at least 10 characters.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API transmit delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden border-t border-slate-900/40 light:border-slate-200/40">

      {/* Background glowing sphere */}
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

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
            Get In <span className="text-gradient-cyan-purple">Contact Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded-full"
          />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Contact info links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100 light:text-slate-900">
                Let's discuss a project or opportunity!
              </h3>
              <p className="text-slate-400 font-light leading-relaxed light:text-slate-600">
                Have a question, an internship opportunity, or a project in mind? Feel free to reach out using the form, or connect with me directly through my social channels. I usually respond within 24 hours.
              </p>
            </div>

            {/* Link blocks */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={idx}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 6, boxShadow: `0 8px 20px ${info.shadowColor}` }}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-cyan-500/30 glass transition-all light:bg-white/50 light:border-slate-200 light:hover:border-purple-500/30"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-slate-950/80 border border-slate-900/60 flex items-center justify-center ${info.color} light:bg-slate-100 light:border-slate-200`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold tracking-wider leading-none mb-1">
                        {info.label}
                      </span>
                      <span className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-cyan-400 light:text-slate-800 transition-colors">
                        {info.value}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Glassmorphic form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 shadow-xl text-left flex flex-col justify-center relative min-h-[450px]"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 w-full"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono font-bold text-slate-400 light:text-slate-600 block">
                        YOUR_NAME
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/50 border text-sm text-slate-200 focus:outline-none focus:border-cyan-400/80 transition-all light:bg-slate-100/60 light:text-slate-800 light:focus:border-purple-600/80 ${errors.name ? 'border-red-500/60 focus:border-red-500' : 'border-slate-900/80 light:border-slate-200'
                          }`}
                        placeholder=" "
                      />
                      {errors.name && (
                        <div className="flex items-center space-x-1 text-xs text-red-400 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono font-bold text-slate-400 light:text-slate-600 block">
                        EMAIL_ADDRESS
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/50 border text-sm text-slate-200 focus:outline-none focus:border-cyan-400/80 transition-all light:bg-slate-100/60 light:text-slate-800 light:focus:border-purple-600/80 ${errors.email ? 'border-red-500/60 focus:border-red-500' : 'border-slate-900/80 light:border-slate-200'
                          }`}
                        placeholder=" "
                      />
                      {errors.email && (
                        <div className="flex items-center space-x-1 text-xs text-red-400 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono font-bold text-slate-400 light:text-slate-600 block">
                      MESSAGE_SUBJECT
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950/50 border text-sm text-slate-200 focus:outline-none focus:border-cyan-400/80 transition-all light:bg-slate-100/60 light:text-slate-800 light:focus:border-purple-600/80 ${errors.subject ? 'border-red-500/60 focus:border-red-500' : 'border-slate-900/80 light:border-slate-200'
                        }`}
                      placeholder=" "
                    />
                    {errors.subject && (
                      <div className="flex items-center space-x-1 text-xs text-red-400 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-bold text-slate-400 light:text-slate-600 block">
                      MESSAGE_CONTENT
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/50 border text-sm text-slate-200 focus:outline-none focus:border-cyan-400/80 transition-all light:bg-slate-100/60 light:text-slate-800 light:focus:border-purple-600/80 resize-none ${errors.message ? 'border-red-500/60 focus:border-red-500' : 'border-slate-900/80 light:border-slate-200'
                        }`}
                      placeholder=" "
                    />
                    {errors.message && (
                      <div className="flex items-center space-x-1 text-xs text-red-400 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-medium text-sm flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:brightness-105 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8 space-y-6 w-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/5 light:bg-emerald-500/5 light:border-emerald-500/10">
                    <CheckCircle className="w-8 h-8 animate-bounce" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100 light:text-slate-900">
                      Message Transmitted!
                    </h3>
                    <p className="text-sm text-slate-400 max-w-sm font-light light:text-slate-600">
                      Thank you for reaching out, Deeksha. Your query has been successfully received and routed.
                    </p>
                  </div>

                  {/* Terminal status readout */}
                  <div className="bg-slate-950 border border-slate-900 rounded-xl p-4 font-mono text-[11px] sm:text-xs text-cyan-400 text-left w-full max-w-sm light:bg-slate-100 light:border-slate-200 light:text-purple-600">
                    <div className="flex items-center space-x-1.5 mb-1.5 opacity-60">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>transceiver.log</span>
                    </div>
                    <div>&gt; Connection.establish("diksha_channel");</div>
                    <div>&gt; Message.transmit("SUCCESS", 200);</div>
                    <div className="text-emerald-400 light:text-emerald-600">&gt; Status: TRANSMITTED_SECURELY</div>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-slate-200 text-xs font-mono font-semibold transition-all cursor-pointer hover:border-cyan-500/20 light:bg-white/60 light:border-slate-200 light:text-slate-600 light:hover:text-slate-900 light:hover:border-purple-500/20"
                  >
                    SEND_ANOTHER_MESSAGE
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
