"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Quantech Datascience LLP",
    role: "Full Stack Developer",
    period: "Feb 2024 — Present",
    points: [
      "Engineered a multi-tenant PostgreSQL database architecture to support scalable SaaS products",
      "Developed Nest.js APIs featuring rate limiting, worker processes, and automated email services",
      "Conducted end-to-end API testing using Swagger and unit testing with Jest",
      "Spearheaded the transition to a Turborepo + Next.js monorepo, streamlining deployment via Vercel",
    ],
  },
  {
    company: "Quantech Datascience LLP",
    role: "Frontend Developer",
    period: "July 2023 — Feb 2024",
    points: [
      "Led the UI development for Capito, a suite of tax compliance and GSTR reconciliation tools",
      "Created modular UI components for complex data entry and litigation tracking systems",
    ],
  },
  {
    company: "Anantha Insights",
    role: "Software Engineer",
    period: "June 2022 — July 2023",
    points: [
      "Built a live camera feed application (TVR) using React.js and Golang for RTSP integration via FFMPEG",
      "Developed Flashcorp, a drag-and-drop web builder platform using React and Django",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold mb-12">
            <span className="font-mono text-accent text-lg">03.</span>
            Experience
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-[7px] md:left-[23px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className="relative pl-8 md:pl-14"
              >
                {/* Pulsing timeline dot */}
                <div className="absolute left-0 md:left-4 top-[10px] w-[15px] h-[15px] z-10">
                  <motion.span
                    animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.4,
                      ease: "easeOut",
                      delay: index * 0.4,
                    }}
                    className="absolute inset-0 rounded-full border border-accent"
                    aria-hidden="true"
                  />
                  <span className="absolute inset-0 rounded-full border-2 border-accent bg-background" />
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group p-6 rounded-lg border border-border bg-surface/30 hover:border-accent/25 hover:bg-surface/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                    <h3 className="text-lg font-semibold">
                      {exp.role}{" "}
                      <span className="text-accent">@ {exp.company}</span>
                    </h3>
                    <span className="font-mono text-sm text-muted shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + i * 0.06 }}
                        className="text-muted text-sm leading-relaxed flex gap-3"
                      >
                        <span className="text-accent mt-0.5 shrink-0">▹</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
