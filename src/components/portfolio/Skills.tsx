const Skills = () => {
  const skillGroups = [
    {
      title: "Generative AI",
      skills: ["LangGraph", "LangChain", "Multimodal Context Processing", "Prompt Optimization", "RAG"],
    },
    {
      title: "Frontend",
      skills: [
        "React",
        "Redux",
        "Next.js",
        "Material UI",
        "Web Extensions (Manifest V3)",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Backends & APIs",
      skills: [
        "Flask",
        "Node.js",
        "Express.js",
        "Spring Boot",
        "REST",
        "GraphQL",
      ],
    },
    {
      title: "Data & Infra",
      skills: ["AWS", "PostgreSQL", "MySQL", "Redis", "Kafka", "RabbitMQ", "Docker", "CI/CD (Github Actions)"],
    },
    {
      title: "Tools",
      skills: ["Claude Code", "Github Copilot", "VS Code", "Git"],
    },
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "SQL", "Java"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-section-title gradient-text mb-4">Skills</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with day to day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass-card hover-glow">
              <h3 className="text-lg font-semibold text-primary mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                  >
                    {skill}
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

export default Skills;
