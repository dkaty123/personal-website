
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Globe, MonitorPlay, ArrowRight, Share2, ExternalLink } from "lucide-react";

const CollaborationSection = () => {
  const topTechBadges = [
    { name: "ReactJS", icon: "⚛️", color: "bg-blue-500/20 text-blue-300 border-blue-400/30" },
    { name: "NextJS", icon: "▲", color: "bg-white/10 text-gray-200 border-white/20" },
    { name: "ContentFul", icon: "C", color: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30" },
    { name: "TypeScript", icon: "TS", color: "bg-blue-400/20 text-blue-300 border-blue-400/30" },
  ];

  const middleTechBadges = [
    { name: "Zustand", icon: "Z", color: "bg-purple-500/20 text-purple-300 border-purple-400/30" },
    { name: "Zod", icon: "Z", color: "bg-blue-500/20 text-blue-300 border-blue-400/30" },
    { name: "NodeJS", icon: "N", color: "bg-green-500/20 text-green-300 border-green-400/30" },
    { name: "ExpressJS", icon: "Ex", color: "bg-gray-500/20 text-gray-300 border-gray-400/30" },
  ];

  const bottomTechBadges = [
    { name: "AWS", icon: "☁️", color: "bg-yellow-500/20 text-yellow-300 border-yellow-400/30" },
    { name: "Docker", icon: "🐳", color: "bg-blue-500/20 text-blue-300 border-blue-400/30" },
    { name: "Expo", icon: "Ex", color: "bg-white/15 text-white border-white/25" },
    { name: "Clerk", icon: "C", color: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30" }
  ];

  const countries = [
    { flag: "🇬🇧", name: "UK" },
    { flag: "🇮🇳", name: "India" },
    { flag: "🇺🇸", name: "USA" }
  ];

  return (
    <div className="min-h-screen bg-black text-foreground py-16 relative overflow-hidden">
      {/* Enhanced starry background */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
      
      {/* Enhanced larger glowing stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
              boxShadow: [
                '0 0 12px rgba(255, 255, 255, 0.4)',
                '0 0 24px rgba(168, 85, 247, 0.6)',
                '0 0 12px rgba(255, 255, 255, 0.4)'
              ]
            }}
            transition={{ 
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: '3px',
              height: '3px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 20
            }}
            animate={{ 
              y: -20,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              rotate: [0, 360, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: Math.random() * 12 + 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-xl opacity-20"
            style={{
              width: Math.random() * 200 + 100 + 'px',
              height: Math.random() * 200 + 100 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.3, 1],
              background: [
                'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)',
                'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)',
                'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
                'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)',
              ]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-8 relative z-10">
        
        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Enhanced Time Zone Card */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-1"
            whileHover={{ scale: 1.02, rotateY: 5 }}
            style={{ perspective: "1000px" }}
          >
            <Card className="p-6 border-0 h-full relative overflow-hidden bg-white/[0.03] backdrop-blur-xl rounded-xl shadow-xl group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-cyan-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
              <motion.div 
                className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-blue-400/30 transition-colors"
                animate={{
                  borderColor: [
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(59, 130, 246, 0.2)',
                    'rgba(255, 255, 255, 0.1)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10 space-y-4">
                <motion.h3 
                  className="text-2xl font-bold text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  Global Flexibility
                </motion.h3>
                <div className="flex gap-3 mb-4">
                  {countries.map((country, index) => (
                    <motion.div
                      key={country.name}
                      initial={{ opacity: 0, y: 20, rotateX: -30 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ duration: 0.4, delay: 1.8 + index * 0.2 }}
                      className="bg-white/10 backdrop-blur-xl px-3 py-2 rounded-lg border border-white/20 hover:border-blue-400/40 transition-all"
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      <motion.span 
                        className="text-xl mr-2"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        {country.flag}
                      </motion.span>
                      <span className="text-xs font-medium text-white">{country.name}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ scale: 0, rotateY: 180 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ duration: 1.2, delay: 2.2 }}
                  className="w-full h-48 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden border border-white/10 backdrop-blur-xl relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe className="w-20 h-20 text-blue-400 opacity-70 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Orbiting dots */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        rotate: [0, 360],
                        x: Math.cos(i * Math.PI / 4) * 60,
                        y: Math.sin(i * Math.PI / 4) * 60,
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Enhanced Central CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="lg:col-span-1"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="p-6 border-0 h-full flex flex-col items-center text-center relative overflow-hidden bg-white/[0.03] backdrop-blur-xl rounded-xl shadow-xl group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.05] via-transparent to-pink-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
              <motion.div 
                className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-purple-400/30 transition-colors"
                animate={{
                  borderColor: [
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(168, 85, 247, 0.2)',
                    'rgba(236, 72, 153, 0.2)',
                    'rgba(255, 255, 255, 0.1)'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <div className="relative z-10 space-y-6 w-full">
                <motion.div
                  initial={{ scale: 0, rotateY: 180 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 2.5 }}
                  className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-400/50 to-pink-500/50 rounded-full flex items-center justify-center shadow-lg border border-white/20 relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.span 
                    className="text-3xl font-bold text-white relative z-10"
                    animate={{ textShadow: [
                      '0 0 10px rgba(255,255,255,0.5)',
                      '0 0 20px rgba(168,85,247,0.8)',
                      '0 0 10px rgba(255,255,255,0.5)'
                    ]}}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    AB
                  </motion.span>
                </motion.div>
                
                <div className="space-y-3">
                  <motion.h3 
                    className="text-3xl font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    Collaborate
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-gray-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Let's create something amazing
                  </motion.p>
                </div>
                
                <div className="w-full space-y-4 px-4">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="outline" className="w-full bg-white/15 backdrop-blur-xl border-white/20 py-6 text-base hover:bg-white/20 hover:border-purple-400/50 group relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <Mail className="w-5 h-5 mr-3 relative z-10" />
                      <span className="relative z-10">hello@aayushbharti.in</span>
                      <ExternalLink className="w-4 h-4 ml-auto opacity-50 group-hover:opacity-100 relative z-10" />
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="ghost" className="w-full text-sm text-gray-300 hover:text-white hover:bg-white/10 group py-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <Share2 className="w-4 h-4 mr-3 relative z-10" />
                      <span className="relative z-10">Share profile</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Enhanced Technology Badges Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="lg:col-span-1"
            whileHover={{ scale: 1.02, rotateY: -5 }}
            style={{ perspective: "1000px" }}
          >
            <Card className="p-6 border-0 h-full relative overflow-hidden bg-white/[0.03] backdrop-blur-xl rounded-xl shadow-xl group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-indigo-500/[0.05] via-transparent to-purple-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              />
              <motion.div 
                className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-purple-400/30 transition-colors"
                animate={{
                  borderColor: [
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(99, 102, 241, 0.2)',
                    'rgba(168, 85, 247, 0.2)',
                    'rgba(255, 255, 255, 0.1)'
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              
              <div className="relative z-10 space-y-6">
                <motion.h3 
                  className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Tech Expertise
                </motion.h3>
                
                <div className="space-y-3">
                  {[...topTechBadges, ...middleTechBadges, ...bottomTechBadges].map((tech, index) => (
                    <motion.div
                      key={tech.name + index}
                      initial={{ opacity: 0, x: 20, rotateX: -30 }}
                      animate={{ opacity: 1, x: 0, rotateX: 0 }}
                      transition={{ duration: 0.3, delay: 3.0 + index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <Badge className={`${tech.color} w-full backdrop-blur-xl px-4 py-2 text-sm font-medium justify-start hover:shadow-lg transition-all duration-300 border group relative overflow-hidden`}>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <motion.span 
                          className="mr-3 text-lg relative z-10"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                        >
                          {tech.icon}
                        </motion.span>
                        <span className="relative z-10">{tech.name}</span>
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationSection;
