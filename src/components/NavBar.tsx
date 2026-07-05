"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "AI Showcase", href: "#ai-showcase" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg border-b border-white/40 shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tighter text-slate-900">
          <img
            src="https://ik.imagekit.io/shiga/portfolio-v3/IMG_20260101_172343_212%20(2).webp"
            alt="David Oladele"
            className="w-8 h-8 rounded-full object-cover border border-slate-200 pointer-events-none"
          />
          <span><span className="text-primary-500">David</span> Oladele</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-primary-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Socials / CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="https://github.com" target="_blank" className="text-slate-500 hover:text-primary-500 transition-colors">
            <GithubIcon className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-slate-500 hover:text-primary-500 transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </Link>
          <Link
            href="#contact"
            className="ml-4 px-6 py-2.5 rounded-full bg-primary-50 text-primary-600 border border-primary-200 hover:bg-primary-100 transition-colors text-sm font-bold"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-600 hover:text-primary-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-xl mt-4 absolute w-full"
        >
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-slate-700 hover:text-primary-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 mt-2 pt-6 border-t border-slate-200">
              <Link href="https://github.com/daveblaq" target="_blank" className="text-slate-500 hover:text-primary-500">
                <GithubIcon className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/david-oladele-b4ab85223/" target="_blank" className="text-slate-500 hover:text-primary-500">
                <LinkedinIcon className="w-6 h-6" />
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
