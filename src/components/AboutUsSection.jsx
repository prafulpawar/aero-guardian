import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/10" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
              About Us
            </h2>
            <div className="w-16 h-[2px] bg-primary mb-10" />

            <h3 className="text-2xl font-heading uppercase tracking-wide text-foreground mb-4">
              Who We Are
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              Aero Guardian is a dedicated aviation solutions provider committed to enhancing safety, compliance, and operational excellence across the aviation industry. We exist to support organizations in navigating complex regulatory environments while maintaining the highest standards of performance and safety.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-heading text-primary uppercase tracking-wider mb-2">Our Mission</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To empower aviation organizations with the knowledge, systems, and support needed to operate safely, efficiently, and in full compliance with global standards.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-heading text-primary uppercase tracking-wider mb-2">Our Vision</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To become a trusted global partner in aviation consulting and operational excellence.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Visuals: Replace src with actual local/external aviation assets */}
            <div className="space-y-4 mt-8">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop" alt="Aviation Aircraft" className="rounded-sm object-cover h-48 w-full shadow-lg border border-border" />
              <div className="bg-background p-6 rounded-sm border border-border">
                <h4 className="font-heading text-primary uppercase text-sm mb-3">Our Values</h4>
                <ul className="space-y-2 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  <li>• Integrity</li>
                  <li>• Excellence</li>
                  <li>• Safety</li>
                  <li>• Reliability</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-primary/10 p-6 rounded-sm border border-primary/20 h-32 flex items-center justify-center text-center">
                 <p className="font-heading text-sm text-foreground uppercase tracking-widest">Global Standards</p>
              </div>
              <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop" alt="Aviation Team" className="rounded-sm object-cover h-64 w-full shadow-lg border border-border" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;