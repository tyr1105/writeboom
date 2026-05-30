import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WriteBoomTool from "@/components/WriteBoomTool";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WriteBoomTool />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
