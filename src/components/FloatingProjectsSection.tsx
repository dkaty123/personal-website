import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

const FloatingProjectsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      title: "EcoPlastic AI",
      description: "Revolutionary AI for plastic recycling optimization",
      tech: ["Python", "TensorFlow", "React"],
      status: "🏆 Winner",
      color: "from-green-400/20 to-emerald-600/20",
      rotation: "rotate-3",
      scale: "hover:scale-110",
    },
    {
      title: "MarineMatch",
      description: "AI-powered fish identification for fishermen",
      tech: ["React Native", "ML", "Node.js"],
      status: "🐟 100+ Users",
      color: "from-blue-400/20 to-cyan-600/20",
      rotation: "-rotate-2",
      scale: "hover:scale-105",
    },
    {
      title: "GlobalVision",
      description: "AI assistance for visually impaired seniors",
      tech: ["Computer Vision", "NLP", "React"],
      status: "♿ Accessibility",
      color: "from-purple-400/20 to-pink-600/20",
      rotation: "rotate-1",
      scale: "hover:scale-110",
    },
    {
      title: "Bookd Health",
      description: "Preventative healthcare AI assistant",
      tech: ["AI/ML", "Healthcare APIs", "React"],
      status: "🏥 Innovation",
      color: "from-red-400/20 to-orange-600/20",
      rotation: "-rotate-1",
      scale: "hover:scale-105",
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-30 animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (Math.random() * 3 + 2) + 's',
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-pink-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/15 to-black" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            <span className="text-white">Floating</span>
            <br />
            <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Interactive showcase of award-winning applications and innovative solutions
          </p>
        </div>

        {/* Floating Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-700 ${project.rotation} ${project.scale}`}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Shadow card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-50 transform translate-x-4 translate-y-4`}></div>
              
              {/* Main card */}
              <Card className={`relative p-8 bg-black/70 border border-white/10 backdrop-blur-sm rounded-2xl transition-all duration-500 hover:border-purple-400/40 cursor-pointer ${
                hoveredCard === index ? 'transform rotateX-5 rotateY-5' : ''
              }`}>
                {/* Status badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-light shadow-lg">
                  {project.status}
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-light text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 font-light leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-light border-0">
                      <Play className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/20 text-gray-300 hover:bg-white/10 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-2xl transition-opacity duration-500 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloatingProjectsSection;