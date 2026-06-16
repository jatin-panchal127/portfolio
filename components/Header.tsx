"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : ""
        }`}
      >
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            {"<JP />"}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                className="text-sm text-muted hover:text-foreground transition-colors relative group"
              >
                <span className="font-mono text-accent text-xs mr-1">
                  0{i + 1}.
                </span>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            <motion.a
              href="/Jatin_Resume.pdf"
              download="Jatin_Resume.pdf"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + navLinks.length * 0.1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 border border-accent text-accent rounded font-mono text-xs overflow-hidden"
            >
              <span
                className="absolute inset-0 bg-accent/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                aria-hidden="true"
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-3.5 h-3.5 relative z-10"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="relative z-10">Resume</span>
            </motion.a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="w-6 h-px bg-foreground block origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-px bg-foreground block"
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
              className="w-6 h-px bg-foreground block origin-center"
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg text-muted hover:text-foreground transition-colors"
                >
                  <span className="font-mono text-accent text-sm block text-center mb-1">
                    0{i + 1}.
                  </span>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/Jatin_Resume.pdf"
                download="Jatin_Resume.pdf"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-accent text-accent rounded font-mono text-sm hover:bg-accent/10 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
