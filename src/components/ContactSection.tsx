import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm always open to discussing AI research, collaboration opportunities, or interesting projects.
            Feel free to reach out!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/Antarathapliyal31"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass-card rounded-lg px-6 py-3 hover:glow-primary transition-all duration-300"
            >
              <Github size={18} className="text-primary" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/antara-thapliyal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 glass-card rounded-lg px-6 py-3 hover:glow-secondary transition-all duration-300"
            >
              <Linkedin size={18} className="text-secondary" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="/Antara_Thapliyal_Resume.pdf"
              target="_blank"
              className="flex items-center gap-2 glass-card rounded-lg px-6 py-3 hover:glow-primary transition-all duration-300"
            >
              <FileText size={18} className="text-primary" />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border/30">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Antara Thapliyal. Built with passion.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
