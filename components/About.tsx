"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const [val, setVal] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / 1500, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(parseFloat((eased * to).toFixed(decimals)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, decimals]);

  return (
    <span ref={spanRef}>
      {decimals > 0 ? val.toFixed(decimals) : val}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Years Experience", value: 3.5, suffix: "+", decimals: 1 },
  { label: "Companies", value: 3, suffix: "", decimals: 0 },
  { label: "Projects Built", value: 10, suffix: "+", decimals: 0 },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold mb-12">
            <span className="font-mono text-accent text-lg">01.</span>
            About Me
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Results-oriented Full Stack Developer specializing in building
                scalable, multi-tenant web applications. I enjoy turning complex
                problems into simple, elegant solutions.
              </p>
              <p>
                Currently at{" "}
                <span className="text-accent">Quantech Datascience LLP</span>,
                where I architect multi-tenant PostgreSQL database systems and
                build robust Nest.js APIs. I also spearheaded the transition to
                a Turborepo + Next.js monorepo for streamlined deployments.
              </p>
              <p>
                Previously, I built live video streaming applications with
                React.js and Golang, and developed no-code web builder
                platforms. I hold a B.Sc. in Computer Science from SK Somaiya
                College, Mumbai.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me trekking through
                mountain trails, folding origami, or discovering new music.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex md:flex-col gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="group text-center md:text-left"
              >
                <div className="text-3xl font-bold text-foreground font-mono group-hover:text-accent transition-colors duration-300">
                  <CountUp
                    to={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
