import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code, Database, Cpu, Layout, Filter, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { TiltCard } from '../components/TiltCard';

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Web Development', 'Data Science'];

  const projects = [
    {
      title: "MindfulMate",
      category: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?auto=format&fit=crop&q=80&w=2340",
      desc: "A student mental health companion designed to provide support and resources using AI-driven insights.",
      tech: ["React", "AI", "Mental Health", "Tailwind"],
      github: "https://github.com/adityananaware/mindfulmate-student-mental-health-companion.git",
      live: "https://mindfulmate.vercel.app"
    },
    {
      title: "EVOptiCharge",
      category: "Web Development",
      icon: <Layout className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2340",
      desc: "Optimizing electric vehicle charging schedules and locations to improve efficiency and reduce costs.",
      tech: ["JavaScript", "EV", "Optimization", "Maps API"],
      github: "https://github.com/adityananaware/EVOptiCharge.git",
      live: "https://adityananaware.github.io/EVOptiCharge"
    },
    {
      title: "Quantum Powered Tomorrow",
      category: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2340",
      desc: "Exploring the future of quantum computing and its potential applications in solving complex problems.",
      tech: ["Quantum Computing", "Research", "Future Tech"],
      github: "https://github.com/adityananaware/Quantum-Powered-Tomorrow.git",
      live: "https://adityananaware.github.io/Quantum-Powered-Tomorrow"
    },
    {
      title: "Crop Recommendation System",
      category: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2340",
      desc: "Recommending the best crops based on soil and weather conditions using advanced machine learning algorithms.",
      tech: ["Python", "ML", "Agriculture", "Scikit-Learn"],
      github: "https://github.com/adityananaware/Crop-Recommendation-System.git"
    },
    {
      title: "AI Agricultural Solution",
      category: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=2340",
      desc: "Prototype development, business strategy, and financial modelling for an AI-powered agricultural solution.",
      tech: ["AI", "Strategy", "Finance", "Python"],
      github: "https://github.com/adityananaware/AI-Powered-Agricultural-Solution-Prototype-Development-Business-Strategy-and-Financial-Modelling.git"
    },
    {
      title: "Medicine Notifier",
      category: "Web Development",
      icon: <Layout className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2340",
      desc: "A smart medicine notification system to ensure timely medication for patients and elderly care.",
      tech: ["React", "Node.js", "Notifications", "PWA"],
      github: "https://github.com/adityananaware/Medicine-Notifier.git"
    },
    {
      title: "ML & Data Science Projects",
      category: "Data Science",
      icon: <Database className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340",
      desc: "A collection of machine learning and data science projects covering various domains and datasets.",
      tech: ["Python", "ML", "Data Science", "Pandas"],
      github: "https://github.com/adityananaware/Projects_ML_DataScience.git"
    },
    {
      title: "EV Market Analysis",
      category: "Data Science",
      icon: <Database className="w-5 h-5" />,
      image: "https://drive.google.com/file/d/11QgxqMMm4kjVxX9hC7U2HY2ssD05ArfM/view?auto=format&fit=crop&q=80&w=2340",
      desc: "Comprehensive market analysis and entry strategy for the electric vehicle industry using data-driven insights.",
      tech: ["Market Analysis", "Strategy", "Data Science", "Visualization"],
      github: "https://github.com/adityananaware/Electric-Vehicle-Market-Analysis-and-Entry-Strategy.git"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

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
              Our <span className="text-primary-light">Portfolio</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A showcase of our best work in web development, AI, and data science. Each project represents our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-white sticky top-20 z-30 shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
            <Filter className="w-6 h-6 text-primary" />
            <span>Filter Projects</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div 
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <TiltCard>
                    <div className="relative rounded-[2.5rem] overflow-hidden mb-8 aspect-video glow-green-hover group-hover:shadow-primary/20 transition-all duration-500">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                        <div className="flex gap-4 mb-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                          {project.live && (
                            <motion.a 
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center glow-green-hover"
                            >
                              <ExternalLink className="w-7 h-7" />
                            </motion.a>
                          )}
                          {project.github && (
                            <motion.a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-14 h-14 bg-white text-slate-900 rounded-2xl flex items-center justify-center glow-green-hover"
                            >
                              <Github className="w-7 h-7" />
                            </motion.a>
                          )}
                        </div>
                        <p className="text-white/80 font-medium translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          {project.live || project.github ? "Click to view project details and source code." : "Details coming soon."}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                  
                  <div className="px-4">
                    <div className="flex items-center gap-3 text-primary font-bold text-sm mb-4 uppercase tracking-widest">
                      <div className="p-2 bg-primary/10 rounded-lg glow-green-hover animate-float-slow">
                        {project.icon}
                      </div>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="px-4 py-2 bg-white text-slate-700 border border-slate-200 rounded-xl text-xs font-bold glow-green-hover group-hover:border-primary/30 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-slate-300" />
              </div>
              <p className="text-slate-500 text-xl font-medium">No projects found in this category.</p>
              <button onClick={() => setFilter('All')} className="text-primary font-bold mt-4 hover:underline">View all projects</button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block p-4 bg-primary/5 rounded-3xl mb-8">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">Have a Project in Mind?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We are always looking for new challenges and interesting projects to work on. Let's create something extraordinary together.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-12 py-5 text-xl rounded-2xl shadow-2xl shadow-primary/30"
          >
            Start a Conversation
          </motion.button>
        </div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </section>
    </div>
  );
};
