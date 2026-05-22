import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    category: "AS9100 & ISO 9001 Implementation",
    items: [
      "QMS design and restructuring",
      "Process mapping and documentation alignment",
      "Risk management integration",
      "Certification readiness programs",
    ],
  },
  {
    category: "Internal & Third-Party Audit Preparation",
    items: [
      "Pre-certification audits",
      "Gap assessments",
      "Corrective action planning",
      "Executive audit coaching",
    ],
  },
  {
    category: "Government Quality Assurance Consulting",
    items: [
      "Contract compliance verification",
      "Supplier oversight programs",
      "Manufacturing QA monitoring",
      "Risk reporting to leadership",
    ],
  },
  {
    category: "Aerospace Manufacturing Oversight",
    items: [
      "Configuration management verification",
      "Technical documentation review",
      "Non-conformance investigation",
      "Production compliance assurance",
    ],
  },
  {
    category: "Military Aviation Compliance Support",
    items: [
      "Airworthiness regulation enforcement",
      "Modification and upgrade review",
      "Lifecycle materiel quality management",
      "Defense system compliance oversight",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
            Safe Aero Solutions
          </h2>
          <div className="w-16 h-[2px] bg-primary mb-8" />
          <p className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight mb-3">
            Chief Executive Officer
          </p>
          <p className="text-muted-foreground">October 2020 – Present</p>
          <p className="text-foreground/80 mt-4 leading-relaxed">
            As CEO, Francis provides strategic direction, technical authority, and regulatory
            governance oversight to aerospace manufacturers and defense contractors operating in
            highly controlled environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border bg-card p-6"
            >
              <h3 className="font-heading text-sm font-semibold tracking-wide uppercase text-primary mb-4">
                {service.category}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-[2px] bg-primary mb-6" />
          <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight mb-8">
            Key Career Engagements
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-5 border-l-2 border-primary/40 bg-card/30">
              <h4 className="font-heading text-sm text-primary mb-1 uppercase tracking-wider">TUV Rheinland of North America</h4>
              <p className="text-sm font-medium text-foreground/80">Quality Assurance 3rd Party Auditor</p>
            </div>
            <div className="p-5 border-l-2 border-primary/40 bg-card/30">
              <h4 className="font-heading text-sm text-primary mb-1 uppercase tracking-wider">Department of National Defence</h4>
              <p className="text-sm font-medium text-foreground/80">Life Cycle Quality Manager / Specialist</p>
            </div>
            <div className="p-5 border-l-2 border-primary/40 bg-card/30">
              <h4 className="font-heading text-sm text-primary mb-1 uppercase tracking-wider">Bombardier Aerospace</h4>
              <p className="text-sm font-medium text-foreground/80">Line Manager QA / ACA & QC Inspector</p>
            </div>
            <div className="p-5 border-l-2 border-primary/40 bg-card/30">
              <h4 className="font-heading text-sm text-primary mb-1 uppercase tracking-wider">First Air</h4>
              <p className="text-sm font-medium text-foreground/80">Auditor / Quality Assurance Supervisor</p>
            </div>
            <div className="p-5 border-l-2 border-primary/40 bg-card/30">
              <h4 className="font-heading text-sm text-primary mb-1 uppercase tracking-wider">United Nation Aviation</h4>
              <p className="text-sm font-medium text-foreground/80">Base Manager</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;