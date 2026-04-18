"use client";
import React from 'react';
import { Database, Zap, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const techs = [
  {
    icon: <Database className="text-dracula-cyan" />,
    name: "PostgreSQL",
    desc: "Robust relational storage for metadata and persistent state."
  },
  {
    icon: <Zap className="text-dracula-green" />,
    name: "Qdrant",
    desc: "Ultra-fast vector database for semantic search at scale."
  },
  {
    icon: <ShieldCheck className="text-dracula-purple" />,
    name: "Local Embedding",
    desc: "Run 8k token models locally. Your data never leaves your machine."
  },
  {
    icon: <Cpu className="text-dracula-orange" />,
    name: "Redis Cache",
    desc: "Optimized performance with instant response times."
  }
];

export const TechStack = () => {
  return (
    <section id="tech" className="py-24 px-8 bg-dracula-bg relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">Powered by Modern Tech</h2>
          <p className="text-dracula-comment text-lg">Scalable, secure, and blazingly fast architecture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl glass hover:border-dracula-purple/50 transition-colors group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
              <p className="text-dracula-comment text-sm leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
