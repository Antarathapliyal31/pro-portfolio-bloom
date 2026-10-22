import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "FastAPI", "Pydantic", "pytest", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Data Integration & Modeling",
    skills: [
      "PostgreSQL",
      "Relational Data Modeling",
      "Data Pipelines",
      "Schema Mapping & Normalization",
      "Semantic Layers",
      "Knowledge Bundles",
    ],
  },
  {
    category: "AI & Agents",
    skills: [
      "LangGraph",
      "LangChain",
      "CrewAI",
      "Tool Use",
      "MCP Servers",
      "RAG",
      "FAISS",
      "Chroma",
      "LLM-as-judge",
      "RAGAS",
      "Guardrails",
      "Claude on AWS Bedrock",
      "Claude API",
      "Golden Datasets",
    ],
  },
  {
    category: "Integrations & Delivery",
    skills: [
      "REST API Integrations",
      "Auth, Retries & Rate Limiting",
      "Batch Jobs",
      "CLIs & Internal Tools",
      "Testing & Debugging",
      "Technical Documentation",
      "Git",
    ],
  },
  {
    category: "Cloud & Delivery",
    skills: [
      "AWS Bedrock",
      "Lambda",
      "S3",
      "CloudWatch",
      "IAM",
      "Cross-Account Access",
      "Docker",
      "CI/CD",
      "Azure DevOps",
      "GitHub Actions",
      "Streamlit",
    ],
  },
  {
    category: "AI-Assisted Development",
    skills: ["Claude Code", "Claude Skills", "Claude Code Hooks", "Cursor", "GitHub Copilot"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 h-full"
            >
              <h3 className="text-sm font-mono text-secondary uppercase tracking-wider mb-5 leading-relaxed">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 rounded-lg bg-muted text-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
