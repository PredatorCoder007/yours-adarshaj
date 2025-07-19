import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import professionalHeadshot from "@/assets/professional-headshot.jpg"

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-elegant animate-float">
            <img 
              src={professionalHeadshot} 
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Hello, I'm Alex
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Full-Stack Developer & Digital Innovator
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences that bridge the gap between 
            design and technology. I transform ideas into robust, scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-3"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce cursor-pointer p-2 rounded-full hover:bg-card/50 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;