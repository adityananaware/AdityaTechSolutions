import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code, Database, Cpu, Layers, Monitor, ChevronRight, Star, CheckCircle2, Globe, Zap, Shield } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { ThreeHero } from '../components/ThreeHero';
import { ParticlesBackground } from '../components/ParticlesBackground';

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-slate-900 overflow-hidden">
        <ThreeHero />
        <ParticlesBackground />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-right"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-primary/20 text-primary-light rounded-full text-sm font-semibold mb-6 border border-primary/30 backdrop-blur-sm"
            >
              Smart Websites & AI Solutions
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Professional <span className="text-gradient">Websites</span> & AI Solutions
            </h1>
            <p className="text-lg text-slate-300 mb-10 max-w-lg leading-relaxed">
              We build high-performance websites and data-driven AI solutions that help your business scale and succeed in the modern digital landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary flex items-center gap-2 group glow-blue-hover">
                Explore Services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-outline border-white/20 text-white hover:bg-white/10 glow-blue-hover">
                View Our Work
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            data-aos="zoom-in"
          >
            <TiltCard>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                  alt="Tech Solutions" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </TiltCard>
            
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-slate-800/80 backdrop-blur-md p-6 rounded-xl shadow-xl z-20 hidden md:block border border-white/10 animate-float-slow"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-400 w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-sm text-slate-400">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white relative" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Empowering Businesses with Technology</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-600">
              Aditya Tech Solutions is a forward-thinking IT company dedicated to delivering excellence in web development and data science. We bridge the gap between complex technology and business needs.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Modern Design", icon: <Monitor />, desc: "We create visually stunning and user-friendly interfaces that leave a lasting impression." },
              { title: "Clean Code", icon: <Code />, desc: "Our development process follows industry best practices for scalable and maintainable code." },
              { title: "Data Driven", icon: <Database />, desc: "We leverage data science to provide actionable insights and intelligent solutions." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <TiltCard className="h-full">
                  <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 h-full hover:bg-white glow-red-hover hover:shadow-xl transition-all">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 animate-float-slow">
                      <div className="text-primary w-6 h-6">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="section-padding bg-slate-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Why We Stand Out</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 bg-primary p-10 rounded-3xl text-white relative overflow-hidden group glow-blue-hover"
              data-aos="fade-right"
            >
              <div className="relative z-10">
                <Zap className="w-12 h-12 mb-6 animate-float-slow" />
                <h3 className="text-2xl font-bold mb-4">Lightning Fast Performance</h3>
                <p className="text-white/80">We optimize every line of code to ensure your website loads in the blink of an eye, improving SEO and user experience.</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm glow-blue-hover hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Shield className="w-10 h-10 text-primary mb-6 animate-float-slow" />
              <h3 className="text-xl font-bold mb-4">Secure by Design</h3>
              <p className="text-slate-600">Security is not an afterthought. We implement robust security measures from day one.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm glow-blue-hover hover:shadow-xl transition-all"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <Globe className="w-10 h-10 text-primary mb-6 animate-float-slow" />
              <h3 className="text-xl font-bold mb-4">Global Reach</h3>
              <p className="text-slate-600">Our solutions are built to scale globally, serving users across different regions seamlessly.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Comprehensive Solutions for Your Digital Needs</h2>
            </div>
            <Link to="/services" className="text-primary font-medium flex items-center gap-2 hover:underline group">
              View all services <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Website Development", icon: <Code />, desc: "Custom-built, responsive websites using the latest technologies." },
              { title: "Portfolio Websites", icon: <Layers />, desc: "Showcase your work with a professional and elegant personal brand." },
              { title: "Business Websites", icon: <Monitor />, desc: "Scalable web solutions tailored to meet your corporate objectives." },
              { title: "AI Projects", icon: <Cpu />, desc: "Integrating artificial intelligence to automate and enhance workflows." },
              { title: "Data Science Projects", icon: <Database />, desc: "Turning raw data into meaningful business intelligence." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <TiltCard className="h-full">
                  <div className="card h-full group hover:border-primary/30 glow-blue-hover">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform animate-float-slow">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.desc}</p>
                    <Link to="/services" className="text-primary font-medium flex items-center gap-1 group/link">
                      Learn more <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Projects Done", value: "50+" },
              { label: "Happy Clients", value: "30+" },
              { label: "Coffee Cups", value: "500+" },
              { label: "Lines of Code", value: "100K+" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-extrabold text-primary-light mb-2">{stat.value}</p>
                <p className="text-slate-400 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full opacity-10"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-8"
          >
            Ready to Start Your Next Project?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 mb-10"
          >
            Let's build something amazing together. Contact us today for a free consultation.
          </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/contact" className="inline-block px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all glow-blue-hover hover:-translate-y-1 active:scale-95">
                Get in Touch Now
              </Link>
            </motion.div>
        </div>
      </section>
    </div>
  );
};
