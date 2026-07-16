import { AnimatePresence, motion } from "framer-motion";
import { Check, Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/content";
import type { Product, ProductSize } from "../types";
import { BlurImage } from "./ui";

const ALL_SIZES: ProductSize[] = ["XS", "S", "M", "L", "XL", "XXL"];

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [colorId, setColorId] = useState(product.defaultColorId);
  const [size, setSize] = useState<ProductSize | null>(null);
  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [added, setAdded] = useState(false);

  const color =
    product.colors.find((c) => c.id === colorId) ?? product.colors[0];
  const showHoverImage = hovered && Boolean(color.hoverImage);
  const discount =
    product.compareAtPrice && product.compareAtPrice > product.price
      ? Math.round(
          ((product.compareAtPrice - product.price) / product.compareAtPrice) *
            100,
        )
      : null;

  const handleAdd = () => {
    const chosen =
      size && !product.outOfStockSizes.includes(size)
        ? size
        : (product.sizes.find((s) => !product.outOfStockSizes.includes(s)) ??
          "M");
    addItem(product, chosen, color.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  const toggleWishlist = () => {
    setWishlisted((w) => !w);
    setPulse(true);
    window.setTimeout(() => setPulse(false), 350);
  };

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-elevated">
        <BlurImage
          src={showHoverImage ? color.hoverImage : color.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full"
          imgClassName={`transition duration-700 ease-editorial ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />

        {(product.badge || discount) && (
          <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
            {product.badge === "nouveau" && (
              <span className="bg-secondary px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                Nouveau
              </span>
            )}
            {(product.badge === "promo" || discount) && (
              <span className="bg-accent-warm px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                −{discount ?? 30}&nbsp;%
              </span>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={toggleWishlist}
          className={`absolute right-3 top-3 z-10 rounded-full bg-primary/50 p-2 backdrop-blur-sm transition hover:bg-primary/80 ${
            pulse ? "animate-pulse-heart" : ""
          }`}
          aria-label={
            wishlisted ? "Retirer des favoris" : "Ajouter aux favoris"
          }
          aria-pressed={wishlisted}
        >
          <Heart
            className={`h-4 w-4 ${wishlisted ? "fill-secondary text-secondary" : ""}`}
          />
        </button>

        {/* Size selector: appears on hover / focus-within */}
        <div
          className={`absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-primary/90 to-transparent px-3 pb-3 pt-10 transition duration-300 ${
            hovered
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0 pointer-events-none group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
          }`}
        >
          <div
            className="flex flex-wrap justify-center gap-1"
            role="group"
            aria-label="Choisir une taille"
          >
            {ALL_SIZES.map((s) => {
              const unavailable = product.outOfStockSizes.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  disabled={unavailable}
                  onClick={() => setSize(s)}
                  className={`min-w-[2rem] px-1.5 py-1 text-[10px] font-medium tracking-wide transition ${
                    unavailable
                      ? "cursor-not-allowed text-secondary/25 line-through"
                      : size === s
                        ? "bg-secondary text-primary"
                        : "bg-primary/60 text-secondary hover:bg-secondary hover:text-primary"
                  }`}
                  aria-pressed={size === s}
                  aria-label={
                    unavailable ? `Taille ${s}, rupture de stock` : `Taille ${s}`
                  }
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
            <p className="text-xs text-secondary-muted">{product.material}</p>
          </div>
          <button
            type="button"
            onClick={handleAdd}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-surface-border transition hover:scale-105 hover:border-secondary hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <Check className="h-4 w-4 text-secondary" />
                </motion.span>
              ) : (
                <motion.span
                  key="bag"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <ShoppingBag className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-secondary-muted">
          <span className="inline-flex items-center gap-0.5 text-secondary">
            <Star className="h-3 w-3 fill-secondary" aria-hidden />
            {product.rating.toFixed(1)}
          </span>
          <span>({product.reviewCount} avis)</span>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <p className="text-sm font-medium">
            {formatPrice(product.price)}
            {product.compareAtPrice && (
              <span className="ml-2 text-xs text-secondary-muted line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </p>
          <div
            className="flex gap-1.5"
            role="group"
            aria-label="Couleurs disponibles"
          >
            {product.colors.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setColorId(c.id)}
                className={`h-4 w-4 rounded-full border transition ${
                  colorId === c.id
                    ? "border-secondary ring-1 ring-secondary ring-offset-1 ring-offset-primary"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: c.hex }}
                aria-label={c.name}
                aria-pressed={colorId === c.id}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
