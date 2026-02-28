import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Globe } from 'lucide-react';
import { useState, FormEvent, useRef } from 'react';
import { TiltCard } from '../components/TiltCard';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setFormState('sending');

    emailjs.sendForm(
      "service_f0p4x8f",
      "template_0vz2ehn",
      formRef.current,
      "kv6itcaIpTwgNUmOP"
    )
    .then(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
      formRef.current?.reset();
    })
  .catch(() => {
    alert("Message failed");
    setFormState('idle');
  });
};

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
              Get in <span className="text-primary-light">Touch</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hi? We'd love to hear from you. Our team is ready to help you build the future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Contact Information</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Let's Connect</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Whether you're looking to build a new website, integrate AI into your workflow, or need data-driven insights, our team is ready to assist you.
            </p>
            
            <div className="space-y-10">
              {[
                { title: "Email Address", value: "notifiermedicine@gmail.com", sub: "Send us an email anytime!", icon: <Mail className="w-7 h-7" />, link: "mailto:notifiermedicine@gmail.com" },
                { title: "Phone Number", value: "+91 8637750478", sub: "Available on WhatsApp.", icon: <Phone className="w-7 h-7" />, link: "https://wa.me/918637750478" },
                { title: "Our Location", value: "Remote", sub: "Mumbai, Maharashtra, India", icon: <MapPin className="w-7 h-7" />, link: "#" }
              ].map((item, idx) => (
                <motion.a 
                  key={idx}
                  href={item.link}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-8 group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 glow-yellow-hover animate-float-slow">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-lg font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    <p className="text-slate-400 font-medium">{item.sub}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">24/7</p>
                  <p className="text-sm text-slate-500">Support</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Global</p>
                  <p className="text-sm text-slate-500">Services</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TiltCard>
              <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 glow-yellow-hover relative overflow-hidden" data-aos="fade-left">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                
                <h3 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  Send a Message
                </h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium glow-yellow-hover"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium glow-yellow-hover"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">Subject</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium appearance-none glow-yellow-hover">
                      <option>Web Development</option>
                      <option>AI Solutions</option>
                      <option>Data Science</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      required 
                      rows={5} 
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none font-medium glow-yellow-hover"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    disabled={formState !== 'idle'}
                    className="w-full btn-primary flex items-center justify-center gap-3 py-5 text-xl rounded-2xl glow-yellow-hover"
                  >
                    {formState === 'idle' && <><Send className="w-6 h-6" /> Send Message</>}
                    {formState === 'sending' && <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>}
                    {formState === 'success' && <><CheckCircle2 className="w-6 h-6" /> Message Sent!</>}
                  </motion.button>
                </form>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] bg-slate-100 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center relative z-10"
          >
            <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 glow-yellow-hover animate-bounce">
              <MapPin className="w-12 h-12" />
            </div>
            <h3 className="text-slate-900 font-extrabold text-4xl mb-4 tracking-tight">Mumbai, Maharashtra, India</h3>
            <p className="text-slate-500 font-bold text-xl uppercase tracking-widest">Global Headquarters (Remote)</p>
          </motion.div>
          {/* Mock Map Grid */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
