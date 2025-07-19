import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import projectEcommerce from "@/assets/project-ecommerce.jpg"
import projectDashboard from "@/assets/project-dashboard.jpg"
import projectMobile from "@/assets/project-mobile.jpg"

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced product filtering, secure payments, and real-time inventory management. Built for scalability and optimal user experience.",
      image: projectEcommerce,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: ["Payment Integration", "Admin Dashboard", "Real-time Inventory", "Mobile Responsive"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Full-Stack"
    },
    {
      title: "Project Management Dashboard",
      description: "Intuitive project management tool with Kanban boards, team collaboration features, and advanced analytics. Streamlines workflow for remote teams.",
      image: projectDashboard,
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
      features: ["Real-time Collaboration", "Advanced Analytics", "Team Management", "Custom Workflows"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Web App"
    },
    {
      title: "Fitness Tracking Mobile App",
      description: "Cross-platform mobile application for fitness enthusiasts. Features workout tracking, nutrition monitoring, and social challenges with friends.",
      image: projectMobile,
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      features: ["Workout Tracking", "Social Features", "Nutrition Monitoring", "Progress Analytics"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Mobile"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:scale-[1.02]">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden bg-gradient-hero ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="font-medium">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button variant="default" className="flex-1 group">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Live Demo
                    </Button>
                    <Button variant="glass" className="flex-1 group">
                      <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;