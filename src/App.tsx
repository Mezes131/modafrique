import { CartProvider } from "./context/CartContext";
import { CartDrawer } from "./components/CartDrawer";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MeetTheTeam } from "./components/MeetTheTeam";
import { NewArrival } from "./components/NewArrival";
import { Newsletter } from "./components/Newsletter";
import { ProductGrid } from "./components/ProductGrid";
import { PromoBanner } from "./components/PromoBanner";
import { ScrollProgress } from "./components/ScrollProgress";
import { Trends } from "./components/Trends";
import { ValueProposition } from "./components/ValueProposition";

export default function App() {
  return (
    <CartProvider>
      <ScrollProgress />
      <Header />
      <CartDrawer />
      <main>
        <Hero />
        <Categories />
        <ValueProposition />
        <Trends />
        <PromoBanner />
        <NewArrival />
        <ProductGrid />
        <MeetTheTeam />
        <Newsletter />
      </main>
      <Footer />
    </CartProvider>
  );
}
