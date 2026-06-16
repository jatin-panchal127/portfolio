"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Next.js", "Nest.js", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Turborepo", "Git", "GitHub", "BitBucket", "Webpack", "Jest"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold mb-12">
            <span className="font-mono text-accent text-lg">02.</span>
            Skills
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="group relative p-6 rounded-lg border border-border bg-surface/50 hover:border-accent/40 transition-all duration-500 overflow-hidden"
            >
              {/* Per-card glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(167,139,250,0.07), transparent 65%)",
                }}
                aria-hidden="true"
              />

              <h3 className="font-mono text-accent text-sm mb-4 relative z-10">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 text-sm rounded-full bg-background border border-border text-muted hover:text-accent hover:border-accent/50 hover:shadow-[0_0_18px_rgba(167,139,250,0.22)] transition-all duration-200 cursor-default select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
