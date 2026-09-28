"use client";

import { motion, MotionConfig } from "framer-motion";
import { Download } from "lucide-react";
import { hero, site, socialLinks } from "@/lib/content";

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="top" aria-label="Introduction" className="scroll-mt-16">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08 }}
          className="mx-auto max-w-[1100px] px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-28"
        >
          <motion.p variants={item} className="text-base font-medium text-accent">
            {site.role}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-3 text-[2.75rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
          >
            {site.name}
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-[34ch] text-xl leading-snug text-ink md:text-2xl">
            {hero.summary}
          </motion.p>
          <motion.p variants={item} className="mt-4 max-w-[62ch] leading-relaxed text-muted">
            {hero.detail}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-accent-dark px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#722F27]"
            >
              View Projects
            </a>
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
            >
              <Download size={15} aria-hidden /> Download CV
            </a>
          </motion.div>

          <motion.ul variants={item} aria-label="Profiles" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {socialLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
