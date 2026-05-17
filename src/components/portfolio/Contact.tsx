import { useState } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hanzlasib24@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    toast({
      title: "Email Client Opened",
      description: "Your default email client should open with the message pre-filled.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hanzlasib24@gmail.com",
      link: "mailto:hanzlasib24@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+49 170 9098399",
      link: "tel:+491709098399",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Munich, Germany",
      link: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hanzlasibghat",
      link: "https://www.linkedin.com/in/hanzlasibghat/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/hanzla-sib",
      link: "https://github.com/hanzla-sib",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-section-title gradient-text mb-4">Get in Touch</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to full-time, freelance, and collaboration opportunities. Drop me a message and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-3">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.link}
                target={info.link.startsWith("http") ? "_blank" : undefined}
                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 glass-card hover-glow group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-medium truncate group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="glass-card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>
              <Button type="submit" className="w-full btn-hero group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
