import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Plane, Settings, Lock, Award, FileCheck, Database, BookOpen } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "IAQG Aerospace Auditor (AS9100D)",
    summary: "Qualified under the International Aerospace Quality Group framework to perform certification audits against globally recognized aerospace standards.",
    details: [
      "Authorization to audit AS9100-compliant organizations",
      "Aerospace sector-specific auditing competency",
      "Evaluation of risk-based thinking in aerospace supply chains",
      "Assessment of configuration management and product safety controls",
    ],
  },
  {
    icon: FileCheck,
    title: "AS9100D / AS9101F Lead Auditor",
    summary: "Lead Auditor for the international QMS standard specific to aerospace, aviation, and defense organizations.",
    details: [
      "Full-scope certification audits",
      "Product realization process evaluation",
      "Risk management framework assessment",
      "Aviation safety and traceability verification",
    ],
  },
  {
    icon: Award,
    title: "ISO 9001:2015 Lead Auditor",
    summary: "Global standard for Quality Management Systems across industries.",
    details: [
      "Organizational process effectiveness evaluation",
      "Management review and leadership accountability",
      "Risk-based thinking integration",
      "Customer satisfaction monitoring systems",
    ],
  },
  {
    icon: Settings,
    title: "IATF 16949:2016",
    summary: "Automotive and complex manufacturing supply chain quality systems, applicable in aerospace-adjacent environments.",
    details: [
      "Defect prevention systems evaluation",
      "Process capability and performance metrics",
      "Supplier risk control",
      "Production discipline and traceability",
    ],
  },
  {
    icon: Shield,
    title: "Exemplar Global Lead OHSMS Auditors",
    summary: "Lead auditor certification for Occupational Health and Safety Management Systems (OHSAS 18001:2007).",
    details: [
      "Occupational health and safety auditing",
      "Safety policy enforcement",
      "Workplace risk identification and mitigation",
      "Compliance with global OHSAS frameworks",
    ],
  },
  {
    icon: Plane,
    title: "AME M2 – Aircraft Maintenance Engineer",
    summary: "Maintenance and release authority on multi-engine aircraft under regulated aviation frameworks.",
    details: [
      "Practical aircraft systems knowledge",
      "Authority to certify maintenance work",
      "Heavy and line maintenance experience",
      "C.S.E. Aviation Engineering College (AME Diploma)",
    ],
  },
  {
    icon: Plane,
    title: "FAA A&P (Airframe & Powerplant)",
    summary: "United States regulatory credential allowing maintenance authority under Federal Aviation Regulations.",
    details: [
      "Compliance under FAA frameworks",
      "Aircraft structure and propulsion expertise",
      "International regulatory familiarity",
      "Cross-border aviation standards competency",
    ],
  },
  {
    icon: Lock,
    title: "Stage 2 Secret Clearance Certificate",
    summary: "Authorized to work on controlled government, defense, and sensitive military programs.",
    details: [
      "Defense procurement projects",
      "Military aircraft manufacturing oversight",
      "Government Quality Assurance initiatives",
    ],
  },
  {
    icon: FileCheck,
    title: "Controlled Goods Certificate",
    summary: "Certified for the examination, possession, or transfer of controlled goods.",
    details: [
      "Controlled Goods - Quality Assurance (RCMP)",
      "Compliance with Canadian defense trade controls",
    ],
  },
  {
    icon: Database,
    title: "Material Identification MI Data Specialist",
    summary: "Certification in Material Identification and Data Specialization.",
    details: [
      "Materiel cataloging and identification",
      "Data governance frameworks",
      "Inventory precision and tracking",
    ],
  },
  {
    icon: Settings,
    title: "DRMIS Certification & Training",
    summary: "Defense Resource Management Information System (DRMIS) qualifications.",
    details: [
      "DRMIS Navigation and Operations",
      "Defense materiel management",
      "Equipment maintenance tracking within DRMIS",
    ],
  },
  {
    icon: Database,
    title: "Principle of Material Master Data Certificate",
    summary: "Foundational certification on the lifecycle and structuring of Material Master Data.",
    details: [
      "Material master data structures",
      "Data consistency and validation",
      "Integration with enterprise resource planning",
    ],
  },
  {
    icon: BookOpen,
    title: "Master Data Governance (MDG) & MMR",
    summary: "Specialized training on SAP MDG Navigation and Material Master Records.",
    details: [
      "Introduction to Master Data Governance MDG Navigation in Fiori (303648)",
      "How to request a material master record certificate (303664)",
      "How to enrich and approved material master record certificate (303672)",
      "Material master record (MMR) Reporting (303666)",
    ],
  },
  {
    icon: Award,
    title: "Leadership & Supervisory Skills",
    summary: "Trained in leadership and team management to guide organizations effectively.",
    details: [
      "KLM Leadership Training",
      "America Management Association (Supervisory Skills)",
      "Cross-functional team coordination",
      "Strategic business alignment",
    ],
  },
];

const CertCard = ({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = cert.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => setExpanded(!expanded)}
      className="group cursor-pointer border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:glow-gold"
    >
      <div className="flex items-start gap-4">
        <Icon className="w-5 h-5 text-primary mt-1 shrink-0" />
        <div className="flex-1">
          <h3 className="font-heading text-base font-semibold tracking-wide uppercase mb-2 group-hover:text-primary transition-colors">
            {cert.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {cert.summary}
          </p>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 space-y-2"
            >
              {cert.details.map((d) => (
                <li
                  key={d}
                  className="text-sm text-foreground/70 flex items-start gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {d}
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-heading text-sm tracking-[0.4em] uppercase text-primary mb-3">
            Certifications & Regulatory Authority
          </h2>
          <div className="w-16 h-[2px] bg-primary" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6 text-center">
          Click any certification to expand details
        </p>
      </div>
    </section>
  );
};

export default CertificationsSection;
