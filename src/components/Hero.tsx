import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  // We use placeholder images or shapes for aesthetic since direct ibb.co links need extracting
  // To use your exact logo, replace the src here with the raw .jpg/.png link from ibb.co
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/15 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-paper/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-accent/50" />
          <p className="text-sm uppercase tracking-[0.2em] text-accent">
            Canadian Malayali Community
          </p>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-display text-[12vw] leading-[0.9] tracking-tighter sm:text-[8vw] md:text-[6vw] lg:text-[7.5vw] font-bold text-gradient"
        >
          Connecting<br /> 
          Creators & <br />
          <span className="opacity-80 italic font-serif text-accent">Brands.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 sm:items-center max-w-2xl"
        >
          <p className="text-lg md:text-xl text-paper/60 font-light leading-relaxed flex-1">
            We bridge the gap between premium brands and the fastest-growing Malayalam audience in Canada. Authentic content, real engagement.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-shrink-0">
            <a 
              href="#contact"
              className="group flex items-center justify-between gap-4 px-6 md:px-8 py-4 bg-accent text-background rounded-full font-medium hover:scale-[1.02] transition-transform"
            >
              Promote Your Brand
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#work"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-paper/20 hover:bg-surface-hover transition-colors"
            >
              View Work
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-sm text-paper/50"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        Available for Collabs
      </motion.div>
    </section>
  );
}
