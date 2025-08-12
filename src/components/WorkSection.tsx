
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Award, Users, Globe } from "lucide-react";

const WorkSection = () => {
  const projects = [
    {
      title: "GlobalVision",
      category: "AI for Accessibility",
      description: "Award-winning AI-powered accessibility platform that converts visual content into audio descriptions for visually impaired users. Winner of multiple innovation challenges.",
      image: "/lovable-uploads/54e3f7d5-bb2c-4a23-85ed-f7ceaab086db.png",
      tech: ["React Native", "Python", "TensorFlow", "Computer Vision", "AWS"],
      awards: ["Ingenious Innovation Challenge Winner", "Featured in National Media"],
      metrics: { users: "500+", accuracy: "94%", languages: "12" },
      links: { demo: "#", github: "#", live: "#" },
      status: "Live",
      featured: true
    },
    {
      title: "EcoPlastic",
      category: "Climate Tech",
      description: "AI-driven platform for plastic waste identification and recycling optimization. Helps users identify plastic types and find local recycling centers.",
      image: "/lovable-uploads/4f853bd7-2c50-4033-84ff-7feaa177ef07.png",
      tech: ["React", "Node.js", "TensorFlow.js", "Google Maps API", "MongoDB"],
      awards: ["WUSA Change Engine Winner", "Environmental Impact Award"],
      metrics: { impact: "2000+", accuracy: "92%", cities: "25" },
      links: { demo: "#", github: "#" },
      status: "Active",
      featured: true
    },
    {
      title: "ScholarSync",
      category: "EdTech Platform",
      description: "Comprehensive student management system with AI-powered analytics, grade tracking, and collaborative learning features for educational institutions.",
      image: "/lovable-uploads/56894c05-e390-4f7a-b12b-ba52925da5bd.png",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Chart.js"],
      awards: ["Best Student Project", "Innovation in Education"],
      metrics: { schools: "15+", students: "1200+", satisfaction: "96%" },
      links: { demo: "#", github: "#" },
      status: "Beta",
      featured: false
    },
    {
      title: "ClimateAI Dashboard",
      category: "Environmental Analytics",
      description: "Real-time climate data visualization platform with predictive analytics and environmental impact tracking for research institutions and NGOs.",
      image: "/lovable-uploads/72677835-fb47-42fd-933e-0851a8ff81cc.png",
      tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      awards: ["Climate Tech Innovation Award"],
      metrics: { datasets: "50+", predictions: "85%", organizations: "8" },
      links: { demo: "#", github: "#" },
      status: "Development",
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-300 border-green-400/30';
      case 'Active': return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      case 'Beta': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30';
      case 'Development': return 'bg-purple-500/20 text-purple-300 border-purple-400/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  return (
    <section id="work" className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Static background effects */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
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
        {[...Array(15)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - removed animations */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full">
            <div className="w-2 h-2 bg-purple-400 rounded-full" />
            <span className="text-purple-300 text-sm font-light">Featured Work</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8">
            <span className="text-white">Recent</span>
            <br />
            <span className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            AI-powered solutions that make a real difference in accessibility, climate action, and education.
          </p>
        </div>

        {/* Projects Grid - removed animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group bg-black/70 border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl rounded-2xl overflow-hidden h-full flex flex-col ${
                project.featured 
                  ? 'border-purple-400/40 hover:border-purple-400/60 hover:shadow-purple-500/20' 
                  : 'border-gray-800 hover:border-purple-400/40 hover:shadow-purple-500/10'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} text-xs`}>
                    {project.status}
                  </Badge>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 text-xs">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Overlay with quick actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.links.demo && (
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Play className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-gray-700 text-gray-300 bg-gray-800/50 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-light text-white mb-3 group-hover:text-purple-100 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
                    {project.description}
                  </p>
                </div>

                {/* Awards */}
                {project.awards.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.awards.map((award, awardIndex) => (
                        <Badge 
                          key={awardIndex}
                          className="bg-green-500/10 text-green-300 border-green-400/20 text-xs"
                        >
                          🏆 {award}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Metrics */}
                <div className="mb-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex} className="bg-white/5 rounded-lg p-2">
                        <div className="text-white font-medium text-sm">{value}</div>
                        <div className="text-gray-400 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
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

                {/* Actions */}
                <div className="mt-auto pt-4 border-t border-gray-800">
                  <div className="flex gap-2">
                    {project.links.live && (
                      <Button variant="outline" size="sm" className="flex-1 border-purple-400/30 text-purple-400 hover:bg-purple-400/10 bg-transparent">
                        <Globe className="w-4 h-4 mr-2" />
                        Live Site
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section - removed animations */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-black/60 border border-white/10 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-light text-white mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-gray-400 mb-6 font-light">
                I'm always excited to work on projects that make a positive impact. Let's build something amazing together.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                <Users className="w-4 h-4 mr-2" />
                Start a Project
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
