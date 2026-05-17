import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/hanzla-sib" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/hanzlasibghat/" },
    { name: "Email", icon: Mail, url: "mailto:hanzlasib24@gmail.com" },
  ];

  return (
    <footer className="border-t border-border bg-muted/10">
      <div className="container-custom py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">HS</span>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Hanzla Sibghat</p>
              <p>Software Engineer · Munich, Germany</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="ml-2 hover:bg-primary/10 hover:border-primary hover:text-primary"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Top
            </Button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>© {currentYear} Hanzla Sibghat. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
