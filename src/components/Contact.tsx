import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Instagram, Mail, MessageCircle, ArrowUpRight, ArrowRight } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter mb-6">
            Let's <br />
            <span className="text-gradient">Collaborate.</span>
          </h2>
          <p className="text-xl text-paper/60 max-w-md mb-12 font-light">
            Ready to tap into a highly engaged audience? Drop a message for rates, media kits, or bespoke campaigns.
          </p>

          <div className="flex flex-col gap-6">
            <a href="mailto:hello@example.com" className="group flex items-center gap-4 text-2xl font-display w-max pb-2 border-b border-paper/20 hover:border-paper transition-colors text-paper">
              hello@brandcatalyst.com
              <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
            
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="p-4 rounded-full border border-paper/20 hover:bg-accent hover:border-accent hover:text-background transition-all text-paper">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="p-4 rounded-full border border-paper/20 hover:bg-accent hover:border-accent hover:text-background transition-all text-paper">
                <MessageCircle className="w-6 h-6" /> {/* WhatsApp stand-in */}
              </a>
              <a href="#" className="p-4 rounded-full border border-paper/20 hover:bg-accent hover:border-accent hover:text-background transition-all text-paper">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-5/12 flex flex-col gap-6 glass p-8 md:p-10 rounded-3xl"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-paper/60 uppercase tracking-widest">Name / Brand</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-border-glass pb-4 focus:border-accent outline-none transition-colors text-lg text-paper" 
              placeholder="Your name"
            />
          </div>
          
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm font-medium text-paper/60 uppercase tracking-widest">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-border-glass pb-4 focus:border-accent outline-none transition-colors text-lg text-paper" 
              placeholder="you@company.com"
            />
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <label className="text-sm font-medium text-paper/60 uppercase tracking-widest">Project / Goal</label>
            <textarea 
              rows={3}
              className="w-full bg-transparent border-b border-border-glass pb-4 focus:border-accent outline-none transition-colors text-lg resize-none text-paper" 
              placeholder="Tell us what you're looking to achieve..."
            />
          </div>

          <button 
            type="button"
            className="mt-8 bg-accent text-background py-4 rounded-full font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform flex justify-center items-center gap-2 group"
          >
            Send Inquiry
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
