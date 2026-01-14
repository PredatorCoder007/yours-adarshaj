import { Github, Linkedin, Mail, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform inline-block"
            >
              ajadarsh.me
            </button>
            <p className="text-muted-foreground mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/PredatorCoder007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-primary/10 hover:bg-gradient-primary hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/adarsh-jadhao-8b07861ab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-primary/10 hover:bg-gradient-primary hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:adarshvjadhaoiitb25@gmail.com"
              className="p-3 rounded-full bg-gradient-primary/10 hover:bg-gradient-primary hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> © {currentYear}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;