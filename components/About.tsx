import Section from "./Section";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-[65ch] space-y-4 text-[17px] leading-relaxed">
        {about.map((p) => (
          <p key={p} className="text-ink/90 first:text-ink">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
