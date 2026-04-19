import { motion, useInView } from "motion/react";
import { useRef } from "react";

const projects = [
  { id: 1, type: "Reel", title: "Lifestyle Vlogs", span: "md:col-span-2 md:row-span-2", text: "Immersive storytelling showing day-to-day life." },
  { id: 2, type: "Collaboration", title: "Tech Spotlight", span: "col-span-1", text: "Product reviews and integration." },
  { id: 3, type: "Promotion", title: "Fashion Drop", span: "col-span-1", text: "Styling and lookbooks for brands." },
  { id: 4, type: "Culture", title: "Festival Season", span: "md:col-span-2", text: "Authentic cultural celebration content." },
];

export function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Curated <span className="text-accent italic font-serif">Content</span>
          </h2>
          <p className="text-paper/60 text-lg max-w-xl">
            A selection of high-performing reels and campaigns tailored for maximum aesthetic appeal and engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl ${p.span}`}
            >
              <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-accent/5 transition-colors duration-500 z-10 flex items-center justify-center p-8 text-center" >
                <p className="text-paper/40 font-light italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0 delay-75">
                  {p.text}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-20 flex flex-col justify-end p-8 border border-border-glass rounded-2xl group-hover:border-accent/30 transition-colors duration-500">
                <span className="text-sm font-medium tracking-widest uppercase text-accent mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {p.type}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {p.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
