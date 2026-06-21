import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProofSection from "@/components/SocialProofSection";
import CaseStudySection from "@/components/CaseStudySection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParallaxOrbs from "@/components/ParallaxOrbs";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <ParallaxOrbs />
      <Header />
      <main>
        <Hero />
        <SocialProofSection />
        <CaseStudySection />
        <ServicesSection />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
