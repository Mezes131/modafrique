import { RotateCcw, ShieldCheck, Truck } from "lucide-react";
import type { ValueProp } from "../types";
import { valueProps } from "../data/content";
import { SectionReveal } from "./ui";

const icons = {
  truck: Truck,
  shield: ShieldCheck,
  rotate: RotateCcw,
} as const;

function ValueItem({ item }: { item: ValueProp }) {
  const Icon = icons[item.icon];
  return (
    <li className="flex flex-col items-center gap-3 px-4 text-center sm:flex-row sm:text-left">
      <Icon className="h-8 w-8 shrink-0 stroke-[1.25]" aria-hidden />
      <div>
        <p className="text-sm font-medium tracking-wide">{item.title}</p>
        <p className="mt-1 text-xs text-secondary-muted">{item.description}</p>
      </div>
    </li>
  );
}

export function ValueProposition() {
  return (
    <section
      className="border-y border-surface-border bg-surface px-gutter py-10"
      aria-label="Nos engagements"
    >
      <SectionReveal>
        <ul className="mx-auto grid max-w-site gap-8 md:grid-cols-3 md:gap-4">
          {valueProps.map((item) => (
            <ValueItem key={item.id} item={item} />
          ))}
        </ul>
      </SectionReveal>
    </section>
  );
}
