
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import AnimatedText from "./AnimatedText";

const AnimatedStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    { value: 15, label: "Projects Completed", suffix: "+", color: "from-purple-400 to-pink-500", icon: "🚀" },
    { value: 4, label: "Years of Experience", suffix: "+", color: "from-blue-400 to-cyan-500", icon: "⭐" },
    { value: 8, label: "Technologies Mastered", suffix: "+", color: "from-green-400 to-emerald-500", icon: "⚡" },
    { value: 100, label: "Client Satisfaction", suffix: "%", color: "from-orange-400 to-red-500", icon: "❤️" }
  ];

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let count = 0;
        const increment = stat.value / 60;
        const timer = setInterval(() => {
          count += increment;
          if (count >= stat.value) {
            count = stat.value;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(count);
            return newCounters;
          });
        }, 16);
      });
    }
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: -30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 300,
        duration: 0.6
      }
    }
  };

  return (
    <section id="stats-section" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-black" />
      
      <AnimatedBackground variant="particles" intensity="medium" color="purple" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText variant="glow" className="text-4xl md:text-5xl font-light text-white mb-4">
            Numbers That
          </AnimatedText>
          <AnimatedText variant="gradient" className="text-4xl md:text-5xl font-light" delay={0.3}>
            Tell Stories
          </AnimatedText>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group perspective-1000"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="relative preserve-3d"
                whileHover={{ rotateX: 10 }}
              >
                {/* Glowing background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 rounded-2xl blur-lg`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  {/* Animated icon */}
                  <motion.div
                    className="text-3xl mb-2"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  {/* Animated counter */}
                  <motion.div 
                    className="text-4xl md:text-5xl font-light text-white mb-2"
                    animate={isVisible ? {
                      textShadow: [
                        "0 0 10px rgba(255,255,255,0.3)",
                        "0 0 20px rgba(168,85,247,0.5)",
                        "0 0 10px rgba(255,255,255,0.3)"
                      ]
                    } : {}}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {isVisible ? counters[index] : 0}{stat.suffix}
                  </motion.div>
                  
                  <div className="text-gray-400 text-sm font-light">
                    {stat.label}
                  </div>

                  {/* Progress bar */}
                  <motion.div
                    className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={isVisible ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: "100%" } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedStatsSection;
