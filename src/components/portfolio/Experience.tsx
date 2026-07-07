import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer (Working Student)",
      company: "Siemens AG",
      location: "Munich, Germany",
      period: "Feb 2025 – Present",
      bullets: [
        "Architected a full-stack enterprise Chrome extension with agentic AI capabilities (multi-step reasoning, tool use, and autonomous document workflows) for internal Siemens knowledge bases, improving document search efficiency by 35% across thousands of active users.",
        "Engineered high-performance RAG pipelines and document ingestion flows integrating LangChain, GPT-4, and Mistral with vector embeddings, implementing VLM-based screenshot understanding and OCR-based processing to parse complex multi-modal PDFs with 95%+ extraction accuracy.",
        "Designed a local IndexedDB-backed Pub/Sub architecture and Chrome extension message-passing broker for asynchronous job pipelines, reducing communication overhead and UI latency by 45%.",
        "Developed rich, real-time user interfaces in React/TypeScript and Redux, achieving a 50% reduction in initial page load times through dynamic code-splitting and layout optimizations.",
        "Streamlined deployment infrastructure by containerizing services using Docker and establishing automated CI/CD via GitHub Actions, cutting build-to-deploy cycles from 30 minutes to under 5 while maintaining 80%+ test coverage with Jest.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "LangChain",
        "RAG",
        "Redux",
        "IndexedDB",
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
        "Designed and scaled RESTful APIs handling 10k+ requests per minute utilizing Nginx load balancing, connection pooling, and Redis caching, which reduced average database query latency by 70% for national identity services.",
        "Implemented event-driven architecture with Apache Kafka and RabbitMQ for inter-service communication, decoupling mission-critical citizen validation workflows and increasing overall system throughput.",
        "Engineered citizen-facing CNIC application and renewal workflows (One App) with multi-step validation and Family Registration Certificate (FRC) integration, boosting application success rates by 30% and reducing processing times by 40%.",
        "Integrated IoT biometric validation devices (fingerprint/iris scanners) with Java/Spring Boot backend and React kiosk interfaces, automating payment and validation flows to decrease center queue lengths by 30% and optimize operations by 45%.",
        "Maintained strict security protocols by implementing TLS-secured communications and signed payloads for data transfer across distributed national database nodes.",
        "Enforced robust testing standards using JUnit, Mockito, and Jest for unit and integration testing, ensuring zero-downtime releases for nationwide government infrastructure.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Next.js",
        "Redux",
        "Kafka",
        "RabbitMQ",
        "Redis",
        "Nginx",
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
        "Architected responsive monitoring dashboards for remote hardware site management across Philippines telecom infrastructure, resulting in a 30% reduction in physical on-site maintenance visits.",
        "Designed optimized GraphQL schemas with DataLoader batching to eliminate N+1 query issues, improving average API response latencies by 60% for 100k+ concurrent users.",
        "Built real-time data visualizations and performance histograms using React, React Query, and Redux Toolkit, enhancing customer decision-making speed by 50%.",
        "Established high-availability deployment pipelines utilizing blue-green deployment strategies and Redis caching layers, maintaining 100% platform uptime.",
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
