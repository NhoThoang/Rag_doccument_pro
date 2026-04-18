import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-dracula-bg selection:bg-dracula-purple selection:text-dracula-bg">
      <Navbar />
      <Hero />
      <TechStack />
      <Features />
      <Showcase />
      <Pricing />
      
      <footer className="py-12 border-t border-dracula-fg/5 text-center px-8">
        <p className="text-dracula-comment text-sm">
          © 2026 RAG Document Pro. All rights reserved. <br />
          Built for security, performance, and the love of dark mode.
        </p>
      </footer>
    </main>
  );
}
