import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { img } from "../data/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.35]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      aria-label="Accueil"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={img("banner.webp")}
          alt="Lookbook ModAfrique : mode contemporaine africaine"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/55 via-primary/40 to-primary" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-3xl px-gutter text-center md:max-w-5xl [text-shadow:0_2px_24px_rgba(0,0,0,0.35),0_1px_4px_rgba(0,0,0,0.8)]"
      >
        <motion.p
          className="mb-4 text-overline uppercase text-secondary/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Collection Équinoxe 2026
        </motion.p>
        <motion.h1
          className="font-display text-display-xl font-black text-secondary text-balance md:text-pretty [text-shadow:0_4px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.7)]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          L&apos;originalité, portée
          <br className="hidden md:block" />
          {" "}
          avec excellence
        </motion.h1>
        <motion.p
          className="mx-auto mt-5 max-w-xl text-base text-secondary/90 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Des pièces africaines contemporaines conçues comme un lookbook :
          matières nobles, coupes affirmées, caractère immédiatement
          reconnaissable.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 [text-shadow:none]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a href="#featured" className="btn-primary [text-shadow:none]">
            Découvrir la collection
          </a>
          <a href="#new-arrival" className="btn-ghost [text-shadow:none]">
            Voir les nouveautés
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
