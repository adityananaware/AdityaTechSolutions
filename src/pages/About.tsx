import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Award, Cpu, Globe, Zap } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const About = () => {
  const skills = [
    { name: "HTML", level: 95, icon: <Globe className="w-4 h-4" /> },
    { name: "CSS", level: 90, icon: <Zap className="w-4 h-4" /> },
    { name: "JavaScript", level: 85, icon: <Cpu className="w-4 h-4" /> },
    { name: "Python", level: 80, icon: <Award className="w-4 h-4" /> },
    { name: "Machine Learning", level: 75, icon: <Target className="w-4 h-4" /> },
    { name: "Data Science", level: 70, icon: <Eye className="w-4 h-4" /> }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-slate-900 py-32 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              About <span className="text-primary-light">Our Company</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Innovating the future through code and data. We are a team of passionate creators dedicated to solving complex problems with elegant solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Who We Are</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Aditya Tech Solutions was founded with a simple mission: to provide high-quality, accessible technology solutions to businesses of all sizes. We believe that every business deserves a powerful digital presence.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our expertise spans across modern web development frameworks and advanced data science techniques. This unique combination allows us to build not just websites, but intelligent digital ecosystems that drive real business value.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 glow-red-hover hover:shadow-lg transition-all" data-aos="fade-up">
                <h4 className="text-4xl font-extrabold text-primary mb-2">50+</h4>
                <p className="text-slate-500 font-medium">Projects Completed</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 glow-red-hover hover:shadow-lg transition-all" data-aos="fade-up" data-aos-delay="100">
                <h4 className="text-4xl font-extrabold text-primary mb-2">30+</h4>
                <p className="text-slate-500 font-medium">Happy Clients</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <TiltCard>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2340" 
                  alt="Our Workspace" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </TiltCard>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Technical Arsenal</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We stay at the forefront of technology to deliver the best results for our clients.</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {skill.icon}
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{skill.name}</span>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="p-12 rounded-[2.5rem] bg-primary text-white glow-red-hover relative overflow-hidden group"
            data-aos="fade-right"
          >
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-10 backdrop-blur-md animate-float-slow">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-bold mb-8">Our Mission</h3>
              <p className="text-white/90 text-xl leading-relaxed">
                To empower businesses by delivering innovative, high-quality, and scalable technology solutions that drive growth and efficiency in an ever-evolving digital world.
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="p-12 rounded-[2.5rem] bg-slate-900 text-white glow-red-hover relative overflow-hidden group"
            data-aos="fade-left"
          >
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-10 backdrop-blur-md animate-float-slow">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-bold mb-8">Our Vision</h3>
              <p className="text-white/90 text-xl leading-relaxed">
                To be a global leader in web development and data science, recognized for our creativity, technical excellence, and commitment to client success.
              </p>
            </div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
