import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Working with them was a game-changer. The aesthetics, the deep connection with the community, and the sheer professionalism blew us away.",
    author: "Elena R.",
    role: "Marketing Director, Luxē Brand"
  },
  {
    id: 2,
    text: "Meticulous attention to detail. Our campaign reached the exact Canadian diaspora we were targeting and outperformed all our previous metrics.",
    author: "David M.",
    role: "Founder, TechKite"
  },
  {
    id: 3,
    text: "They don't just post content; they curate an experience. The engagement jump was immediate.",
    author: "Sarah J.",
    role: "Brand Manager"
  }
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-24 px-6 md:px-12 border-t border-white/5 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-white/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:w-1/3"
        >
          <Quote className="w-12 h-12 text-accent/50 mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Words from <br /> 
            <span className="text-accent italic font-serif">Partners</span>
          </h2>
          <div className="flex gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full border border-paper/20 hover:bg-accent hover:border-accent hover:text-background transition-colors text-paper">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-paper/20 hover:bg-accent hover:border-accent hover:text-background transition-colors text-paper">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/3 w-full"
        >
          <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-12 min-h-[300px] flex items-center">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-center transition-opacity duration-700 ${
                  i === current ? "opacity-100 relative z-10" : "opacity-0 absolute z-0 pointer-events-none"
                }`}
              >
                <p className="text-xl md:text-3xl font-light leading-relaxed mb-8 text-paper/90">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-display text-lg font-bold">{t.author}</h4>
                  <p className="text-sm text-paper/50 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
