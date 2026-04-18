"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const screenshots = [
  {
    id: 1,
    url: "/images/1.jpg",
    title: "Document Chunking",
    desc: "Intelligent semantic breakdown of documents for optimal retrieval."
  },
  {
    id: 2,
    url: "/images/2.jpg",
    title: "Server Management",
    desc: "Monitor status and control Cloudflare Tunnels with one click."
  },
  {
    id: 3,
    url: "/images/3.jpg",
    title: "Global Settings",
    desc: "Centralized configuration for databases, agents, and security."
  },
  {
    id: 4,
    url: "/images/4.jpg",
    title: "Embedding Engine",
    desc: "High-speed vectorization using state-of-the-art local models."
  },
  {
    id: 5,
    url: "/images/5.jpg",
    title: "AI Agent Studio",
    desc: "Configure specialized robot experts for targeted internal knowledge."
  }
];

export const Showcase = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % screenshots.length);
  const prev = () => setIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <section className="py-24 px-8 bg-dracula-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">A Deep Dive into <span className="text-gradient">RAG Pro</span></h2>
          <p className="text-dracula-comment text-lg">Powerful internals meet a professional interface.</p>
        </div>

        <div className="relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-3xl overflow-hidden border-4 border-dracula-current shadow-2xl glass"
            >
              <img 
                src={screenshots[index].url} 
                alt={screenshots[index].title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-dracula-bg/90 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-dracula-purple/20 text-dracula-purple text-xs font-bold uppercase tracking-wider mb-4 border border-dracula-purple/30">
                    Step 0{index + 1}
                  </span>
                  <h3 className="text-3xl font-bold mb-2">{screenshots[index].title}</h3>
                  <p className="text-lg text-dracula-comment max-w-2xl">{screenshots[index].desc}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-dracula-fg hover:text-dracula-cyan transition-colors"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-dracula-fg hover:text-dracula-cyan transition-colors"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-4">
          {screenshots.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              className={`relative w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all ${index === i ? 'border-dracula-cyan scale-110' : 'border-dracula-current opacity-50 hover:opacity-100'}`}
            >
              <img src={s.url} alt={s.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
