
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Scala", "C++"],
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "Angular", "HTML/CSS", "Tailwind CSS", "Responsive Design"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Backend & Databases",
      icon: Database,
      skills: ["Node.js", "MongoDB", "MySQL", "AWS", "REST APIs", "Git"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Splunk", "Selenium", "Docker", "Agile", "DevOps", "Testing"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technical skills developed through education and hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <CardHeader className="text-center pb-3">
                <div className={`w-12 h-12 mx-auto rounded-full ${category.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className={`${category.bgColor} ${category.color} text-xs hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
