import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ImpactSection from "@/components/ImpactSection";
import WebinarDiscoverySection from "@/components/WebinarDiscoverySection";
import DreamsSection from "@/components/DreamsSection";
import MeetCoachSection from "@/components/MeetCoachSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MarqueeBanner />
      <ImpactSection />
      <WebinarDiscoverySection />
      <DreamsSection />
      <MeetCoachSection />
      <TestimonialsSection />
      <PreFooter />
      <Footer />
    </main>
  );
}
