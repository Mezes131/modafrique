import { img } from "../data/content";
import { BlurImage } from "./ui";

/**
 * Bento Nouveautés
 * ┌─────┬──────────┬──────────┐
 * │     │  Texte   │ Discover │
 * │ NEW ├──────────┼──────────┤
 * │     │  Wide    │ Portrait │
 * └─────┴──────────┴──────────┘
 */
export function NewArrival() {
  return (
    <section
      id="new-arrival"
      className="overflow-hidden px-gutter py-section md:h-[calc(100svh-var(--header-h))] md:py-0 md:scroll-mt-[var(--header-h)]"
      aria-labelledby="new-arrival-title"
    >
      <div
        className="
          mx-auto grid w-full max-w-site gap-3
          grid-cols-1
          md:h-full md:min-h-0 md:grid-cols-[auto_1fr_1fr] md:grid-rows-2 md:gap-4
          lg:gap-5
        "
      >
        {/* Colonne NEW: pleine hauteur (2 rangees) */}
        <div
          className="
            order-last flex items-stretch justify-center py-6
            md:order-none md:row-span-2 md:w-24 md:self-stretch md:py-0 lg:w-28
          "
          aria-hidden
        >
          <p
            className="
              flex h-full w-full font-['Gobold_CUTS','Libre_Franklin',sans-serif] uppercase
              tracking-wide text-secondary/[0.14]
              flex-row items-center justify-center gap-4 text-5xl
              md:flex-col md:justify-between md:gap-0 md:py-1
              md:text-[clamp(3.5rem,6vw,5.75rem)] md:leading-none
            "
          >
            <span>N</span>
            <span>E</span>
            <span>W</span>
          </p>
        </div>

        {/* Cellule 1: texte */}
        <div className="flex flex-col justify-center md:pr-2 lg:pr-4">
          <h2
            id="new-arrival-title"
            className="font-display text-display-md font-black uppercase tracking-[0.06em] text-secondary"
          >
            Nouveautés
          </h2>
          <p className="mt-4 max-w-[34ch] font-sans text-sm leading-relaxed text-secondary/75 sm:mt-5">
            Premiers arrivages de la saison : coupes nettes, imprimés wax et
            pièces statement pour un dressing contemporain, sans compromis sur
            la matière.
          </p>
          <p className="mt-3 max-w-[34ch] font-sans text-sm leading-relaxed text-secondary/75">
            Du quotidien urbain aux looks de cérémonie, chaque silhouette
            raconte une Afrique actuelle, précise et affirmée.
          </p>
        </div>

        {/* Cellule 2: Discover (brand-1) */}
        <a
          href="#featured"
          className="group relative min-h-[14rem] overflow-hidden md:min-h-0"
        >
          <BlurImage
            src={img("brand-1.webp")}
            alt="Tenues traditionnelles d'origine camerounaise"
            className="absolute inset-0 h-full w-full"
            imgClassName="transition duration-700 ease-editorial group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/55 transition group-hover:bg-primary/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-5 text-center">
            <p className="max-w-sm font-display text-base font-black uppercase leading-snug tracking-wide text-secondary sm:text-lg lg:text-xl">
              Tenues traditionnelles
              <br />
              d&apos;origine camerounaise
            </p>
            <span className="btn-primary pointer-events-none text-xs sm:text-sm">
              Découvrir
            </span>
          </div>
        </a>

        {/* Cellule 3: wide (marcheuse) */}
        <div className="relative min-h-[12rem] overflow-hidden md:min-h-0">
          <BlurImage
            src={img("new-wide.webp")}
            alt="Femme en robe bleue et trench, lookbook"
            className="absolute inset-0 h-full w-full"
            imgClassName="transition duration-700 hover:scale-[1.02]"
          />
        </div>

        {/* Cellule 4: portrait (trend-4) */}
        <div className="relative min-h-[16rem] overflow-hidden md:min-h-0">
          <BlurImage
            src={img("trend-4.webp")}
            alt="Homme en pantalon rouge contemporain"
            className="absolute inset-0 h-full w-full"
            imgClassName="transition duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
