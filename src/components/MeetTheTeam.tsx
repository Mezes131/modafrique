import { team } from "../data/content";
import { BlurImage, SectionReveal } from "./ui";

export function MeetTheTeam() {
  return (
    <section className="section-pad" aria-labelledby="team-title">
      <SectionReveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="team-title"
            className="font-display text-display-md font-black uppercase tracking-wide"
          >
            L&apos;équipe
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-secondary-muted">
            Designers, stylistes et photographes : l&apos;équipe qui imagine
            chaque collection ModAfrique, du premier croquis au lookbook final.
          </p>
        </div>
      </SectionReveal>

      <ul className="mx-auto mt-12 grid max-w-site grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
        {team.map((member, i) => (
          <SectionReveal key={member.id} delay={i * 0.07}>
            <article className="text-center">
              <BlurImage
                src={member.image}
                alt={member.name}
                className="aspect-square w-full"
                imgClassName="grayscale transition duration-500 hover:grayscale-0"
              />
              <h3 className="mt-4 text-sm font-medium tracking-wide">
                {member.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-secondary-muted">
                {member.role}
              </p>
            </article>
          </SectionReveal>
        ))}
      </ul>
    </section>
  );
}
