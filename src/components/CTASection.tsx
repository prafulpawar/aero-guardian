import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ctaItems = [
  "Certification Readiness",
  "Audit Leadership",
  "Government QA Support",
  "Aerospace Compliance Strategy",
];

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Partner with a Proven{" "}
            <span className="text-gradient-gold">Aerospace & Defense</span>{" "}
            Quality Leader
          </h2>

          <div className="w-16 h-[2px] bg-primary mx-auto mb-10" />

          <p className="text-muted-foreground mb-10 text-lg">
            Engage Safe Aero Solutions for:
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {ctaItems.map((item) => (
              <span
                key={item}
                className="px-5 py-2 border border-primary text-primary font-heading text-sm tracking-widest uppercase"
              >
                {item}
              </span>
            ))}
          </div>

          <motion.a
            href="mailto:contact@safeaerosolutions.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-heading text-sm tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Safe Aero Solutions. All rights reserved.</p>
          <p className="font-heading tracking-widest uppercase">
            Aerospace & Defense Quality Consulting
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
