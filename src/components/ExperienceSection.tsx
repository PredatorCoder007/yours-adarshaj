import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"



const ExperienceSection = () => {
  const experiences = [
    {
      title: "Founder's Office",
      company: "LoanNetwork",
      period: "2025",
      location: "Mumbai",
      image: "/src/assets/exoflyt.jpg",
      description:
        "Worked closely with the CTO and CBO to drive product launches and operational initiatives, aligning sales, partnerships, and tech teams to scale QR-based home loan solutions.",
      achievements: [
        "Drove end-to-end rollout of QR-based instant home loan initiatives across 5 cities, onboarding 40+ projects and enabling 30+ live builder partnerships through close coordination with sales and valuation teams",
        "Led strategic improvements to the QR home loan funnel, translating on-ground insights into redesigned user flows with design and engineering teams",
        "Identified INR 160 Cr+ business potential by analyzing QR lead data across 500+ leads and 2,000+ impressions, supporting leadership decision-making",
        "Worked directly with sales, credit, and lending partners to shape affordable housing and informal segment offerings, while driving partner adoption through trainings and streamlined CRM/NFC workflows"
      ],
      technologies: ["Strategy", "Product", "Analytics", "Growth", "Operations"]
    },
    {
      title: "Overall Coordinator & COO",
      company: "Team Exofly",
      period: "2022 - 2025",
      location: "Mumbai",
      image: "/src/assets/exoflyt.jpg",
      description:
        "Led overall operations, finance, and strategy for a student-run aerospace team, driving large-scale projects, partnerships, and competitive execution.",
      achievements: [
        "Led a 40+ member cross-functional team, overseeing operations, finance, and project execution for national-level UAV initiatives including SUAS",
        "Managed INR 1.5 Mn project budget and inventory of 500+ items, driving cost efficiency through structured procurement and vendor negotiations",
        "Closed a INR 0.3 Mn CSR MoU with Forvia Hella India to develop a Medical Delivery Drone",
        // "Secured INR 1.3 Mn in sponsorship funding, scaling partner outreach from 8 to 40+ sponsors and improving team visibility by 20%",
        "Designed and executed a 3-stage recruitment and training process, onboarding high-quality members from 100+ applicants"
      ],
      technologies: ["Leadership", "Negotiation", "Partnership", "Finance", "Execution"]
    },
    {
      title: "Co-Founder",
      company: "zENLI",
      period: "2024",
      location: "Mumbai",
      image: "/src/assets/ideas.jpeg",
      description:
        "Co-founded an EdTech learning platform, leading early-stage strategy, user research, and product development from ideation to MVP.",
      achievements: [
        "Secured a INR 50K pre-incubation grant by pitching zENLI as part of the IDEAS cohort (L1C13)",
        "Conducted market research, competitor analysis, and surveys with 80+ stakeholders to validate problem statements and refine product direction",
        "Designed wireframes and end-to-end user flows and built the frontend using Figma, Next.js, TypeScript, and TailwindCSS",
        "Drove early product decisions by translating user insights into a functional MVP"
      ],
      technologies: ["Entrepreneurship", "Frontend", "UX", "MVP", "Research"]
    },
    {
      title: "Project Fellow & Teaching Assistant (not your everyday student!)",
      company: "Dept of Physics, IIT Bombay",
      period: "2023 - 2024",
      location: "Mumbai",
      image: "/src/assets/labim.jpeg",
      description:
        "Department of Engineering Physics combining rigorous mathematics and physics with electronics from a fundamental sciences perspective.",
      achievements: [
        "Developed a precise nano-ampere current source circuit using precision Op-Amps",
        "Worked extensively with USB-SPI click featuring MCP2210 IC",
        "Built a GUI application to interface with DAC via MCP2210 IC"
      ],
      technologies: ["Electronics", "Op-Amps", "SPI", "GUI Development"]
    },
    {
      title: "SUAS Competition",
      company: "Exofly, IIT Bombay",
      period: "2023 - 2024",
      location: "St. Mary County Regional Airport, United States of America",
      image: "/src/assets/suas_solo.jpeg",
      description:
        "Department of Engineering Physics combining rigorous mathematics and physics with electronics from a fundamental sciences perspective.",
      achievements: [
        "Developed a precise nano-ampere current source circuit using precision Op-Amps",
        "Worked extensively with USB-SPI click featuring MCP2210 IC",
        "Built a GUI application to interface with DAC via MCP2210 IC"
      ],
      technologies: ["Electronics", "Op-Amps", "SPI", "GUI Development"]
    },
    {
      title: "UAS Competition",
      company: "Exofly, IIT Bombay",
      period: "2023 - 2024",
      location: "BMFA Buckminister, United Kingdom",
      image: "/src/assets/uas_team.jpeg",
      description:
        "Department of Engineering Physics combining rigorous mathematics and physics with electronics from a fundamental sciences perspective.",
      achievements: [
        "Developed a precise nano-ampere current source circuit using precision Op-Amps",
        "Worked extensively with USB-SPI click featuring MCP2210 IC",
        "Built a GUI application to interface with DAC via MCP2210 IC"
      ],
      technologies: ["Electronics", "Op-Amps", "SPI", "GUI Development"]
    }
  ]

 return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of leadership, building, and deep technical work
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                
                {/* Left Image */}
                <div className="md:w-1/2 h-56 md:h-auto">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Content */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col lg:items-end text-sm text-muted-foreground mt-3 lg:mt-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-5">
                    <h5 className="font-semibold mb-2">Key Highlights</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
