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
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-section-title gradient-text mb-8 text-center">About</h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Software Engineer based in Munich, currently working at <span className="text-foreground font-semibold">Siemens AG</span> while pursuing my MSc in Computer Science at the University of Passau. I have 3+ years of professional experience building end-to-end web applications across enterprise, government, and startup environments.
              </p>
              <p>
                My day-to-day spans full-stack delivery: designing REST and GraphQL APIs, building responsive React and Next.js interfaces, optimizing databases, and shipping production systems that have supported 100K+ concurrent users with zero-downtime deployments. I'm comfortable owning features from schema and API design through to UI implementation and deployment.
              </p>
              <p>
                I'm eligible to work in Germany on an EU student visa and currently open to full-time, freelance, and collaboration opportunities.
              </p>
            </div>
          </div>
        </section>
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
