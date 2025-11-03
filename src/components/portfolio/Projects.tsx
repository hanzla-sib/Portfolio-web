import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Play,
  Code,
  Brain,
  Database,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "InsightQL",
      subtitle: "AI-Driven Database Query Interface",
      description:
        "Built an AI-powered web application enabling users to interact with SQL databases using natural language. Utilized LangChain's SQL Agent with OpenAI GPT to parse inputs and auto-generate SQL commands through a NestJS backend.",
      fullDescription:
        "Added MongoDB for session and query log storage. Achieved a 3× reduction in query formulation time via benchmark testing.",
      technologies: [
        "Next.js",
        "LangChain",
        "NestJS",
        "MongoDB",
        "OpenAI GPT",
        "SQL Agent",
      ],
      githubUrl: "https://github.com/AnasBaqai/InsightQL",
      category: "AI/ML",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      metrics: [
        "3x Faster Queries",
        "Natural Language Interface",
        "Real-time Processing",
      ],
    },
    {
      title: "bugSage",
      subtitle: "AI Debugging Assistant",
      description:
        "Developed an AI-powered chatbot specifically designed to assist developers in debugging Express.js applications. Integrated Retrieval Augmented Generation (RAG) technology to create a context-aware knowledge base.",
      fullDescription:
        "Enabling the chatbot to deliver precise and efficient solutions for both common and intricate debugging challenges.",
      technologies: [
        "Next.js",
        "FastAPI",
        "Pinecone",
        "Groq",
        "RAG",
        "SQLAlchemy",
      ],
      githubUrl: "https://github.com/AnasBaqai/bugSage",
      category: "AI/ML",
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      metrics: [
        "RAG Technology",
        "Context-Aware Solutions",
        "Express.js Focus",
      ],
    },
    {
      title: "EcoDriveHub",
      subtitle: "Dynamic Data Handling Platform",
      description:
        "Developed a system for seamless CSV file uploads, automatic schema generation, and dynamic data processing. Implemented RESTful APIs to support efficient search and filtering of dynamically generated data.",
      fullDescription:
        "Integrated React AG Grid for building interactive and dynamic tables, and optimized database state management with hash-based change detection to ensure high performance and data consistency.",
      technologies: [
        "React.js",
        "Express.js",
        "Mongoose ODM",
        "AG Grid",
        "CSV Processing",
      ],
      githubUrl: "https://github.com/AnasBaqai/EcoDrive_Hub",
      category: "Full Stack",
      icon: Database,
      color: "from-green-500 to-emerald-600",
      metrics: ["Dynamic Schema", "Real-time Processing", "Interactive Tables"],
    },
    {
      title: "Boarddd",
      subtitle: "Team Collaboration Platform",
      description:
        "Designed backend architecture for a collaborative productivity tool with real-time group chat, role-based channel management, and activity monitoring via Socket.IO.",
      fullDescription:
        "Enabled secure file sharing, email-triggered invites, and dynamic form creation with user tracking. Managed Docker-based CI/CD deployment on AWS EC2 for seamless updates and scaling.",
      technologies: [
        "Node.js",
        "Express",
        "Socket.IO",
        "MongoDB",
        "AWS EC2",
        "Docker",
      ],
      githubUrl: "https://github.com/AnasBaqai/boardd-backend",
      category: "Backend",
      icon: Globe,
      color: "from-orange-500 to-red-600",
      metrics: ["Real-time Chat", "Role Management", "AWS Deployment"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring AI-powered applications,
            full-stack solutions, and scalable backend architectures.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="glass-card hover-glow group"
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-card-title group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium mb-2">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {project.description}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">
                  Key Features:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metric}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + metricIndex * 0.1 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}
                      />
                      <span className="text-muted-foreground">{metric}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group/btn hover:bg-primary/10 hover:border-primary hover:text-primary"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Source Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary group/btn"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  View Project
                </Button>
              </div>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity -z-10`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Project Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">4</h4>
                <p className="text-sm text-muted-foreground">Major Projects</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">2</h4>
                <p className="text-sm text-muted-foreground">
                  AI-Powered Solutions
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">15+</h4>
                <p className="text-sm text-muted-foreground">
                  Technologies Used
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">100%</h4>
                <p className="text-sm text-muted-foreground">Open Source</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              All projects demonstrate my commitment to{" "}
              <span className="text-primary font-semibold">clean code</span>,
              <span className="text-primary font-semibold">
                {" "}
                modern architecture
              </span>
              , and
              <span className="text-primary font-semibold">
                {" "}
                innovative problem-solving
              </span>
              . Each solution is built with scalability and maintainability in
              mind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
