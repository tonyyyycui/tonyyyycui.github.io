
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Code2, Puzzle, Trophy, Brain } from "lucide-react";
import { useState } from "react";

export const About = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the experiences and passions that shape who I am!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card 
            className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className={`h-8 w-8 mr-3 transition-colors duration-300 ${activeCard === 0 ? 'text-blue-600' : 'text-gray-600'}`} />
                <h3 className="text-xl font-semibold">My Academic Journey</h3>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-blue-600">Duke University</h4>
              <p className="text-muted-foreground mb-2">B.S. Computer Science & B.S. Economics</p>
              <p className="text-muted-foreground mb-4">GPA: 3.90 | Class of 2025</p>
              <div className="space-y-2">
                <p className="font-medium flex items-center">
                  <Code2 className="h-4 w-4 mr-2 text-blue-600" />
                  Favorite Courses:
                </p>
                <p className="text-sm text-muted-foreground pl-6">
                  Machine Learning, iOS Development, Web Development, 
                  Algorithm Design, and Database Systems
                </p>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Heart className={`h-8 w-8 mr-3 transition-colors duration-300 ${activeCard === 1 ? 'text-red-500' : 'text-gray-600'}`} />
                <h3 className="text-xl font-semibold">What Drives Me</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Puzzle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Puzzles & Problem Solving</p>
                    <p className="text-sm text-muted-foreground">Love tackling complex challenges and finding elegant solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">College Basketball</p>
                    <p className="text-sm text-muted-foreground">Passionate fan who enjoys the strategy and competition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Game Theory & Development</p>
                    <p className="text-sm text-muted-foreground">
                      Building games and exploring strategic thinking - check out my work at{" "}
                      <a 
                        href="https://kaeque.itch.io" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        kaeque.itch.io
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
