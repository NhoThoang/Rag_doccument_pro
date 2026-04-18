"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, QrCode } from 'lucide-react';

const plans = [
  {
    name: "Standard Trial",
    price: "Free",
    duration: "30 Days",
    features: ["All Premium Features", "Local Embedding", "Multi-Agent Support", "Community Support"],
    cta: "Start Free Trial",
    highlight: false
  },
  {
    name: "Lifetime Premium",
    price: "$20",
    duration: "Once",
    features: ["Lifetime Updates", "Priority Support", "Advanced Remote Setup", "Unlimited Collections"],
    cta: "Go Premium",
    highlight: true
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-8 bg-dracula-current/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-heading font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-dracula-comment">No hidden fees. Just powerful AI at your fingertips.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plans.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl border ${p.highlight ? 'border-dracula-purple bg-dracula-purple/5 shadow-[0_0_30px_rgba(189,147,249,0.1)]' : 'border-dracula-fg/10 bg-dracula-bg'}`}
              >
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black">{p.price}</span>
                  <span className="text-dracula-comment">/ {p.duration}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {p.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Check size={18} className="text-dracula-green" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://github.com/NhoThoang/Rag_doccument_pro" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex items-center justify-center ${p.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'}`}
                >
                  {p.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl glass border-dracula-cyan/30 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-dracula-cyan/20 rounded-2xl flex items-center justify-center mb-6">
              <QrCode size={40} className="text-dracula-cyan" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Quick Activation</h3>
            <p className="text-dracula-comment mb-8">
              Want to skip the wait? Scan to pay via QR and mention your User ID for instant activation.
            </p>
            <div className="w-48 h-48 bg-white p-2 rounded-2xl mb-8 overflow-hidden">
              <img
                src="/images/Vietcombank.jpg"
                alt="Vietcombank QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-dracula-comment uppercase tracking-widest">Supports all major banks & wallets</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
