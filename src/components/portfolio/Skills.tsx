import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Code2,
  Palette,
  Server,
  Database,
  Cloud,
  Wrench,
  Brain,
  TestTube,
  Workflow,
  Globe,
  Sparkles,
  Coffee,
  Lightbulb,
  Rocket,
  Heart,
} from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Personal story-driven skill structure
  const myJourney = {
    foundation: {
      title: "Where I Started",
      subtitle: "The Building Blocks",
      icon: Code2,
      story:
        "Every great developer needs a solid foundation. These are the languages that shaped my thinking.",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
      color: "from-blue-500 to-indigo-600",
      position: "col-span-2",
    },
    creativity: {
      title: "Bringing Ideas to Life",
      subtitle: "Frontend Artistry",
      icon: Palette,
      story: "I believe in beautiful, intuitive interfaces that tell a story.",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind"],
      color: "from-pink-500 to-rose-600",
      position: "col-span-1",
    },
    power: {
      title: "Behind the Scenes",
      subtitle: "Backend Engineering",
      icon: Server,
      story:
        "The magic happens in the backend - scalable, efficient, and reliable.",
      skills: [
        "Node.js",
        "NestJS",
        "Django",
        "FastAPI",
        "RESTful APIs",
        "GraphQL",
      ],
      color: "from-green-500 to-emerald-600",
      position: "col-span-2",
    },
    memory: {
      title: "Data is Everything",
      subtitle: "Database Mastery",
      icon: Database,
      story: "From SQL to NoSQL, I speak the language of data.",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Oracle"],
      color: "from-orange-500 to-red-600",
      position: "col-span-1",
    },
    sky: {
      title: "Scaling to the Sky",
      subtitle: "Cloud & DevOps",
      icon: Cloud,
      story: "Building for millions, deploying with confidence.",
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD"],
      color: "from-cyan-500 to-blue-600",
      position: "col-span-1",
    },
    craft: {
      title: "My Daily Toolkit",
      subtitle: "Tools & Workflows",
      icon: Wrench,
      story:
        "The right tools make all the difference in crafting quality software.",
      skills: ["Git", "GitHub", "Postman", "Swagger", "Jira"],
      color: "from-violet-500 to-purple-600",
      position: "col-span-1",
    },
    future: {
      title: "The Future is AI",
      subtitle: "Machine Learning & AI",
      icon: Brain,
      story:
        "Exploring the frontier of artificial intelligence and its applications.",
      skills: [
        "PyTorch",
        "LangChain",
        "RAG Systems",
        "LLMs",
        "Prompt Engineering",
      ],
      color: "from-indigo-500 to-blue-600",
      position: "col-span-2",
    },
    quality: {
      title: "Quality Matters",
      subtitle: "Testing & Quality Assurance",
      icon: TestTube,
      story: "Great software is tested software. No bugs on my watch!",
      skills: ["Jest", "Playwright", "Cypress", "TDD", "E2E Testing"],
      color: "from-teal-500 to-green-600",
      position: "col-span-1",
    },
    human: {
      title: "Beyond Code",
      subtitle: "Human Languages",
      icon: Globe,
      story: "Code is universal, but communication bridges worlds.",
      skills: ["English [C1]", "German [A1]", "Urdu [Native]"],
      color: "from-rose-500 to-pink-600",
      position: "col-span-1",
    },
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10">
        {/* Header with Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-section-title gradient-text">
              My Technical Journey
            </h2>
            <Coffee className="w-8 h-8 text-primary animate-bounce" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every line of code tells a story. Here's mine - from curious
            beginner to passionate engineer, shaped by countless late nights,
            breakthrough moments, and the joy of solving complex problems.
          </p>
        </motion.div>

        {/* Dynamic Skills Grid - Masonry Style */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {Object.entries(myJourney).map(([key, area], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                type: "spring",
                bounce: 0.3,
              }}
              className={`${area.position} group relative`}
              onMouseEnter={() => setHoveredSkill(key)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="glass-card h-full hover-glow overflow-hidden transform perspective-1000">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <motion.div
                    className={`p-3 rounded-2xl bg-gradient-to-r ${area.color} shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <area.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-1">
                      {area.title}
                    </h3>
                    <p className="text-sm text-primary font-medium opacity-80">
                      {area.subtitle}
                    </p>
                  </div>
                </div>

                {/* Story */}
                <motion.p
                  className="text-muted-foreground text-sm leading-relaxed mb-6 italic"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  "{area.story}"
                </motion.p>

                {/* Skills with Creative Layout */}
                <div className="space-y-3">
                  {area.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: index * 0.1 + skillIndex * 0.08,
                        duration: 0.5,
                        type: "spring",
                      }}
                      className="flex items-center gap-3 group/skill"
                    >
                      <motion.div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${area.color} relative`}
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {hoveredSkill === key && (
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${area.color} animate-ping`}
                            initial={{ scale: 0.8, opacity: 0.8 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                      <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 rounded-2xl -z-10`}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated Corner Decoration */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${area.color} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="glass-card relative overflow-hidden">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-red-500 animate-pulse" />
              <h3 className="text-2xl font-bold gradient-text">
                My Philosophy
              </h3>
              <Lightbulb className="w-6 h-6 text-yellow-500 animate-pulse" />
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Innovation First
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I don't just write code - I craft solutions that push
                  boundaries and solve real problems.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Quality Obsessed
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every line matters. Clean code isn't just readable - it's
                  maintainable and scalable.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Impact Driven
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Technology should make life better. I build with purpose and
                  user experience in mind.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
