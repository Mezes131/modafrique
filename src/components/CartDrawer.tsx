import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../data/content";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    updateQuantity,
    subtotal,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Fermer le panier"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Panier"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-surface border-l border-surface-border"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
          >
            <div className="flex items-center justify-between border-b border-surface-border px-6 py-5">
              <h2 className="font-display text-2xl font-black tracking-wide">Panier</h2>
              <button
                type="button"
                onClick={closeCart}
                className="rounded-full p-2 transition hover:bg-secondary/10"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-secondary-muted">
                  <ShoppingBag className="h-10 w-10 opacity-40" />
                  <p className="text-sm">Votre panier est encore vide</p>
                  <p className="max-w-[18rem] text-center text-xs">
                    Ajoutez une pièce depuis la collection pour commencer votre
                    look ModAfrique.
                  </p>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li
                      key={`${item.productId}-${item.size}-${item.colorId}`}
                      className="flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-24 w-20 object-cover"
                      />
                      <div className="flex flex-1 flex-col gap-1">
                        <div className="flex justify-between gap-2">
                          <p className="text-sm font-medium">{item.name}</p>
                          <button
                            type="button"
                            onClick={() =>
                              removeItem(
                                item.productId,
                                item.size,
                                item.colorId,
                              )
                            }
                            className="text-secondary-muted hover:text-secondary"
                            aria-label={`Retirer ${item.name}`}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-secondary-muted">
                          {item.colorName} · Taille {item.size}
                        </p>
                        <p className="text-sm">{formatPrice(item.price)}</p>
                        <div className="mt-auto flex items-center gap-3">
                          <button
                            type="button"
                            className="rounded border border-surface-border p-1"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.size,
                                item.colorId,
                                item.quantity - 1,
                              )
                            }
                            aria-label="Diminuer"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="rounded border border-surface-border p-1"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.size,
                                item.colorId,
                                item.quantity + 1,
                              )
                            }
                            aria-label="Augmenter"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-surface-border px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-secondary-muted">Sous-total</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <button type="button" className="btn-primary w-full">
                Commander
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
