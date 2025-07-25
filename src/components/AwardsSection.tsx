
import React from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Star } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      title: "Terry Fox Scholar",
      organization: "Terry Fox Humanitarian Award Program",
      year: "May 2025",
      description: "Selected out of 900+ applicants, this $28,000 national scholarship recognizes students who exemplify humanitarianism, resilience, and academic excellence.",
      category: "Scholarship",
      logo: "/lovable-uploads/8f32b7d9-7a12-431c-9148-2e6b77170479.png"
    },
    {
      title: "Ingenious Innovation Challenge (2× Regional Winner)",
      organization: "Ingenious+",
      year: "May 2025 & Jul 2024",
      description: "Two-time winner of Canada's premier youth innovation challenge. Recognized for AI-for-good apps, receiving $4,000+ in funding and national media spotlight.",
      category: "Innovation",
      logo: "/lovable-uploads/44453b53-1ac6-4859-9f69-3fbe3fe9675f.png"
    },
    {
      title: "Heer Law Entrepreneurship Scholarship (1st Place)",
      organization: "Heer Law",
      year: "Jan 2025",
      description: "Won 1st place out of 250+ applicants across Canada for demonstrating tech-driven entrepreneurship and innovation.",
      category: "Entrepreneurship",
      logo: "/lovable-uploads/df0ac8a0-dd8d-417e-bdef-2bd5ca1191f1.png"
    },
    {
      title: "WUSA Change Engine Winner",
      organization: "University of Waterloo",
      year: "Jan 2025",
      description: "Won 1st place among 100+ teams for building EcoPlastic, an AI app tackling plastic waste, judged by Waterloo faculty and civic tech leaders.",
      category: "Innovation",
      logo: "/lovable-uploads/21c60141-25c1-47ce-a390-7a4c1e3d63f2.png"
    },
    {
      title: "NSHSS Artificial Intelligence Innovation Scholarship",
      organization: "NSHSS",
      year: "Dec 2024",
      description: "Awarded for excellence in AI-driven innovation with global reach. Recognized for using AI to address accessibility and climate challenges.",
      category: "AI Innovation",
      logo: "/lovable-uploads/ee1430a0-64aa-403a-b3fa-e458896be597.png"
    },
    {
      title: "RBC 21 Under 21 (Ottawa)",
      organization: "Royal Bank of Canada",
      year: "Jul 2024",
      description: "Named one of Canada's top 21 youth innovators for environmental leadership, tech impact, and civic engagement.",
      category: "Recognition",
      logo: "/lovable-uploads/37e6ee94-58b1-4818-8fb2-3ec71b8c62b9.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced background effects with more dynamic animation */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-12"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.05, 0.4, 0.05],
              scale: [1, 2, 1],
              rotate: [0, 180, 360],
              y: [0, -40, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/8 to-black"
        animate={{
          background: [
            "radial-gradient(ellipse at 30% 30%, rgba(76,29,149,0.08), transparent 60%)",
            "radial-gradient(ellipse at 70% 70%, rgba(168,85,247,0.12), transparent 60%)",
            "radial-gradient(ellipse at 30% 30%, rgba(76,29,149,0.08), transparent 60%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute border border-purple-400/20"
            style={{
              width: Math.random() * 40 + 30 + 'px',
              height: Math.random() * 40 + 30 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              borderRadius: i % 2 === 0 ? '50%' : '8px',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced Header with more sophisticated animations */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-purple-500/10 border border-purple-400/20 rounded-full backdrop-blur-sm"
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-3 h-3 bg-purple-400 rounded-full"
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.5, 1, 0.5],
                boxShadow: [
                  "0 0 0 0 rgba(168, 85, 247, 0.4)",
                  "0 0 0 15px rgba(168, 85, 247, 0)",
                  "0 0 0 0 rgba(168, 85, 247, 0)"
                ]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-purple-300 text-sm font-light">Achievements</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.05)",
                "0 0 40px rgba(168,85,247,0.2)",
                "0 0 20px rgba(255,255,255,0.05)"
              ]
            }}
          >
            Recognition{" "}
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-light"
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
              & Awards
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            style={{
              animationDuration: "4s",
              animationIterationCount: "infinite"
            }}
          >
            Celebrating achievements that fuel the journey forward
          </motion.p>
        </motion.div>

        {/* Enhanced Awards Grid with improved animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
              whileHover={{ 
                scale: 1.05,
                y: -8,
                rotateX: 3,
                rotateY: 3,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: "1000px" }}
            >
              <Card className="relative p-8 bg-black/80 border border-gray-800 backdrop-blur-sm transition-all duration-700 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/30 rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Enhanced hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/8 to-pink-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />

                {/* Enhanced animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.3), transparent, rgba(236, 72, 153, 0.3), transparent)",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Enhanced Logo with better animation */}
                <div className="flex justify-center mb-8 relative z-10">
                  <motion.div 
                    className="w-28 h-28 rounded-2xl bg-white flex items-center justify-center overflow-hidden shadow-xl"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)"
                    }}
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    <img 
                      src={award.logo} 
                      alt={award.organization}
                      className="w-24 h-24 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement!;
                        fallback.innerHTML = `<div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center"><Trophy class="w-8 h-8 text-white" /></div>`;
                      }}
                    />
                  </motion.div>
                </div>

                {/* Enhanced Content with better animations */}
                <div className="text-center mb-6 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Badge 
                      variant="outline" 
                      className="border-gray-700 text-gray-300 bg-gray-800/60 text-sm mb-4 px-4 py-2"
                    >
                      <Calendar className="w-3 h-3 mr-2" />
                      {award.year}
                    </Badge>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-light text-white mb-3 group-hover:text-purple-100 transition-colors duration-300 leading-tight"
                    whileHover={{ x: 8 }}
                    animate={{
                      textShadow: [
                        "0 0 0 rgba(255,255,255,0)",
                        "0 0 20px rgba(168,85,247,0.3)",
                        "0 0 0 rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {award.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-gray-400 font-light mb-4"
                    whileHover={{ x: 8 }}
                    animate={{
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {award.organization}
                  </motion.p>
                </div>

                {/* Enhanced Description */}
                <div className="mt-auto relative z-10">
                  <motion.p 
                    className="text-white text-sm font-light leading-relaxed text-center"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                    animate={{
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {award.description}
                  </motion.p>
                </div>

                {/* Enhanced floating particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                      }}
                      animate={{
                        y: [0, -25, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 2, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Enhanced decorative star */}
                <motion.div 
                  className="absolute top-6 right-6 opacity-20 group-hover:opacity-60 transition-opacity duration-300"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Star className="w-5 h-5 text-gray-400" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
