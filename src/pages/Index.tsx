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
                I'm a passionate{" "}
                <span className="text-primary font-semibold">
                  Software Engineer
                </span>{" "}
                with 2+ years of experience building scalable web applications
                and AI-powered solutions. Currently pursuing my{" "}
                <span className="text-primary font-semibold">
                  MSc in Computer Science
                </span>{" "}
                at the University of Passau, Germany, while staying actively
                engaged with the latest technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans{" "}
                <span className="text-primary font-semibold">
                  full-stack development
                </span>
                ,
                <span className="text-primary font-semibold">
                  {" "}
                  performance optimization
                </span>
                , and
                <span className="text-primary font-semibold">
                  {" "}
                  modern DevOps practices
                </span>
                . I'm particularly passionate about building solutions that make
                a real impact, from supporting 40,000+ concurrent users to
                implementing AI-driven interfaces that revolutionize how
                developers interact with databases.
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
