import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import OverviewSection from "@/components/OverviewSection";
import CoreServicesSection from "@/components/CoreServicesSection";
import IndustriesValueSection from "@/components/IndustriesValueSection";
import ExperienceSection from "@/components/ExperienceSection";
import TrustElementsSection from "@/components/TrustElementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection"; // Replaces the old CTASection

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. Hook & Introduction */}
      <HeroSection />
      
      {/* 2. Agency Identity */}
      <AboutUsSection />
      
      {/* 3. Leadership Authority (Francis's old section) */}
      <OverviewSection />
      
      {/* 4. What We Do */}
      <CoreServicesSection />
      
      {/* 5. Who We Serve & The Value We Bring */}
      <IndustriesValueSection />
      
      {/* 6. Professional Experience & Capabilities */}
      <ExperienceSection />
      
      {/* 7. Trust Layer: Testimonials & Logos */}
      <TrustElementsSection />
      
      {/* 8. Ultimate Authority Layer: The 18 Certifications */}
      <CertificationsSection />
      
      {/* 9. High-Visibility Contact Form & Footer */}
      <ContactSection />
    </div>
  );
};

export default Index;