import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Otsuka Pharmaceutical",
    location: "Princeton, NJ",
    role: "GenAI Engineer Intern",
    period: "Jun 2026 – Aug 2026",
    highlights: [
      "Built and shipped a Code Review Agent end-to-end using the internal skAI SDK pattern; fetches a target agent's codebase from Azure DevOps at runtime via REST API and reviews across three lenses: security (bandit), code quality (ruff), and skAI-compliance (Python AST), and lets each team supply its own review spec of custom checks; returns a risk-rated verdict, deployed to dev via the ADO CI/CD pipeline.",
      "Developed a model-lifecycle agent in Python that tracks AWS Bedrock (Claude) model EOL/legacy dates via boto3, applies tiered expiring-soon alerting, and emails managers on a scheduled run, surfaced through a Streamlit dashboard, reducing spend on deprecated or unused models against a per-user cost budget.",
      "Engineered a multi-turn CLI to invoke and interactively converse with agents on the platform, streamlining agent testing and iteration.",
      "Worked closely with the platform team on the internal skAI SDK and across the platform architecture: agents on AWS Bedrock AgentCore (registry, memory, gateway), agent code versioned in Azure DevOps, and CloudWatch monitoring.",
      "Executed manual UAT for the skAI platform as an Agent Consumer, identifying environment-readiness blockers and documenting them for the platform team to resolve.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-card rounded-xl p-8 hover:glow-primary transition-shadow duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={18} className="text-primary" />
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                  </div>
                  <p className="text-lg text-secondary font-medium mb-1">{exp.role}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
