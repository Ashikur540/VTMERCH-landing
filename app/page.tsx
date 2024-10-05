import { BestSellingSection } from "@/components/best-selling-section";
import { BooksSection } from "@/components/books-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/HeroSection";
import { OurMission } from "@/components/our-mission";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <BestSellingSection />
      <BooksSection />
      <OurMission />
      <Footer />
    </main>
  );
}
