import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useInView } from "motion/react";
import { useRef } from "react";

const stats = [
  { value: "50K+", label: "Active Followers" },
  { value: "1.2M", label: "Monthly Reach" },
  { value: "12%", label: "Engagement Rate" },
  { value: "200+", label: "Brand Collabs" },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 md:px-12 border-t border-border-glass" ref={ref}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2"
          >
            <span className="font-serif italic text-4xl md:text-6xl text-accent tracking-tighter">
              {stat.value}
            </span>
            <span className="text-sm md:text-base text-paper/60 uppercase tracking-widest font-medium">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
