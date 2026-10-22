import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Flashcards from PDF",
    description:
      "Turns a PDF (lecture, chapter, paper, or slide deck) into flashcards, a prose summary, or key-point bullets, each with page-level citations. Built on Claude Code Skills, Hooks, and standalone Python agents. Three pipelines — make-flashcards, make-summary, and key-points — follow extract → generate → evaluate. Every output is checked by Python (format, citation presence, cited-page validity, length caps, and page coverage) plus one LLM faithfulness and coverage evaluation, and a Stop hook enforces that every generated file gets an evaluation report.",
    tags: ["Python", "Claude Code", "Claude API", "Skills", "Hooks", "LLM evaluation"],
    github: "https://github.com/Antarathapliyal31/flashcards_from_pdf",
  },
  {
    title: "Open Knowledge Format (OKF)",
    description:
      "Modeled a synthetic insurance PostgreSQL database into a semantic layer of documented knowledge bundles — entities, join keys, metric definitions, and playbooks — so a Claude agent answers business questions with correct queries instead of guessing.",
    tags: ["Python", "PostgreSQL", "Claude"],
  },
  {
    title: "Abilify Clinical Q&A Agent",
    description:
      "Multi-agent RAG system for a high-stakes domain. Parent-child chunking lifted retrieval accuracy 40%, and Cohere reranking raised answer relevancy 30%. An evaluation agent (LLM-as-judge, RAGAS) detects regressions, with hallucination and PII guardrails and LangFuse observability.",
    tags: ["Python", "LangGraph", "MCP", "LangFuse", "RAGAS", "Claude", "Chroma"],
  },
  {
    title: "Shadow Board – Multi-Agent AI Decision System",
    description:
      "A 5-agent decision simulation with MCP integration and per-agent context pruning (4s TTFT). Structured outputs, guardrails, and evaluation checkpoints sit behind a documented FastAPI layer.",
    tags: ["Python", "CrewAI", "MCP", "FastAPI"],
  },
  {
    title: "Designing Incentives for AI Agents",
    description:
      "Research project studying how incentive designs affect AI agent behavior using contextual bandits, Q-learning, and proper scoring rules (Brier score). Evaluates accuracy vs. speed trade-offs and confidence calibration under stationary and non-stationary environments.",
    tags: ["Python", "Q-Learning", "Contextual Bandits", "AI Research"],
    github: "https://github.com/Antarathapliyal31/Designing_incentives_for_AI_Agent",
    stars: 1,
  },
  {
    title: "Capital Finder Bot",
    description:
      "An LLM-powered chatbot built with LangChain and OpenAI that finds capital cities. Features prompt templates, API key integration, and an interactive Streamlit web interface.",
    tags: ["Python", "LangChain", "OpenAI", "Streamlit"],
    github: "https://github.com/Antarathapliyal31/capital-finder-bot",
  },
  {
    title: "Resume Feedback Bot",
    description:
      "An AI-powered bot that analyzes resumes and provides actionable feedback to improve job applications. Built with Python and natural language processing.",
    tags: ["Python", "NLP", "AI Bot"],
    github: "https://github.com/Antarathapliyal31/ResumeFeedbackBot",
  },
  {
    title: "Localization & Cost Prediction for Maze",
    description:
      "A Python-based project implementing localization algorithms and cost prediction models for maze navigation using probabilistic methods.",
    tags: ["Python", "Algorithms", "Probability"],
    github: "https://github.com/Antarathapliyal31/LocalizationAndCostPredictionforMaze",
  },
  {
    title: "Rat Catching Bot",
    description:
      "Autonomous bot simulation for navigating and solving maze-based challenges with optimized pathfinding strategies.",
    tags: ["Python", "Robotics", "Pathfinding"],
    github: "https://github.com/Antarathapliyal31/RatCatchingBot_project",
  },
  {
    title: "Beside Her",
    description:
      "A web-based project built with HTML, showcasing front-end development and creative design skills.",
    tags: ["HTML", "CSS", "Web Design"],
    github: "https://github.com/Antarathapliyal31/beside-her",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 group hover:glow-secondary transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold group-hover:text-secondary transition-colors pr-4">
                  {project.title}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
                {project.stars && (
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary">
                    ⭐ {project.stars}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
