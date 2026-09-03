import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "MSc in Computer Science",
      university: "University of Passau",
      location: "Passau, Germany",
      period: "Oct 2024 – Feb 2027",
      status: "Current",
      description:
        "Pursuing an MSc in Computer Science with focus on Distributed Systems, Cloud Computing, Software Architecture, and Advanced Algorithms in an international research environment.",
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
        "Strong academic performance covering full-stack development, data structures, algorithms, system design, and software architecture, with a final-year capstone in IoT-based health monitoring.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-section-title gradient-text mb-4">Education</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and software engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="glass-card hover-glow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 mt-1 shrink-0">
                    <edu.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium">{edu.university}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end text-sm text-muted-foreground gap-1 sm:shrink-0 ml-12 sm:ml-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </span>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
