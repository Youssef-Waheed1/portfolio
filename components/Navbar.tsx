"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // basePath aware URL for GitHub Pages compatibility
  const cvHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${site.cv}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-5 md:px-8">
        <a href="#top" onClick={close} className="font-semibold tracking-tight">
          {site.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cvHref}
              download="Youssef_Waheed_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-md border border-line bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={14} aria-hidden /> Download CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-page md:hidden">
          <ul className="mx-auto flex max-w-[1100px] flex-col px-5 py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close} className="block border-b border-line py-3 text-[15px]">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={cvHref}
                download="Youssef_Waheed_CV.pdf"
                onClick={close}
                className="inline-flex items-center gap-1.5 rounded-md bg-accent-dark px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#722F27]"
              >
                <Download size={14} aria-hidden /> Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
