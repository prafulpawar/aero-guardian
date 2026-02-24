import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OverviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overview" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
            Executive Overview
          </h2>
          <div className="w-16 h-[2px] bg-primary mb-10" />

          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
            Francis Ukposidolo is a senior Aerospace & Defense Quality Executive with over{" "}
            <span className="text-primary font-semibold">15 years</span> of hands-on leadership
            across aerospace manufacturing, military aviation, aircraft maintenance operations,
            and government defense procurement programs.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground mb-6">
            His work centers on protecting airworthiness, enforcing regulatory compliance, and
            strengthening Quality Management Systems (QMS) to meet international aerospace standards.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground mb-6">
            He has led internal, second-party, and third-party audits; overseen military aircraft
            testing and modification programs; supported Government Quality Assurance (GQA)
            oversight; and guided organizations through AS9100, ISO 9001, and IATF 16949
            certification processes.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            His expertise bridges operational execution and regulatory governance — ensuring that
            quality systems are not only compliant, but strategically aligned with business
            performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
