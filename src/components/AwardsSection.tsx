
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

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Optimized background effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full">
            <motion.div 
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-purple-300 text-sm font-light">Achievements</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            Recognition{" "}
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-light"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              & Awards
            </motion.span>
          </h2>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Celebrating achievements that fuel the journey forward
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group"
            >
              <Card className="relative p-6 bg-black/70 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Subtle hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Animated border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.1)",
                      "0 0 40px rgba(168, 85, 247, 0.2)",
                      "0 0 20px rgba(168, 85, 247, 0.1)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Logo - Made bigger */}
                <div className="flex justify-center mb-6 relative z-10">
                  <motion.div 
                    className="w-24 h-24 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ 
                      rotate: 5,
                      boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                    }}
                  >
                    <img 
                      src={award.logo} 
                      alt={award.organization}
                      className="w-20 h-20 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement!;
                        fallback.innerHTML = `<div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center"><Trophy class="w-6 h-6 text-white" /></div>`;
                      }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center mb-4 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="border-gray-700 text-gray-300 bg-gray-800/50 text-xs mb-3"
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      {award.year}
                    </Badge>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-lg font-light text-white mb-2 group-hover:text-purple-100 transition-colors duration-300 leading-tight"
                    whileHover={{ x: 5 }}
                  >
                    {award.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm text-gray-400 font-light mb-3"
                    whileHover={{ x: 5 }}
                  >
                    {award.organization}
                  </motion.p>
                </div>

                {/* Description - Made white */}
                <div className="mt-auto relative z-10">
                  <motion.p 
                    className="text-white text-xs font-light leading-relaxed text-center"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {award.description}
                  </motion.p>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Decorative star */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Star className="w-4 h-4 text-gray-400" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
