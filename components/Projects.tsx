"use client";

import { motion, MotionConfig } from "framer-motion";
import Section from "./Section";
import Tags from "./Tags";
import { featuredProject, projects, type Project } from "@/lib/content";

function Links({ p }: { p: Project }) {
  if (!p.github && !p.demo) return null;
  const cls =
    "rounded-md border border-line bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent";
  return (
    <div className="mt-5 flex gap-2">
      {p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`${p.name} on GitHub`}>
          GitHub
        </a>
      )}
      {p.demo && (
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`${p.name} live demo`}>
          Demo
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <MotionConfig reducedMotion="user">
      <Section id="projects" title="Projects">
        <div className="space-y-6">
          <motion.article
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="rounded-lg border border-line border-l-4 border-l-accent bg-card p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold tracking-tight">{featuredProject.name}</h3>
            <p className="mt-3 max-w-[65ch] leading-relaxed text-ink">{featuredProject.description}</p>
            <ul className="mt-6 grid gap-x-8 gap-y-2 text-[15px] text-ink/90 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProject.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Tags items={featuredProject.tech} label="Technologies" />
            </div>
            <Links p={featuredProject} />
          </motion.article>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <motion.article
                key={p.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col rounded-lg border border-line bg-card p-6"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                {p.facts && <p className="mt-1 text-sm text-muted">{p.facts.join(", ")}</p>}
                <p className="mt-3 text-[15px] leading-relaxed text-ink">{p.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink/90">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <Tags items={p.tech} label="Technologies" />
                  <Links p={p} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </MotionConfig>
  );
}
