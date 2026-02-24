import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Shield, Award, Plane } from "lucide-react";

const badges = [
  "IAQG Aerospace Auditor",
  "AS9100D Lead Auditor",
  "ISO 9001",
  "IATF 16949",
  "AME M2",
  "FAA A&P",
  "Security Cleared",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-primary" />
            <Award className="w-6 h-6 text-primary" />
            <Plane className="w-6 h-6 text-primary" />
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase mb-4">
            Francis{" "}
            <span className="text-gradient-gold">Ukposidolo</span>
          </h1>

          <div className="w-24 h-[2px] bg-primary mx-auto mb-6" />

          <p className="font-heading text-xl md:text-2xl tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Aerospace & Defense Quality Authority
          </p>

          <p className="text-lg text-primary font-medium tracking-wide mb-12">
            CEO — Safe Aero Solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 border border-border text-xs font-heading tracking-widest uppercase text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20"
        >
          <a href="#overview" className="inline-block">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-1.5 mx-auto hover:border-primary transition-colors">
              <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
