import { trends } from "../data/content";
import { BlurImage, SectionReveal } from "./ui";

export function Trends() {
  return (
    <section className="section-pad" aria-labelledby="trends-title">
      <SectionReveal>
        <div className="mx-auto flex max-w-site flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            id="trends-title"
            className="font-display text-display-md font-black uppercase tracking-wide"
          >
            Tendances près de vous
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-secondary-muted">
            Quatre looks issus de notre dernière session éditoriale — street,
            cérémonie et quotidien fusionnés.
          </p>
        </div>
      </SectionReveal>

      <ul className="mx-auto mt-12 grid max-w-site grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trends.map((look, i) => (
          <SectionReveal key={look.id} delay={i * 0.06}>
            <article className="group">
              <BlurImage
                src={look.image}
                alt={look.title}
                className="aspect-[3/4] w-full"
                imgClassName="transition duration-700 group-hover:scale-105"
              />
              <h3 className="mt-3 text-overline uppercase tracking-[0.15em] text-secondary/70">
                {look.title}
              </h3>
            </article>
          </SectionReveal>
        ))}
      </ul>
    </section>
  );
}
