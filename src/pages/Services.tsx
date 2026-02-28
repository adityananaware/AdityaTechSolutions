import { motion } from 'motion/react';
import { Code, Database, Cpu, Layers, Monitor, BarChart3, Layout, Check, Zap, Shield, Globe } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const Services = () => {
  const services = [
    {
      title: "Business Website Development",
      icon: <Monitor className="w-8 h-8" />,
      desc: "Professional corporate websites designed to establish your brand authority and generate leads.",
      features: ["Responsive Design", "SEO Optimized", "CMS Integration", "Contact Forms"],
      price: "₹7,000",
      color: "bg-blue-500"
    },
    {
      title: "Portfolio Website",
      icon: <Layout className="w-8 h-8" />,
      desc: "Personalized websites for professionals, artists, and freelancers to showcase their work and skills.",
      features: ["Personal Branding", "Gallery/Work Showcase", "Resume Integration", "Social Links"],
      price: "₹3,000",
      color: "bg-purple-500"
    },
    {
      title: "AI Projects",
      icon: <Cpu className="w-8 h-8" />,
      desc: "Custom AI solutions including chatbots, predictive models, and automated processing tools.",
      features: ["NLP Chatbots", "Predictive Analytics", "Process Automation", "API Integration"],
      price: "Custom",
      color: "bg-emerald-500"
    },
    {
      title: "Data Analysis",
      icon: <Database className="w-8 h-8" />,
      desc: "Deep dive into your business data to uncover trends, patterns, and growth opportunities.",
      features: ["Data Cleaning", "Statistical Analysis", "Reporting", "Insights Generation"],
      price: "₹5,000",
      color: "bg-orange-500"
    },
    {
      title: "Dashboard Development",
      icon: <BarChart3 className="w-8 h-8" />,
      desc: "Interactive, real-time dashboards to visualize your key business metrics and performance.",
      features: ["Real-time Data", "Interactive Charts", "User Permissions", "Export Options"],
      price: "₹10,000",
      color: "bg-indigo-500"
    },
    {
      title: "Advanced Web App",
      icon: <Code className="w-8 h-8" />,
      desc: "Complex web applications with custom functionality, user accounts, and database integration.",
      features: ["User Auth", "Payment Gateway", "Admin Panel", "Scalable Architecture"],
      price: "₹15,000",
      color: "bg-rose-500"
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative bg-primary py-32 text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
              Our <span className="text-white/80">Services</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              We offer a wide range of professional IT services to help your business grow and succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <TiltCard className="h-full">
                  <div className="bg-white rounded-[2rem] p-10 glow-blue-hover border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all group relative overflow-hidden">
                    <div className={`absolute top-0 right-0 ${service.color} opacity-5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700`} />
                    
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 glow-blue-hover group-hover:rotate-6 animate-float-slow">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{service.desc}</p>
                    
                    <div className="space-y-4 mb-10">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3 text-slate-700 font-medium">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-8 border-t border-slate-100 flex justify-between items-center">
                      <div>
                        <span className="text-slate-400 text-xs uppercase font-bold tracking-widest">Starting from</span>
                        <p className="text-3xl font-extrabold text-primary">{service.price}</p>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary py-3 px-6 text-sm glow-blue-hover"
                      >
                        Get Quote
                      </motion.button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services? */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Scalable Solutions", icon: <Zap className="w-10 h-10" />, desc: "Our architectures are built to grow with your business needs." },
              { title: "Enterprise Security", icon: <Shield className="w-10 h-10" />, desc: "We implement multi-layered security protocols for every project." },
              { title: "Global Standards", icon: <Globe className="w-10 h-10" />, desc: "We follow international best practices in design and development." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary border border-slate-100 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Summary */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Transparent Pricing Plans</h2>
            <p className="text-lg text-slate-600">Choose the plan that fits your business needs perfectly.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-2xl bg-white"
          >
            <table className="w-full text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-8 text-xl font-bold">Service Level</th>
                  <th className="p-8 text-xl font-bold">Price</th>
                  <th className="p-8 text-xl font-bold">Delivery Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: "Basic Website", price: "₹3,000", time: "3-5 Days" },
                  { name: "Business Website", price: "₹7,000", time: "7-10 Days" },
                  { name: "Advanced Website", price: "₹15,000", time: "15-20 Days" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-8 font-bold text-slate-800 text-lg group-hover:text-primary transition-colors">{row.name}</td>
                    <td className="p-8 text-primary font-extrabold text-2xl">{row.price}</td>
                    <td className="p-8 text-slate-500 font-medium">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
