
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "OpenAI Code Assistant",
      description: "AI-powered coding assistant that helps developers write, debug, and optimize code using OpenAI's GPT models.",
      tech: ["Python", "OpenAI API", "Flask", "JavaScript", "HTML/CSS"],
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "Personal Finance Tracker",
      description: "Web application for tracking expenses, budgeting, and financial goal setting with data visualization.",
      tech: ["React", "Node.js", "MongoDB", "D3.js", "JWT"],
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates and team coordination features.",
      tech: ["React", "Firebase", "Material-UI", "WebSocket"],
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Projects I enjoyed building
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Other Projects</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
