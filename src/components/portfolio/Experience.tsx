import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer (Working Student)",
      company: "Siemens AG",
      location: "Munich, Germany",
      period: "Feb 2025 – Present",
      bullets: [
        "Developed a full-stack enterprise Chrome extension using React, TypeScript, and Node.js, supporting AI-powered search, chat, and document analysis for thousands of internal users.",
        "Built end-to-end RAG pipelines integrating LangChain, Ollama, GPT-4, and Mistral with vector embeddings and OCR/VLM-based document processing.",
        "Architected REST APIs and async job pipelines on the backend while implementing rich frontend interfaces with Redux, owning features end-to-end from schema to UI.",
        "Containerized services with Docker and CI/CD, reducing deployment time from 30 minutes to under 5; achieved 80%+ test coverage with Jest.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "LangChain",
        "RAG",
        "Redux",
        "Docker",
        "Jest",
      ],
    },
    {
      title: "Software Engineer",
      company: "National Database and Registration Authority (NADRA)",
      location: "Islamabad, Pakistan",
      period: "Feb 2024 – Sept 2024",
      bullets: [
        "Built end-to-end full-stack applications using Java/Spring Boot for backend and Next.js for frontend, supporting national identity workflows on IoT kiosks deployed nationwide.",
        "Designed RESTful APIs handling 10K+ requests per minute while implementing complex multi-step UI flows with Redux state management and Material-UI.",
        "Optimized database performance through indexing, query rewriting, and caching, reducing average query latency by 70%.",
        "Implemented secure communication between IoT kiosks and backend services with TLS encryption and signed payloads for tamper-proof data transmission.",
        "Wrote unit and integration tests across the stack using JUnit, Mockito, and Jest, contributing to a stronger code quality culture.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Next.js",
        "Redux",
        "Material-UI",
        "PostgreSQL",
        "JUnit",
      ],
    },
    {
      title: "Software Engineer",
      company: "PLC Group",
      location: "Ontario, Canada (Remote)",
      period: "July 2023 – Feb 2024",
      bullets: [
        "Developed end-to-end features using React with TypeScript and Node.js with GraphQL APIs, supporting 100K+ concurrent users with 100% zero-downtime deployments.",
        "Designed efficient GraphQL schemas with DataLoader-based batching to eliminate N+1 queries, improving API response times by 60%.",
        "Architected Redis caching layers for sessions and frequently accessed data, achieving 70% reduction in average query latency.",
        "Implemented React Query for server-state and Redux Toolkit for client-state, creating predictable, performant data flows across complex UI hierarchies.",
        "Built test suites with Jest and React Testing Library for frontend and integration tests for backend, maintaining high coverage on critical flows.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Redis",
        "Redux Toolkit",
        "React Query",
        "Jest",
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
