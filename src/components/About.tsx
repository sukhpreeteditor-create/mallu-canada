import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 relative aspect-[4/5] rounded-3xl overflow-hidden glass p-2"
        >
          {/* Real Influencer Image */}
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-black/5 z-10" />
            <img 
              src="https://i.ibb.co/7ws47kK/Screenshot-2026-04-19-160225.png" 
              alt="Influencer in New York" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 flex flex-col justify-center gap-8"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            The Voice of <br />
            <span className="text-accent italic font-serif">Malayalies</span> in Canada.
          </h2>
          
          <div className="space-y-6 text-lg text-paper/60 font-light leading-relaxed">
            <p>
              We started with a simple vision: to bring the vibrancy of Malayalam culture to the Canadian landscape. Today, we've built a community that trusts our voice, aesthetics, and recommendations.
            </p>
            <p>
              Our content isn't just scrolled past; it's saved, shared, and discussed. When we partner with a brand, we don't just post—we craft narratives that seamlessly integrate into the daily lives of our audience.
            </p>
          </div>
          
          <div className="pt-4">
            <div className="text-xs text-paper/40 mt-2 uppercase tracking-widest font-sans">
              Aesthetic • Culture • Growth
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
