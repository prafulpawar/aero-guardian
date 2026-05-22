import { motion } from "framer-motion";
import { Factory, Plane, Shield, Wrench, Building, Box } from "lucide-react";

const industries = [
  { icon: Factory, name: "Aerospace Manufacturing" },
  { icon: Plane, name: "Military Aviation" },
  { icon: Shield, name: "Defense Procurement" },
  { icon: Wrench, name: "Aircraft Maintenance Organizations" },
  { icon: Building, name: "Government Contractors" },
  { icon: Box, name: "Aviation Supply Chain" },
];

const values = [
  "Reduced regulatory risk",
  "Stronger certification confidence",
  "Operational process discipline",
  "Improved traceability & documentation integrity",
  "Executive-level visibility into quality performance",
  "Sustainable compliance frameworks",
];

const IndustriesValueSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
            Industries Served
          </h2>
          <div className="w-16 h-[2px] bg-primary mb-10" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border border-border bg-card p-5 text-center hover:border-primary/50 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <p className="text-xs font-heading tracking-wide uppercase text-muted-foreground">
                    {ind.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
            Strategic Value Delivered
          </h2>
          <div className="w-16 h-[2px] bg-primary mb-6" />

          <p className="text-foreground/80 mb-8 max-w-2xl">
            Francis does not simply audit for compliance. He ensures organizations achieve
            lasting operational excellence and regulatory confidence.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {values.map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 p-4 border border-border bg-card"
              >
                <div className="w-2 h-2 bg-primary shrink-0" />
                <span className="text-sm text-foreground/80">{v}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesValueSection;