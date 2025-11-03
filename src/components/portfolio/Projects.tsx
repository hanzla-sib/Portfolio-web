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
      title: "CompAIler",
      techStack: "Python, AI",
      technologies: [
        "AI",
        "Code Analysis",
        "gemini-1.5",
        "Code Compilation",
        "Error Detection",
      ],
      status: "Live",
      links: [
        { label: "View", url: "https://github.com/hanzla-sib/CompAIler" },
      ],
      description:
        "AI-powered code compiler and analyzer built with Python. Supports intelligent code suggestions and error detection.",
    },
    {
      title: "CodeSensei",
      techStack: "React, Next.js",
      technologies: [
        "React",
        "Next.js",
        "AI",
        "Gemini",
        "Mentoring",
        "Code Review",
      ],
      status: "Live",
      links: [
        { label: "View", url: "https://github.com/hanzla-sib/CodeSensei" },
      ],
      description:
        "Modern code review and mentoring platform built with React and Next.js. Features collaborative reviews and feedback workflows.",
    },
    {
      title: "Remote Care (Android + Web + IoT)",
      techStack: "Android, Web, IoT",
      technologies: [
        "React.js",
        "Node.js",
        "IoT",
        "Android",
        "SQL",
        "Firebase",
        "Java",
      ],
      status: "Completed",
      links: [
        { label: "Web", url: "https://github.com/hanzla-sib/Remote-Care-Web" },
        {
          label: "Android",
          url: "https://github.com/hanzla-sib/SMD_PROJECT_REMOTECARE",
        },
        {
          label: "Watch",
          url: "https://github.com/hanzla-sib/RemoteCare_Watch",
        },
        {
          label: "Demo",
          url: "https://www.youtube.com/watch?v=eiOggXuPx6M&ab_channel=HanzlaSib",
        },
      ],
      description:
        "Developed a full-stack app integrating IoT devices to monitor patient health and enable real-time communication with doctors. Features include live data streaming, secure messaging, and cross-platform support.",
    },
    {
      title: "Dodge EM (C++)",
      techStack: "C++, OpenGL",
      technologies: ["C++", "OpenGL"],
      status: "Completed",
      links: [
        { label: "Source", url: "https://github.com/hanzla-sib/Dodge_em-game" },
      ],
      description:
        "Created a car game clone with interactive gameplay, smooth animations, and an intuitive UI using C++ and OpenGL.",
    },
    {
      title: "Network Analysis (C++)",
      techStack: "C++, File Handling",
      technologies: ["C++", "File Handling", "Graph Algorithms"],
      status: "Completed",
      links: [
        {
          label: "Source",
          url: "https://github.com/hanzla-sib/Network-Analysis-C-",
        },
        { label: "Demo", url: "https://youtu.be/SnBa_IvpW74" },
      ],
      description:
        "Large-scale network analysis tool capable of processing and analyzing graphs with millions of nodes. Optimized for performance and complex data structures.",
    },

    {
      title: "Network-Analysis Graphs",
      techStack: "C++, File Handling",
      technologies: ["C++", "File Handling", "Data Visualization"],
      status: "Completed",
      links: [
        {
          label: "View",
          url: "https://github.com/hanzla-sib/Network-Analysis-C-",
        },
      ],
      description:
        "Efficient graph analysis and visualization using C++. Supports interactive exploration of large datasets.",
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
              <div className="mb-6">
                <h3 className="text-card-title group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium mr-2">
                  {project.techStack}
                </span>
                <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium">
                  {project.status}
                </span>
              </div>
              <div className="mb-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies &&
                    project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">Links:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={link.label}
                      size="sm"
                      variant="outline"
                      className="group/btn hover:bg-primary/10 hover:border-primary hover:text-primary"
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
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
          <div className="glass-card max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Project Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-2">6</h4>
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
          <Button
            size="lg"
            className="mt-4 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white font-semibold"
            onClick={() => window.open("https://github.com/hanzla-sib?tab=repositories", "_blank")}
          >
            View Other Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
