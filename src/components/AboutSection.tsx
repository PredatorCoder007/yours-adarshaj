import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Rocket, Users } from "lucide-react"

const AboutSection = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "GraphQL", "REST APIs", "Tailwind CSS", "Figma"
  ];

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies, from responsive frontends to scalable backend systems."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences that delight and engage users."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Building lightning-fast applications optimized for speed, scalability, and user experience."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional teams and mentoring developers to deliver exceptional results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with over 5 years of experience crafting digital solutions 
            that make a difference. My journey started with curiosity about how things work, 
            and evolved into a career dedicated to building exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Starting as a self-taught programmer, I've evolved into a versatile full-stack developer 
              who thrives on solving complex problems. I believe in writing clean, maintainable code 
              and creating solutions that not only work but scale beautifully.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge through technical writing and mentoring.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary mr-4">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold">{highlight.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>

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