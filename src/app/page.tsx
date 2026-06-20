import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParallaxOrbs from "@/components/ParallaxOrbs";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <ParallaxOrbs />
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <HowItWorksSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
