
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart, BookOpen, Code } from "lucide-react";

const PersonalSection = () => {
  const interests = [
    { name: "AI/ML", icon: "🤖", color: "from-purple-500 to-blue-500" },
    { name: "Startups", icon: "🚀", color: "from-pink-500 to-purple-500" },
    { name: "Climate Tech", icon: "🌱", color: "from-green-500 to-emerald-500" },
    { name: "Photography", icon: "📸", color: "from-yellow-500 to-orange-500" },
    { name: "Travel", icon: "✈️", color: "from-blue-500 to-cyan-500" },
    { name: "Music", icon: "🎵", color: "from-violet-500 to-purple-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced background with floating elements */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 2, 1],
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
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
            className="absolute border border-purple-500/20 rounded-lg"
            style={{
              width: Math.random() * 60 + 40 + 'px',
              height: Math.random() * 60 + 40 + 'px',
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
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />

      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-purple-500/10 border border-purple-400/20 rounded-full"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Heart className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-purple-300 text-sm font-light">About Me</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            animate={{
              textShadow: [
                '0 0 20px rgba(255,255,255,0.1)',
                '0 0 40px rgba(168,85,247,0.2)',
                '0 0 20px rgba(255,255,255,0.1)'
              ]
            }}
          >
            Beyond the{" "}
            <motion.span 
              className="italic bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-light"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Code
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Enhanced content grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced text content */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center gap-3 text-gray-300"
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <MapPin className="w-5 h-5 text-purple-400" />
                </motion.div>
                <span className="text-lg">Based in Toronto, Canada</span>
              </motion.div>

              <motion.p 
                className="text-gray-300 text-lg leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                I'm a passionate software engineer and entrepreneur who believes technology 
                can solve the world's biggest challenges. Currently studying{" "}
                <motion.span 
                  className="text-purple-400 font-medium"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(168,85,247,0.3)',
                      '0 0 20px rgba(168,85,247,0.6)',
                      '0 0 10px rgba(168,85,247,0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Computer Science at the University of Waterloo
                </motion.span>
                , I'm driven by the intersection of AI, sustainability, and human-centered design.
              </motion.p>

              <motion.p 
                className="text-gray-300 text-lg leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                When I'm not coding, you'll find me exploring new cities, capturing moments 
                through photography, or diving deep into the latest AI research. I believe 
                in building products that don't just work—they inspire.
              </motion.p>
            </motion.div>

            {/* Enhanced interests grid */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <BookOpen className="w-5 h-5 text-purple-400" />
                </motion.div>
                <span className="text-lg font-light text-gray-300">Interests & Passions</span>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      rotate: Math.random() * 10 - 5
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      className={`bg-gradient-to-r ${interest.color} text-white border-none px-4 py-2 text-sm font-light hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          x: ['100%', '-100%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <motion.span 
                        className="mr-2 text-base relative z-10"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.2
                        }}
                      >
                        {interest.icon}
                      </motion.span>
                      <span className="relative z-10">{interest.name}</span>
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced profile image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <motion.div
                className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 relative"
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(168,85,247,0.2)',
                    '0 0 80px rgba(236,72,153,0.3)',
                    '0 0 40px rgba(168,85,247,0.2)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="/lovable-uploads/1488e487-15ac-43d1-8dd4-eb4d69a298f3.png" 
                  alt="Dev Katyal" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating particles around image */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-purple-400/60 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      rotate: [0, 360],
                      x: Math.cos(i * Math.PI / 3) * 200,
                      y: Math.sin(i * Math.PI / 3) * 200,
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Enhanced glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalSection;
