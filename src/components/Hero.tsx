
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const particlesRef = useRef<HTMLDivElement>(null);
  const roles = [
    "Software Developer",
    "Full Stack Engineer", 
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    if (particlesRef.current && typeof window !== 'undefined') {
      // @ts-ignore
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#3B82F6' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#3B82F6', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
          detect_on: 'canvas',
          events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
          modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
      });
    }
  }, []);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeWriter = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeWriter);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 relative overflow-hidden">
      {/* Particles.js background */}
      <div id="particles-js" ref={particlesRef} className="absolute inset-0"></div>
      
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="flex-1">
            <div className="mb-4">
              <span className="text-lg text-blue-600 font-medium">👋 Hey there! I'm</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 hover:scale-105 transition-transform duration-300 leading-tight">
              Tony Cui
            </h1>
            <div className="h-12 flex items-center justify-center mb-4">
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                <span className="border-r-2 border-blue-600 pr-1 animate-pulse">
                  {displayText}
                </span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
              I'm always looking for opportunities to build scalable applications and solve complex problems with elegant code.
            </p>
            <p className="text-base text-blue-600 font-medium">
              Ready for new opportunities and exciting projects
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/7a69e21c-0e27-411a-8201-23c6d54a0450.png" 
                alt="Tony Cui - Professional headshot"
                className="w-full h-full object-cover scale-125"
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            onClick={() => window.open('https://linkedin.com/in/tonycui1', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
            Let's Connect
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            onClick={() => window.open('mailto:tonyyyycui@gmail.com', '_blank')}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
            Say Hello
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => scrollToSection('projects')}
          >
            View My Work ✨
          </Button>
        </div>

        <div 
          className="animate-bounce cursor-pointer group"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="h-8 w-8 mx-auto text-blue-600 group-hover:text-indigo-600 transition-colors" />
          <p className="text-sm text-muted-foreground mt-2 group-hover:text-blue-600 transition-colors">
            Scroll to learn more about me
          </p>
        </div>
      </div>
    </section>
  );
};
