import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    category: "Aviation Consulting",
    items: [
      "Regulatory compliance support",
      "Operational audits & assessments",
      "Safety management systems (SMS)",
    ],
  },
  {
    category: "Training & Development",
    items: [
      "Aviation safety training",
      "Compliance programs",
      "Staff capacity development",
    ],
  },
  {
    category: "Operational Support",
    items: [
      "Process optimization",
      "Risk assessment & mitigation",
      "Performance improvement strategies",
    ],
  },
];

const CoreServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
            Our Core Services
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-8" />
          <p className="text-foreground/80 leading-relaxed text-lg">
            At Aero Guardian, we provide specialized aviation solutions designed to strengthen safety, ensure regulatory compliance, and optimize operational performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border bg-secondary/20 p-8 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-heading text-lg font-semibold tracking-wide uppercase text-primary mb-6">
                {service.category}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-primary/60 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;