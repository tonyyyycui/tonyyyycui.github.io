
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Coffee } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "tonyyyycui@gmail.com",
      action: () => window.open('mailto:tonyyyycui@gmail.com'),
      color: "text-red-500",
      hoverColor: "hover:bg-red-50"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tonycui1",
      action: () => window.open('https://linkedin.com/in/tonycui1', '_blank'),
      color: "text-blue-600",
      hoverColor: "hover:bg-blue-50"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/tonyyyycui",
      action: () => window.open('https://github.com/tonyyyycui', '_blank'),
      color: "text-gray-800",
      hoverColor: "hover:bg-gray-50"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Floating elements */}
      {/* <div className="absolute top-16 right-20 w-8 h-8 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-24 left-16 w-6 h-6 bg-indigo-400 rounded-full opacity-30 animate-pulse"></div> */}
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-blue-600">Connect!</span>
          </h2>
          {/* <p className="text-lg text-muted-foreground mb-4">
            Ready for new opportunities and exciting projects
          </p> */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-blue-600" />
            <span>Based in New York City, NY</span>
            <Coffee className="h-4 w-4 text-blue-600 ml-2" />
            <span>Always up for a coffee chat!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${method.hoverColor} border-2 hover:border-blue-200`}
              onClick={method.action}
              onMouseEnter={() => setHoveredContact(index)}
              onMouseLeave={() => setHoveredContact(null)}
            >
              <CardContent className="p-6 text-center">
                <method.icon className={`h-8 w-8 mx-auto mb-3 transition-colors duration-300 ${hoveredContact === index ? method.color : 'text-gray-600'}`} />
                <h3 className="font-semibold mb-1">{method.label}</h3>
                <p className="text-sm text-muted-foreground">{method.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg px-8 py-3"
            onClick={() => window.open('mailto:tonyyyycui@gmail.com')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-muted-foreground">
            © 2025 Tony Cui. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
