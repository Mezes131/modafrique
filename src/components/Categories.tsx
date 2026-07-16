import { motion } from "framer-motion";
import { categories } from "../data/content";
import { BlurImage, SectionReveal } from "./ui";

export function Categories() {
  return (
    <section id="categories" className="section-pad" aria-labelledby="categories-title">
      <SectionReveal>
        <div className="mx-auto flex max-w-site flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2
            id="categories-title"
            className="font-display text-display-md font-black uppercase tracking-wide"
          >
            Catégories
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-secondary-muted md:text-right">
            Homme, femme, enfants — explorez des silhouettes contemporaines
            ancrées dans le savoir-faire africain.
          </p>
        </div>
      </SectionReveal>

      <ul className="mx-auto mt-12 grid max-w-site grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
        {categories.map((cat, i) => (
          <motion.li
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
          >
            <a
              href={cat.href}
              className="group flex flex-col items-center gap-4 text-center"
            >
              <div className="relative aspect-square w-full max-w-[11rem] overflow-hidden rounded-full border border-secondary/30 p-1 transition group-hover:border-secondary group-hover:scale-[1.03]">
                <BlurImage
                  src={cat.image}
                  alt=""
                  className="h-full w-full rounded-full"
                  imgClassName="rounded-full transition duration-700 group-hover:scale-110"
                />
              </div>
              <span className="text-overline uppercase tracking-[0.18em] text-secondary/80 group-hover:text-secondary">
                {cat.label}
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
