export default function Tags({ items, label = "Tags" }: { items: string[]; label?: string }) {
  if (!items.length) return null;
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="rounded-md border border-line bg-page px-2 py-0.5 text-[13px] text-ink/90">
          {t}
        </li>
      ))}
    </ul>
  );
}
