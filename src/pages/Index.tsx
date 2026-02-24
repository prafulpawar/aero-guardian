import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import IndustriesValueSection from "@/components/IndustriesValueSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OverviewSection />
      <CertificationsSection />
      <ExperienceSection />
      <IndustriesValueSection />
      <CTASection />
    </div>
  );
};

export default Index;
