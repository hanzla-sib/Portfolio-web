import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/AnasBaqai",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anas-baqai-bo21/",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:anashabib139@gmail.com",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container-custom py-16 relative z-10">
        {/* Personal Quote/Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="glass-card max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-4"
            >
              "Code is poetry written in logic. Every function tells a story,
              every algorithm solves a puzzle, and every project is a new
              adventure."
            </motion.p>
            <p className="text-sm text-primary font-medium">
              — My development philosophy
            </p>
          </div>
        </motion.div>

        {/* Creative Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Personal Brand - Larger Space */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 glass-card hover-glow"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-2xl">MA</span>
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-1">
                  Muhammad Anas
                </h3>
                <p className="text-primary font-medium mb-2">
                  Software Engineer & AI Enthusiast
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    Munich 🇩🇪
                  </span>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    MSc Student 🎓
                  </span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Crafting digital experiences that matter. From conception to
              deployment, I believe in building software that not only works but
              inspires.
            </p>

            {/* Tech Stack Mini Display */}
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Python", "AI/ML", "Docker"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded border hover:border-primary hover:text-primary transition-colors"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* Quick Navigation - Styled as Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-3"
          >
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              </span>
              Navigate
            </h4>
            <div className="space-y-2">
              {[
                { name: "My Journey", href: "#skills", emoji: "🚀" },
                { name: "Experience", href: "#experience", emoji: "💼" },
                { name: "Projects", href: "#projects", emoji: "⚡" },
                { name: "Let's Talk", href: "#contact", emoji: "💬" },
              ].map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {link.emoji}
                  </span>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Connect Section - More Interactive */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 glass-card hover-glow"
          >
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🤝
              </motion.span>
              Let's Connect
            </h4>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-lg">📧</span>
                <span className="text-muted-foreground">
                  anashabib139@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-lg">📱</span>
                <span className="text-muted-foreground">+49 170 7413792</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-lg">📍</span>
                <span className="text-muted-foreground">Munich, Germany</span>
              </div>
            </div>

            {/* Social Links with Personality */}
            <div className="flex gap-3">
              {[
                {
                  name: "GitHub",
                  icon: Github,
                  url: "https://github.com/AnasBaqai",
                  color: "hover:text-gray-400",
                },
                {
                  name: "LinkedIn",
                  icon: Linkedin,
                  url: "https://www.linkedin.com/in/anas-baqai-bo21/",
                  color: "hover:text-blue-500",
                },
                {
                  name: "Email",
                  icon: Mail,
                  url: "mailto:anashabib139@gmail.com",
                  color: "hover:text-green-500",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl bg-muted/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 ${social.color} group`}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Creative Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/20"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} Crafted with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.span>
              and lots of ☕ by Muhammad Anas
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for opportunities
            </div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="group hover:bg-primary/10 hover:border-primary hover:text-primary"
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowUp className="w-4 h-4 mr-2" />
              </motion.div>
              Back to Top
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
