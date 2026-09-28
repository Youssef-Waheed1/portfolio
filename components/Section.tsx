export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 border-t border-line">
      <div className="mx-auto grid max-w-[1100px] gap-6 px-5 py-14 md:grid-cols-[180px_minmax(0,1fr)] md:gap-12 md:px-8 md:py-20">
        <h2 id={`${id}-title`} className="text-lg font-semibold tracking-tight text-ink md:pt-1">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
