import Section from "./Section";
import { education, training } from "@/lib/content";

export default function Education() {
  return (
    <>
      <Section id="education" title="Education">
        <p className="font-medium">{education.degree}</p>
        <p className="text-muted">{education.school}</p>
        <p className="text-sm text-muted">{education.period}</p>
      </Section>
      <Section id="training" title="Certifications & Training">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-medium">Courses</h3>
            <ul className="mt-2 space-y-1.5 text-[15px] text-ink/90">
              {training.courses.map((c) => (
                <li key={c.name}>
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Self-Study</h3>
            <p className="mt-1 text-sm text-muted">Learning paths, not certifications.</p>
            <ul className="mt-2 space-y-1.5 text-[15px] text-ink/90">
              {training.selfStudy.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
