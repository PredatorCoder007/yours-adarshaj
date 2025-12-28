import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image1 from "@/assets/image1.jpeg"

const AboutSection = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "GraphQL", "REST APIs", "Tailwind CSS", "Figma"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hey, there! Adarsh is a recent graduate from Indian Institute of Technology Bombay
            who majored in Engineering Physics (2025). He is a generalist who wants
            to become a specialist. During his stay at IITB, he led the
            Technical Team Exofly and ventured into entrepreneurship by
            building his first startup “zENLI”. He has also been involved in research
            at the Koita Center for Digital Health and the Department of Physics.
            I love writing and cycling through the streets of Mumbai.
          </p>
        </div>

        {/* Journey + Image + Mission */}
        <div className="grid lg:grid-cols-3 gap-6 items-center mb-16">
          
          {/* Left: My Journey */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Starting as a self-taught programmer, I've evolved into a
              versatile full-stack developer who thrives on solving complex
              problems. I believe in writing clean, maintainable code and
              building systems that scale gracefully.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge
              through writing and mentoring.
            </p>
          </div>

          {/* Center: Image */}
          <div className="flex justify-center">
            <Card className="p-2 shadow-soft hover:shadow-elegant transition-all duration-300 rounded-2xl">
              <img
                src={Image1}
                alt="Adarsh"
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl"
              />
            </Card>
          </div>

          {/* Right: My Mission */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              My mission is to build thoughtful, human-centered technology
              that bridges the gap between engineering and real-world impact.
              I aim to work at the intersection of software, data, and design
              to create systems that empower people and scale meaningfully.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether through startups, research, or open collaboration,
              I strive to learn deeply, execute rigorously, and contribute
              work that lasts.
            </p>
          </div>

        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies & Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
