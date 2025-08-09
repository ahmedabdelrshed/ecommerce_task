import ProductsSection from "@/components/ProductsSections";
import Categories from "./_components/Categories";
import Hero from "./_components/Hero";
import RoomsInspiration from "./_components/RoomsInspiration";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <ProductsSection />
      <RoomsInspiration />
    </main>
  );
}
