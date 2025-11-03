import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "BariTechSol",
      location: "Karachi, Pakistan",
      period: "Jun 2024 – Sep 2024",
      type: "Full time",
      description:
        "Specialized in building robust integration solutions and automated testing frameworks.",
      achievements: [
        "Engineered Docker-based TypeScript modules that integrate seamlessly with multiple carrier APIs, reinforced by Jest test suites and resilient auto-retry/error-handling logic.",
        "Architected an end-to-end automated test framework and CI workflows that continuously validate every critical service, with clear documentation to accelerate future development.",
      ],
      technologies: [
        "TypeScript",
        "Jest",
        "Docker",
        "CI/CD",
        "Integration Testing",
        "Unit Testing",
        "REST APIs",
      ],
      companyColor: "from-blue-500 to-purple-600",
    },
    {
      title: "Full Stack Software Engineer",
      company: "WorkSpin",
      location: "Karachi, Pakistan",
      period: "Jul 2023 – May 2024",
      type: "Full time",
      description:
        "Led full-stack development of scalable event applications and backend optimization initiatives.",
      achievements: [
        "Designed and implemented a scalable Node.js backend for real-time event applications, integrating OAuth/JWT authentication, WebSocket communication, and rate-limited, sanitized APIs. Supported over 40,000 concurrent users with zero downtime.",
        "Improved backend performance by optimizing CI/CD pipelines, redesigning MongoDB schemas, applying indexing strategies, and introducing Redis caching. Achieved a 70% reduction in query latency and a 50% decrease in peak database load.",
        "Developed and deployed a comprehensive gym management backend with secure authentication, dynamic CMS, scheduling, fitness and nutrition APIs, and automated notifications via webhooks and cron jobs.",
      ],
      technologies: [
        "Node.js",
        "MongoDB",
        "Redis",
        "WebSocket",
        "OAuth/JWT",
        "CI/CD",
        "Performance Optimization",
      ],
      companyColor: "from-green-500 to-emerald-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            2+ years of hands-on experience building scalable applications,
            optimizing performance, and delivering robust software solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card hover-glow group"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${exp.companyColor} shadow-lg`}
                      >
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-card-title group-hover:text-primary transition-colors mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.3 + achIndex * 0.1 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.3 + techIndex * 0.05 }}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.companyColor} opacity-0 group-hover:opacity-5 transition-opacity -z-10`}
                  />
                </motion.div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Experience Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">40K+</h4>
                <p className="text-sm text-muted-foreground">
                  Concurrent Users Supported
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">70%</h4>
                <p className="text-sm text-muted-foreground">
                  Query Latency Reduction
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">100%</h4>
                <p className="text-sm text-muted-foreground">
                  Zero Downtime Achievement
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
