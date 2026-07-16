import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "../data/content";
import { useCart } from "../context/CartContext";
import { useScrolled } from "./ui";

export function Header() {
  const scrolled = useScrolled(24);
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-editorial ${
          scrolled
            ? "bg-primary/90 backdrop-blur-md border-b border-surface-border/60 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-gutter py-4 lg:py-5">
          <a
            href="#hero"
            className="font-sans text-lg font-bold tracking-[0.2em] uppercase text-secondary"
          >
            ModAfrique
          </a>

          <nav className="hidden lg:block" aria-label="Navigation principale">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-overline uppercase text-secondary/80 transition hover:text-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <label className="relative hidden md:block">
              <span className="sr-only">Rechercher</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-primary/50" />
              <input
                type="search"
                placeholder="Rechercher…"
                className="w-40 rounded-full bg-secondary py-1.5 pl-9 pr-3 text-xs text-primary placeholder:text-primary/40 lg:w-48"
              />
            </label>

            <button
              type="button"
              className="hidden rounded-full p-2 transition hover:bg-secondary/10 sm:inline-flex"
              aria-label="Compte"
            >
              <User className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={openCart}
              className="relative rounded-full p-2 transition hover:bg-secondary/10"
              aria-label={`Panier, ${itemCount} article${itemCount === 1 ? "" : "s"}`}
            >
              <ShoppingBag className="h-5 w-5" />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    key={itemCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-primary"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button
              type="button"
              className="rounded-full p-2 transition hover:bg-secondary/10 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Menu mobile"
            className="fixed inset-0 z-30 flex flex-col bg-primary pt-24 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-2 px-gutter">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    className="block border-b border-surface-border py-4 font-display text-3xl font-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
