import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, Code, Database, Cpu, Layers, Monitor, Mail, Phone, MapPin, ChevronRight, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-lg shadow-sm ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"
            >
              <Cpu className="text-white w-6 h-6" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Aditya Tech Solutions
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-all duration-300 hover:text-primary relative group ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-slate-800'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary text-center">
              Get Started
            </Link>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-primary opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-bottom border-white/10 pb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="text-primary-light w-8 h-8" />
            <span className="text-2xl font-bold text-white">Aditya Tech Solutions</span>
          </div>
          <p className="text-slate-400 max-w-md mb-8">
            Providing professional web development and data science solutions to help businesses thrive in the digital age. Smart websites, AI-driven insights, and scalable technology.
          </p>
          <div className="flex gap-4">
            <motion.a whileHover={{ y: -5 }} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/aditya-nanaware-72b560251" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="https://github.com/adityananaware" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-light shrink-0" />
              <span>Remote (Mumbai, Maharashtra, India)</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary-light shrink-0" />
              <a href="https://wa.me/918637750478" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 8637750478</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary-light shrink-0" />
              <a href="mailto:notifiermedicine@gmail.com" className="hover:text-white transition-colors">notifiermedicine@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold text-white">Aditya Tech Solutions</h3>
          <p className="text-slate-400 text-sm">
            © 2026 Aditya Nanaware. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Developed with ❤️ by Aditya G Nanaware
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-all shadow-lg hover:-translate-y-1"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};
