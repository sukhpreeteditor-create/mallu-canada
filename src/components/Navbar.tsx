import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-paper"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg">
          <img 
            src="https://i.ibb.co/7t0wPR8b/Screenshot-2026-04-19-155819.png" 
            alt="Mallu Canada Logo" 
            className="w-full h-full object-cover scale-[1.12]"
          />
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-80">
        <a href="#services" className="hover:text-accent transition-colors">Services</a>
        <a href="#work" className="hover:text-accent transition-colors">Work</a>
        <a href="#about" className="hover:text-accent transition-colors">About</a>
      </div>
      
      <a 
        href="#contact"
        className="px-5 py-2.5 rounded-full border border-paper/20 text-xs uppercase tracking-widest font-bold hover:bg-accent hover:border-accent hover:text-background transition-colors duration-300 backdrop-blur-md"
      >
        Let's Talk
      </a>
    </motion.nav>
  );
}
