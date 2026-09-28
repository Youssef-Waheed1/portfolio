import Section from "./Section";
import Tags from "./Tags";
import { security } from "@/lib/content";

export default function Security() {
  return (
    <Section id="security" title="Security-minded Engineering">
      <p className="max-w-[65ch] text-[17px] leading-relaxed">{security.intro}</p>
      <div className="mt-5">
        <Tags items={security.items} label="Security focus areas" />
      </div>
    </Section>
  );
}
