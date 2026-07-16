import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Product, ProductSize } from "../types";

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, size: ProductSize, colorId: string) => void;
  removeItem: (productId: string, size: ProductSize, colorId: string) => void;
  updateQuantity: (
    productId: string,
    size: ProductSize,
    colorId: string,
    quantity: number,
  ) => void;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback(
    (product: Product, size: ProductSize, colorId: string) => {
      const color = product.colors.find((c) => c.id === colorId) ?? product.colors[0];
      setItems((prev) => {
        const existing = prev.find(
          (i) =>
            i.productId === product.id &&
            i.size === size &&
            i.colorId === color.id,
        );
        if (existing) {
          return prev.map((i) =>
            i === existing ? { ...i, quantity: i.quantity + 1 } : i,
          );
        }
        return [
          ...prev,
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            size,
            colorId: color.id,
            colorName: color.name,
            image: color.image,
            quantity: 1,
          },
        ];
      });
      setIsOpen(true);
    },
    [],
  );

  const removeItem = useCallback(
    (productId: string, size: ProductSize, colorId: string) => {
      setItems((prev) =>
        prev.filter(
          (i) =>
            !(
              i.productId === productId &&
              i.size === size &&
              i.colorId === colorId
            ),
        ),
      );
    },
    [],
  );

  const updateQuantity = useCallback(
    (
      productId: string,
      size: ProductSize,
      colorId: string,
      quantity: number,
    ) => {
      if (quantity < 1) {
        removeItem(productId, size, colorId);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.productId === productId && i.size === size && i.colorId === colorId
            ? { ...i, quantity }
            : i,
        ),
      );
    },
    [removeItem],
  );

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return {
      items,
      itemCount,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((o) => !o),
      addItem,
      removeItem,
      updateQuantity,
      subtotal,
    };
  }, [items, isOpen, addItem, removeItem, updateQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
