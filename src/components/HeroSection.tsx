import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
            AI & ML Enthusiast
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Antara</span>
            <br />
            Thapliyal
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Building intelligent systems with Python, Machine Learning, and AI Agents.
            Passionate about designing incentive-compatible AI and solving real-world problems through code.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/Antarathapliyal31"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground px-5 py-3 rounded-lg transition-colors"
            >
              <Github size={18} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/antara-thapliyal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground px-5 py-3 rounded-lg transition-colors"
            >
              <Linkedin size={18} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="inline-block animate-float text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={28} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
