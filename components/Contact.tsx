import Section from "./Section";
import { contact, site, socialLinks } from "@/lib/content";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">{contact.heading}</h3>
      <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-ink">{contact.text}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${site.email}`}
          className="inline-block rounded-md bg-accent-dark px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#722F27]"
        >
          {site.email}
        </a>
        {site.phone && (
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="inline-block rounded-md border border-line bg-card px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {site.phone}
          </a>
        )}
      </div>
      <ul aria-label="Profiles" className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {socialLinks
          .filter((l) => l.label !== "Email")
          .map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
      </ul>
    </Section>
  );
}
