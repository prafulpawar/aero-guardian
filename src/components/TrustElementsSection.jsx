import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Aero Guardian completely transformed our safety management systems. Their precision and knowledge of AS9100 are unmatched.",
    author: "Director of Quality, Global Aerospace Corp"
  },
  {
    quote: "We passed our third-party audits with zero non-conformances thanks to their pre-certification coaching and operational gap analysis.",
    author: "VP of Operations, Defense Contractor"
  }
];

const TrustElementsSection = () => {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        
        {/* Trusted By Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <p className="font-heading text-sm tracking-[0.3em] text-primary uppercase mb-8">Trusted by Aviation Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {/* Replace with actual client logos if you have images, or keep text placeholders */}
            <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-muted-foreground">Boeing</h3>
            <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-muted-foreground">Lockheed Martin</h3>
            <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-muted-foreground">Bombardier</h3>
            <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-muted-foreground">Airbus</h3>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 border border-border bg-card relative shadow-md"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 italic mb-6 leading-relaxed">"{test.quote}"</p>
                <div className="w-8 h-[1px] bg-primary mb-3" />
                <p className="font-heading text-xs uppercase tracking-widest text-muted-foreground">{test.author}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustElementsSection;