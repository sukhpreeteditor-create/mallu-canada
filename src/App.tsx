import { Cursor } from "./components/Cursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Showcase } from "./components/Showcase";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="no-cursor min-h-screen bg-[#030303] text-white">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Showcase />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

