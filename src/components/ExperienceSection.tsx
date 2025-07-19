import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechFlow Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Leading the development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load time by 60% through performance optimization",
        "Led migration to cloud infrastructure, reducing costs by 40%",
        "Implemented CI/CD pipelines improving deployment frequency by 300%"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Innovations Inc",
      period: "2020 - 2022",
      location: "Austin, TX",
      description: "Developed and maintained multiple client-facing web applications. Collaborated with design teams to implement pixel-perfect UI components.",
      achievements: [
        "Built responsive web applications for 15+ clients",
        "Improved code coverage from 45% to 85% through comprehensive testing",
        "Reduced bug reports by 70% through quality assurance processes"
      ],
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"]
    },
    {
      title: "Frontend Developer",
      company: "StartupX",
      period: "2019 - 2020",
      location: "Remote",
      description: "Focused on creating exceptional user experiences for early-stage startup products. Worked directly with founders to translate vision into reality.",
      achievements: [
        "Developed MVP that secured $2M seed funding",
        "Created design system used across 5+ products",
        "Improved user engagement by 150% through UX improvements"
      ],
      technologies: ["React", "TypeScript", "Figma", "Styled Components"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous learning and building impactful solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <h4 className="text-xl text-primary font-semibold mb-4">{exp.company}</h4>
                </div>
                <div className="flex flex-col lg:items-end space-y-2">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h5 className="font-semibold mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-3">Technologies:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;