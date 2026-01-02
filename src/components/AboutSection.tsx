import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image1 from "@/assets/image1.jpeg"

const AboutSection = () => {
  const skills = [
    "Ownership", "Team Building", "Leadership", "Problem Solving", "Figma", "SQL",
    "Excel", "Dashboards", "Python", "UI/UX", "Product Management", "Electronics"
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
            Hi, I’m Adarsh,a product-focused technologist and
            founder-in-progress (stay tunned!), with a B.Tech in Engineering
            Physics from IIT Bombay (Class of 2025). Driven by first-principles
            thinking, I work across product, growth, data and strategy to turn
            complex ideas into scalable, real-world products and strategies,
            while believing execution matters most. At IITB, I led Team Exofly,
            built my first startup ZENLI, and explored research in digital
            health and physics. Outside work, I love writing (author of The Last
            One Girl), enjoy music, cycling and explore art.
          </p>
        </div>

        {/* Journey + Image + Mission */}
        <div className="grid lg:grid-cols-3 gap-6 items-center mb-16">
          {/* Left: My Journey */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I’ve been curious about math, science, and building things since
              childhood, which naturally led me to physics and first-principles
              thinking. Inspired by builders like Elon Musk, Jeff Bezos, and
              Sergey Brin, I chose physics not just to understand the world, but
              to create within it.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I studied Engineering Physics at IIT Bombay (Class of 2025), where
              I learned how to learn anything fast and build from the ground up
              exploring STM and PPG, leading the technical team at Exofly, and
              building my first startup, ZENLI.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Over time, my love for building expanded into product, strategy,
              growth, and execution. I currently work in a fintech founder’s
              office role and aim to keep learning, building, and creating
              technology that makes a real impact.
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
              My mission is to build thoughtful, first-principles-driven
              technology that turns curiosity into real-world impact. I aim to
              work across engineering, product, and strategy to design systems
              that scale responsibly, are executed well, and genuinely improve
              people’s lives, while constantly learning, building, and exploring
              the unknown.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether through startups, research, or open collaboration, I
              strive to learn deeply, execute rigorously, and contribute work
              that lasts.
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
