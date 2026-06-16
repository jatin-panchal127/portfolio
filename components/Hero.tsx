"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import ParticleCanvas from "./ParticleCanvas";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/jatin-panchal127",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jatin-panchal-4b292722b",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/jatin_12.7",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:jatin.hp482k1@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
];

export default function Hero() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMagnet = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    el.style.transition = "transform 0.1s ease";
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const resetMagnet = () => {
    const el = btnRef.current;
    if (!el) return;
    el.style.transition = "transform 0.45s cubic-bezier(0.23,1,0.32,1)";
    el.style.transform = "translate(0, 0)";
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Particle network canvas */}
      <ParticleCanvas />

      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(167,139,250,0.22) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.45,
        }}
        aria-hidden="true"
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 right-1/3 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "rgba(167,139,250,0.07)",
          filter: "blur(160px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "rgba(167,139,250,0.05)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-[1]"
        style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 w-full py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-accent" aria-hidden="true" />
          <p className="font-mono text-accent text-sm tracking-widest">
            Hi, my name is
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4 leading-[0.95]"
        >
          Jatin Panchal.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight text-muted"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-muted max-w-xl text-lg leading-relaxed mb-12"
        >
          Full Stack Developer with{" "}
          <span className="text-foreground font-medium">3.5+ years</span> of
          experience building scalable, multi-tenant web applications. Expert
          in <span className="text-foreground">TypeScript</span>,{" "}
          <span className="text-foreground">Nest.js</span>, and{" "}
          <span className="text-foreground">Next.js</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap items-center gap-6"
        >
          {/* Magnetic CTA */}
          <div
            onMouseMove={handleMagnet}
            onMouseLeave={resetMagnet}
            className="inline-block"
          >
            <a
              ref={btnRef}
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 border border-accent text-accent rounded font-mono text-sm overflow-hidden"
            >
              <span
                className="absolute inset-0 bg-accent/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                aria-hidden="true"
              />
              <span className="relative z-10">Get in Touch</span>
              <span className="relative z-10 text-xs opacity-50 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  s.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + i * 0.1 }}
                whileHover={{ y: -3, scale: 1.15 }}
                className="text-muted hover:text-accent transition-colors duration-300"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-muted/30 flex items-start justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="w-1 h-1.5 rounded-full bg-muted/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
