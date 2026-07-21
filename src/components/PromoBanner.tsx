import { ChevronRight } from "lucide-react";
import { img } from "../data/content";
import { BlurImage, SectionReveal } from "./ui";

/**
 * Bannière soldes mariage (fidèle à la maquette) :
 * 2 photos portrait | panneau gris coupe diagonale | titre Heavy + >> XXL
 */
export function PromoBanner() {
  return (
    <section
      id="promo"
      className="px-gutter pb-section"
      aria-labelledby="promo-title"
    >
      <SectionReveal>
        <a
          href="#featured"
          className="group relative mx-auto flex max-w-site flex-col overflow-hidden bg-surface-elevated md:min-h-[20rem] md:flex-row lg:min-h-[22rem]"
        >
          {/* Photos: ordre maquette (creme a gauche, rose a droite) */}
          <div className="grid h-56 shrink-0 grid-cols-2 md:h-auto md:w-[48%] lg:w-[46%]">
            <BlurImage
              src={img("wedding-1.webp")}
              alt="Couple en tenue de cérémonie crème"
              className="h-full min-h-0 w-full"
              imgClassName="h-full transition duration-700 group-hover:scale-105"
            />
            <BlurImage
              src={img("wedding-2.webp")}
              alt="Couple en tenue de cérémonie rose"
              className="h-full min-h-0 w-full"
              imgClassName="h-full transition duration-700 group-hover:scale-105"
            />
          </div>

          {/* Panneau CTA: diagonale + titre + chevrons (maquette) */}
          <div className="relative flex flex-1 items-center justify-between gap-4 bg-[#2a2a2a] px-8 py-10 md:-ml-10 md:pl-16 md:pr-10 md:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)] lg:pl-20 lg:pr-12">
            <div className="min-w-0 flex-1">
              <h2
                id="promo-title"
                className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-black leading-[1.05] tracking-tight text-secondary"
              >
                <span className="block">Jusqu&apos;à −50&nbsp;%</span>
                <span className="mt-1 block font-sans text-[clamp(1rem,2vw,1.35rem)] font-medium tracking-normal text-secondary/90">
                  sur les tenues de mariage et cérémonie
                </span>
              </h2>
              <span className="mt-4 inline-block font-sans text-sm text-secondary/60 transition group-hover:text-secondary md:sr-only">
                Découvrir les soldes
              </span>
            </div>

            <span
              className="flex shrink-0 items-center text-secondary drop-shadow-[2px_3px_0_rgba(0,0,0,0.45)] transition duration-300 ease-editorial group-hover:translate-x-2"
              aria-hidden
            >
              <ChevronRight
                className="h-14 w-14 stroke-[2.5] lg:h-20 lg:w-20"
                strokeLinecap="square"
              />
              <ChevronRight
                className="-ml-8 h-14 w-14 stroke-[2.5] lg:-ml-11 lg:h-20 lg:w-20"
                strokeLinecap="square"
              />
            </span>
          </div>
        </a>
      </SectionReveal>
    </section>
  );
}
