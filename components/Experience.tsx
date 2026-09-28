import Section from "./Section";
import Tags from "./Tags";
import { experience as e } from "@/lib/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <article className="rounded-lg border border-line bg-card p-6 md:p-8">
        <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold">
            {e.title} <span className="font-normal text-muted">({e.type})</span>
          </h3>
          <p className="text-sm text-muted">{e.period}</p>
        </header>
        <p className="mt-1 font-medium text-accent">{e.project}</p>
        <p className="mt-4 text-ink">{e.description}</p>
        <ul className="mt-4 space-y-2 border-l-2 border-line pl-4 text-[15px] leading-relaxed text-ink/90">
          {e.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div className="mt-6">
          <Tags items={e.tech} label="Technologies" />
        </div>
      </article>
    </Section>
  );
}
