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
        <section id="about" className="section-padding bg-muted/20 mt-4">
          <div className="container-custom text-center">
            <h2 className="text-section-title gradient-text mb-6">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">Google Cloud Fundamentals</span>
              </div>
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">German Language: Current A2, moving to B1 (actively learning) 🇩🇪</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                <span className="block mb-2 font-semibold text-primary">Eligible to work in Germany (EU student visa)</span>
                <span className="block mb-2 font-semibold text-primary">Passionate about German tech culture and innovation</span>
                I'm{" "}

                currently working at{" "}
                <span className="inline-block px-3 py-1 bg-yellow-300 text-yellow-900 font-extrabold rounded shadow-lg animate-pulse border-2 border-yellow-500" style={{letterSpacing: '0.5px', fontSize: '1.15em'}}>
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
                <span className="block mb-2 font-semibold text-primary">Soft Skills: </span>
                <span className="block mb-1">Teamwork, Communication, Adaptability, Problem Solving</span>
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
