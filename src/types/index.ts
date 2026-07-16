export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  image: string;
  hoverImage: string;
}

export interface Product {
  id: string;
  name: string;
  material: string;
  price: number;
  compareAtPrice?: number;
  badge?: "nouveau" | "promo";
  rating: number;
  reviewCount: number;
  sizes: ProductSize[];
  outOfStockSizes: ProductSize[];
  colors: ProductColor[];
  defaultColorId: string;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  size: ProductSize;
  colorId: string;
  colorName: string;
  image: string;
  quantity: number;
}

export interface Category {
  id: string;
  label: string;
  image: string;
  href: string;
}

export interface TrendLook {
  id: string;
  title: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: "truck" | "shield" | "rotate";
}
