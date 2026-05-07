import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { socials } = portfolioData;
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github className="text-retro-brown" />;
      case 'linkedin': return <Linkedin className="text-retro-brown" />;
      case 'mail':
      case 'email': return <Mail className="text-retro-brown" />;
      default: return null;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    // Environment variables for security
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        formRef.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      })
      .finally(() => {
        setIsSending(false);
        // Reset status after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="pt-32 pb-24 px-6 max-w-4xl mx-auto flex flex-col items-center gap-12">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h2 className="font-pixel text-3xl md:text-5xl text-retro-yellow ">GET IN TOUCH</h2>
        <p className="font-mono text-sm text-retro-yellow/60">Let's collaborate on your next full-stack project.</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="retro-container !px-6 !py-8 md:!p-12 !rounded-[3rem] w-full relative"
      >
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-pixel text-[10px] text-retro-brown ml-2 uppercase">Full Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-6 py-4 rounded-2xl bg-retro-beige/30 border-4 border-retro-brown focus:bg-retro-beige focus:outline-none transition-all font-bold placeholder:text-retro-brown/20"
                placeholder="Your Full Name"
              />
            </div>
            <div className="space-y-2">
              <label className="font-pixel text-[10px] text-retro-brown ml-2 uppercase">Email Address</label>
              <input
                type="email"
                name="reply_to"
                required
                className="w-full px-6 py-4 rounded-2xl bg-retro-beige/30 border-4 border-retro-brown focus:bg-retro-beige focus:outline-none transition-all font-bold placeholder:text-retro-brown/20"
                placeholder="Your Email Address"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-pixel text-[10px] text-retro-brown ml-2 uppercase">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-6 py-4 rounded-3xl bg-retro-beige/30 border-4 border-retro-brown focus:bg-retro-beige focus:outline-none transition-all font-bold placeholder:text-retro-brown/20 resize-none"
              placeholder="Tell me about your project architecture..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full bg-retro-brown text-retro-beige py-4 md:py-5 rounded-2xl font-pixel text-lg md:text-xl hover:translate-y-[-4px] hover:shadow-retro active:translate-y-[2px] transition-all flex items-center justify-center gap-2 md:gap-4 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSending ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
            <Send size={24} className={isSending ? 'animate-pulse' : ''} />
          </button>
        </form>

        {/* Status Overlay */}
        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className={`absolute inset-x-0 -bottom-20 flex justify-center z-50`}
            >
              <div className={`flex items-center gap-3 px-6 py-3 rounded-xl border-4 border-retro-brown shadow-retro ${status === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                {status === 'success' ? (
                  <>
                    <CheckCircle2 size={20} />
                    <span className="font-pixel text-[10px] uppercase">Message Transmitted Successfully</span>
                  </>
                ) : (
                  <>
                    <AlertCircle size={20} />
                    <span className="font-pixel text-[10px] uppercase">Transmission Failed</span>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="flex gap-8">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-retro-yellow border-4 border-retro-brown rounded-2xl shadow-retro hover:bg-retro-accent transition-all"
            title={social.name}
          >
            {getIcon(social.name)}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
