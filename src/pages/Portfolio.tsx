import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code, Database, Cpu, Layout, Filter, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { TiltCard } from '../components/TiltCard';

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Web Development', 'Data Science'];

  const projects = [
    {
      title: "AI Academic Assistant",
      category: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5" />,
      image: "https://miro.medium.com/v2/resize:fit:1350/1*3gkMbg25VXoGO8HYu01LXw.jpeg?auto=format&fit=crop&q=80&w=2340",
      desc: "An intelligent assistant designed to help students organize their studies, summarize notes, and prepare for exams using NLP.",
      tech: ["Python", "TensorFlow", "React", "FastAPI"]
    },
    {
      title: "Medicine Reminder App",
      category: "Web Development",
      icon: <Layout className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=2340",
      desc: "A user-friendly web application for elderly patients to track their medication schedule with automated notifications.",
      tech: ["React", "Node.js", "MongoDB", "PWA"]
    },
    {
      title: "Data Science Dashboard",
      category: "Data Science",
      icon: <Database className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340",
      desc: "A comprehensive business intelligence dashboard visualizing sales trends, customer behavior, and inventory levels.",
      tech: ["Python", "Pandas", "Plotly", "Streamlit"]
    },
    {
      title: "Personal Portfolio Website",
      category: "Web Development",
      icon: <Code className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2340",
      desc: "A modern, responsive portfolio website built for a professional photographer to showcase high-resolution work.",
      tech: ["HTML5", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Agricultural Crop Prediction ML Model",
      category: "AI & Machine Learning",
      icon: <Cpu className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2340",
      desc: "Machine Learning model for agricultural crop prediction based on soil, climate, and environmental factors. Published research at Springer ICICCT 2025.",
      tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"]
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
      <section className="py-16 bg-white shadow-sm border-b border-slate-100">
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
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center glow-green-hover"
                          >
                            <ExternalLink className="w-7 h-7" />
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-14 h-14 bg-white text-slate-900 rounded-2xl flex items-center justify-center glow-green-hover"
                          >
                            <Github className="w-7 h-7" />
                          </motion.button>
                        </div>
                        <p className="text-white/80 font-medium translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          Click to view project details and source code.
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
