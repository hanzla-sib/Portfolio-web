import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("#about")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">HS</span>
            </div>
            <div className="hidden sm:block text-left">
              <h1 className="font-bold text-base sm:text-lg">Hanzla Sibghat</h1>
              <p className="text-xs text-muted-foreground">Software Engineer</p>
            </div>
          </button>

          <nav className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="mailto:hanzlasib24@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/hanzla-sib"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hanzlasibghat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-1 glass-card mt-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-colors rounded-lg"
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
              <a href="mailto:hanzlasib24@gmail.com" aria-label="Email" className="p-3 rounded-lg hover:bg-primary/10 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/hanzla-sib" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-lg hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/hanzlasibghat/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-lg hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
