
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Experience = () => {
  const experiences = [
    {
      company: "Barclays",
      role: "Software Developer Intern – Markets Pre-Trade Team",
      location: "Newark, NJ",
      period: "June 2024 – Aug 2024",
      achievements: [
        "Built AWS data transformation pipeline with Python, SQL, and Scala",
        "Developed 10+ scripts processing Parquet files using AWS Glue ETL jobs",
        "Integrated AWS services for scalable data processing"
      ],
      skills: ["AWS", "Python", "SQL", "Scala", "Git"]
    },
    {
      company: "Morgan Stanley",
      role: "Software Engineering Intern – Wealth Management Division",
      location: "Atlanta, GA",
      period: "June 2023 – Aug 2023",
      achievements: [
        "Built retirement planning web app using React, Angular, and Java",
        "Implemented accessible UI components and credential verification",
        "Reduced API latency by 21% through backend optimization"
      ],
      skills: ["React", "Angular", "Java", "Git", "Agile"]
    },
    {
      company: "Duke University",
      role: "Undergraduate Teaching Assistant – Introduction to Databases",
      location: "Durham, NC",
      period: "Aug 2024 – Dec 2024",
      achievements: [
        "Led weekly office hours for SQL, MongoDB, and query optimization",
        "Assisted with grading and project evaluation"
      ],
      skills: ["SQL", "MongoDB", "Teaching"]
    },
    {
      company: "Optum, UnitedHealth Group",
      role: "DevOps Engineer Intern – DevOps Observability Group",
      location: "Raleigh, NC",
      period: "June 2022 – Aug 2022",
      achievements: [
        "Deployed 45+ detectors and synthetic tests in Splunk",
        "Automated 20+ synthetic users capturing 100+ metrics",
        "Improved system uptime by 32% through test optimization"
      ],
      skills: ["Splunk", "Selenium", "JavaScript", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-blue-600">Experience</span></h2>
          <p className="text-lg text-muted-foreground">
            Professional experience at leading technology companies
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-blue-600">{exp.company}</CardTitle>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <div className="text-sm text-muted-foreground">
                    <span>{exp.location}</span> • <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
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
