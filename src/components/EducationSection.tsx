import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";

const education = [
  {
    university: "Rutgers University–New Brunswick",
    degree: "Master of Science — Computer Science",
    period: "Jan 2025 – Dec 2026",
    gpa: "4.0",
    highlights: [
      "Currently working on a research paper; looking forward to publishing it.",
      "Skills: Mechanism Design, RLHF, Policy Optimization, Reward Designing",
      "Currently Exploring: LangChain, OpenAI, Vector Databases",
    ],
    courses: [
      "Topics in AI",
      "Introduction to AI",
      "Seminar in CS — Interpretability and Explainability",
      "Machine Learning",
    ],
  },
  {
    university: "G. B. Pant University Of Agriculture & Technology",
    degree: "Bachelor of Technology — Information Technology",
    period: "2017 – 2021",
    gpa: "3.36",
    highlights: [
      "Alumni Cell: Organized 'SAMANVAY' reunion event; led 'Photoholic' — awarded best event two years running.",
      "Astitva NGO: Taught underprivileged children three days a week; provided social education and basic necessities.",
    ],
    courses: [],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Academic <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.university}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative mb-12 md:w-1/2 pl-12 md:pl-0 ${
                i % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)] left-[10px] md:left-auto ${
                  i % 2 === 0 ? "md:right-[-6px]" : "md:left-[-6px]"
                }`}
              />

              <div className="glass-card rounded-xl p-6 hover:glow-primary transition-shadow duration-500">
                <div className={`flex items-center gap-2 mb-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <GraduationCap size={18} className="text-primary" />
                  <span className="text-xs font-mono text-primary">{edu.period}</span>
                </div>

                <h3 className="text-lg font-semibold mb-1">{edu.university}</h3>
                <p className="text-sm text-muted-foreground mb-3">{edu.degree}</p>

                <div className={`flex items-center gap-1 mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Award size={14} className="text-secondary" />
                  <span className="text-sm font-medium">GPA: {edu.gpa}</span>
                </div>

                {edu.highlights.map((h, j) => (
                  <p key={j} className="text-xs text-muted-foreground mb-1.5 leading-relaxed">
                    • {h}
                  </p>
                ))}

                {edu.courses.length > 0 && (
                  <div className="mt-4">
                    <div className={`flex items-center gap-1 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <BookOpen size={14} className="text-primary" />
                      <span className="text-xs font-semibold uppercase tracking-wider">Relevant Courses</span>
                    </div>
                    <div className={`flex flex-wrap gap-1.5 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {edu.courses.map((c) => (
                        <span
                          key={c}
                          className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
