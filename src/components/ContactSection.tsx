import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    const body = `Hi Antara,\n\nName: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:thapliyalantara31@gmail.com?subject=${encodeURIComponent(subject || "Portfolio Contact")}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_blank");
    toast({ title: "Opening your email client!" });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Have work opportunities, want to collaborate on a project, or just say "Hi"? Fill the form below 
            or shoot me an email at{" "}
            <a href="mailto:thapliyalantara31@gmail.com" className="text-primary hover:underline">
              thapliyalantara31@gmail.com
            </a>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 glass-card rounded-xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                  Name <span className="text-primary">*</span>
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="bg-background/50 border-border/50 focus:border-primary"
                  maxLength={100}
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                  Email <span className="text-primary">*</span>
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="bg-background/50 border-border/50 focus:border-primary"
                  maxLength={255}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Subject
              </label>
              <Input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?"
                className="bg-background/50 border-border/50 focus:border-primary"
                maxLength={200}
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Message <span className="text-primary">*</span>
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                className="bg-background/50 border-border/50 focus:border-primary min-h-[140px]"
                maxLength={2000}
                required
              />
            </div>
            <Button type="submit" className="w-full gap-2">
              <Send size={16} /> Send Message
            </Button>
          </motion.form>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-center gap-3 mb-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:thapliyalantara31@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  thapliyalantara31@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold mb-4">Find Me Online</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/Antarathapliyal31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} className="text-primary" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/antara-thapliyal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  <Linkedin size={16} className="text-secondary" />
                  LinkedIn
                </a>
                <a
                  href="/Antara_Thapliyal_Resume.pdf"
                  target="_blank"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <FileText size={16} className="text-primary" />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
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
