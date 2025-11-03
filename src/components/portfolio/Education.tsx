import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "MSc in Computer Science",
      university: "University of Passau",
      location: "Passau, Germany",
      period: "Oct 2024 – Present",
      status: "Current",
      description:
        "Advanced studies in computer science with focus on modern software engineering practices, algorithms, and distributed systems.",
      highlights: [
        "Currently pursuing advanced coursework in distributed systems",
        "Research focus on scalable software architectures",
        "International study environment with diverse perspectives",
      ],
      color: "from-blue-500 to-indigo-600",
      icon: GraduationCap,
    },
    {
      degree: "BS in Software Engineering",
      university:
        "National University of Computer And Emerging Sciences (FAST-NUCES)",
      location: "Islamabad, Pakistan",
      period: "Aug 2019 – Jun 2023",
      status: "Completed",
      description:
        "Comprehensive undergraduate program covering software development lifecycle, data structures, algorithms, and modern programming paradigms.",
      highlights: [
        "Strong foundation in software engineering principles",
        "Hands-on experience with multiple programming languages",
        "Capstone projects in web development and system design",
        "Active participation in coding competitions and hackathons",
      ],
      color: "from-green-500 to-emerald-600",
      icon: BookOpen,
    },
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description:
        "Maintained strong academic performance throughout undergraduate studies",
      icon: Award,
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Practical Projects",
      description:
        "Completed multiple industry-relevant projects during academic tenure",
      icon: BookOpen,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "International Experience",
      description:
        "Currently studying in Germany, gaining global perspective on technology",
      icon: GraduationCap,
      color: "from-cyan-500 to-blue-600",
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
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-6">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and software engineering,
            combining theoretical knowledge with practical application.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mb-16"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
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
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} shadow-lg`}
                    >
                      <edu.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-card-title group-hover:text-primary transition-colors mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-2">
                        {edu.university}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {edu.description}
                      </p>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        edu.status === "Current"
                          ? "bg-primary/10 text-primary"
                          : "bg-green-500/10 text-green-500"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">
                      Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <motion.li
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: index * 0.3 + highlightIndex * 0.1,
                          }}
                          className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity -z-10`}
                  />
                </motion.div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Academic Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="glass-card hover-glow text-center group"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg mb-4 group-hover:scale-110 transition-transform`}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Educational Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">4+</h4>
                <p className="text-sm text-muted-foreground">Years of Study</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">2</h4>
                <p className="text-sm text-muted-foreground">Degrees Pursued</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-2">2</h4>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              My educational journey spans across{" "}
              <span className="text-primary font-semibold">
                Pakistan and Germany
              </span>
              , providing me with a diverse perspective on technology and
              software engineering. Currently pursuing{" "}
              <span className="text-primary font-semibold">
                advanced computer science studies
              </span>{" "}
              while applying practical knowledge gained through professional
              experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
