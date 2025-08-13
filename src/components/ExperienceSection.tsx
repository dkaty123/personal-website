import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Github } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Shopify",
      role: "Software Engineer Intern", 
      period: "Incoming Fall 2025 🚀",
      duration: "Sept to Dec",
      location: "Toronto, Ontario, Canada",
      date: "Sept 2025",
      monthDuration: "3 months",
      status: "upcoming",
      description: "",
      logo: "/lovable-uploads/00d9ecbd-a527-4dd6-8621-9db0cafdc96a.png"
    },
    {
      company: "Ontario Provincial Police",
      role: "Software Developer Intern",
      period: "Summer 2025 ⚙️",
      duration: "May to Aug • Databases",
      location: "Toronto, Ontario, Canada", 
      date: "May 2025 - Present",
      monthDuration: "3 months",
      status: "upcoming",
      description: "",
      logo: "/lovable-uploads/39df3872-97f4-4986-868b-7e1b19fd62a4.png"
    },
    {
      company: "Health Canada | Santé Canada",
      role: "Software Engineer Intern",
      period: "Completed 🔬",
      duration: "Android Engineer in the Data Science & Analytics Division",
      location: "Ottawa, Ontario, Canada",
      date: "Jul 2024 - Sep 2024",
      monthDuration: "3 months",
      status: "completed",
      description: "",
      logo: "/lovable-uploads/4f853bd7-2c50-4033-84ff-7feaa177ef07.png"
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Static background instead of animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/5 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-purple-300 text-sm font-light">Professional Journey</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-6"
          >
            <span className="text-white">Where I've</span>{" "}
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              crafted
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 font-light"
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Building meaningful experiences across diverse tech environments
          </motion.p>
        </div>

        {/* Enhanced Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                rotateX: 3,
                rotateY: 3
              }}
              style={{ perspective: "1000px" }}
              className="group"
            >
              <Card className="bg-black/70 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden">
                {/* Enhanced background effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/3 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-6">
                    {/* Company Logo */}
                    <motion.div 
                      className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ 
                        rotate: 8,
                        boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)"
                      }}
                    >
                      <img 
                        src={exp.logo} 
                        alt={exp.company}
                        className="w-12 h-12 object-contain"
                      />
                    </motion.div>

                    {/* Experience Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <motion.h3 
                            className="text-2xl font-light text-white mb-1 group-hover:text-purple-100 transition-colors duration-300"
                            whileHover={{ x: 8 }}
                          >
                            {exp.role}
                          </motion.h3>
                          <motion.p 
                            className="text-lg text-white font-medium group-hover:text-purple-200 transition-colors duration-300"
                            whileHover={{ x: 8 }}
                          >
                            {exp.company}
                          </motion.p>
                        </div>
                        
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="outline" 
                            className={`border-purple-400/30 text-purple-300 bg-purple-500/10 ${
                              exp.status === 'upcoming' ? 'animate-pulse' : ''
                            }`}
                          >
                            {exp.period}
                          </Badge>
                        </motion.div>
                      </div>

                      <motion.p 
                        className="text-gray-400 mb-4 font-light"
                        whileHover={{ opacity: 1, x: 5 }}
                      >
                        {exp.duration}
                      </motion.p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <motion.div 
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.1, color: "#a855f7" }}
                        >
                          <Calendar className="w-4 h-4" />
                          <span>{exp.date}</span>
                        </motion.div>
                        <span>•</span>
                        <motion.div 
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.1, color: "#a855f7" }}
                        >
                          <span>{exp.monthDuration}</span>
                        </motion.div>
                        <span>•</span>
                        <motion.div 
                          className="flex items-center gap-1"
                          whileHover={{ scale: 1.1, color: "#a855f7" }}
                        >
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
