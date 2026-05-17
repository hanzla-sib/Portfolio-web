import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "PromptCraft-AI",
      description:
        "Multi-feature AI platform built with Next.js, TypeScript, and Tailwind CSS, integrated with Google Gemini API for recipe generation, code assistance, chat, summarization, and image analysis. Currently serving 500+ active users.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Google Gemini API",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/hanzla-sib/PromptCraft-AI", icon: Github },
        { label: "Live Demo", url: "https://generative-ui-sdk.vercel.app/", icon: ExternalLink },
      ],
    },
    {
      title: "Remote Care",
      description:
        "End-to-end health monitoring platform with an Android mobile app, React web dashboard, IoT smartwatch integration, and Node.js backend for real-time patient vitals tracking and threshold-based alerting for caregivers.",
      technologies: ["React.js", "Node.js", "Android", "IoT", "Java", "Firebase"],
      links: [
        { label: "Web Repo", url: "https://github.com/hanzla-sib/Remote-Care-Web", icon: Github },
        { label: "Android Repo", url: "https://github.com/hanzla-sib/SMD_PROJECT_REMOTECARE", icon: Github },
        { label: "Demo Video", url: "https://www.youtube.com/watch?v=eiOggXuPx6M", icon: ExternalLink },
      ],
    },
    {
      title: "CodeSensei",
      description:
        "Code mentoring and review platform built with React and Next.js. Features collaborative reviews, real-time AI feedback, and analytics dashboards. Used by 100+ developers.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Gemini AI"],
      links: [
        { label: "GitHub", url: "https://github.com/hanzla-sib/CodeSensei", icon: Github },
        { label: "Live Demo", url: "https://code-sensei-1l6g.vercel.app/", icon: ExternalLink },
      ],
    },
    {
      title: "CompAIler",
      description:
        "AI-powered code analyzer and compiler built with Python and Gemini 1.5, offering semantic analysis, optimization suggestions, and structural review. Improved code review speed by 30% for end users.",
      technologies: ["Python", "Gemini 1.5", "Code Analysis"],
      links: [
        { label: "GitHub", url: "https://github.com/hanzla-sib/CompAIler", icon: Github },
        { label: "Live Demo", url: "https://comp-a-iler.vercel.app/", icon: ExternalLink },
      ],
    },
    {
      title: "Network Analysis",
      description:
        "Large-scale network analysis tool built in C++ for processing graphs with millions of nodes. Optimized for performance through efficient data structures and graph algorithms.",
      technologies: ["C++", "Graph Algorithms", "File Handling"],
      links: [
        { label: "GitHub", url: "https://github.com/hanzla-sib/Network-Analysis-C-", icon: Github },
        { label: "Demo Video", url: "https://youtu.be/SnBa_IvpW74", icon: ExternalLink },
      ],
    },
    {
      title: "Dodge EM",
      description:
        "Classic car-dodging game clone implemented in C++ with OpenGL, featuring smooth animations, interactive gameplay, and an intuitive UI.",
      technologies: ["C++", "OpenGL"],
      links: [
        { label: "GitHub", url: "https://github.com/hanzla-sib/Dodge_em-game", icon: Github },
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-section-title gradient-text mb-4">Projects</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of personal and academic projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="glass-card hover-glow flex flex-col">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <Button
                    key={link.label}
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(link.url, "_blank")}
                    className="hover:bg-primary/10 hover:border-primary hover:text-primary"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            onClick={() => window.open("https://github.com/hanzla-sib?tab=repositories", "_blank")}
            className="hover:bg-primary/10 hover:border-primary hover:text-primary"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Repositories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
