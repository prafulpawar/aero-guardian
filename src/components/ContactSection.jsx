import { motion } from "framer-motion";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";

// OLD DATA STRICTLY PRESERVED
const ctaItems = [
  "Certification Readiness",
  "Audit Leadership",
  "Government QA Support",
  "Aerospace Compliance Strategy",
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: OLD TEXT PRESERVED + NEW CONTACT VISIBILITY */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Partner with a Proven{" "}
                <span className="text-gradient-gold">Aerospace & Defense</span>{" "}
                Quality Leader
              </h2>
              <div className="w-16 h-[2px] bg-primary mb-8" />
              <p className="text-muted-foreground text-lg mb-6">
                Engage Aero Guardian & Safe Aero Solutions for:
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {ctaItems.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 border border-primary text-primary font-heading text-xs tracking-widest uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* NEW: Improved Contact Visibility */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading uppercase tracking-widest text-sm mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading uppercase tracking-widest text-sm mb-1">Email Us</h4>
                  <p className="text-muted-foreground">contact@safeaerosolutions.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading uppercase tracking-widest text-sm mb-1">Headquarters</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Aero Guardian Main Office<br/>
                    Aviation District<br/>
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: NEW Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card p-8 border border-border shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <input type="text" className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground">Company</label>
                  <input type="text" className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" placeholder="Aviation Corp" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground">Email</label>
                <input type="email" className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground">Phone Number</label>
                <input type="tel" className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-heading uppercase tracking-widest text-muted-foreground">How can we help?</label>
                <textarea rows={4} className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Briefly describe your compliance or operational needs..."></textarea>
              </div>

              <button type="submit" className="w-full inline-flex justify-center items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-heading text-sm tracking-[0.2em] uppercase font-semibold hover:opacity-90 transition-opacity">
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aero Guardian & Safe Aero Solutions. All rights reserved.</p>
          <p className="font-heading tracking-widest uppercase">
            Aerospace & Defense Quality Consulting
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;