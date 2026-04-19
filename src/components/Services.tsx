import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Instagram, Camera, Sparkles, Megaphone } from "lucide-react";

const services = [
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Brand Promotions",
    desc: "Strategic placements tailored to drive conversion and awareness within the community."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Creative Collaborations",
    desc: "Co-created campaigns that organically merge your brand's voice with our aesthetic."
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Content Creation",
    desc: "High-quality, visually polished reels and posts designed to capture attention immediately."
  },
  {
    icon: <Instagram className="w-6 h-6" />,
    title: "Page Takeovers",
    desc: "Immersive story takeovers that give your brand direct dialogue with an engaged audience."
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            How We <span className="text-accent italic font-serif">Elevate</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 rounded-2xl glass hover:bg-surface-hover transition-colors duration-500 cursor-none"
            >
              <div className="w-12 h-12 rounded-full border border-border-glass flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-paper/60 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
