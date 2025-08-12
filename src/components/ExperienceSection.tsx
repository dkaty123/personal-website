
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Briefcase, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Shopify",
      role: "Software Engineering Intern",
      period: "Fall 2025",
      location: "Ottawa, ON",
      description: "Incoming Software Engineering Intern at Shopify, working on innovative e-commerce solutions and contributing to one of the world's leading commerce platforms.",
      logo: "/lovable-uploads/8ba65541-921d-43d7-b964-0ce741196f46.png",
      tech: ["React", "TypeScript", "GraphQL", "Ruby on Rails"],
      upcoming: true
    },
    {
      company: "University of Waterloo",
      role: "Research Assistant",
      period: "2024 - Present",
      location: "Waterloo, ON",
      description: "Conducting cutting-edge research in AI and machine learning applications, focusing on accessibility technologies and environmental sustainability solutions.",
      logo: "/lovable-uploads/21c60141-25c1-47ce-a390-7a4c1e3d63f2.png",
      tech: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
      upcoming: false
    },
    {
      company: "Freelance Development",
      role: "Full-Stack Developer",
      period: "2022 - Present",
      location: "Remote",
      description: "Building custom web applications and AI-powered solutions for clients across various industries, specializing in accessibility-first design and environmental impact tools.",
      logo: "/lovable-uploads/df0ac8a0-dd8d-417e-bdef-2bd5ca1191f1.png",
      tech: ["React", "Node.js", "AWS", "MongoDB"],
      upcoming: false
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Static background effects */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute bg-white rounded-full opacity-15"
            style={{
              width: '3px',
              height: '3px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.3)',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - removed animations */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-purple-300 text-sm font-light">Experience</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            <span className="text-white">Professional</span>
            <br />
            <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Building impactful solutions and gaining invaluable experience across diverse technology environments.
          </p>
        </div>

        {/* Experience Cards - removed animations */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group bg-black/70 border border-gray-800 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 rounded-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Company Logo */}
                  <div className="lg:col-span-2 flex justify-center lg:justify-start">
                    <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={exp.logo} 
                        alt={exp.company}
                        className="w-16 h-16 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentElement!;
                          fallback.innerHTML = `<div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center"><Briefcase class="w-6 h-6 text-white" /></div>`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-3">
                      <h3 className="text-2xl font-light text-white group-hover:text-purple-100 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.upcoming && (
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 text-xs w-fit mx-auto lg:mx-0">
                          Upcoming
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-lg text-gray-300 font-medium mb-2">{exp.company}</p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400 mb-4 justify-center lg:justify-start">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                      {exp.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {exp.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline" 
                          className="border-gray-700 text-gray-300 bg-gray-800/50 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="lg:col-span-3 flex justify-center lg:justify-end">
                    <Button 
                      variant="outline" 
                      className="border-purple-400/30 text-purple-400 hover:bg-purple-400/10 bg-transparent group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
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
