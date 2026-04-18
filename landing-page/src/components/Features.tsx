"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Users, Globe, Palette } from 'lucide-react';

const features = [
  {
    title: "Smart Chunking",
    desc: "Uses BGE-M3 models for superior semantic breakdown of your documents.",
    icon: <Layers className="text-dracula-pink" />,
    color: "pink"
  },
  {
    title: "Multi-Agent Workspace",
    desc: "Deploy multiple AI expert agents for different specialized tasks.",
    icon: <Users className="text-dracula-orange" />,
    color: "orange"
  },
  {
    title: "Web Hub & Remote Access",
    desc: "Access your RAG server from anywhere via built-in Cloudflare Tunnels.",
    icon: <Globe className="text-dracula-cyan" />,
    color: "cyan"
  },
  {
    title: "Dracula Native UI",
    desc: "A premium, eye-friendly design that developers know and love.",
    icon: <Palette className="text-dracula-green" />,
    color: "green"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Designed for <br /><span className="text-gradient">Power Users</span></h2>
            <p className="text-dracula-comment text-lg">Every detail crafted for maximum efficiency and privacy.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[32px] bg-dracula-current/20 border border-dracula-fg/5 hover:bg-dracula-current/40 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-dracula-bg flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-dracula-comment text-lg leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
