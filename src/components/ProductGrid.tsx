import { ChevronRight } from "lucide-react";
import { products } from "../data/content";
import { ProductCard } from "./ProductCard";
import { SectionReveal } from "./ui";

export function ProductGrid() {
  return (
    <section
      id="featured"
      className="relative section-pad overflow-hidden"
      aria-labelledby="featured-title"
    >
      <div
        className="watermark-cuts absolute right-[-1rem] top-1/2 z-0 hidden origin-center -translate-y-1/2 rotate-90 xl:block"
        aria-hidden
        style={{ fontSize: "clamp(4rem, 9vw, 7rem)", color: "rgba(244,241,235,0.08)" }}
      >
        FEATURED
      </div>

      <SectionReveal>
        <div className="mx-auto flex max-w-site items-end justify-between gap-4">
          <h2
            id="featured-title"
            className="font-display text-display-md font-black uppercase tracking-wide"
          >
            Produits vedettes
          </h2>
          <a
            href="#newsletter"
            className="hidden items-center gap-1 text-sm text-secondary/70 transition hover:text-secondary sm:inline-flex"
          >
            Voir tout
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </SectionReveal>

      <ul className="relative mx-auto mt-12 grid max-w-site grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => (
          <li key={product.id}>
            <SectionReveal delay={(i % 4) * 0.05}>
              <ProductCard product={product} />
            </SectionReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
