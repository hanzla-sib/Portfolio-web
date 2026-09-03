import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Siemens AG",
      location: "Munich, Germany",
      period: "Feb 2025 – Present",
      bullets: [
        "Contributed to a highly accurate, reliable multi-agent architecture, including query routing, specialist agents, tool execution, MCP connectivity, asynchronous processing, and incremental failure handling",
        "Implemented 50+ TypeScript-based tools to enable agents to control the browser fully autonomously to automate repetitive workflows",
        "Implemented an enhanced Retrieval-Augmented Generation (RAG) pipeline with semantic retrievals, priority-based ranking, and optimized context construction for downstream LLM queries",
        "Built a multi-step analysis pipeline for complex, multimodal PDF files, resulting in the most accurate PDF parsing algorithm",
        "Enabled scalable processing of very long, complex documents by utilizing batch processing, offscreen rasterization, and large-payload stashing",
        "Securely integrated existing AI platforms with model-specific configuration, authentication, and request throttling",
        "Ensured high code quality by continuously debugging, linting, and adding automated tests incl. code test coverage quality gates",
      ],
      technologies: [
        "LangGraph",
        "LangChain",
        "React",
        "TypeScript",
        "Jest",
        "Playwright",
      ],
    },
    {
      title: "Software Engineer",
      company: "National Database and Registration Authority (NADRA)",
      location: "Islamabad, Pakistan",
      period: "Feb 2024 – Sept 2024",
      bullets: [
        "Built end-to-end full-stack features for several critical national identity workflows",
        "Developed multi-step citizen-facing UI flows with form validation, real-time feedback, and responsive layouts for kiosk and web use",
        "Implemented and consumed APIs with key-value database caching and database query improvements, reducing average response latency by about 50%",
        "Worked with real-time async messaging between services and wrote both unit and integration tests",
      ],
      technologies: [
        "Next.js",
        "React",
        "Java",
        "Spring Boot",
        "REST APIs",
        "Redis",
        "Kafka",
        "RabbitMQ",
        "JUnit",
        "Mockito",
        "Jest",
      ],
    },
    {
      title: "Software Engineer",
      company: "PLC Group",
      location: "Ontario, Canada (Remote)",
      period: "July 2023 – Feb 2024",
      bullets: [
        "Worked as a full-stack developer on a telecom monitoring platform, building UI screens and connecting them to APIs",
        "Implemented dashboard components, charts, and client-state management for cleaner data loading and updates",
        "Helped improve page load and API response times by about 50% through caching, query batching, and frontend performance fixes, and contributed to testing and code reviews",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Redux Toolkit",
        "React Query",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-section-title gradient-text mb-4">Experience</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            3+ years building scalable, end-to-end software solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-card hover-glow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 mt-1 shrink-0">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end text-sm text-muted-foreground gap-1 sm:shrink-0 ml-12 sm:ml-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
