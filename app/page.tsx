import { BestSellingSection } from "@/components/best-selling-section";
import { BooksSection } from "@/components/books-section";
import { Footer } from "@/components/footer";

import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <BestSellingSection />
      <BooksSection />
      <Footer />
    </main>
  );
}
