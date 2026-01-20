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
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="block mb-2 font-semibold text-primary">Eligible to work in Germany (EU student visa)</span>
                <span className="block mb-2 font-semibold text-primary">Currently at
                  <span
                    className="inline-block px-3 py-1 font-extrabold rounded shadow-xl animate-pulse border-2 border-accent mx-1"
                    style={{
                      background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%)',
                      color: 'white',
                      letterSpacing: '0.5px',
                      fontSize: '1.15em',
                      boxShadow: '0 4px 24px 0 rgba(59,130,246,0.15)'
                    }}
                  >
                    Siemens Munich
                  </span>
                  as Software & AI Engineer
                </span>
                <br />
                3+ years experience building scalable, user-focused apps with React, Next.js, and GenAI (LangChain, RAG, LLMs).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                🚀 Full Stack & GenAI Engineer | 🧠 AI Solutions Architect
                <br />
                MSc Computer Science, University of Passau
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-primary">Key strengths:</span> Fast learner, creative problem solver, clear communicator, thrive in cross-functional teams.
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
