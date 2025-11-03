import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <section id="about" className="section-padding bg-muted/20">
          <div className="container-custom text-center">
            <h2 className="text-section-title gradient-text mb-6">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm{" "}

                currently working at{" "}
                <span className="text-primary font-semibold">
                  Siemens Munich
                </span>{" "}
                as a{" "}
                <span className="text-primary font-semibold">
                  Software & AI Engineer
                </span>
                .
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                🚀 Full Stack Developer | 🤖 GenAI Engineer | 🧩 LLM Specialist
                | 🧠 AI Solutions Architect
                <br />
                I’m passionate about transforming ideas into intelligent,
                production-ready solutions. With 2.5 years of full-stack
                experience, I specialize in frontend development using React and
                Next.js, and build scalable, user-focused applications. I also
                develop GenAI systems leveraging LangChain, RAG pipelines, and
                advanced prompt engineering to automate workflows and deliver
                data-driven insights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                🎯{" "}
                <span className="text-primary font-semibold">
                  Current Focus:
                </span>{" "}
                Multi-agent systems, vector databases, and enterprise AI
                integrations while pursuing MSc Computer Science at University
                of Passau.
              </p>
            </div>
          </div>
        </section>
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
