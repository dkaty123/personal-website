
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.8, rotateX: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        type: "spring" as const, 
        bounce: 0.4, 
        duration: 1.2 
      }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Enhanced background effects with more dynamic animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/8 to-black"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 20%, rgba(76,29,149,0.08), transparent 50%)",
            "radial-gradient(ellipse at 80% 80%, rgba(168,85,247,0.12), transparent 50%)",
            "radial-gradient(ellipse at 20% 20%, rgba(76,29,149,0.08), transparent 50%)"
          ]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      {/* Enhanced floating particles with more complex movement */}
      <div className="absolute inset-0">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-15"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.05, 0.4, 0.05],
              scale: [1, 2, 1],
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-purple-400/20 rounded-lg"
            style={{
              width: Math.random() * 30 + 20 + 'px',
              height: Math.random() * 30 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header with more dynamic animations */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-purple-500/10 border border-purple-400/20 rounded-full backdrop-blur-sm"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-3 h-3 bg-purple-400 rounded-full"
              animate={{ 
                scale: [1, 1.8, 1],
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  "0 0 0 0 rgba(168, 85, 247, 0.3)",
                  "0 0 0 10px rgba(168, 85, 247, 0)",
                  "0 0 0 0 rgba(168, 85, 247, 0)"
                ]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-purple-300 text-sm font-light">Professional Journey</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.05)",
                "0 0 40px rgba(168,85,247,0.15)",
                "0 0 20px rgba(255,255,255,0.05)"
              ]
            }}
          >
            <span className="text-white">Where I've</span>{" "}
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              crafted
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            style={{
              animationDuration: "4s",
              animationIterationCount: "infinite"
            }}
          >
            Building meaningful experiences across diverse tech environments
          </motion.p>
        </motion.div>

        {/* Enhanced Experience Cards with improved animations */}
        <motion.div 
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -12,
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: "1000px" }}
              className="group"
            >
              <Card className="bg-black/80 border border-gray-800 backdrop-blur-sm transition-all duration-700 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25 relative overflow-hidden">
                {/* Enhanced background effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />

                {/* Enhanced animated particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                      }}
                      animate={{
                        y: [0, -35, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 2, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Animated border effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.3), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["200% 0", "-200% 0"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <CardContent className="p-10 relative z-10">
                  <div className="flex items-start gap-8">
                    {/* Enhanced Company Logo */}
                    <motion.div 
                      className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 8,
                        boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
                      }}
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <img 
                        src={exp.logo} 
                        alt={exp.company}
                        className="w-16 h-16 object-contain"
                      />
                    </motion.div>

                    {/* Enhanced Experience Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <motion.h3 
                            className="text-2xl font-light text-white mb-2 group-hover:text-purple-100 transition-colors duration-300"
                            whileHover={{ x: 10 }}
                            animate={{
                              textShadow: [
                                "0 0 0 rgba(255,255,255,0)",
                                "0 0 20px rgba(168,85,247,0.3)",
                                "0 0 0 rgba(255,255,255,0)"
                              ]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {exp.role}
                          </motion.h3>
                          <motion.p 
                            className="text-lg text-white font-medium group-hover:text-purple-200 transition-colors duration-300"
                            whileHover={{ x: 10 }}
                          >
                            {exp.company}
                          </motion.p>
                        </div>
                        
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            scale: exp.status === 'upcoming' ? [1, 1.05, 1] : [1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: exp.status === 'upcoming' ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        >
                          <Badge 
                            variant="outline" 
                            className={`border-purple-400/40 text-purple-300 bg-purple-500/15 text-sm px-4 py-2 ${
                              exp.status === 'upcoming' ? 'shadow-lg shadow-purple-500/20' : ''
                            }`}
                          >
                            {exp.period}
                          </Badge>
                        </motion.div>
                      </div>

                      <motion.p 
                        className="text-gray-400 mb-6 font-light text-base"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1, x: 8 }}
                        transition={{ duration: 0.3 }}
                      >
                        {exp.duration}
                      </motion.p>

                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                        <motion.div 
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.15, color: "#a855f7" }}
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.2
                          }}
                        >
                          <Calendar className="w-4 h-4" />
                          <span>{exp.date}</span>
                        </motion.div>
                        <span className="text-gray-600">•</span>
                        <motion.div 
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.15, color: "#a855f7" }}
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.4
                          }}
                        >
                          <span>{exp.monthDuration}</span>
                        </motion.div>
                        <span className="text-gray-600">•</span>
                        <motion.div 
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.15, color: "#a855f7" }}
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.6
                          }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
