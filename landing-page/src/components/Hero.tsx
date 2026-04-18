"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-8 overflow-hidden min-h-screen flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-dracula-purple/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-dracula-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight"
        >
          Transform <span className="text-dracula-purple">Documents</span> <br />
          into Your <span className="text-gradient">Private AI</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-dracula-comment text-xl md:text-2xl max-w-3xl mx-auto mb-10"
        >
          Ingest and chat with your files using advanced Retrieval-Augmented Generation (RAG). 
          Unlock knowledge privately and instantly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="btn-primary">Start Your Free Trial</button>
          <button className="btn-secondary flex items-center gap-2">
            <Play size={18} fill="currentColor" /> Learn More
          </button>
        </motion.div>

        {/* Mockup Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative group"
        >
          {/* Animated Glow behind image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-dracula-purple to-dracula-cyan rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative rounded-[32px] border-4 border-dracula-current bg-dracula-bg overflow-hidden shadow-2xl">
            <Image 
              src="/images/dashboard-mockup.png" 
              alt="RAG Pro Dashboard" 
              width={1200} 
              height={800} 
              className="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-700"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
