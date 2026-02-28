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
      "pbAOyr1qXopDy-kk7"
    )
    .then(() => {
      setFormState('success');

      setTimeout(() => {
        setFormState('idle');
      }, 3000);

      formRef.current?.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("Message failed to send");
      setFormState('idle');
    });
  };

  return (
    <div className="pt-20">

      {/* Header */}
      <section className="relative bg-slate-900 py-32 text-white text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Get in <span className="text-primary-light">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Send us a message.
          </p>
        </div>
      </section>


      {/* Contact Section */}
      <section className="section-padding bg-white">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Contact Info */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Mail className="w-6 h-6 text-primary"/>

                <div>

                  <p className="font-bold">Email</p>

                  <p>notifiermedicine@gmail.com</p>

                </div>

              </div>


              <div className="flex gap-4">

                <Phone className="w-6 h-6 text-primary"/>

                <div>

                  <p className="font-bold">Phone</p>

                  <p>+91 8637750478</p>

                </div>

              </div>


              <div className="flex gap-4">

                <MapPin className="w-6 h-6 text-primary"/>

                <div>

                  <p className="font-bold">Location</p>

                  <p>Mumbai, India</p>

                </div>

              </div>

            </div>

          </div>



          {/* Contact Form */}
          <TiltCard>

          <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 p-10 bg-white rounded-3xl border">




          {/* Name */}

          <div>

          <label className="font-bold">
          Full Name
          </label>

          <input

          name="name"

          type="text"

          required

          placeholder="John Doe"

          className="w-full p-4 border rounded-xl"

          />

          </div>



          {/* Email */}

          <div>

          <label className="font-bold">
          Email
          </label>

          <input

          name="email"

          type="email"

          required

          placeholder="john@gmail.com"

          className="w-full p-4 border rounded-xl"

          />

          </div>



          {/* Subject */}

          <div>

          <label className="font-bold">
          Subject
          </label>

          <select

          name="subject"

          className="w-full p-4 border rounded-xl">

          <option>Web Development</option>

          <option>AI Project</option>

          <option>Data Science</option>

          <option>Other</option>

          </select>

          </div>



          {/* Message */}

          <div>

          <label className="font-bold">
          Message
          </label>

          <textarea

          name="message"

          required

          rows={5}

          placeholder="Write message..."

          className="w-full p-4 border rounded-xl"

          />

          </div>



          {/* Button */}

          <motion.button

          type="submit"

          disabled={formState !== 'idle'}

          className="w-full p-5 bg-blue-600 text-white rounded-xl flex justify-center items-center gap-2">




          {formState === 'idle' && <><Send size={20}/> Send Message</>}



          {formState === 'sending' && "Sending..."}



          {formState === 'success' && <><CheckCircle2 size={20}/> Message Sent</>}




          </motion.button>


          </form>

          </TiltCard>

        </div>

      </section>

    </div>
  );
};