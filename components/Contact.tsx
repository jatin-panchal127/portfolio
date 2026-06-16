"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/jatin-panchal127" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jatin-panchal-4b292722b" },
  { label: "Instagram", href: "https://www.instagram.com/jatin_12.7" },
  { label: "Email", href: "mailto:jatin.hp482k1@gmail.com" },
];

export default function Contact() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMagnet = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = btnRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
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
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-mono text-accent text-sm mb-4 tracking-widest"
          >
            05. What&apos;s Next?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted leading-relaxed mb-10"
          >
            I&apos;m currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, my inbox is
            always open.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div
              onMouseMove={handleMagnet}
              onMouseLeave={resetMagnet}
              className="inline-block"
            >
              <a
                ref={btnRef}
                href="mailto:jatin.hp482k1@gmail.com"
                className="group relative inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent rounded font-mono text-sm overflow-hidden"
              >
                <span
                  className="absolute inset-0 bg-accent/10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                  aria-hidden="true"
                />
                <span className="relative z-10">Say Hello</span>
                <span className="relative z-10 text-base opacity-50 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-32 pt-8 border-t border-border"
        >
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {footerLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                whileHover={{ y: -2 }}
                className="text-muted hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
