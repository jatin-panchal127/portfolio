"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "RiteFolio",
    url: "https://ritefolio.in",
    description:
      "A portfolio management and reporting platform for individual investors. Built with SEO optimization and minimalist aesthetic design.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    title: "RiteTax",
    url: "https://ritetax.in",
    description:
      "A modern tax filing platform focused on simplifying Indian compliance workflows. Features secure user dashboards and automated document processing.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Nest.js"],
  },
  {
    title: "Capito",
    url: "https://capito.in",
    description:
      "A comprehensive tax compliance and GSTR reconciliation platform featuring modular UI components for complex data entry, litigation tracking, and automated financial workflows.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Nest.js"],
  },
  {
    title: "Flashcorp",
    description:
      "A drag-and-drop web builder platform enabling no-code website creation with intuitive visual editing capabilities.",
    tech: ["React.js", "Django", "PostgreSQL"],
  },
  {
    title: "TVR — Live Camera Feed",
    description:
      "A live camera feed application for RTSP stream integration, enabling real-time video monitoring and management.",
    tech: ["React.js", "Golang", "FFMPEG", "RTSP"],
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transition = "none";
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    el.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateZ(8px)`;
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transition = "transform 0.45s cubic-bezier(0.23,1,0.32,1)";
    el.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
      className="h-full"
    >
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl font-bold mb-12">
            <span className="font-mono text-accent text-lg">04.</span>
            Projects
            <span className="h-px bg-border flex-1 max-w-xs" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className=""
            >
              <TiltCard>
                <div className="group relative h-full p-6 rounded-lg border border-border bg-surface/30 hover:border-accent/35 transition-all duration-400 flex flex-col overflow-hidden">
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"
                    style={{
                      background:
                        "radial-gradient(ellipse at top left, rgba(167,139,250,0.08), transparent 65%)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-10 h-10 text-accent transition-transform duration-300 group-hover:scale-110"
                    >
                      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                        className="text-muted hover:text-accent transition-all duration-200 p-1 hover:-translate-y-0.5 hover:translate-x-0.5"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-5 h-5"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300 relative z-10">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1 relative z-10">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-muted/70 hover:text-accent/80 transition-colors duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
