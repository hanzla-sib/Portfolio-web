import { ArrowDown, Download, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 sm:px-6">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
            <img
              src="/img.jpeg"
              alt="Hanzla Sibghat"
              className="w-24 h-24 rounded-full border-2 border-primary object-cover"
            />
            <div className="text-center sm:text-left">
              <p className="text-muted-foreground mb-1">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text leading-tight">
                Hanzla Sibghat
              </h1>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Software Engineer
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Full-stack engineer with 3+ years of experience building scalable web applications across enterprise, government, and startup environments. Currently working at Siemens AG in Munich.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10 text-sm">
            <div className="flex items-center justify-center gap-2 p-3 glass-card">
              <Phone className="w-4 h-4 text-primary" />
              <span>+49 170 9098399</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 glass-card">
              <Mail className="w-4 h-4 text-primary" />
              <span className="truncate">hanzlasib24@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 glass-card">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Munich, Germany</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={() => scrollToSection("#experience")}
              className="btn-hero group"
            >
              View Experience
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            {/* <Button
              variant="outline"
              className="btn-ghost-hero group"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Hanzla_Sibghat_Resume.pdf";
                link.download = "Hanzla_Sibghat_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
