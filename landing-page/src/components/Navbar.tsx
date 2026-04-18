"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 glass"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-dracula-purple rounded-lg flex items-center justify-center text-dracula-bg font-bold text-xl">
          R
        </div>
        <span className="text-xl font-heading font-bold tracking-tight">
          RAG <span className="text-dracula-cyan">Pro</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link href="#features" className="hover:text-dracula-cyan transition-colors">Features</Link>
        <Link href="#tech" className="hover:text-dracula-cyan transition-colors">Tech Stack</Link>
        <Link href="#pricing" className="hover:text-dracula-cyan transition-colors">Pricing</Link>
        <Link href="#security" className="hover:text-dracula-cyan transition-colors">Security</Link>
      </div>

      <div>
        <button className="px-6 py-2 rounded-lg border border-dracula-fg/20 hover:bg-dracula-fg/5 transition-all">
          Login
        </button>
      </div>
    </motion.nav>
  );
};
