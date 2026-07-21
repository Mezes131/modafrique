import type {
  Category,
  Product,
  TeamMember,
  TrendLook,
  ValueProp,
} from "../types";

// ponytail: BASE_URL so /modafrique/ works on GitHub Pages
export const img = (name: string) =>
  `${import.meta.env.BASE_URL}images/${name.replace(/\.(jpe?g|png|webp)$/i, "")}.webp`;

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
    title: "Livraison offerte",
    description: "Gratuite dès 50 000 XAF, suivie jusqu'à votre porte",
    icon: "truck",
  },
  {
    id: "quality",
    title: "Authenticité garantie",
    description: "Wax et tissus sélectionnés auprès d'ateliers partenaires",
    icon: "shield",
  },
  {
    id: "returns",
    title: "Retours sous 14 jours",
    description: "Échange ou remboursement intégral, sans complication",
    icon: "rotate",
  },
];

export const trends: TrendLook[] = [
  { id: "t1", title: "Wax urbain", image: img("trend-1.jpg") },
  { id: "t2", title: "Élégance street", image: img("trend-2.jpg") },
  { id: "t3", title: "Lumière & texture", image: img("trend-3.jpg") },
  { id: "t4", title: "Rouge contemporain", image: img("trend-4.jpg") },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Robe épaules nues wax",
    material: "Coton wax imprimé, coupe fluide",
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
        name: "Multicolore",
        hex: "#e85d04",
        image: img("feat-01.webp"),
        hoverImage: img("feat-06.webp"),
      },
      {
        id: "c2",
        name: "Ankara maxi",
        hex: "#1d4e89",
        image: img("feat-06.webp"),
        hoverImage: img("feat-01.webp"),
      },
    ],
  },
  {
    id: "p2",
    name: "Ensemble coupe africaine",
    material: "Wax stretch, twin-set contemporain",
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
        name: "Graphique",
        hex: "#1a1a1a",
        image: img("feat-05.webp"),
        hoverImage: img("feat-02.webp"),
      },
    ],
  },
  {
    id: "p3",
    name: "Robe droite print vert",
    material: "Coton imprimé, silhouette droite",
    price: 35000,
    rating: 4.9,
    reviewCount: 67,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: ["S"],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Vert",
        hex: "#2d6a4f",
        image: img("feat-10.webp"),
        hoverImage: img("feat-08.webp"),
      },
      {
        id: "c2",
        name: "Patchwork",
        hex: "#c44536",
        image: img("feat-11.webp"),
        hoverImage: img("feat-10.webp"),
      },
    ],
  },
  {
    id: "p4",
    name: "Robe danse des couleurs",
    material: "Voile et wax, volume léger",
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
        name: "Festif",
        hex: "#9b2226",
        image: img("feat-12.webp"),
        hoverImage: img("feat-07.webp"),
      },
    ],
  },
  {
    id: "p5",
    name: "Robe fente off-shoulder",
    material: "Coton stretch, fente latérale",
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
        name: "Corail",
        hex: "#d4729c",
        image: img("feat-13.webp"),
        hoverImage: img("feat-04.webp"),
      },
    ],
  },
  {
    id: "p6",
    name: "Robe tribal + châle",
    material: "Coton et jersey, châle assorti",
    price: 36500,
    rating: 5,
    reviewCount: 51,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: ["XS", "XXL"],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Tribal",
        hex: "#bc6c25",
        image: img("feat-14.webp"),
        hoverImage: img("feat-19.webp"),
      },
    ],
  },
  {
    id: "p7",
    name: "Robe fleurs d'oranger",
    material: "Organza imprimé, tombé ample",
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
        name: "Orange",
        hex: "#c9184a",
        image: img("feat-15.webp"),
        hoverImage: img("feat-16.webp"),
      },
      {
        id: "c2",
        name: "Tradition",
        hex: "#5c4d3c",
        image: img("feat-17.webp"),
        hoverImage: img("feat-09.webp"),
      },
    ],
  },
  {
    id: "p8",
    name: "Longue veste wax",
    material: "Coton wax structuré, longueur maxi",
    price: 52000,
    rating: 4.8,
    reviewCount: 22,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    outOfStockSizes: ["M"],
    defaultColorId: "c1",
    colors: [
      {
        id: "c1",
        name: "Wax",
        hex: "#e9c46a",
        image: img("feat-18.webp"),
        hoverImage: img("feat-03.webp"),
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
