import Section from "./Section";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((s) => (
          <div key={s.category} className="grid gap-2 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
            <dt className="font-medium">{s.category}</dt>
            <dd className="text-[15px] leading-relaxed text-ink/85">{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
