import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Otsuka Pharmaceutical",
    location: "Princeton, NJ",
    role: "GenAI Engineer Intern – Gen AI Platform Team, AI-Enablement Org",
    period: "Jun 2026 – Aug 2026",
    highlights: [
      "At Otsuka Pharmaceutical, I built a Code Review Agent that checks AI agents before they reach production: Bandit, Ruff and a custom AST checker find security, quality and SDK-compliance issues, and a sandbox run catches runtime errors. Claude on AWS Bedrock then turns the findings into a risk-rated report citing the exact file and line, and a human approves or denies the release. I validated it on a golden dataset, where it caught 100% of known issues, and shipped it through CI/CD.",
      "Upgraded the platform's agent CLI from one-shot to multi-turn and built MCP-accessible tools so anyone in the company could use agents easily; diagnosed and fixed cross-account AWS invocation failures blocking deployment.",
      "Built a model-lifecycle agent that pulls end-of-life dates directly from the AWS Bedrock API, applies tiered CRITICAL/WARNING alerting, emails managers on a schedule, and surfaces risk on a Streamlit dashboard.",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Software Engineer – Client Delivery, Insurance Client",
    period: "Jul 2021 – Jun 2023",
    highlights: [
      "Delivered production systems for an insurance carrier in a regulated environment: built new insurance products and batch letter-generation flows for policy activation and annual renewals, with error handling, retries, and data contracts across third-party integrations.",
      "Worked directly with client stakeholders to turn requirements into build plans and automated data pipelines in Python and SQL with monitoring; guided junior team members; drove a 29% lift in sales and 30% reduction in manual effort.",
    ],
  },
  {
    company: "Rutgers University",
    location: "New Brunswick, NJ",
    role: "Instructor, CS110 & CS170",
    period: "Sep 2025 – Present",
    highlights: [
      "Teach Python, web technologies, and data analysis to 80+ students per semester, many from non-technical backgrounds.",
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
                    {exp.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary" />
                        {exp.location}
                      </span>
                    )}
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
