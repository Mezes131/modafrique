import type {
  Category,
  Product,
  TeamMember,
  TrendLook,
  ValueProp,
} from "../types";

// ponytail: normalize any legacy ext to .webp (assets converted for perf)
const img = (name: string) =>
  `/images/${name.replace(/\.(jpe?g|png|webp)$/i, "")}.webp`;

export const NAV_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "Boutique", href: "#featured" },
  { label: "Nouveautés", href: "#new-arrival" },
  { label: "Soldes", href: "#promo" },
  { label: "Contact", href: "#newsletter" },
] as const;

export const categories: Category[] = [
  { id: "menswear", label: "Homme", image: img("cat-menswear.jpg"), href: "#featured" },
  { id: "kids", label: "Enfants", image: img("cat-kids.jpg"), href: "#featured" },
  { id: "women", label: "Femme", image: img("cat-women.jpg"), href: "#featured" },
  { id: "men", label: "Casual", image: img("cat-men.jpg"), href: "#featured" },
  { id: "brands", label: "Marques", image: img("cat-brands.jpg"), href: "#featured" },
];

export const valueProps: ValueProp[] = [
  {
    id: "shipping",
    title: "Livraison rapide & gratuite",
    description: "Offerte dès 50 000 XAF",
    icon: "truck",
  },
  {
    id: "quality",
    title: "Produits authentiques",
    description: "Wax & tissus sélectionnés",
    icon: "shield",
  },
  {
    id: "returns",
    title: "Retours sous 14 jours",
    description: "Remboursement intégral",
    icon: "rotate",
  },
];

export const trends: TrendLook[] = [
  { id: "t1", title: "Wax urbain", image: img("trend-1.jpg") },
  { id: "t2", title: "Élégance street", image: img("trend-2.jpg") },
  { id: "t3", title: "Soleil & texture", image: img("trend-3.jpg") },
  { id: "t4", title: "Rouge contemporain", image: img("trend-4.jpg") },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Robe wax soleil",
    material: "Coton wax imprimé",
    price: 28500,
    badge: "nouveau",
    rating: 4.8,
    reviewCount: 42,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: ["XXL"],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Orange",
        hex: "#e85d04",
        image: img("product-1b.jpg"),
        hoverImage: img("product-1.jpg"),
      },
      {
        id: "c2",
        name: "Bleu",
        hex: "#1d4e89",
        image: img("new-wide.jpg"),
        hoverImage: img("product-3.jpg"),
      },
    ],
  },
  {
    id: "p2",
    name: "Ensemble studio fête",
    material: "Satin & broderie",
    price: 42000,
    compareAtPrice: 60000,
    badge: "promo",
    rating: 4.6,
    reviewCount: 28,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: ["XS"],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Noir or",
        hex: "#1a1a1a",
        image: img("product-2.jpg"),
        hoverImage: img("product-4.jpg"),
      },
    ],
  },
  {
    id: "p3",
    name: "Robe chic afrique",
    material: "Voile imprimé",
    price: 35000,
    rating: 4.9,
    reviewCount: 67,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: ["S"],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Multicolore",
        hex: "#c44536",
        image: img("product-3.jpg"),
        hoverImage: img("product-7.jpg"),
      },
      {
        id: "c2",
        name: "Ankara vert",
        hex: "#2d6a4f",
        image: img("product-dress-1.png"),
        hoverImage: img("product-dress-3.png"),
      },
    ],
  },
  {
    id: "p4",
    name: "Look café beret",
    material: "Laine & coton",
    price: 31000,
    badge: "nouveau",
    rating: 4.5,
    reviewCount: 19,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: [],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Rouge",
        hex: "#9b2226",
        image: img("product-4.jpg"),
        hoverImage: img("product-5.jpg"),
      },
    ],
  },
  {
    id: "p5",
    name: "Combinaison rose street",
    material: "Coton stretch",
    price: 38000,
    compareAtPrice: 45000,
    badge: "promo",
    rating: 4.7,
    reviewCount: 33,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: ["L"],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Rose",
        hex: "#d4729c",
        image: img("product-5.jpg"),
        hoverImage: img("product-8.jpg"),
      },
    ],
  },
  {
    id: "p6",
    name: "Collier statement",
    material: "Perles artisanales",
    price: 18500,
    rating: 5,
    reviewCount: 51,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: ["XS", "XXL"],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Terre",
        hex: "#bc6c25",
        image: img("product-6.jpg"),
        hoverImage: img("jewelry-couple.jpg"),
      },
    ],
  },
  {
    id: "p7",
    name: "Robe carnaval",
    material: "Organza imprimé",
    price: 48000,
    badge: "nouveau",
    rating: 4.4,
    reviewCount: 14,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: [],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Fuchsia",
        hex: "#c9184a",
        image: img("product-7.jpg"),
        hoverImage: img("product-dress-2.png"),
      },
    ],
  },
  {
    id: "p8",
    name: "Veste jaune city",
    material: "Coton structuré",
    price: 52000,
    rating: 4.8,
    reviewCount: 22,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: ["M"],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Jaune",
        hex: "#e9c46a",
        image: img("product-8.jpg"),
        hoverImage: img("trend-2.jpg"),
      },
    ],
  },
];

export const team: TeamMember[] = [
  {
    id: "tm1",
    name: "Aïcha N.",
    role: "Directrice artistique",
    image: img("team-1.jpg"),
  },
  {
    id: "tm2",
    name: "Kofi M.",
    role: "Styliste homme",
    image: img("cat-men-2.jpg"),
  },
  {
    id: "tm3",
    name: "Fatou D.",
    role: "Designer wax",
    image: img("cat-brands.jpg"),
  },
  {
    id: "tm4",
    name: "Jean-Paul B.",
    role: "Directeur photo",
    image: img("cat-menswear.jpg"),
  },
];

export const formatPrice = (amount: number): string =>
  `${amount.toLocaleString("fr-FR")} XAF`;
