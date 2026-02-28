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
      alert("Message failed to send");
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
              Have a project in mind or just want to say hi? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Contact Info unchanged */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

          {/* SAME CONTACT INFO CODE */}

          </motion.div>


          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TiltCard>

              <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 glow-yellow-hover relative overflow-hidden">

                <h3 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  Send a Message
                </h3>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10"
                >

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="space-y-2">

                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">

                      Full Name

                      </label>

                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100"
                      />

                    </div>


                    <div className="space-y-2">

                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">

                      Email Address

                      </label>

                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100"
                      />

                    </div>

                  </div>


                  <div className="space-y-2">

                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">

                    Subject

                    </label>

                    <select
                      name="subject"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100"
                    >

                      <option>Web Development</option>

                      <option>AI Solutions</option>

                      <option>Data Science</option>

                      <option>Other</option>

                    </select>

                  </div>


                  <div className="space-y-2">

                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest ml-1">

                    Message

                    </label>

                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100"
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

    </div>
  );
};
