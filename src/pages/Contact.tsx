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


{/* CONTACT INFO UNCHANGED */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">

            Contact Information

            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">

            Let's Connect

            </h2>


            <p className="text-lg text-slate-600 mb-12 leading-relaxed">

            Whether you're looking to build a new website or AI solution.

            </p>


            <div className="space-y-10">


              <div className="flex items-start gap-8">

                <Mail className="w-7 h-7"/>

                <div>

                <h4>Email Address</h4>

                <p>notifiermedicine@gmail.com</p>

                </div>

              </div>


              <div className="flex items-start gap-8">

                <Phone className="w-7 h-7"/>

                <div>

                <h4>Phone Number</h4>

                <p>+91 8637750478</p>

                </div>

              </div>


              <div className="flex items-start gap-8">

                <MapPin className="w-7 h-7"/>

                <div>

                <h4>Location</h4>

                <p>Mumbai India</p>

                </div>

              </div>


            </div>


          </motion.div>



{/* CONTACT FORM */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <TiltCard>

              <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100">

                <h3 className="text-3xl font-bold text-slate-900 mb-10 flex items-center gap-4">

                  <MessageSquare className="w-8 h-8 text-primary" />

                  Send a Message

                </h3>


<form
ref={formRef}
onSubmit={handleSubmit}
className="space-y-8"
>

<div>

<label>Full Name</label>

<input
name="name"
type="text"
required
className="w-full p-4 border rounded-xl"
/>

</div>


<div>

<label>Email</label>

<input
name="email"
type="email"
required
className="w-full p-4 border rounded-xl"
/>

</div>


<div>

<label>Subject</label>

<select name="subject" className="w-full p-4 border rounded-xl">

<option>Web Development</option>

<option>AI Solutions</option>

<option>Data Science</option>

<option>Other</option>

</select>

</div>


<div>

<label>Message</label>

<textarea
name="message"
rows={5}
required
className="w-full p-4 border rounded-xl"
/>

</div>



<motion.button
type="submit"
disabled={formState !== 'idle'}
className="w-full p-5 bg-blue-600 text-white rounded-xl"
>

{formState === 'idle' && "Send Message"}

{formState === 'sending' && "Sending..."}

{formState === 'success' && "Message Sent"}

</motion.button>


</form>

              </div>

            </TiltCard>

          </motion.div>

        </div>

      </section>


{/* MAP UNCHANGED */}

<section className="h-[500px] bg-slate-100 flex items-center justify-center">

<h3>Mumbai Maharashtra India</h3>

</section>

    </div>

  );

};
